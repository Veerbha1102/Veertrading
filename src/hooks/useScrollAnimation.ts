"use client";

import { useEffect, useRef, useState, RefObject } from "react";
import { Variants } from "framer-motion";

interface UseScrollAnimationOptions {
    threshold?: number;
    rootMargin?: string;
    once?: boolean;
}

export function useScrollAnimation<T extends HTMLElement>(
    options: UseScrollAnimationOptions = {}
): [RefObject<T | null>, boolean] {
    const { threshold = 0.1, rootMargin = "0px", once = false } = options;
    const ref = useRef<T>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    if (once) {
                        observer.unobserve(element);
                    }
                } else if (!once) {
                    setIsVisible(false);
                }
            },
            { threshold, rootMargin }
        );

        observer.observe(element);

        return () => {
            observer.unobserve(element);
        };
    }, [threshold, rootMargin, once]);

    return [ref, isVisible];
}

// Animation variants for framer-motion
export const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" }
    }
};

export const fadeInDown: Variants = {
    hidden: { opacity: 0, y: -40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" }
    }
};

export const fadeInLeft: Variants = {
    hidden: { opacity: 0, x: -60 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.6, ease: "easeOut" }
    }
};

export const fadeInRight: Variants = {
    hidden: { opacity: 0, x: 60 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.6, ease: "easeOut" }
    }
};

export const scaleIn: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.5, ease: "easeOut" }
    }
};

export const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.1
        }
    }
};

export const staggerItem: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: "easeOut" }
    }
};

export const rotateIn: Variants = {
    hidden: { opacity: 0, rotate: -10, scale: 0.9 },
    visible: {
        opacity: 1,
        rotate: 0,
        scale: 1,
        transition: { duration: 0.6, ease: "easeOut" }
    }
};

export const slideInFromBottom: Variants = {
    hidden: { opacity: 0, y: 100 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }
    }
};

export const bounceIn: Variants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.6,
            type: "spring",
            stiffness: 300,
            damping: 15
        }
    }
};

// For cards with hover effects
export const cardHover: Variants = {
    rest: { scale: 1, y: 0 },
    hover: {
        scale: 1.03,
        y: -8,
        transition: { duration: 0.3, ease: "easeOut" }
    }
};

// For buttons with pulse effect
export const buttonPulse: Variants = {
    rest: { scale: 1 },
    hover: {
        scale: 1.05,
        transition: {
            duration: 0.3,
            repeat: Infinity,
            repeatType: "reverse"
        }
    }
};

// Default viewport settings for bidirectional animations
export const scrollViewport = {
    once: false,
    amount: 0.2,
    margin: "-50px"
};
