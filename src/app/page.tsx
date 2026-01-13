"use client";

import { motion } from "framer-motion";
import Preloader from "@/components/Preloader";
import Navbar from "@/components/Navbar";
import HeroBackground from "@/components/HeroBackground";
import TrustStrip from "@/components/TrustStrip";
import ProductGrid from "@/components/ProductGrid";
import VideoPlayer from "@/components/VideoPlayer";
import Footer from "@/components/Footer";
import { ArrowRight, Award, Users, Truck, Shield, Factory, Warehouse, Download } from "lucide-react";
import Image from "next/image";
import { generateCompanyBrochure } from "@/utils/generateCompanyBrochure";
import {
  fadeInUp,
  fadeInLeft,
  fadeInRight,
  staggerContainer,
  staggerItem,
  scaleIn,
  bounceIn,
} from "@/hooks/useScrollAnimation";

export default function Home() {
  const handleDownloadBrochure = async () => {
    await generateCompanyBrochure();
  };

  return (
    <>
      <Preloader />
      <Navbar />

      <main>
        {/* Hero Section */}
        <section id="home">
          <HeroBackground>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="inline-block text-accent text-sm md:text-base font-medium tracking-widest uppercase mb-4"
            >
              Since 2012 • Gujarat, India
            </motion.span>

            <motion.h1
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold mb-6 leading-tight"
            >
              Fueling <span className="gradient-text">Industries</span>
              <br />
              With Premium Charcoal
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto mb-8"
            >
              Trusted wholesale supplier of high-quality wood charcoal, briquettes, and agarbatti raw materials.
              Serving businesses across India with 500+ tons stock ready.
            </motion.p>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="flex flex-col sm:flex-row gap-4 justify-center flex-wrap"
            >
              <motion.a
                variants={staggerItem}
                href="https://wa.me/919875048646?text=Hi,%20I'm%20interested%20in%20your%20charcoal%20products"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-base"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Quote Now
                <ArrowRight className="w-5 h-5" />
              </motion.a>
              <motion.a
                variants={staggerItem}
                href="#products"
                className="px-8 py-3 border border-foreground/30 rounded text-foreground hover:bg-foreground/10 transition-colors font-medium"
                whileHover={{ scale: 1.02 }}
              >
                Explore Products
              </motion.a>
              <motion.button
                variants={staggerItem}
                onClick={handleDownloadBrochure}
                className="px-8 py-3 border border-accent rounded text-accent hover:bg-accent/10 transition-colors font-medium flex items-center gap-2 justify-center"
                whileHover={{ scale: 1.02 }}
              >
                <Download className="w-4 h-4" />
                Download Brochure
              </motion.button>
            </motion.div>
          </HeroBackground>
        </section>

        {/* Trust Strip */}
        <TrustStrip />

        {/* About Section */}
        <section id="about" className="section-padding bg-background">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Content */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.6 }}
              >
                <span className="text-accent text-sm font-medium tracking-widest uppercase">
                  About Us
                </span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading mt-3 mb-6">
                  Your Trusted Charcoal Partner
                </h2>
                <p className="text-muted leading-relaxed mb-6">
                  Incepted in 2012, <strong className="text-foreground">Veer Trading</strong> is a
                  foremost organization in the market, highly involved in wholesale trading of an
                  extensive collection of Wood Charcoal, Wooden Charcoal Root, Charcoal Briquettes,
                  and Agarbatti Raw Materials.
                </p>
                <p className="text-muted leading-relaxed mb-8">
                  We serve the desires of clients passionately and never let them down with any of
                  their expectations. The flawlessness we maintain can be seen easily in our products,
                  which are simply matchless.
                </p>

                {/* Features Grid */}
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: Award, text: "Quality Assured" },
                    { icon: Users, text: "10+ Employees" },
                    { icon: Truck, text: "Pan-India Delivery" },
                    { icon: Shield, text: "GST Registered" },
                  ].map((item) => (
                    <div key={item.text} className="flex items-center gap-3 p-3 bg-card-bg rounded-lg">
                      <item.icon className="w-5 h-5 text-accent" />
                      <span className="text-sm font-medium">{item.text}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Image/Logo */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <div className="relative aspect-square max-w-md mx-auto">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent rounded-2xl" />
                  <Image
                    src="/images/logo.png"
                    alt="Veer Trading Logo"
                    fill
                    className="object-contain p-8"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Products Section */}
        <ProductGrid />

        {/* Infrastructure Section */}
        <section id="infrastructure" className="section-padding bg-card-bg">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              className="text-center mb-12"
            >
              <span className="text-accent text-sm font-medium tracking-widest uppercase">
                Our Facilities
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading mt-3 mb-4">
                State-of-the-Art Infrastructure
              </h2>
              <p className="text-muted max-w-2xl mx-auto">
                Our warehouse facilities ensure consistent quality and timely delivery of all orders.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: Warehouse,
                  title: "Large Warehouse",
                  description: "500+ tons storage capacity with organized inventory management",
                },
                {
                  icon: Factory,
                  title: "Processing Unit",
                  description: "Modern equipment for quality processing and packaging",
                },
                {
                  icon: Truck,
                  title: "Logistics Support",
                  description: "Efficient road transport network for pan-India delivery",
                },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.2 }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 bg-background border border-card-border rounded-lg text-center card-hover"
                >
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-accent/10 flex items-center justify-center">
                    <item.icon className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-heading mb-2">{item.title}</h3>
                  <p className="text-sm text-muted">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Meet the Owner Section */}
        <section className="section-padding bg-background">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Content */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.6 }}
                className="order-2 lg:order-1"
              >
                <span className="text-accent text-sm font-medium tracking-widest uppercase">
                  Leadership
                </span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading mt-3 mb-6">
                  A Message from the Proprietor
                </h2>
                <p className="text-muted leading-relaxed mb-6">
                  Working under the able guidelines of our mentor{" "}
                  <strong className="text-foreground">Mr. Naresh Tarachand Bhanushali</strong>,
                  we have been able to place a distinct niche in the industry.
                </p>
                <p className="text-muted leading-relaxed mb-8">
                  His sound domain insight, leadership qualities, administrative skills, and rich
                  business experience have enabled our firm to grow and mark a reputed niche in
                  the charcoal industry.
                </p>

                <div className="p-6 bg-card-bg border-l-4 border-accent rounded-r-lg">
                  <p className="text-foreground italic mb-4">
                    "Our commitment to quality and customer satisfaction has been our guiding
                    principle since day one. We believe in building long-term relationships
                    based on trust and reliability."
                  </p>
                  <p className="font-heading text-accent">
                    — Mr. Naresh Tarachand Bhanushali, CEO
                  </p>
                </div>
              </motion.div>

              {/* Video Player */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.6 }}
                className="order-1 lg:order-2"
              >
                <VideoPlayer src="/videos/owner-intro.mp4" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="bg-card-bg py-12">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              className="text-center mb-8"
            >
              <h2 className="text-2xl md:text-3xl font-heading">Find Us</h2>
              <p className="text-muted mt-2">Visit our facility in Nakhatrana, Kutch, Gujarat</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: false, amount: 0.2 }}
              className="rounded-lg overflow-hidden border border-card-border"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3668.123456789!2d69.5!3d23.3!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sNirona%2C%20Nakhatrana%2C%20Kutch%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Veer Trading Location"
              />
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-gradient-to-r from-accent/20 via-background to-accent/20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-heading mb-4">
              Ready to Place Your Order?
            </h2>
            <p className="text-muted mb-8">
              Get the best prices on premium charcoal products. Contact us today for bulk inquiries.
            </p>
            <a
              href="https://wa.me/919875048646?text=Hi,%20I'm%20interested%20in%20your%20charcoal%20products.%20Please%20share%20your%20catalog%20and%20pricing."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-lg px-10 py-4"
            >
              Contact Us on WhatsApp
              <ArrowRight className="w-5 h-5" />
            </a>
          </motion.div>
        </section>
      </main>

      <Footer />
    </>
  );
}
