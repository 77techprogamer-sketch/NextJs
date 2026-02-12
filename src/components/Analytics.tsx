"use client";

import Script from 'next/script';

const Analytics = () => {
    return (
        <>
            {/* Microsoft Clarity */}
            <Script
                id="microsoft-clarity"
                strategy="lazyOnload"
                dangerouslySetInnerHTML={{
                    __html: `
              (function(c,l,a,r,i,t,y){
                  c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                  t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                  y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "v9dto5m10l");
            `,
                }}
            />
            {/* Google Analytics 4 */}
            <Script
                strategy="afterInteractive"
                src={`https://www.googletagmanager.com/gtag/js?id=G-JP67H399V2`}
            />
            <Script
                id="google-analytics"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', 'G-JP67H399V2', {
                        page_path: window.location.pathname,
                    });
                    `,
                }}
            />
        </>
    );
};

export default Analytics;
