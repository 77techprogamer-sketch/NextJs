/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://insurancesupport.online',
    generateRobotsTxt: true,
    // Optional: Configure IndexNow
    // IndexNow lets search engines like Bing and Yandex know instantly when your content is added, updated, or deleted.
    additionalSitemaps: [
        // 'https://insurancesupport.online/server-sitemap.xml', // If you have a dynamic server-side sitemap
    ],
    robotsTxtOptions: {
        additionalSitemaps: [
            // 'https://insurancesupport.online/server-sitemap.xml',
        ],
    },
}
