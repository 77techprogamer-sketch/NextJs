"use client"

import React, { useEffect, useState } from 'react'
import { supabase } from '@/integrations/supabase/client'
import { X, Info, AlertTriangle, AlertCircle, CheckCircle } from 'lucide-react'

interface Broadcast {
  id: string
  message: string
  type: 'info' | 'warning' | 'error' | 'success'
}

export default function SiteBroadcastBanner() {
  const [broadcast, setBroadcast] = useState<Broadcast | null>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Determine if we should show the banner locally initially
    const fetchActiveBroadcast = async () => {
      const { data } = await supabase
        .from('site_broadcasts')
        .select('*')
        .eq('is_active', true)
        // Note: Filter for starts_at and ends_at logic can be extended here if needed,
        // but RLS might already do that. Just ordering by created_at DESC for the latest.
        .order('created_at', { ascending: false })
        .limit(1)

      if (data && data.length > 0) {
        handleNewBroadcast(data[0])
      }
    }

    fetchActiveBroadcast()

    const channel = supabase
      .channel('public:site_broadcasts')
      .on(
        'postgres_changes',
        { event: '*', schema: 'public', table: 'site_broadcasts' },
        (payload) => {
          if (payload.eventType === 'INSERT' || payload.eventType === 'UPDATE') {
            const newRec = payload.new as any
            if (newRec.is_active) {
              handleNewBroadcast(newRec)
            } else {
              setBroadcast((current) => {
                if (current && current.id === newRec.id) {
                  setIsVisible(false)
                  return null
                }
                return current
              })
            }
          } else if (payload.eventType === 'DELETE') {
            const oldRec = payload.old as any
            setBroadcast((current) => {
              if (current && current.id === oldRec.id) {
                setIsVisible(false)
                return null
              }
              return current
            })
          }
        }
      )
      .subscribe()

    return () => {
      supabase.removeChannel(channel)
    }
  }, [])

  const handleNewBroadcast = (b: Broadcast) => {
    setBroadcast(b)
    const dismissed = localStorage.getItem(`dismissed_broadcast_${b.id}`)
    if (dismissed !== 'true') {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }

  const dismissBanner = () => {
    setIsVisible(false)
    if (broadcast) {
      localStorage.setItem(`dismissed_broadcast_${broadcast.id}`, 'true')
    }
  }

  if (!isVisible || !broadcast) return null

  const typeConfig = {
    info: { icon: Info, bg: 'bg-blue-600', text: 'text-white' },
    warning: { icon: AlertTriangle, bg: 'bg-yellow-500', text: 'text-white' },
    error: { icon: AlertCircle, bg: 'bg-red-600', text: 'text-white' },
    success: { icon: CheckCircle, bg: 'bg-green-600', text: 'text-white' },
  }

  const currentConfig = typeConfig[broadcast.type] || typeConfig.info
  const Icon = currentConfig.icon

  return (
    <div
      className={`w-full ${currentConfig.bg} ${currentConfig.text} px-4 py-3 shadow-md flex items-center justify-between relative`}
      role="alert"
    >
      <div className="flex-1 flex items-center justify-center gap-2 text-sm font-medium">
        <Icon size={18} className="shrink-0" />
        <span className="text-center">{broadcast.message}</span>
      </div>
      <button
        onClick={dismissBanner}
        className="p-1 rounded-md hover:bg-black/10 transition-colors shrink-0 outline-none focus:ring-2 focus:ring-white/50"
        aria-label="Dismiss alert"
      >
        <X size={18} />
      </button>
    </div>
  )
}
