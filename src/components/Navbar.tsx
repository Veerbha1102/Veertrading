"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Mail } from "lucide-react";
import Image from "next/image";

const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Products", href: "#products" },
    { name: "Infrastructure", href: "#infrastructure" },
    { name: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-background/95 backdrop-blur-md shadow-lg" : "bg-transparent"
                }`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex justify-between items-center h-20">
                    {/* Logo */}
                    <a href="#home" className="flex items-center gap-3 group">
                        <div className="relative">
                            {/* Glow effect behind logo */}
                            <div className="absolute inset-0 bg-accent/40 rounded-full blur-lg animate-pulse" />
                            <Image
                                src="/images/logo.png"
                                alt="Veer Trading"
                                width={50}
                                height={50}
                                className="w-12 h-12 object-contain relative z-10 drop-shadow-[0_0_10px_rgba(255,69,0,0.7)] group-hover:drop-shadow-[0_0_15px_rgba(255,69,0,0.9)] transition-all duration-300"
                            />
                        </div>
                        <div className="hidden sm:block">
                            <h1 className="text-xl font-heading tracking-wider">VEER TRADING</h1>
                            <p className="text-xs text-muted tracking-widest">PREMIUM CHARCOAL</p>
                        </div>
                    </a>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-sm font-medium tracking-wider hover:text-accent transition-colors relative group"
                            >
                                {link.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all group-hover:w-full" />
                            </a>
                        ))}
                    </div>

                    {/* Contact & CTA */}
                    <div className="hidden lg:flex items-center gap-6">
                        <a
                            href="tel:+919875048646"
                            className="flex items-center gap-2 text-sm text-muted hover:text-accent transition-colors"
                        >
                            <Phone className="w-4 h-4" />
                            <span>+91 98750 48646</span>
                        </a>
                        <a
                            href="https://wa.me/919875048646?text=Hi,%20I'm%20interested%20in%20your%20charcoal%20products"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-primary text-sm"
                        >
                            Get Quote
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="lg:hidden p-2"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? (
                            <X className="w-6 h-6" />
                        ) : (
                            <Menu className="w-6 h-6" />
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="lg:hidden bg-background border-t border-card-border"
                    >
                        <div className="px-4 py-6 space-y-4">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="block py-2 text-lg font-medium hover:text-accent transition-colors"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {link.name}
                                </a>
                            ))}
                            <div className="pt-4 border-t border-card-border space-y-3">
                                <a
                                    href="tel:+919875048646"
                                    className="flex items-center gap-2 text-muted"
                                >
                                    <Phone className="w-4 h-4" />
                                    <span>+91 98750 48646</span>
                                </a>
                                <a
                                    href="mailto:info@veertrading.in"
                                    className="flex items-center gap-2 text-muted"
                                >
                                    <Mail className="w-4 h-4" />
                                    <span>info@veertrading.in</span>
                                </a>
                            </div>
                            <a
                                href="https://wa.me/919875048646?text=Hi,%20I'm%20interested%20in%20your%20charcoal%20products"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-primary w-full justify-center mt-4"
                            >
                                Get Quote on WhatsApp
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}
