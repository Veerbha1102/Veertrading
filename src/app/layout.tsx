import type { Metadata, Viewport } from "next";
import { Oswald, Montserrat } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import GoogleAnalytics from "@/components/GoogleAnalytics";

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

// SEO Metadata
export const metadata: Metadata = {
  metadataBase: new URL("https://veertrading.in"),
  title: {
    default: "Veer Trading - Premium Charcoal Supplier | Gujarat, India",
    template: "%s | Veer Trading",
  },
  description:
    "Veer Trading is a leading wholesale trader of premium processed charcoal, wood charcoal powder, charcoal briquettes, and agarbatti raw materials. Established in 2012, serving industries across India with 500+ tons stock ready. Contact: +91 98750 48646",
  keywords: [
    "Charcoal Manufacturer Gujarat",
    "Charcoal Supplier India",
    "Bulk Charcoal India",
    "Wood Charcoal Supplier",
    "Charcoal Briquettes Manufacturer",
    "Agarbatti Charcoal Powder",
    "Wholesale Charcoal Kutch",
    "Premium Processed Charcoal",
    "Veer Trading Nakhatrana",
    "Hardwood Lump Charcoal India",
    "BBQ Charcoal Supplier Gujarat",
    "Industrial Charcoal India",
    "Charcoal Powder Supplier",
    "Naresh Bhanushali Charcoal",
    "Best Charcoal Supplier Gujarat",
    "Charcoal Manufacturer Kutch",
    "Activated Charcoal India",
    "Restaurant Charcoal Supplier",
    "Hookah Charcoal Manufacturer",
    "Coconut Shell Charcoal India",
  ],
  authors: [{ name: "Veer Trading", url: "https://veertrading.in" }],
  creator: "Veer Trading",
  publisher: "Veer Trading",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://veertrading.in",
    siteName: "Veer Trading",
    title: "Veer Trading - Premium Charcoal Supplier | Gujarat, India",
    description:
      "Leading wholesale trader of premium processed charcoal in Gujarat, India. 500+ tons stock ready. Established 2012. Contact: +91 98750 48646",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Veer Trading - Premium Charcoal Supplier",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Veer Trading - Premium Charcoal Supplier",
    description:
      "Leading wholesale trader of premium processed charcoal in Gujarat, India. 500+ tons stock ready.",
    images: ["/images/og-image.jpg"],
    creator: "@veertrading",
  },
  alternates: {
    canonical: "https://veertrading.in",
    languages: {
      "en-IN": "https://veertrading.in",
    },
  },
  verification: {
    google: "your-google-verification-code", // Replace with actual code
  },
  category: "Business",
  classification: "Wholesale Charcoal Trading",
};

// Viewport configuration
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FF4500" },
    { media: "(prefers-color-scheme: dark)", color: "#101010" },
  ],
};

// Structured Data - Local Business Schema
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://veertrading.in/#business",
      name: "Veer Trading",
      alternateName: "Veer Trading Nakhatrana",
      description:
        "Wholesale trader of premium processed charcoal, wood charcoal powder, charcoal briquettes, and agarbatti raw materials since 2012.",
      url: "https://veertrading.in",
      logo: "https://veertrading.in/images/logo.png",
      image: "https://veertrading.in/images/logo.png",
      telephone: "+91-9875048646",
      email: "info@veertrading.in",
      foundingDate: "2012",
      priceRange: "₹₹",
      currenciesAccepted: "INR",
      paymentAccepted: "Cash, Bank Transfer, UPI",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Main Bazar, 4/148, Nirona",
        addressLocality: "Nakhatrana",
        addressRegion: "Gujarat",
        postalCode: "370615",
        addressCountry: "IN",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: "23.3",
        longitude: "69.5",
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          opens: "09:00",
          closes: "18:00",
        },
      ],
      sameAs: ["https://www.indiamart.com/veer-trading-nakhatrana/"],
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: "+91-9875048646",
          contactType: "sales",
          areaServed: "IN",
          availableLanguage: ["English", "Hindi", "Gujarati"],
        },
        {
          "@type": "ContactPoint",
          telephone: "+91-8000236434",
          contactType: "customer service",
          areaServed: "IN",
          availableLanguage: ["English", "Hindi", "Gujarati"],
        },
      ],
      founder: {
        "@type": "Person",
        name: "Naresh Tarachand Bhanushali",
        jobTitle: "Proprietor",
      },
      areaServed: {
        "@type": "Country",
        name: "India",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Charcoal Products",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Product",
              name: "Hardwood Lump Charcoal",
              description: "Premium hardwood lump charcoal for BBQ and industrial use",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Product",
              name: "Charcoal Briquettes",
              description: "High-density charcoal briquettes for consistent burning",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Product",
              name: "Agarbatti Charcoal Powder",
              description: "Fine charcoal powder for incense manufacturing",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Product",
              name: "Wood Charcoal Powder",
              description: "Premium wood charcoal powder for various applications",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Product",
              name: "Wooden Charcoal Root",
              description: "Natural wooden charcoal root for specialized uses",
            },
          },
        ],
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://veertrading.in/#website",
      url: "https://veertrading.in",
      name: "Veer Trading",
      description: "Premium Charcoal Supplier in Gujarat, India",
      publisher: {
        "@id": "https://veertrading.in/#business",
      },
      potentialAction: {
        "@type": "SearchAction",
        target: "https://veertrading.in/?q={search_term_string}",
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@type": "Organization",
      "@id": "https://veertrading.in/#organization",
      name: "Veer Trading",
      url: "https://veertrading.in",
      logo: "https://veertrading.in/images/logo.png",
      legalName: "Veer Trading",
      taxID: "24ANBPB2748J1ZA",
      foundingDate: "2012",
      founder: {
        "@type": "Person",
        name: "Naresh Tarachand Bhanushali",
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://veertrading.in/#breadcrumb",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://veertrading.in",
        },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" href="/favicon.png" sizes="256x256" />
        <link rel="apple-touch-icon" href="/favicon.png" />
        <link rel="manifest" href="/manifest.json" />

        {/* Preconnect for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* DNS Prefetch */}
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />

        {/* Structured Data */}
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
          strategy="afterInteractive"
        />
      </head>
      <body
        className={`${oswald.variable} ${montserrat.variable} antialiased bg-background text-foreground`}
      >
        <GoogleAnalytics measurementId={process.env.NEXT_PUBLIC_GA_ID || ""} />
        {children}
      </body>
    </html>
  );
}
