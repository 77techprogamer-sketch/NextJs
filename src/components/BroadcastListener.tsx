"use client";

import { useEffect, useState } from 'react';

const BroadcastListener = () => {
    const [broadcast, setBroadcast] = useState<any>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const fetchBroadcast = async () => {
            try {
                const res = await fetch('/api/broadcast', { signal: AbortSignal.timeout(5000) });
                if (!res.ok) return;
                const data = await res.json();
                if (data) {
                    setBroadcast(data);
                    setTimeout(() => setIsVisible(true), 3000);
                }
            } catch (err) {}
        };
        fetchBroadcast();
    }, []);

    if (!isVisible || !broadcast) return null;

    return (
        <div className="fixed bottom-4 right-4 z-[9999] max-w-sm bg-white dark:bg-slate-900 p-4 rounded-xl shadow-xl border">
            <h4 className="font-bold mb-1">{broadcast.title}</h4>
            <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">{broadcast.message}</p>
            <button onClick={() => setIsVisible(false)} className="text-xs font-bold text-blue-600">Dismiss</button>
        </div>
    );
};

export default BroadcastListener;
