/**
 * VEER TRADING - WEBSITE DATA
 * ===========================
 * 
 * This file contains all the business data for Veer Trading website.
 * Edit this file to update company information, products, and contact details.
 */

// ============================================
// COMPANY INFORMATION
// ============================================
export const companyInfo = {
    name: "Veer Trading",
    tagline: "Premium Processed Charcoal",
    established: 2012,
    proprietor: "Mr. Naresh Tarachand Bhanushali",
    gst: "24ANBPB2748J1ZA",
    description: "Leading wholesale trader of premium processed charcoal, wood charcoal powder, charcoal briquettes, and agarbatti raw materials since 2012.",
    about: "Incepted in 2012, Veer Trading is a foremost organization in the market, highly involved in wholesale trading of an extensive collection of Wood Charcoal, Wooden Charcoal Root, Charcoal Briquettes, and Agarbatti Raw Materials. We serve the desires of clients passionately and never let them down with any of their expectations.",
};

// ============================================
// CONTACT INFORMATION
// ============================================
export const contactInfo = {
    phone: {
        office: "+91 98750 48646",
        officeRaw: "919875048646",
        proprietor: "+91 80002 36434",
        proprietorRaw: "918000236434",
    },
    email: "info@veertrading.in",
    address: {
        street: "Main Bazar, 4/148, Nirona",
        city: "Nakhatrana",
        district: "Kutch",
        state: "Gujarat",
        pincode: "370615",
        country: "India",
        full: "Main Bazar, 4/148, Nirona, Nakhatrana, Kutch-370615, Gujarat, India",
    },
    businessHours: "Mon - Sat: 9:00 AM - 6:00 PM",
    website: "https://veertrading.in",
    indiamart: "https://www.indiamart.com/veer-trading-nakhatrana/",
};

// ============================================
// SOCIAL/EXTERNAL LINKS
// ============================================
export const socialLinks = {
    whatsapp: `https://wa.me/${contactInfo.phone.officeRaw}?text=Hi,%20I'm%20interested%20in%20your%20charcoal%20products`,
    indiamart: contactInfo.indiamart,
    googleMaps: "https://maps.google.com/?q=Nirona,Nakhatrana,Kutch,Gujarat",
};

// ============================================
// TRUST INDICATORS / STATS
// ============================================
export const trustStats = [
    { value: "2012", label: "Established" },
    { value: "500+", label: "Tons Stock" },
    { value: "100+", label: "Happy Clients" },
    { value: "10+", label: "Team Members" },
];

// ============================================
// PRODUCTS DATA
// ============================================
export interface ProductSpec {
    label: string;
    value: string;
}

export interface Product {
    id: string;
    name: string;
    category: string;
    description: string;
    image: string;
    features: string[];
    specs: ProductSpec[];
    minOrderQty: string;
    productionCapacity: string;
}

export const products: Product[] = [
    {
        id: "hardwood-lump",
        name: "Hardwood Lump Charcoal",
        category: "Lump Charcoal",
        description: "Premium hardwood lump charcoal made from dense hardwood trees. Ideal for BBQ, restaurants, and industrial applications. Burns longer with consistent heat and minimal smoke. Our hardwood lump charcoal is processed to ensure uniform size and quality.",
        image: "/images/products/hardwood-lump.webp",
        features: ["High Heat Output", "Long Burning", "Low Ash", "Restaurant Grade"],
        specs: [
            { label: "Carbon Content", value: "80-85%" },
            { label: "Moisture", value: "< 5%" },
            { label: "Ash Content", value: "< 3%" },
            { label: "Burning Time", value: "3-4 hours" },
            { label: "Packaging", value: "25kg / 50kg bags" },
        ],
        minOrderQty: "1 Ton",
        productionCapacity: "50 Tons/Month",
    },
    {
        id: "45kg-lump-charcoal",
        name: "45Kg Wooden Lump Charcoal",
        category: "Lump Charcoal",
        description: "Premium quality 45kg packed wooden lump charcoal, perfect for bulk buyers. Consistent size and quality for industrial and commercial use. Long burning time with high heat output.",
        image: "/images/products/45-kg-wooden-lump-charcoal-500x500.webp",
        features: ["45Kg Pack", "Industrial Grade", "Consistent Size", "High Heat"],
        specs: [
            { label: "Carbon Content", value: "78-82%" },
            { label: "Moisture", value: "< 6%" },
            { label: "Ash Content", value: "< 4%" },
            { label: "Pack Size", value: "45 Kg" },
            { label: "Packaging", value: "Jumbo Bags" },
        ],
        minOrderQty: "500 Kg",
        productionCapacity: "40 Tons/Month",
    },
    {
        id: "mix-charcoal",
        name: "Mix Charcoal",
        category: "Mixed",
        description: "High-quality mixed charcoal blend combining different wood types for versatile applications. Economical option for industries requiring bulk charcoal with good burning properties. Suitable for various industrial purposes.",
        image: "/images/products/mix-charcoal-page-0002-500x500.webp",
        features: ["Cost Effective", "Versatile Use", "Good Heat", "Bulk Available"],
        specs: [
            { label: "Carbon Content", value: "70-78%" },
            { label: "Moisture", value: "< 8%" },
            { label: "Ash Content", value: "< 6%" },
            { label: "Composition", value: "Mixed Woods" },
            { label: "Packaging", value: "25kg / 50kg bags" },
        ],
        minOrderQty: "1 Ton",
        productionCapacity: "80 Tons/Month",
    },
    {
        id: "dandi-charcoal",
        name: "Dandi Charcoal",
        category: "Specialty",
        description: "Premium Dandi charcoal made from selected wood varieties. Known for its unique burning characteristics and consistent quality. Widely used in traditional industries and specialized applications.",
        image: "/images/products/dandi-charcoal-page-0001.webp",
        features: ["Traditional Quality", "Unique Properties", "Low Smoke", "Premium Grade"],
        specs: [
            { label: "Carbon Content", value: "75-80%" },
            { label: "Moisture", value: "< 5%" },
            { label: "Ash Content", value: "< 4%" },
            { label: "Origin", value: "Selected Woods" },
            { label: "Packaging", value: "25kg / 50kg bags" },
        ],
        minOrderQty: "500 Kg",
        productionCapacity: "30 Tons/Month",
    },
    {
        id: "charcoal-briquettes",
        name: "Charcoal Briquettes",
        category: "Briquettes",
        description: "High-density charcoal briquettes manufactured using premium charcoal dust and natural binders. Perfect for consistent, long-lasting heat. Ideal for commercial kitchens, tandoors, and industrial heating applications.",
        image: "/images/products/mix-charcoal-page-0001-500x500.webp",
        features: ["Uniform Shape", "Consistent Heat", "Easy to Light", "Eco-Friendly"],
        specs: [
            { label: "Carbon Content", value: "75-80%" },
            { label: "Moisture", value: "< 6%" },
            { label: "Ash Content", value: "< 8%" },
            { label: "Shape", value: "Pillow/Hexagonal" },
            { label: "Packaging", value: "10kg / 20kg bags" },
        ],
        minOrderQty: "500 Kg",
        productionCapacity: "100 Tons/Month",
    },
    {
        id: "agarbatti-powder",
        name: "Agarbatti Charcoal Powder",
        category: "Powder",
        description: "Ultra-fine charcoal powder specifically processed for agarbatti (incense stick) manufacturing. Consistent particle size ensures smooth mixing and quality end products. Trusted by leading incense manufacturers across India.",
        image: "/images/products/charcoal-dust.webp",
        features: ["Ultra Fine Mesh", "Consistent Quality", "Low Smoke", "Bulk Supply"],
        specs: [
            { label: "Mesh Size", value: "80-100 mesh" },
            { label: "Carbon Content", value: "70-75%" },
            { label: "Moisture", value: "< 8%" },
            { label: "Color", value: "Deep Black" },
            { label: "Packaging", value: "25kg / 50kg bags" },
        ],
        minOrderQty: "500 Kg",
        productionCapacity: "80 Tons/Month",
    },
    {
        id: "wood-charcoal-powder",
        name: "Wood Charcoal Powder",
        category: "Powder",
        description: "Premium wood charcoal powder suitable for various industrial applications including water filtration, metallurgy, and chemical processing. Available in different mesh sizes as per customer requirements.",
        image: "/images/products/coal-dust-500x500.webp",
        features: ["Multiple Grades", "Industrial Grade", "Custom Mesh", "Bulk Orders"],
        specs: [
            { label: "Mesh Size", value: "40-200 mesh" },
            { label: "Carbon Content", value: "75-85%" },
            { label: "Moisture", value: "< 5%" },
            { label: "pH Level", value: "7-9" },
            { label: "Packaging", value: "25kg / 50kg bags" },
        ],
        minOrderQty: "1 Ton",
        productionCapacity: "60 Tons/Month",
    },
    {
        id: "root-charcoal",
        name: "Wooden Charcoal Root",
        category: "Specialty",
        description: "Natural wooden charcoal root sourced from tree roots. Unique burning characteristics make it ideal for specialized applications. Available in various sizes, suitable for decorative and functional uses.",
        image: "/images/products/black-wooden-charcoal-root1.webp",
        features: ["Natural Shape", "Unique Burn", "Decorative Use", "Limited Stock"],
        specs: [
            { label: "Source", value: "Tree Roots" },
            { label: "Size", value: "Mixed/Custom" },
            { label: "Carbon Content", value: "70-80%" },
            { label: "Application", value: "Specialty" },
            { label: "Packaging", value: "Loose / Bags" },
        ],
        minOrderQty: "200 Kg",
        productionCapacity: "20 Tons/Month",
    },
];

// Categories derived from products
export const categories = ["All", ...new Set(products.map((p) => p.category))];

// ============================================
// NAVIGATION LINKS
// ============================================
export const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Products", href: "#products" },
    { name: "Infrastructure", href: "#infrastructure" },
    { name: "Contact", href: "#contact" },
];

// ============================================
// INFRASTRUCTURE DATA
// ============================================
export const infrastructure = [
    {
        title: "Large Warehouse",
        description: "500+ tons storage capacity with organized inventory management",
        icon: "Warehouse",
    },
    {
        title: "Processing Unit",
        description: "Modern equipment for quality processing and packaging",
        icon: "Factory",
    },
    {
        title: "Logistics Support",
        description: "Efficient road transport network for pan-India delivery",
        icon: "Truck",
    },
];

// ============================================
// SEO KEYWORDS
// ============================================
export const seoKeywords = [
    "Charcoal Manufacturer Gujarat",
    "Charcoal Supplier India",
    "Bulk Charcoal India",
    "Wood Charcoal Supplier",
    "Charcoal Briquettes Manufacturer",
    "Agarbatti Charcoal Powder",
    "Wholesale Charcoal Kutch",
    "Premium Processed Charcoal",
    "Veer Trading Nakhatrana",
    "Hardwood Lump Charcoal India",
    "BBQ Charcoal Supplier Gujarat",
    "Industrial Charcoal India",
    "Charcoal Powder Supplier",
    "Naresh Bhanushali Charcoal",
    "Best Charcoal Supplier Gujarat",
];
