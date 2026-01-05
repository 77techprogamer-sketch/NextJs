export default function handler(req, res) {
    // Set cache for 6 hours (21600 seconds)
    res.setHeader('Cache-Control', 's-maxage=21600, stale-while-revalidate=3600');
    res.setHeader('Content-Type', 'application/xml');

    // Dynamic date: current time
    const lastModDate = new Date().toISOString().split('T')[0];

    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://insurance-support.vercel.app/</loc>
    <lastmod>${lastModDate}</lastmod>
    <changefreq>always</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://insurance-support.vercel.app/privacy</loc>
    <lastmod>${lastModDate}</lastmod>
    <changefreq>always</changefreq>
    <priority>0.5</priority>
  </url>
  <url>
    <loc>https://insurance-support.vercel.app/terms</loc>
    <lastmod>${lastModDate}</lastmod>
    <changefreq>always</changefreq>
    <priority>0.5</priority>
  </url>
  <url>
    <loc>https://insurance-support.vercel.app/support</loc>
    <lastmod>${lastModDate}</lastmod>
    <changefreq>always</changefreq>
    <priority>0.9</priority>
  </url>
  <!-- Service Pages -->
  <url>
    <loc>https://insurance-support.vercel.app/services/life-insurance</loc>
    <lastmod>${lastModDate}</lastmod>
    <changefreq>always</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://insurance-support.vercel.app/services/health-insurance</loc>
    <lastmod>${lastModDate}</lastmod>
    <changefreq>always</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://insurance-support.vercel.app/services/term-insurance</loc>
    <lastmod>${lastModDate}</lastmod>
    <changefreq>always</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://insurance-support.vercel.app/services/motor-insurance</loc>
    <lastmod>${lastModDate}</lastmod>
    <changefreq>always</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://insurance-support.vercel.app/services/sme-insurance</loc>
    <lastmod>${lastModDate}</lastmod>
    <changefreq>always</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://insurance-support.vercel.app/services/travel-insurance</loc>
    <lastmod>${lastModDate}</lastmod>
    <changefreq>always</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://insurance-support.vercel.app/services/pension-plans</loc>
    <lastmod>${lastModDate}</lastmod>
    <changefreq>always</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://insurance-support.vercel.app/services/ulip-plans</loc>
    <lastmod>${lastModDate}</lastmod>
    <changefreq>always</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://insurance-support.vercel.app/services/wedding-insurance</loc>
    <lastmod>${lastModDate}</lastmod>
    <changefreq>always</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://insurance-support.vercel.app/services/cyber-insurance</loc>
    <lastmod>${lastModDate}</lastmod>
    <changefreq>always</changefreq>
    <priority>0.8</priority>
  </url>
  <!-- Blocked and Not Found pages -->
  <url>
    <loc>https://insurance-support.vercel.app/blocked</loc>
    <lastmod>${lastModDate}</lastmod>
    <changefreq>never</changefreq>
    <priority>0.1</priority>
  </url>
  <url>
    <loc>https://insurance-support.vercel.app/404</loc>
    <lastmod>${lastModDate}</lastmod>
    <changefreq>never</changefreq>
    <priority>0.1</priority>
  </url>
</urlset>`;

    res.status(200).send(xml);
}
