"use client";

import { motion } from "framer-motion";
import { Flame, Package, TrendingUp, MapPin, Clock, CheckCircle } from "lucide-react";

const stats = [
    {
        icon: Package,
        value: "500+",
        label: "Tons Stock Ready",
    },
    {
        icon: Clock,
        value: "12+",
        label: "Years Experience",
    },
    {
        icon: TrendingUp,
        value: "5-25 Cr",
        label: "Annual Turnover",
    },
    {
        icon: MapPin,
        value: "Gujarat",
        label: "Based in Kutch",
    },
    {
        icon: CheckCircle,
        value: "GST",
        label: "Verified Business",
    },
];

export default function TrustStrip() {
    return (
        <section className="relative py-8 md:py-12 bg-card-bg border-y border-card-border overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 10px, #FF4500 10px, #FF4500 11px)`
                }} />
            </div>

            <div className="relative max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-4">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: false, amount: 0.2 }}
                            className="flex flex-col items-center text-center group"
                        >
                            <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-3 group-hover:bg-accent/20 transition-colors">
                                <stat.icon className="w-6 h-6 text-accent" />
                            </div>
                            <span className="text-2xl md:text-3xl font-heading font-bold text-foreground">
                                {stat.value}
                            </span>
                            <span className="text-xs md:text-sm text-muted mt-1 tracking-wider">
                                {stat.label}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Animated Fire Accent */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: false, amount: 0.2 }}
                className="absolute -left-4 top-1/2 -translate-y-1/2"
            >
                <Flame className="w-8 h-8 text-accent/20" />
            </motion.div>
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: false, amount: 0.2 }}
                className="absolute -right-4 top-1/2 -translate-y-1/2"
            >
                <Flame className="w-8 h-8 text-accent/20" />
            </motion.div>
        </section>
    );
}
