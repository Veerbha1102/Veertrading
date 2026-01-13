"use client";

import { motion } from "framer-motion";
import { MessageCircle, Check, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Product } from "@/data/siteData";

interface ProductCardProps {
    product: Product;
    index: number;
}

export default function ProductCard({ product, index }: ProductCardProps) {
    const whatsappMessage = encodeURIComponent(
        `Hi, I'm interested in ${product.name}. Please share pricing and availability.`
    );

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: false, amount: 0.2 }}
            className="bg-card-bg border border-card-border rounded-lg overflow-hidden card-hover group"
        >
            {/* Product Image - Clickable */}
            <Link href={`/products/${product.id}`} className="block">
                <div className="relative h-48 md:h-56 overflow-hidden bg-background">
                    <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    {/* Category Badge */}
                    <div className="absolute top-3 left-3 px-3 py-1 bg-accent/90 text-white text-xs font-medium rounded-full">
                        {product.category}
                    </div>
                    {/* View Details Overlay */}
                    <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <span className="flex items-center gap-2 text-white font-medium">
                            View Details
                            <ArrowRight className="w-4 h-4" />
                        </span>
                    </div>
                </div>
            </Link>

            {/* Product Info */}
            <div className="p-5">
                <Link href={`/products/${product.id}`}>
                    <h3 className="text-lg font-heading font-semibold mb-2 group-hover:text-accent transition-colors cursor-pointer">
                        {product.name}
                    </h3>
                </Link>
                <p className="text-sm text-muted leading-relaxed mb-4 line-clamp-2">
                    {product.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-5">
                    {product.features.slice(0, 3).map((feature) => (
                        <span
                            key={feature}
                            className="inline-flex items-center gap-1 px-2 py-1 bg-background text-xs text-foreground rounded"
                        >
                            <Check className="w-3 h-3 text-accent" />
                            {feature}
                        </span>
                    ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2">
                    <a
                        href={`https://wa.me/919875048646?text=${whatsappMessage}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 btn-primary justify-center text-sm py-3"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <MessageCircle className="w-4 h-4" />
                        Get Quote
                    </a>
                    <Link
                        href={`/products/${product.id}`}
                        className="px-4 py-3 border border-card-border text-foreground hover:border-accent hover:text-accent transition-colors rounded text-sm font-medium"
                    >
                        Details
                    </Link>
                </div>
            </div>
        </motion.div>
    );
}
