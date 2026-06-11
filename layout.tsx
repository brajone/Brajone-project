import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import FloatingActions from "@/components/ui/FloatingActions";
import AIAssistant from "@/components/ui/AIAssistant";
import Preloader from "@/components/ui/Preloader";
import SchemaOrg from "@/components/SchemaOrg";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  title: {
    default: "Brajone | Luxury Real Estate in Vrindavan, Mathura, Govardhan & Barsana",
    template: "%s | Brajone Luxury Real Estate"
  },
  description: "Brajone offers premium luxury properties in Vrindavan, Mathura, Govardhan, and Barsana. Experience spiritual living with high ROI investment opportunities in the heart of Braj.",
  keywords: [
    "Vrindavan Real Estate", 
    "Luxury Apartments Vrindavan", 
    "Property in Mathura", 
    "Govardhan Real Estate", 
    "Barsana Luxury Homes", 
    "Brajone Properties", 
    "Investment in Vrindavan",
    "Real Estate Govardhan",
    "Buy Flat in Vrindavan",
    "Vrindavan Property for Sale",
    "Luxury Villas in Braj"
  ],
  authors: [{ name: "Brajone Team" }],
  creator: "Brajone",
  publisher: "Brajone Real Estate",
  formatDetection: {
    email: false,
    address: true,
    telephone: true,
  },
  metadataBase: new URL("https://brajone.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Brajone | Luxury Real Estate in Vrindavan & Braj Region",
    description: "Premium spiritual luxury residences and investment plots in Vrindavan, Mathura, and Govardhan.",
    url: "https://brajone.com",
    siteName: "Brajone",
    images: [
      {
        url: "/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Brajone Luxury Real Estate",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Brajone | Luxury Real Estate in Vrindavan",
    description: "Your trust, our commitment. Best properties in Vrindavan, Mathura, and Govardhan.",
    images: ["/logo.jpg"],
  },
  manifest: "/manifest.json",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: "/favicon.jpg",
    apple: "/favicon.jpg",
  }
};

export const viewport: Viewport = {
  themeColor: "#050505",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${playfair.variable} bg-background text-foreground antialiased min-h-screen flex flex-col`}>
        <SchemaOrg />
        <Preloader />
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        <FloatingActions />
        <AIAssistant />
      </body>
    </html>
  );
}
