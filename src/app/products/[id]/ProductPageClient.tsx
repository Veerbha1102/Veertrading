"use client";

import { notFound } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { ArrowLeft, MessageCircle, Download, Check, Package, Factory, MapPin } from "lucide-react";
import { products, Product } from "@/data/siteData";
import { generateProductBrochure } from "@/utils/generateBrochure";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface ProductPageClientProps {
    productId: string;
}

export default function ProductPageClient({ productId }: ProductPageClientProps) {
    const product = products.find((p) => p.id === productId);

    if (!product) {
        notFound();
    }

    const whatsappMessage = encodeURIComponent(
        `Hi, I'm interested in ${product.name}. Please share pricing and availability.`
    );

    const handleDownloadBrochure = () => {
        generateProductBrochure(product);
    };

    // Get related products from same category
    const relatedProducts = products
        .filter((p) => p.category === product.category && p.id !== product.id)
        .slice(0, 3);

    // Product structured data
    const productSchema = {
        "@context": "https://schema.org",
        "@type": "Product",
        name: product.name,
        description: product.description,
        image: `https://veertrading.in${product.image}`,
        brand: {
            "@type": "Brand",
            name: "Veer Trading",
        },
        category: product.category,
        offers: {
            "@type": "Offer",
            availability: "https://schema.org/InStock",
            seller: {
                "@type": "Organization",
                name: "Veer Trading",
            },
            priceSpecification: {
                "@type": "PriceSpecification",
                priceCurrency: "INR",
            },
        },
        manufacturer: {
            "@type": "Organization",
            name: "Veer Trading",
            address: {
                "@type": "PostalAddress",
                addressLocality: "Nakhatrana",
                addressRegion: "Gujarat",
                addressCountry: "IN",
            },
        },
    };

    // Breadcrumb structured data
    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
            {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://veertrading.in",
            },
            {
                "@type": "ListItem",
                position: 2,
                name: "Products",
                item: "https://veertrading.in/#products",
            },
            {
                "@type": "ListItem",
                position: 3,
                name: product.name,
                item: `https://veertrading.in/products/${product.id}`,
            },
        ],
    };

    return (
        <>
            {/* Product Schema */}
            <Script
                id="product-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
            />
            {/* Breadcrumb Schema */}
            <Script
                id="breadcrumb-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />

            <Navbar />
            <main className="min-h-screen bg-background pt-20">
                {/* Breadcrumb */}
                <nav aria-label="Breadcrumb" className="max-w-7xl mx-auto px-4 py-6">
                    <ol className="flex items-center gap-2 text-sm text-muted">
                        <li>
                            <Link href="/" className="hover:text-accent transition-colors">
                                Home
                            </Link>
                        </li>
                        <li>/</li>
                        <li>
                            <Link href="/#products" className="hover:text-accent transition-colors">
                                Products
                            </Link>
                        </li>
                        <li>/</li>
                        <li className="text-foreground font-medium" aria-current="page">
                            {product.name}
                        </li>
                    </ol>
                    <Link
                        href="/#products"
                        className="inline-flex items-center gap-2 text-muted hover:text-accent transition-colors mt-2"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Back to Products
                    </Link>
                </nav>

                {/* Product Hero */}
                <section className="max-w-7xl mx-auto px-4 pb-16">
                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Product Image */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            className="relative"
                        >
                            <div className="relative aspect-square rounded-xl overflow-hidden bg-card-bg border border-card-border">
                                <Image
                                    src={product.image}
                                    alt={`${product.name} - Premium ${product.category} from Veer Trading`}
                                    fill
                                    className="object-cover"
                                    priority
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />
                                {/* Category Badge */}
                                <div className="absolute top-4 left-4 px-4 py-2 bg-accent text-white text-sm font-medium rounded-full">
                                    {product.category}
                                </div>
                            </div>
                        </motion.div>

                        {/* Product Info */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading mb-4">
                                {product.name}
                            </h1>

                            <p className="text-muted leading-relaxed mb-8">
                                {product.description}
                            </p>

                            {/* Features */}
                            <div className="flex flex-wrap gap-2 mb-8">
                                {product.features.map((feature) => (
                                    <span
                                        key={feature}
                                        className="inline-flex items-center gap-2 px-4 py-2 bg-card-bg border border-card-border text-sm rounded-full"
                                    >
                                        <Check className="w-4 h-4 text-accent" aria-hidden="true" />
                                        {feature}
                                    </span>
                                ))}
                            </div>

                            {/* Quick Info */}
                            <div className="grid grid-cols-2 gap-4 mb-8">
                                <div className="p-4 bg-card-bg border border-card-border rounded-lg">
                                    <div className="flex items-center gap-3">
                                        <Package className="w-5 h-5 text-accent" aria-hidden="true" />
                                        <div>
                                            <p className="text-xs text-muted">Min. Order</p>
                                            <p className="font-semibold">{product.minOrderQty}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-4 bg-card-bg border border-card-border rounded-lg">
                                    <div className="flex items-center gap-3">
                                        <Factory className="w-5 h-5 text-accent" aria-hidden="true" />
                                        <div>
                                            <p className="text-xs text-muted">Capacity</p>
                                            <p className="font-semibold">{product.productionCapacity}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* CTA Buttons */}
                            <div className="flex flex-col sm:flex-row gap-4">
                                <a
                                    href={`https://wa.me/919875048646?text=${whatsappMessage}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn-primary justify-center flex-1"
                                    aria-label={`Get quote for ${product.name} on WhatsApp`}
                                >
                                    <MessageCircle className="w-5 h-5" aria-hidden="true" />
                                    Get Quote on WhatsApp
                                </a>
                                <button
                                    onClick={handleDownloadBrochure}
                                    className="flex items-center justify-center gap-2 px-6 py-3 border border-accent text-accent hover:bg-accent hover:text-white transition-colors rounded font-medium"
                                    aria-label={`Download ${product.name} brochure PDF`}
                                >
                                    <Download className="w-5 h-5" aria-hidden="true" />
                                    Download Brochure
                                </button>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Specifications Section */}
                <section className="bg-card-bg py-16" aria-labelledby="specs-heading">
                    <div className="max-w-7xl mx-auto px-4">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.2 }}
                        >
                            <h2 id="specs-heading" className="text-2xl md:text-3xl font-heading mb-8">
                                Product Specifications
                            </h2>

                            <div className="bg-background border border-card-border rounded-xl overflow-hidden">
                                <table className="w-full">
                                    <caption className="sr-only">
                                        Specifications for {product.name}
                                    </caption>
                                    <tbody>
                                        {product.specs.map((spec, index) => (
                                            <tr
                                                key={spec.label}
                                                className={index % 2 === 0 ? "bg-card-bg/50" : ""}
                                            >
                                                <th
                                                    scope="row"
                                                    className="px-6 py-4 text-muted font-medium border-b border-card-border w-1/3 text-left"
                                                >
                                                    {spec.label}
                                                </th>
                                                <td className="px-6 py-4 text-foreground border-b border-card-border">
                                                    {spec.value}
                                                </td>
                                            </tr>
                                        ))}
                                        <tr className={product.specs.length % 2 === 0 ? "bg-card-bg/50" : ""}>
                                            <th
                                                scope="row"
                                                className="px-6 py-4 text-muted font-medium border-b border-card-border text-left"
                                            >
                                                Minimum Order Quantity
                                            </th>
                                            <td className="px-6 py-4 text-accent font-semibold border-b border-card-border">
                                                {product.minOrderQty}
                                            </td>
                                        </tr>
                                        <tr className={product.specs.length % 2 !== 0 ? "bg-card-bg/50" : ""}>
                                            <th
                                                scope="row"
                                                className="px-6 py-4 text-muted font-medium text-left"
                                            >
                                                Production Capacity
                                            </th>
                                            <td className="px-6 py-4 text-accent font-semibold">
                                                {product.productionCapacity}
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Company Info Section */}
                <section className="py-16" aria-labelledby="about-heading">
                    <div className="max-w-7xl mx-auto px-4">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.2 }}
                            className="bg-gradient-to-r from-accent/10 via-card-bg to-accent/10 border border-card-border rounded-xl p-8"
                        >
                            <div className="flex items-start gap-4">
                                <MapPin className="w-6 h-6 text-accent flex-shrink-0 mt-1" aria-hidden="true" />
                                <div>
                                    <h2 id="about-heading" className="text-xl font-heading mb-2">About Veer Trading</h2>
                                    <p className="text-muted leading-relaxed mb-4">
                                        We Are VEER Trading, We deal in Mixed charcoal, Lump charcoal, Root charcoal,
                                        Dandi charcoal, Charcoal dust, Agarbatti powder, bamboo charcoal, Black wooden
                                        charcoal root, and we are biggest suppliers for charcoal since 2012.
                                    </p>
                                    <p className="text-sm text-muted">
                                        <strong className="text-foreground">Location:</strong> Nirona, Nakhatrana, Kutch, Gujarat, India
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Related Products */}
                {relatedProducts.length > 0 && (
                    <section className="bg-card-bg py-16" aria-labelledby="related-heading">
                        <div className="max-w-7xl mx-auto px-4">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: false, amount: 0.2 }}
                            >
                                <h2 id="related-heading" className="text-2xl md:text-3xl font-heading mb-8">
                                    Related Products
                                </h2>

                                <div className="grid md:grid-cols-3 gap-6">
                                    {relatedProducts.map((relProduct) => (
                                        <Link
                                            key={relProduct.id}
                                            href={`/products/${relProduct.id}`}
                                            className="group bg-background border border-card-border rounded-lg overflow-hidden card-hover"
                                        >
                                            <div className="relative h-48 overflow-hidden">
                                                <Image
                                                    src={relProduct.image}
                                                    alt={`${relProduct.name} - ${relProduct.category}`}
                                                    fill
                                                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                                                    sizes="(max-width: 768px) 100vw, 33vw"
                                                />
                                            </div>
                                            <div className="p-4">
                                                <h3 className="font-heading text-lg group-hover:text-accent transition-colors">
                                                    {relProduct.name}
                                                </h3>
                                                <p className="text-sm text-muted mt-1">
                                                    {relProduct.category}
                                                </p>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </motion.div>
                        </div>
                    </section>
                )}
            </main>
            <Footer />
        </>
    );
}
