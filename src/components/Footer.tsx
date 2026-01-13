"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, MessageCircle, ExternalLink } from "lucide-react";
import Image from "next/image";

const contactInfo = [
    {
        icon: Phone,
        label: "Office Phone",
        value: "+91 98750 48646",
        href: "tel:+919875048646",
    },
    {
        icon: Phone,
        label: "Proprietor",
        value: "+91 80002 36434",
        href: "tel:+918000236434",
    },
    {
        icon: Mail,
        label: "Email",
        value: "info@veertrading.in",
        href: "mailto:info@veertrading.in",
    },
    {
        icon: MapPin,
        label: "Address",
        value: "Main Bazar, 4/148, Nirona, Nakhatrana, Kutch-370615, Gujarat",
        href: "https://maps.google.com/?q=Nirona,Nakhatrana,Kutch,Gujarat",
    },
    {
        icon: Clock,
        label: "Business Hours",
        value: "Mon - Sat: 9:00 AM - 6:00 PM",
        href: null,
    },
];

const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About Us", href: "#about" },
    { name: "Products", href: "#products" },
    { name: "Infrastructure", href: "#infrastructure" },
    { name: "Contact", href: "#contact" },
];

export default function Footer() {
    return (
        <footer id="contact" className="bg-card-bg border-t border-card-border">
            {/* Main Footer */}
            <div className="max-w-7xl mx-auto px-4 py-12 sm:py-16">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
                    {/* Company Info */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.2 }}
                        className="sm:col-span-2 lg:col-span-1"
                    >
                        <div className="flex items-center gap-3 mb-4">
                            <Image
                                src="/images/logo.png"
                                alt="Veer Trading"
                                width={50}
                                height={50}
                                className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
                            />
                            <div>
                                <h3 className="text-base sm:text-lg font-heading">VEER TRADING</h3>
                                <p className="text-xs text-muted">Premium Processed Charcoal</p>
                            </div>
                        </div>
                        <p className="text-xs sm:text-sm text-muted leading-relaxed mb-4">
                            Leading wholesale trader of premium charcoal products since 2012.
                            Serving industries across India with quality and trust.
                        </p>
                        <p className="text-xs text-muted">
                            GST: 24ANBPB2748J1ZA
                        </p>
                    </motion.div>

                    {/* Quick Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.2 }}
                        transition={{ delay: 0.1 }}
                    >
                        <h4 className="text-base sm:text-lg font-heading mb-4">Quick Links</h4>
                        <ul className="space-y-2 sm:space-y-3">
                            {quickLinks.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        className="text-xs sm:text-sm text-muted hover:text-accent transition-colors"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.2 }}
                        transition={{ delay: 0.2 }}
                    >
                        <h4 className="text-base sm:text-lg font-heading mb-4">Contact Us</h4>
                        <ul className="space-y-3 sm:space-y-4">
                            {contactInfo.map((item) => (
                                <li key={item.label}>
                                    {item.href ? (
                                        <a
                                            href={item.href}
                                            target={item.href.startsWith("http") ? "_blank" : undefined}
                                            rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                                            className="flex items-start gap-2 sm:gap-3 text-xs sm:text-sm text-muted hover:text-accent transition-colors group"
                                        >
                                            <item.icon className="w-3 h-3 sm:w-4 sm:h-4 mt-0.5 shrink-0 text-accent" />
                                            <div>
                                                <span className="text-[10px] sm:text-xs text-accent block">{item.label}</span>
                                                <span>{item.value}</span>
                                            </div>
                                        </a>
                                    ) : (
                                        <div className="flex items-start gap-2 sm:gap-3 text-xs sm:text-sm text-muted">
                                            <item.icon className="w-3 h-3 sm:w-4 sm:h-4 mt-0.5 shrink-0 text-accent" />
                                            <div>
                                                <span className="text-[10px] sm:text-xs text-accent block">{item.label}</span>
                                                <span>{item.value}</span>
                                            </div>
                                        </div>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* CTA */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.2 }}
                        transition={{ delay: 0.3 }}
                    >
                        <h4 className="text-base sm:text-lg font-heading mb-4">Get In Touch</h4>
                        <p className="text-xs sm:text-sm text-muted mb-4">
                            Ready to discuss your charcoal requirements? Contact us for the best prices and bulk orders.
                        </p>
                        <a
                            href="https://wa.me/919875048646?text=Hi,%20I'm%20interested%20in%20your%20charcoal%20products"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-primary w-full justify-center mb-3 text-xs sm:text-sm py-2.5 sm:py-3"
                        >
                            <MessageCircle className="w-4 h-4" />
                            WhatsApp Us
                        </a>
                        <a
                            href="https://www.indiamart.com/veer-trading-nakhatrana/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2 px-4 py-2.5 sm:py-3 border border-card-border text-xs sm:text-sm font-medium rounded hover:border-accent hover:text-accent transition-colors"
                        >
                            <ExternalLink className="w-4 h-4" />
                            View on IndiaMART
                        </a>
                    </motion.div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-card-border">
                <div className="max-w-7xl mx-auto px-4 py-4 sm:py-6">
                    <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4 text-xs sm:text-sm text-muted text-center sm:text-left">
                        <p>
                            © 2012 - {new Date().getFullYear()} Veer Trading. All rights reserved.
                        </p>
                        <p>
                            Proprietor: <span className="text-foreground">Mr. Naresh Tarachand Bhanushali</span>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
