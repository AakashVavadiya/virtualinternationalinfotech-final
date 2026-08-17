export type Tool = {
  name: string;
  domain: string;
  category: string;
  description: string;
};

export const tools: Tool[] = [
  {
    name: "QR Codes Generators",
    domain: "qrcodes-generators.com",
    category: "Generators",
    description: "Create custom QR codes for links, UPI, WiFi, vCards and more — instantly and free.",
  },
  {
    name: "Your Barcode Generator",
    domain: "yourbarcodegenerator.com",
    category: "Generators",
    description: "Generate print-ready barcodes in every major format for retail and inventory use.",
  },
  {
    name: "GST Calculators",
    domain: "gstcalculators.co.in",
    category: "Calculators",
    description: "Accurate GST inclusive and exclusive calculations for Indian businesses.",
  },
  {
    name: "Eleven Calculator",
    domain: "elevencalculator.com",
    category: "Calculators",
    description: "A large suite of everyday finance, health and maths calculators in one place.",
  },
  {
    name: "PDF Compressed",
    domain: "pdfcompressed.de",
    category: "PDF Tools",
    description: "Shrink PDF file size while keeping text sharp and images clean.",
  },
  {
    name: "I Love PDF Tool",
    domain: "ilovepdftool.in",
    category: "PDF Tools",
    description: "Merge, split, rotate and organise PDF documents right in the browser.",
  },
  {
    name: "Online PDF Converter",
    domain: "onlinepdfconverter.in",
    category: "PDF Tools",
    description: "Convert PDFs to Word, Excel, images and back with reliable formatting.",
  },
  {
    name: "I Loved IMG",
    domain: "ilovedimg.com",
    category: "Image Tools",
    description: "Compress, resize, crop and convert images without losing quality.",
  },
  {
    name: "I Loved PDF",
    domain: "ilovedpdf.in",
    category: "PDF Tools",
    description: "A complete online PDF workspace built for speed and privacy.",
  },
  {
    name: "PDF Compressed",
    domain: "pdfcompressed.com",
    category: "PDF Tools",
    description: "Global PDF compression tool with smart quality presets.",
  },
  {
    name: "Free PDF Maker",
    domain: "freepdfmaker.in",
    category: "PDF Tools",
    description: "Build PDFs from images, documents and scans in a few clicks.",
  },
  {
    name: "Remove BG",
    domain: "removebg.co.in",
    category: "Image Tools",
    description: "Automatic background removal for product photos and portraits.",
  },
  {
    name: "I Love IMG Tool",
    domain: "iloveimgtool.com",
    category: "Image Tools",
    description: "An all-in-one image editing toolkit for creators and marketers.",
  },
  {
    name: "Free PDF",
    domain: "freepdf.co.in",
    category: "PDF Tools",
    description: "Fast, reliable and free online PDF utilities for all your document needs.",
  },
];

export const categories = ["All", "PDF Tools", "Image Tools", "Generators", "Calculators"] as const;
