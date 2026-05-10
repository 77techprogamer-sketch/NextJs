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
    if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
      console.error('[LeadService] Cannot submit lead: Supabase environment variables are missing.');
      throw new Error('CONFIG_ERROR');
    }
    const { data, error } = await supabase.functions.invoke('process-lead', {
      body: payload
    });
    if (error) throw error;
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
      await db.leads.update(id, { status: 'failed', error: 'Max retries exceeded' });
      return;
    }

    try {
      await db.leads.update(id, { status: 'syncing', lastAttempt: Date.now() });

      if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
        console.error('[LeadService] Sync failed: Supabase keys are not configured.');
        throw new Error('CONFIG_ERROR');
      }

      // Call Edge Function for resilient processing
      const { data, error } = await supabase.functions.invoke('process-lead', {
        body: lead.payload
      });


      if (error) {
        // Log technical details to metadata
        await db.leads.update(id, { metadata: { serverError: error } });
        throw error;
      }

      // Success: mark as completed
      await db.leads.update(id, { 
        status: 'completed', 
        error: undefined,
        metadata: { ...lead.metadata, remoteId: data?.id } 
      });
      
    } catch (error: any) {
      console.error(`Sync failed for lead ${id}:`, error);
      
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

    console.log(`Attempting to sync ${pendingLeads.length} leads...`);
    
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
