"use client";

import { motion, AnimatePresence } from "framer-motion";

interface PageLoaderProps {
    isLoading: boolean;
}

export default function PageLoader({ isLoading }: PageLoaderProps) {
    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="fixed inset-0 z-[100] bg-background flex items-center justify-center"
                >
                    <div className="relative">
                        {/* Spinning ring */}
                        <motion.div
                            className="w-16 h-16 rounded-full border-4 border-card-border border-t-accent"
                            animate={{ rotate: 360 }}
                            transition={{
                                duration: 1,
                                repeat: Infinity,
                                ease: "linear"
                            }}
                        />

                        {/* Center dot */}
                        <motion.div
                            className="absolute top-1/2 left-1/2 w-3 h-3 -ml-1.5 -mt-1.5 bg-accent rounded-full"
                            animate={{
                                scale: [1, 1.3, 1],
                                opacity: [1, 0.6, 1]
                            }}
                            transition={{
                                duration: 0.8,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        />
                    </div>

                    {/* Loading text */}
                    <motion.p
                        className="absolute bottom-1/3 text-sm text-muted tracking-wider"
                        animate={{ opacity: [0.5, 1, 0.5] }}
                        transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    >
                        Loading...
                    </motion.p>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

// Alternative: Skeleton loader for content
export function SkeletonLoader({ className = "" }: { className?: string }) {
    return (
        <motion.div
            className={`bg-card-border rounded ${className}`}
            animate={{
                opacity: [0.3, 0.6, 0.3]
            }}
            transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
            }}
        />
    );
}

// Product card skeleton
export function ProductCardSkeleton() {
    return (
        <div className="bg-card-bg border border-card-border rounded-lg p-4 space-y-4">
            <SkeletonLoader className="w-full h-48" />
            <SkeletonLoader className="w-3/4 h-6" />
            <SkeletonLoader className="w-1/2 h-4" />
            <SkeletonLoader className="w-full h-4" />
            <SkeletonLoader className="w-full h-4" />
            <div className="flex gap-2 mt-4">
                <SkeletonLoader className="flex-1 h-10" />
                <SkeletonLoader className="flex-1 h-10" />
            </div>
        </div>
    );
}
