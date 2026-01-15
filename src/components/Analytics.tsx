"use client";

import { useEffect } from 'react';

const Analytics = () => {
    useEffect(() => {
        // Check if the user is a bot (basic check)
        const isBot = /bot|googlebot|crawler|spider|robot|crawling/i.test(navigator.userAgent);

        // Only load analytics if not a bot
        if (!isBot) {
            // Clarity Tracking Code
            (function (c, l, a, r, i, t, y) {
                // @ts-ignore
                c[a] = c[a] || function () { (c[a].q = c[a].q || []).push(arguments) };
                // @ts-ignore
                t = l.createElement(r); t.async = 1; t.src = "https://www.clarity.ms/tag/" + i;
                // @ts-ignore
                y = l.getElementsByTagName(r)[0]; y.parentNode.insertBefore(t, y);
            })(window, document, "clarity", "script", "v187agkimc");

            console.log('Analytics initialized (User Mode)');
        } else {
            console.log('Analytics suppressed (Bot Mode)');
        }
    }, []);

    return null;
};

export default Analytics;
