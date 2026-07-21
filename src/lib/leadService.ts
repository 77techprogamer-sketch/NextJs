import { db, LeadRecord } from './leadDatabase';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';

const MAX_RETRIES = 5;

export const leadService = {
  /**
   * Primary entry point for submitting a lead.
   * Saves to IndexedDB and triggers sync.
   */
  async submitLead(payload: any, source: string) {
    const lead: LeadRecord = {
      payload,
      source,
      status: 'pending',
      retries: 0,
      createdAt: Date.now(),
    };

    try {
      const id = await db.leads.add(lead);
      const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
      console.log(`[LeadService] Saved lead locally (id: ${id}). URL for sync: ${supabaseUrl || 'MISSING'}`);
      // Trigger async sync attempt
      this.syncLead(id as number);
      return id;
    } catch (error) {
      console.error('Failed to save lead locally:', error);
      // Fallback: try direct submission if IDB fails
      return this.submitDirectly(payload);
    }
  },

  /**
   * Direct submission fallback if IndexedDB is unavailable
   */
  async submitDirectly(payload: any) {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const isPlaceholder = supabaseUrl?.includes('placeholder') || !supabaseUrl;
    
    if (isPlaceholder) {
      console.error('[LeadService] SUPABASE ERROR: Using placeholder or missing URL. Data will NOT be captured in your project.');
      console.log('[LeadService] Current URL:', supabaseUrl || 'MISSING');
    }

    const { data, error } = await supabase.functions.invoke('process-lead', {
      body: payload
    });

    if (error) {
      console.warn('[LeadService] Edge function "process-lead" failed or missing. Falling back to direct "customers" table insert.', error);
      
      const insertData = {
        name: payload.name || payload.fullName || 'Unknown',
        phone: payload.phone || payload.mobile || payload.mobileNumber || '',
        email: payload.email || null,
        age: payload.age || null,
        gender: payload.gender || null,
        insurance_type: payload.insurance_type || payload.service || payload.insuranceType || 'general',
        intended_sum_insured: payload.intended_sum_insured || payload.sumAssured || null,
        details: {
          ...payload.details,
          source: payload.source || 'ImmediateFallback',
          status: 'New',
          notes: `Direct insert fallback. Payload: ${JSON.stringify(payload)}`
        },
        created_at: new Date().toISOString()
      };

      console.log('[LeadService] Attempting direct insert into "customers" table with:', insertData);

      const { error: insertError } = await supabase
        .from('customers')
        .insert([insertData]);
      
      if (insertError) {
        console.error('[LeadService] Direct "customers" insert also failed:', insertError);
        throw insertError;
      }
      
      console.log('[LeadService] SUCCESS: Lead captured via direct insert fallback.');
      return { success: true, method: 'direct_insert' };
    }
    
    console.log('[LeadService] SUCCESS: Lead captured via edge function.');
    return data;
  },


  /**
   * Sync a specific lead by ID
   */
  async syncLead(id: number) {
    const lead = await db.leads.get(id);
    if (!lead || lead.status === 'completed' || lead.status === 'syncing') return;

    // Don't sync if we've exceeded retries
    if (lead.retries >= MAX_RETRIES) {
      console.error(`[LeadService] Lead ${id} exceeded max retries. Giving up sync.`);
      await db.leads.update(id, { status: 'failed', error: 'Max retries exceeded' });
      return;
    }

    try {
      await db.leads.update(id, { status: 'syncing', lastAttempt: Date.now() });

      const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
      if (!supabaseUrl || supabaseUrl.includes('placeholder')) {
        console.error('[LeadService] Sync failed: Supabase URL is missing or placeholder.');
        throw new Error('CONFIG_ERROR');
      }

      console.log(`[LeadSync] Attempting to sync lead ${id} (Retry ${lead.retries})...`);

      // Call Edge Function for resilient processing
      const { data, error } = await supabase.functions.invoke('process-lead', {
        body: lead.payload
      });


      if (error) {
        console.warn(`[LeadSync] Sync lead ${id} failed via function (${error.message || 'unknown error'}). Trying direct table insert...`);
        
        const insertData = {
          name: lead.payload.name || lead.payload.fullName || 'Unknown',
          phone: lead.payload.phone || lead.payload.mobile || lead.payload.mobileNumber || '',
          email: lead.payload.email || null,
          age: lead.payload.age || null,
          gender: lead.payload.gender || null,
          insurance_type: lead.payload.insurance_type || lead.payload.service || lead.payload.insuranceType || 'general',
          intended_sum_insured: lead.payload.intended_sum_insured || lead.payload.sumAssured || null,
          details: {
            ...lead.payload.details,
            source: lead.source || 'SyncFallback',
            status: 'New',
            notes: `Sync direct insert fallback. Language: ${lead.payload.language || 'en'}`
          },
          created_at: new Date(lead.createdAt).toISOString()
        };

        const { error: insertError } = await supabase
          .from('customers')
          .insert([insertData]);

        if (insertError) {
          console.error(`[LeadSync] Direct insert fallback also failed for lead ${id}:`, insertError);
          await db.leads.update(id, { metadata: { serverError: error, insertError } });
          throw insertError;
        }

        console.log(`[LeadSync] Lead ${id} successfully synced via direct table insert.`);

        await db.leads.update(id, { 
          status: 'completed', 
          metadata: { ...lead.metadata, syncMethod: 'direct_insert' } 
        });
        return;
      }

      console.log(`[LeadSync] Lead ${id} successfully synced via edge function.`);

      // Success: mark as completed
      await db.leads.update(id, { 
        status: 'completed', 
        error: undefined,
        metadata: { ...lead.metadata, remoteId: data?.id } 
      });
      
    } catch (error: any) {
      console.error(`[LeadSync] Sync failed for lead ${id}:`, error);
      
      // If it's a validation error (400), don't retry as it will never succeed
      const isValidationError = error.status === 400 || (error.message && error.message.includes('required'));
      
      await db.leads.update(id, {
        status: 'failed',
        retries: isValidationError ? MAX_RETRIES : lead.retries + 1,
        error: error.message || 'Unknown error'
      });
    }
  },

  /**
   * Sync all pending/failed leads
   */
  async syncAllPending() {
    if (typeof window !== 'undefined' && !navigator.onLine) return 0;

    const pendingLeads = await db.leads
      .where('status')
      .anyOf(['pending', 'failed'])
      .and(l => l.retries < MAX_RETRIES)
      .toArray();

    if (pendingLeads.length === 0) return 0;

    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    console.log(`[LeadSync] Attempting to sync ${pendingLeads.length} leads to ${supabaseUrl || 'MISSING'}...`);
    
    let successCount = 0;
    for (const lead of pendingLeads) {
      await this.syncLead(lead.id!);
      const updatedLead = await db.leads.get(lead.id!);
      if (updatedLead?.status === 'completed') {
        successCount++;
      }
    }
    return successCount;
  },

  /**
   * Purge old completed leads
   */
  async purgeOldLeads() {
    const oneDayAgo = Date.now() - (24 * 60 * 60 * 1000);
    await db.leads
      .where('createdAt')
      .below(oneDayAgo)
      .and(l => l.status === 'completed')
      .delete();
  }
};
