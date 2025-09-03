# SEO Setup Guide for Web Vello

## Step 3: Verification Codes Setup

### 1. Google Search Console Setup
1. Go to [Google Search Console](https://search.google.com/search-console)
2. Add your property: `https://webvello.com`
3. Choose "HTML tag" verification method
4. Copy the verification code (looks like: `abc123def456ghi789`)
5. Replace `REPLACE_WITH_GOOGLE_SEARCH_CONSOLE_VERIFICATION_CODE` in both:
   - `app/layout.tsx` (line 86)
   - `lib/seo-config.ts` (line 66)

### 2. Bing Webmaster Tools Setup
1. Go to [Bing Webmaster Tools](https://www.bing.com/webmasters)
2. Add your site: `https://webvello.com`
3. Choose "HTML meta tag" verification method
4. Copy the verification code (looks like: `xyz789abc123def456`)
5. Replace `REPLACE_WITH_BING_WEBMASTER_VERIFICATION_CODE` in both:
   - `app/layout.tsx` (line 87)
   - `lib/seo-config.ts` (line 67)

### 3. Yahoo Site Explorer (Optional)
1. Go to [Yahoo Site Explorer](https://siteexplorer.search.yahoo.com)
2. Add your site: `https://webvello.com`
3. Get verification code
4. Replace `REPLACE_WITH_YAHOO_VERIFICATION_CODE` in both files

## Step 4: Image Assets Creation

### Favicon Creation
1. Go to [favicon.io](https://favicon.io) or [realfavicongenerator.net](https://realfavicongenerator.net)
2. Create a simple "WV" or "V" logo in blue (#4C74B9)
3. Download the favicon package
4. Replace the placeholder files in `/public/`:
   - `favicon.ico`
   - `favicon-16x16.png`
   - `favicon-32x32.png`
   - `apple-touch-icon.png`
   - `android-chrome-192x192.png`
   - `android-chrome-512x512.png`
   - `mstile-150x150.png`

### Open Graph Images Creation
1. Use [Canva](https://canva.com) or [Figma](https://figma.com)
2. Create 1200x630 pixel images for each service
3. Include "Web Vello" logo and service-specific text
4. Use blue (#4C74B9) and white color scheme
5. Replace placeholder files in `/public/`:
   - `og-image.jpg` (main homepage)
   - `og-web-development.jpg`
   - `og-wordpress-development.jpg`
   - `og-seo-services.jpg`
   - `og-contact.jpg`
   - `og-pricing.jpg`

## Next Steps
After completing verification codes and image assets:
1. Deploy your site
2. Submit sitemap to Google Search Console: `https://webvello.com/sitemap.xml`
3. Submit sitemap to Bing Webmaster Tools
4. Monitor indexing status
5. Set up Google Analytics 4
6. Configure conversion tracking
