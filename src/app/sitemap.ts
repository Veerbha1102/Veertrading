import { MetadataRoute } from "next";
import { products } from "@/data/siteData";

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = "https://veertrading.in";
    const currentDate = new Date().toISOString();

    // Static pages
    const staticPages: MetadataRoute.Sitemap = [
        {
            url: baseUrl,
            lastModified: currentDate,
            changeFrequency: "weekly",
            priority: 1.0,
        },
        {
            url: `${baseUrl}/#about`,
            lastModified: currentDate,
            changeFrequency: "monthly",
            priority: 0.8,
        },
        {
            url: `${baseUrl}/#products`,
            lastModified: currentDate,
            changeFrequency: "weekly",
            priority: 0.9,
        },
        {
            url: `${baseUrl}/#infrastructure`,
            lastModified: currentDate,
            changeFrequency: "monthly",
            priority: 0.7,
        },
        {
            url: `${baseUrl}/#contact`,
            lastModified: currentDate,
            changeFrequency: "monthly",
            priority: 0.8,
        },
    ];

    // Dynamic product pages
    const productPages: MetadataRoute.Sitemap = products.map((product) => ({
        url: `${baseUrl}/products/${product.id}`,
        lastModified: currentDate,
        changeFrequency: "weekly" as const,
        priority: 0.8,
    }));

    return [...staticPages, ...productPages];
}
