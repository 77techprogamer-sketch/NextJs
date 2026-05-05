'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

export default function IntenseDebateComments() {
    const pathname = usePathname();

    // Check if the current page is a "service" page.
    // Based on the requirement "used only on all service pages not in home page",
    // and standard Next.js routing, we'll exclude the home page.
    // We explicitly target common service pathways or skip the homepage.
    const isHomePage = pathname === '/';
    
    // We decide to match any page that isn't the root path, or strictly service/loan pages
    // The requirement says "all service pages", usually implying anything that isn't Home, About, Contact
    const isServicePage = pathname.startsWith('/services') || 
                          pathname.startsWith('/loans') || 
                          pathname.startsWith('/locations') || 
                          pathname.startsWith('/funnels');

    useEffect(() => {
        if (!isServicePage || isHomePage) return;

        // Reset global variables for IntenseDebate to load the correct thread
        window.idcomments_acct = '3752ccc6e086ea3c486835d95fd00261';
        window.idcomments_post_id = pathname;
        window.idcomments_post_url = window.location.origin + pathname;

        // Remove old scripts/containers if they exist to prevent duplication on soft navigations
        const existingContainer = document.getElementById('idc-container');
        if (existingContainer) {
             existingContainer.innerHTML = '';
        }

        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = 'https://www.intensedebate.com/js/genericCommentWrapperV2.js';
        script.async = true;
        
        const target = document.getElementById('intense-debate-target');
        if (target) {
            target.appendChild(script);
        }

        return () => {
            if (target && target.contains(script)) {
                target.removeChild(script);
            }
        };
    }, [pathname, isServicePage, isHomePage]);

    if (!isServicePage || isHomePage) return null;

    return (
        <div className="container mx-auto px-4 py-12 max-w-4xl bg-white rounded-xl shadow-sm border border-slate-100 my-8">
            <h3 className="text-2xl font-bold mb-6 text-slate-800">Leave a Comment or Question</h3>
            <span id="IDCommentsPostTitle" style={{ display: 'none' }}></span>
            <div id="intense-debate-target"></div>
        </div>
    );
}

declare global {
    interface Window {
        idcomments_acct: string;
        idcomments_post_id: string;
        idcomments_post_url: string;
    }
}
