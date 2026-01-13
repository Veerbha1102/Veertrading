"use client";

import { motion } from "framer-motion";

interface HeroBackgroundProps {
    children: React.ReactNode;
}

export default function HeroBackground({ children }: HeroBackgroundProps) {
    return (
        <section className="relative min-h-screen w-full overflow-hidden">
            {/* Background Video */}
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
            >
                <source src="/videos/site-visit.mp4" type="video/mp4" />
            </video>

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/60" />

            {/* Gradient Overlay for better text visibility */}
            <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-transparent to-background" />

            {/* Content */}
            <div className="relative z-10 min-h-screen flex flex-col justify-center items-center text-center px-4">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="max-w-4xl mx-auto"
                >
                    {children}
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
            >
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="w-6 h-10 border-2 border-foreground/50 rounded-full flex justify-center pt-2"
                >
                    <motion.div className="w-1 h-2 bg-accent rounded-full" />
                </motion.div>
            </motion.div>
        </section>
    );
}
