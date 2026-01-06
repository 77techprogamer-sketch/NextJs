# Insurance Support - Next.js App

🎉 **Next.js migration for perfect SEO!**

This is the Next.js version of the Insurance Support website with Server-Side Generation (SSG) for complete search engine indexing.

## 🚀 Quick Deploy to Vercel

### 1. Environment Variables

Add these to your Vercel project:

```
NEXT_PUBLIC_SUPABASE_URL=https://idzvdeemgxhwlkyphnel.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=sb_publishable_E5dd2tiZzEGy-R014incoA_7zqiVDqI
```

### 2. Build Settings

- **Framework Preset:** Next.js
- **Build Command:** `npm run build`
- **Install Command:** `npm install --legacy-peer-deps`
- **Output Directory:** `.next`
- **Node Version:** 18.x or higher

### 3. Deploy

Click "Deploy" - Vercel will handle everything!

## 📁 What's Included

- ✅ Homepage with SSG
- ✅ 10 service pages (life, health, term, motor, SME, travel, pension, ULIP, wedding, cyber insurance)
- ✅ All 87 UI components
- ✅ Supabase SSR/CSR clients
- ✅ Full SEO metadata
- ✅ Sitemap API (`/sitemap.xml`)
- ✅ All assets (images, locales)

## 🔍 Verify SEO Works

After deployment:

1. **View Source Test:**
   - Visit your site
   - Right-click → View Page Source
   - You should see FULL HTML content (not empty `<div id="root"></div>`)

2. **Google Search Console:**
   - URL Inspection Tool
   - Check "View Crawled Page"
   - Should show rendered content

3. **Test URLs:**
   - Homepage: `/`
   - Service: `/services/life-insurance`
   - Sitemap: `/sitemap.xml`

## 🛠️ Local Development

```bash
# Install dependencies
npm install --legacy-peer-deps

# Run dev server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 📊 SEO Benefits

**Before (React SPA):**
- Search engines see empty `<div>`
- No content indexed
- React Helmet tags invisible

**After (Next.js SSG):**
- ✅ Full HTML pre-rendered
- ✅ All content visible to crawlers
- ✅ Unique meta tags per page
- ✅ Perfect SEO score

## 📝 Next Steps

1. Deploy to Vercel
2. Verify build succeeds
3. Test view-source shows content
4. Submit sitemap to Google Search Console
5. Monitor indexing progress

---

**Need help?** Check the full walkthrough in the artifacts directory.
