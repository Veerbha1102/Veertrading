"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Preloader() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Minimum display time for branding, then wait for page load
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className="preloader"
                >
                    <div className="relative flex flex-col items-center">
                        {/* Animated Logo with Fire Effect - Using Image instead of video for better control */}
                        <motion.div
                            className="relative w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64"
                            animate={{
                                scale: [1, 1.02, 1],
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                        >
                            {/* Glow effect behind logo */}
                            <motion.div
                                className="absolute inset-0 rounded-full bg-accent/30 blur-3xl"
                                animate={{
                                    scale: [1, 1.2, 1],
                                    opacity: [0.3, 0.6, 0.3],
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                            />
                            {/* Logo Image */}
                            <Image
                                src="/images/logo.png"
                                alt="Veer Trading"
                                fill
                                className="object-contain z-10 relative"
                                priority
                            />
                            {/* Fire particles effect */}
                            <motion.div
                                className="absolute inset-0 flex items-end justify-center"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                            >
                                {[...Array(8)].map((_, i) => (
                                    <motion.div
                                        key={i}
                                        className="absolute w-1 h-1 sm:w-2 sm:h-2 rounded-full bg-accent"
                                        style={{
                                            left: `${20 + i * 8}%`,
                                            bottom: "10%",
                                        }}
                                        animate={{
                                            y: [-10, -40, -10],
                                            opacity: [0, 1, 0],
                                            scale: [0.5, 1, 0.5],
                                        }}
                                        transition={{
                                            duration: 1.5,
                                            repeat: Infinity,
                                            delay: i * 0.2,
                                            ease: "easeOut",
                                        }}
                                    />
                                ))}
                            </motion.div>
                        </motion.div>

                        {/* Loading Text */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            className="mt-4 sm:mt-6 text-center"
                        >
                            <h2 className="text-lg sm:text-xl md:text-2xl font-heading tracking-widest text-foreground">
                                VEER TRADING
                            </h2>
                            <p className="text-xs sm:text-sm text-muted mt-1 sm:mt-2 tracking-wider">
                                Premium Processed Charcoal
                            </p>
                        </motion.div>

                        {/* Loading Bar */}
                        <motion.div
                            className="mt-6 sm:mt-8 w-32 sm:w-48 h-1 bg-card-border rounded-full overflow-hidden"
                        >
                            <motion.div
                                initial={{ width: "0%" }}
                                animate={{ width: "100%" }}
                                transition={{ duration: 2.5, ease: "easeInOut" }}
                                className="h-full bg-gradient-to-r from-accent to-accent-hover"
                            />
                        </motion.div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
