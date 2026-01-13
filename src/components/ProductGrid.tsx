"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { products, categories } from "@/data/siteData";
import ProductCard from "./ProductCard";

export default function ProductGrid() {
    const [activeCategory, setActiveCategory] = useState("All");

    const filteredProducts =
        activeCategory === "All"
            ? products
            : products.filter((p) => p.category === activeCategory);

    return (
        <section id="products" className="section-padding bg-background">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.2 }}
                    className="text-center mb-12"
                >
                    <span className="text-accent text-sm font-medium tracking-widest uppercase">
                        Our Collection
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading mt-3 mb-4">
                        Premium Products
                    </h2>
                    <p className="text-muted max-w-2xl mx-auto">
                        High-quality charcoal products for industrial, commercial, and specialty applications.
                        All products are quality tested and available in bulk quantities.
                    </p>
                </motion.div>

                {/* Category Filter */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.2 }}
                    transition={{ delay: 0.1 }}
                    className="flex flex-wrap justify-center gap-3 mb-10"
                >
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${activeCategory === category
                                ? "bg-accent text-white"
                                : "bg-card-bg border border-card-border text-foreground hover:border-accent"
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </motion.div>

                {/* Products Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {filteredProducts.map((product, index) => (
                        <ProductCard key={product.id} product={product} index={index} />
                    ))}
                </div>

                {/* Empty State */}
                {filteredProducts.length === 0 && (
                    <div className="text-center py-12">
                        <p className="text-muted">No products found in this category.</p>
                    </div>
                )}
            </div>
        </section>
    );
}
