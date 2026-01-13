import { Metadata } from "next";
import { products } from "@/data/siteData";
import ProductPageClient from "./ProductPageClient";

// Generate static params for all products
export async function generateStaticParams() {
    return products.map((product) => ({
        id: product.id,
    }));
}

// Generate dynamic metadata for each product
export async function generateMetadata({
    params,
}: {
    params: Promise<{ id: string }>;
}): Promise<Metadata> {
    const { id } = await params;
    const product = products.find((p) => p.id === id);

    if (!product) {
        return {
            title: "Product Not Found",
        };
    }

    return {
        title: `${product.name} - Premium Charcoal | Veer Trading`,
        description: `${product.description} Available for bulk orders. Minimum order: ${product.minOrderQty}. Contact Veer Trading for pricing.`,
        keywords: [
            product.name,
            product.category,
            ...product.features,
            "Veer Trading",
            "Gujarat Charcoal",
            "Wholesale Charcoal",
            "Buy Charcoal India",
        ],
        openGraph: {
            title: `${product.name} | Veer Trading`,
            description: product.description,
            images: [
                {
                    url: product.image,
                    width: 800,
                    height: 800,
                    alt: product.name,
                },
            ],
            type: "website",
            locale: "en_IN",
            siteName: "Veer Trading",
        },
        twitter: {
            card: "summary_large_image",
            title: product.name,
            description: product.description,
            images: [product.image],
        },
        alternates: {
            canonical: `https://veertrading.in/products/${product.id}`,
        },
    };
}

export default async function ProductPage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;
    return <ProductPageClient productId={id} />;
}
