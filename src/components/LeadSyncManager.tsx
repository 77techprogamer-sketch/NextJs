"use client";

import { useEffect } from 'react';
import { leadService } from '@/lib/leadService';
import { toast } from 'sonner';
import { useTranslation } from 'react-i18next';
import { db } from '@/lib/leadDatabase';
import { useLiveQuery } from 'dexie-react-hooks';

export const LeadSyncManager = () => {
    const { t } = useTranslation();

    // Monitor pending leads
    const pendingLeads = useLiveQuery(
        () => db.leads.where('status').anyOf(['pending', 'failed']).count()
    );

    useEffect(() => {
        // Initial sync on mount
        leadService.syncAllPending().then(count => {
            if (count > 0) console.log(`[LeadSync] Successfully synced ${count} pending leads.`);
        });
        leadService.purgeOldLeads();

        // Listen for online status
        const handleOnline = () => {
            console.log('[LeadSync] Network online, triggering lead sync...');
            leadService.syncAllPending().then(count => {
                if (count > 0) toast.success(t("synced_leads", { count }));
            });
        };

        window.addEventListener('online', handleOnline);

        // Periodically check for sync every 5 minutes
        const interval = setInterval(() => {
            leadService.syncAllPending();
        }, 5 * 60 * 1000);

        return () => {
            window.removeEventListener('online', handleOnline);
            clearInterval(interval);
        };
    }, []);

    // Optionally show a toast if there are many pending leads that just got synced
    // For now, we'll keep it silent as per "seamless" preference unless it's a major win

    return null; // Headless component
};
