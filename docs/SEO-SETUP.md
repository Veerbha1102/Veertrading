# SEO & Analytics Setup Guide

## Google Analytics Integration

The website is pre-configured for Google Analytics 4 (GA4). To enable tracking:

### Step 1: Create a Google Analytics Account
1. Go to [Google Analytics](https://analytics.google.com)
2. Click "Start measuring"
3. Enter account name: "Veer Trading"
4. Click Next

### Step 2: Set Up a Property
1. Property name: "Veer Trading Website"
2. Select your timezone: India (GMT+5:30)
3. Currency: INR
4. Click Next

### Step 3: Create a Web Data Stream
1. Select "Web"
2. Enter URL: `https://veertrading.in`
3. Stream name: "Veer Trading Main"
4. Click "Create stream"

### Step 4: Get Your Measurement ID
1. Copy the **Measurement ID** (format: `G-XXXXXXXXXX`)

### Step 5: Add to Environment Variables
Create a `.env.local` file in the project root:

```env
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

Replace `G-XXXXXXXXXX` with your actual Measurement ID.

---

## Google Search Console Setup

### Step 1: Add Property
1. Go to [Google Search Console](https://search.google.com/search-console)
2. Click "Add property"
3. Select "URL prefix"
4. Enter: `https://veertrading.in`

### Step 2: Verify Ownership
1. Choose "HTML tag" verification method
2. Copy the `content` value from the meta tag
3. Update `src/app/layout.tsx`:
   - Find `verification: { google: "your-google-verification-code" }`
   - Replace with your actual verification code

### Step 3: Submit Sitemap
1. In Search Console, go to "Sitemaps"
2. Enter: `sitemap.xml`
3. Click "Submit"

---

## Event Tracking

The website tracks these events automatically:

| Event | Description |
|-------|-------------|
| `whatsapp_click` | When users click WhatsApp buttons |
| `brochure_download` | When users download PDF brochures |
| `product_view` | When users view product pages |
| `contact_click` | When users click phone/email links |

### Manual Event Tracking
```typescript
import { trackWhatsAppClick, trackBrochureDownload } from "@/components/GoogleAnalytics";

// Track WhatsApp click
trackWhatsAppClick("Hardwood Lump Charcoal");

// Track brochure download
trackBrochureDownload("product", "Charcoal Briquettes");
```

---

## SEO Checklist

- [x] JSON-LD Structured Data (LocalBusiness, Organization, Product)
- [x] Dynamic sitemap.xml
- [x] robots.txt
- [x] Web App Manifest (PWA support)
- [x] Meta tags (description, keywords, OG, Twitter)
- [x] Canonical URLs
- [x] Mobile-friendly viewport
- [x] Semantic HTML with ARIA labels
- [ ] Google Analytics (needs Measurement ID)
- [ ] Google Search Console (needs verification)

---

## Files Modified for SEO

| File | Purpose |
|------|---------|
| `src/app/layout.tsx` | Metadata, structured data, GA |
| `src/app/sitemap.ts` | Dynamic XML sitemap |
| `public/robots.txt` | Crawler instructions |
| `public/manifest.json` | PWA configuration |
| `src/components/GoogleAnalytics.tsx` | Analytics tracking |
