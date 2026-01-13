"use client";

import { jsPDF } from "jspdf";
import { products } from "@/data/siteData";

// Preload logo as base64 for PDF embedding
async function loadLogoAsBase64(): Promise<string | null> {
    try {
        const response = await fetch("/images/logo.png");
        const blob = await response.blob();
        return new Promise((resolve) => {
            const reader = new FileReader();
            reader.onloadend = () => resolve(reader.result as string);
            reader.onerror = () => resolve(null);
            reader.readAsDataURL(blob);
        });
    } catch {
        return null;
    }
}

export async function generateCompanyBrochure(): Promise<void> {
    const doc = new jsPDF();
    const pageWidth = doc.internal.pageSize.getWidth();
    const pageHeight = doc.internal.pageSize.getHeight();
    const margin = 15;

    // Colors
    const accentColor: [number, number, number] = [255, 69, 0];
    const darkColor: [number, number, number] = [16, 16, 16];
    const grayColor: [number, number, number] = [100, 100, 100];

    // Load logo
    const logoBase64 = await loadLogoAsBase64();

    // ========== PAGE 1: Cover Page ==========
    doc.setFillColor(...darkColor);
    doc.rect(0, 0, pageWidth, pageHeight, "F");

    // Logo
    if (logoBase64) {
        try {
            doc.addImage(logoBase64, "PNG", pageWidth / 2 - 30, 40, 60, 60);
        } catch (e) {
            console.log("Logo could not be added");
        }
    }

    // Company Name
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(36);
    doc.setFont("helvetica", "bold");
    doc.text("VEER TRADING", pageWidth / 2, 120, { align: "center" });

    // Tagline
    doc.setFontSize(14);
    doc.setTextColor(...accentColor);
    doc.text("Premium Processed Charcoal Since 2012", pageWidth / 2, 135, { align: "center" });

    // Accent line
    doc.setDrawColor(...accentColor);
    doc.setLineWidth(2);
    doc.line(pageWidth / 2 - 50, 145, pageWidth / 2 + 50, 145);

    // Description
    doc.setTextColor(200, 200, 200);
    doc.setFontSize(11);
    doc.setFont("helvetica", "normal");
    const intro = "Leading wholesale trader of premium processed charcoal, wood charcoal powder, charcoal briquettes, and agarbatti raw materials. Serving industries across India with quality and trust.";
    const splitIntro = doc.splitTextToSize(intro, pageWidth - 60);
    doc.text(splitIntro, pageWidth / 2, 160, { align: "center" });

    // Contact info box
    const boxY = 195;
    doc.setFillColor(30, 30, 30);
    doc.roundedRect(30, boxY, pageWidth - 60, 50, 5, 5, "F");

    doc.setTextColor(255, 255, 255);
    doc.setFontSize(12);
    doc.setFont("helvetica", "bold");
    doc.text("Contact Us", pageWidth / 2, boxY + 15, { align: "center" });

    doc.setFontSize(10);
    doc.setFont("helvetica", "normal");
    doc.setTextColor(...accentColor);
    doc.text("Office: +91 98750 48646 | Proprietor: +91 80002 36434", pageWidth / 2, boxY + 28, { align: "center" });
    doc.setTextColor(180, 180, 180);
    doc.text("Main Bazar, 4/148, Nirona, Nakhatrana, Kutch-370615, Gujarat", pageWidth / 2, boxY + 40, { align: "center" });

    // Footer
    doc.setTextColor(100, 100, 100);
    doc.setFontSize(8);
    doc.text(`GST: 24ANBPB2748J1ZA | © 2012-${new Date().getFullYear()} Veer Trading`, pageWidth / 2, pageHeight - 15, { align: "center" });

    // ========== PAGE 2: About & Stats ==========
    doc.addPage();
    let yPos = margin;

    // Header
    doc.setFillColor(...darkColor);
    doc.rect(0, 0, pageWidth, 40, "F");
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(20);
    doc.setFont("helvetica", "bold");
    doc.text("ABOUT VEER TRADING", pageWidth / 2, 25, { align: "center" });

    yPos = 55;

    // About text
    doc.setTextColor(...darkColor);
    doc.setFontSize(11);
    doc.setFont("helvetica", "normal");
    const aboutText = "Founded in 2012 by Mr. Naresh Tarachand Bhanushali, Veer Trading has grown from a small trading operation to become one of Gujarat's most trusted wholesale charcoal suppliers. We specialize in premium processed charcoal products that meet the highest quality standards for various industrial and commercial applications.";
    const splitAbout = doc.splitTextToSize(aboutText, pageWidth - margin * 2);
    doc.text(splitAbout, margin, yPos);
    yPos += splitAbout.length * 5 + 15;

    // Stats section
    doc.setFillColor(245, 245, 245);
    doc.rect(margin, yPos, pageWidth - margin * 2, 40, "F");

    const stats = [
        { value: "12+", label: "Years" },
        { value: "500+", label: "Tons Stock" },
        { value: "100+", label: "Clients" },
        { value: "5", label: "Products" },
    ];

    const statWidth = (pageWidth - margin * 2) / 4;
    stats.forEach((stat, i) => {
        const x = margin + statWidth * i + statWidth / 2;
        doc.setTextColor(...accentColor);
        doc.setFontSize(20);
        doc.setFont("helvetica", "bold");
        doc.text(stat.value, x, yPos + 18, { align: "center" });
        doc.setTextColor(...grayColor);
        doc.setFontSize(9);
        doc.setFont("helvetica", "normal");
        doc.text(stat.label, x, yPos + 30, { align: "center" });
    });
    yPos += 55;

    // Why Choose Us
    doc.setTextColor(...darkColor);
    doc.setFontSize(14);
    doc.setFont("helvetica", "bold");
    doc.text("WHY CHOOSE US", margin, yPos);
    yPos += 12;

    const whyUs = [
        "Premium quality processed charcoal with consistent specifications",
        "500+ tons ready stock for immediate dispatch",
        "Competitive wholesale pricing for bulk orders",
        "12+ years of industry experience and expertise",
        "Reliable supply chain with prompt delivery",
        "Custom packaging options available",
    ];

    doc.setFontSize(10);
    doc.setFont("helvetica", "normal");
    whyUs.forEach((item) => {
        doc.setFillColor(...accentColor);
        doc.circle(margin + 3, yPos - 2, 2, "F");
        doc.setTextColor(...darkColor);
        doc.text(item, margin + 10, yPos);
        yPos += 10;
    });

    // ========== PAGE 3: Products ==========
    doc.addPage();

    // Header
    doc.setFillColor(...darkColor);
    doc.rect(0, 0, pageWidth, 40, "F");
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(20);
    doc.setFont("helvetica", "bold");
    doc.text("OUR PRODUCTS", pageWidth / 2, 25, { align: "center" });

    yPos = 55;

    // Products list
    products.forEach((product, index) => {
        // Check if we need a new page
        if (yPos > pageHeight - 60) {
            doc.addPage();
            yPos = margin;
        }

        // Product name
        doc.setTextColor(...accentColor);
        doc.setFontSize(12);
        doc.setFont("helvetica", "bold");
        doc.text(`${index + 1}. ${product.name}`, margin, yPos);
        yPos += 8;

        // Category
        doc.setTextColor(...grayColor);
        doc.setFontSize(9);
        doc.setFont("helvetica", "italic");
        doc.text(`Category: ${product.category}`, margin + 5, yPos);
        yPos += 6;

        // Description (shortened)
        doc.setTextColor(...darkColor);
        doc.setFontSize(9);
        doc.setFont("helvetica", "normal");
        const shortDesc = product.description.substring(0, 150) + "...";
        const splitDesc = doc.splitTextToSize(shortDesc, pageWidth - margin * 2 - 5);
        doc.text(splitDesc, margin + 5, yPos);
        yPos += splitDesc.length * 4 + 4;

        // Key specs
        doc.setFontSize(8);
        doc.setTextColor(...grayColor);
        const keySpecs = product.specs.slice(0, 3).map(s => `${s.label}: ${s.value}`).join(" | ");
        doc.text(keySpecs, margin + 5, yPos);
        yPos += 8;

        // MOQ
        doc.setTextColor(...accentColor);
        doc.text(`Min Order: ${product.minOrderQty}`, margin + 5, yPos);
        yPos += 15;

        // Separator line
        doc.setDrawColor(220, 220, 220);
        doc.setLineWidth(0.3);
        doc.line(margin, yPos - 5, pageWidth - margin, yPos - 5);
    });

    // ========== FINAL PAGE: Contact ==========
    doc.addPage();

    doc.setFillColor(...darkColor);
    doc.rect(0, 0, pageWidth, pageHeight, "F");

    // Logo
    if (logoBase64) {
        try {
            doc.addImage(logoBase64, "PNG", pageWidth / 2 - 20, 30, 40, 40);
        } catch (e) {
            console.log("Logo could not be added");
        }
    }

    yPos = 85;

    doc.setTextColor(255, 255, 255);
    doc.setFontSize(24);
    doc.setFont("helvetica", "bold");
    doc.text("GET IN TOUCH", pageWidth / 2, yPos, { align: "center" });
    yPos += 25;

    // Contact details
    const contacts = [
        { label: "Office Phone", value: "+91 98750 48646" },
        { label: "Proprietor", value: "+91 80002 36434" },
        { label: "Email", value: "info@veertrading.in" },
        { label: "Address", value: "Main Bazar, 4/148, Nirona,\nNakhatrana, Kutch-370615, Gujarat" },
    ];

    contacts.forEach((contact) => {
        doc.setTextColor(...accentColor);
        doc.setFontSize(10);
        doc.setFont("helvetica", "bold");
        doc.text(contact.label, pageWidth / 2, yPos, { align: "center" });
        yPos += 6;

        doc.setTextColor(200, 200, 200);
        doc.setFontSize(12);
        doc.setFont("helvetica", "normal");
        const lines = contact.value.split("\n");
        lines.forEach(line => {
            doc.text(line, pageWidth / 2, yPos, { align: "center" });
            yPos += 6;
        });
        yPos += 10;
    });

    // CTA
    yPos += 10;
    doc.setFillColor(...accentColor);
    doc.roundedRect(pageWidth / 2 - 50, yPos, 100, 15, 3, 3, "F");
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(11);
    doc.setFont("helvetica", "bold");
    doc.text("Contact Us Today!", pageWidth / 2, yPos + 10, { align: "center" });

    // Footer
    doc.setTextColor(100, 100, 100);
    doc.setFontSize(8);
    doc.text(`GST: 24ANBPB2748J1ZA | © 2012-${new Date().getFullYear()} Veer Trading. All rights reserved.`, pageWidth / 2, pageHeight - 15, { align: "center" });

    // Generate PDF as blob and open in new tab
    const pdfBlob = doc.output("blob");
    const pdfUrl = URL.createObjectURL(pdfBlob);

    // Open PDF in new tab
    window.open(pdfUrl, "_blank");

    // Also trigger download
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "veer-trading-company-brochure.pdf";
    link.click();
}
