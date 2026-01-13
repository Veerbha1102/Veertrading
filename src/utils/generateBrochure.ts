"use client";

import { jsPDF } from "jspdf";
import { Product } from "@/data/siteData";

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

export async function generateProductBrochure(product: Product): Promise<void> {
    const doc = new jsPDF();
    const pageWidth = doc.internal.pageSize.getWidth();
    const margin = 20;
    let yPos = margin;

    // Colors
    const accentColor: [number, number, number] = [255, 69, 0]; // #FF4500
    const darkColor: [number, number, number] = [16, 16, 16]; // #101010
    const grayColor: [number, number, number] = [136, 136, 136]; // #888888

    // Load logo
    const logoBase64 = await loadLogoAsBase64();

    // Header background
    doc.setFillColor(...darkColor);
    doc.rect(0, 0, pageWidth, 55, "F");

    // Add logo if available
    if (logoBase64) {
        try {
            doc.addImage(logoBase64, "PNG", 15, 8, 25, 25);
        } catch (e) {
            console.log("Logo could not be added to PDF");
        }
    }

    // Company name
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(24);
    doc.setFont("helvetica", "bold");
    doc.text("VEER TRADING", pageWidth / 2 + 10, 22, { align: "center" });

    // Tagline
    doc.setFontSize(10);
    doc.setFont("helvetica", "normal");
    doc.setTextColor(...accentColor);
    doc.text("Premium Processed Charcoal Since 2012", pageWidth / 2 + 10, 32, { align: "center" });

    // Contact info in header
    doc.setFontSize(8);
    doc.setTextColor(200, 200, 200);
    doc.text("Office: +91 98750 48646 | Proprietor: +91 80002 36434", pageWidth / 2 + 10, 42, { align: "center" });

    yPos = 70;

    // Product name
    doc.setTextColor(...darkColor);
    doc.setFontSize(20);
    doc.setFont("helvetica", "bold");
    doc.text(product.name, pageWidth / 2, yPos, { align: "center" });
    yPos += 10;

    // Category badge
    doc.setFillColor(...accentColor);
    const categoryWidth = doc.getTextWidth(product.category) + 10;
    doc.roundedRect((pageWidth - categoryWidth) / 2, yPos - 5, categoryWidth, 10, 2, 2, "F");
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(10);
    doc.text(product.category, pageWidth / 2, yPos + 2, { align: "center" });
    yPos += 20;

    // Description
    doc.setTextColor(...grayColor);
    doc.setFontSize(11);
    doc.setFont("helvetica", "normal");
    const splitDescription = doc.splitTextToSize(product.description, pageWidth - margin * 2);
    doc.text(splitDescription, margin, yPos);
    yPos += splitDescription.length * 6 + 15;

    // Specifications section
    doc.setTextColor(...darkColor);
    doc.setFontSize(14);
    doc.setFont("helvetica", "bold");
    doc.text("SPECIFICATIONS", margin, yPos);
    yPos += 10;

    // Specs table
    doc.setFontSize(10);
    product.specs.forEach((spec) => {
        doc.setFont("helvetica", "bold");
        doc.setTextColor(...darkColor);
        doc.text(spec.label + ":", margin, yPos);
        doc.setFont("helvetica", "normal");
        doc.setTextColor(...grayColor);
        doc.text(spec.value, margin + 60, yPos);
        yPos += 8;
    });
    yPos += 5;

    // Order Information
    doc.setFillColor(245, 245, 245);
    doc.rect(margin, yPos, pageWidth - margin * 2, 25, "F");
    yPos += 8;

    doc.setTextColor(...darkColor);
    doc.setFontSize(10);
    doc.setFont("helvetica", "bold");
    doc.text("Minimum Order Quantity: ", margin + 5, yPos);
    doc.setFont("helvetica", "normal");
    doc.setTextColor(...accentColor);
    doc.text(product.minOrderQty, margin + 55, yPos);

    yPos += 10;
    doc.setTextColor(...darkColor);
    doc.setFont("helvetica", "bold");
    doc.text("Production Capacity: ", margin + 5, yPos);
    doc.setFont("helvetica", "normal");
    doc.setTextColor(...accentColor);
    doc.text(product.productionCapacity, margin + 50, yPos);
    yPos += 20;

    // Features section
    doc.setTextColor(...darkColor);
    doc.setFontSize(14);
    doc.setFont("helvetica", "bold");
    doc.text("KEY FEATURES", margin, yPos);
    yPos += 10;

    doc.setFontSize(10);
    doc.setFont("helvetica", "normal");
    product.features.forEach((feature) => {
        doc.setFillColor(...accentColor);
        doc.circle(margin + 3, yPos - 2, 2, "F");
        doc.setTextColor(...darkColor);
        doc.text(feature, margin + 10, yPos);
        yPos += 8;
    });

    // Footer
    const footerY = doc.internal.pageSize.getHeight() - 25;
    doc.setFillColor(...darkColor);
    doc.rect(0, footerY - 5, pageWidth, 35, "F");

    doc.setTextColor(255, 255, 255);
    doc.setFontSize(10);
    doc.setFont("helvetica", "bold");
    doc.text("VEER TRADING - Quality You Can Trust", pageWidth / 2, footerY, { align: "center" });

    doc.setFont("helvetica", "normal");
    doc.setFontSize(9);
    doc.setTextColor(...accentColor);
    doc.text("Main Bazar, 4/148, Nirona, Nakhatrana, Kutch-370615, Gujarat", pageWidth / 2, footerY + 8, { align: "center" });
    doc.setTextColor(200, 200, 200);
    doc.text(`GST: 24ANBPB2748J1ZA | © 2012-${new Date().getFullYear()}`, pageWidth / 2, footerY + 16, { align: "center" });

    // Generate PDF as blob and open in new tab
    const pdfBlob = doc.output("blob");
    const pdfUrl = URL.createObjectURL(pdfBlob);

    // Open PDF in new tab
    window.open(pdfUrl, "_blank");

    // Also trigger download
    const fileName = `${product.name.replace(/\s+/g, "-").toLowerCase()}-brochure.pdf`;
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = fileName;
    link.click();
}
