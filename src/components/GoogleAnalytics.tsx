"use client";

import Script from "next/script";

interface GoogleAnalyticsProps {
    measurementId: string;
}

export default function GoogleAnalytics({ measurementId }: GoogleAnalyticsProps) {
    // Don't load GA in development
    if (process.env.NODE_ENV !== "production") {
        return null;
    }

    return (
        <>
            {/* Global Site Tag (gtag.js) - Google Analytics */}
            <Script
                src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
                strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
                {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${measurementId}', {
                        page_path: window.location.pathname,
                    });
                `}
            </Script>
        </>
    );
}

// Event tracking helper functions
export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID || "";

// Track page views
export const pageview = (url: string) => {
    if (typeof window !== "undefined" && (window as unknown as { gtag?: Function }).gtag) {
        (window as unknown as { gtag: Function }).gtag("config", GA_TRACKING_ID, {
            page_path: url,
        });
    }
};

// Track events
export const event = ({
    action,
    category,
    label,
    value,
}: {
    action: string;
    category: string;
    label?: string;
    value?: number;
}) => {
    if (typeof window !== "undefined" && (window as unknown as { gtag?: Function }).gtag) {
        (window as unknown as { gtag: Function }).gtag("event", action, {
            event_category: category,
            event_label: label,
            value: value,
        });
    }
};

// Pre-defined event helpers for Veer Trading
export const trackWhatsAppClick = (productName?: string) => {
    event({
        action: "whatsapp_click",
        category: "engagement",
        label: productName || "general",
    });
};

export const trackBrochureDownload = (type: "company" | "product", productName?: string) => {
    event({
        action: "brochure_download",
        category: "conversion",
        label: type === "product" ? productName : "company_brochure",
    });
};

export const trackProductView = (productName: string) => {
    event({
        action: "product_view",
        category: "engagement",
        label: productName,
    });
};

export const trackContactClick = (method: "phone" | "email" | "whatsapp") => {
    event({
        action: "contact_click",
        category: "engagement",
        label: method,
    });
};
