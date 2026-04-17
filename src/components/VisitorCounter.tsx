"use client";

import React, { useEffect, useState, useCallback } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Eye, Users } from 'lucide-react';
import { formatDistanceToNow } from 'date-fns';
import { useIsMobile } from '@/hooks/use-mobile';
import { cn } from '@/lib/utils';
import { useTranslation } from 'react-i18next';
import { showError } from '@/utils/toast'; // Import showError for user feedback

const VisitorCounter = () => {
  const { t } = useTranslation();
  const [totalVisits, setTotalVisits] = useState<number | null>(null);
  const [uniqueVisitors, setUniqueVisitors] = useState<number | null>(null);
  const [lastVisit, setLastVisit] = useState<string | null>(null);
  const [onlineCount, setOnlineCount] = useState<number>(0);
  const isMobile = useIsMobile();

  const fetchVisitorStats = useCallback(async () => {
    const { data, error } = await supabase.rpc('get_visitor_stats');

    if (error) {
      console.error('Error fetching visitor stats:', error.message);
      showError(t('common.error_loading_stats'));
    } else if (data && data.length > 0) {
      const stats = data[0];
      setTotalVisits(stats.total_visits);
      setUniqueVisitors(stats.unique_visitors);
      if (stats.last_visit) {
        setLastVisit(formatDistanceToNow(new Date(stats.last_visit), { addSuffix: true }));
      } else {
        setLastVisit(null);
      }
    }
  }, [t]);

  useEffect(() => {
    // We only fetch stats here. ALL logging is handled globally by VisitorTracker.tsx
    // to ensure every page visit (not just Home) is counted and metadata is captured.
    fetchVisitorStats();

    // Realtime Presence for live visitor count
    const presenceKey = Math.random().toString(36).substring(7);
    const presenceChannel = supabase.channel('online-users', {
      config: {
        presence: {
          key: presenceKey,
        },
      },
    });

    presenceChannel
      .on('presence', { event: 'sync' }, () => {
        const presenceState = presenceChannel.presenceState();
        const count = Object.keys(presenceState).length;
        setOnlineCount(count);
      })
      .subscribe(async (status) => {
        if (status === 'SUBSCRIBED') {
          await presenceChannel.track({ online_at: new Date().toISOString() });
        }
      });

    // Realtime subscription for visitor stats updates
    const statsChannel = supabase.channel('public:visitors');
    statsChannel
      .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'visitors' }, (payload) => {
        fetchVisitorStats(); // Re-fetch stats when a new visitor is inserted
      })
      .subscribe();

    return () => {
      supabase.removeChannel(presenceChannel);
      supabase.removeChannel(statsChannel);
    };
  }, [fetchVisitorStats]); // Dependency array includes fetchVisitorStats

  if (totalVisits === null || uniqueVisitors === null || isMobile) {
    return null;
  }

  const containerClasses = cn(
    "fixed hidden sm:flex text-foreground bg-background border rounded-lg flex-col items-start shadow-xl animate-in fade-in-0 duration-700 z-[100]",
    "bottom-16 left-4 p-4 space-y-2 text-sm"
  );

  return (
    <div className={containerClasses}>
      <div className="flex items-center" title={t('visitors.total_visits', { count: totalVisits })}>
        <Eye className="h-4 w-4 mr-2" />
        <div className="flex flex-col items-start">
          <span>{t('visitors.total_visits', { count: totalVisits })}</span>
          {lastVisit && <span className="text-muted-foreground">{t('visitors.last_visit', { distance: lastVisit })}</span>}
        </div>
      </div>
      <div className="flex items-center" title={t('visitors.currently_online', { count: onlineCount })}>
        <Users className="h-4 w-4 mr-2 text-green-500" />
        <span>{t('visitors.currently_online', { count: onlineCount })}</span>
      </div>
    </div>
  );
};

export default VisitorCounter;