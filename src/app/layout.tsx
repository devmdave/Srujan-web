import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { WishlistProvider } from "@/context/WishlistContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import WishlistDrawer from "@/components/WishlistDrawer";
import { siteConfig } from "@/config/siteConfig";

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: `${siteConfig.brandName} | Handpainted Wearable Art & Fabric Design`,
  description: `${siteConfig.brandSlogan}. 100% hand-painted t-shirts, kurtis, jabhas, linen shirts, canvas totes, and cushion covers. No two pieces are ever the same.`,
  keywords: [
    "handpainted clothes India",
    "fabric painting brand",
    "Srujan handpainted",
    "handpainted kurti",
    "handpainted jabha",
    "custom fabric art",
    "wearable art",
    "handpainted tote bags",
  ],
  openGraph: {
    title: `${siteConfig.brandName} - Wearable Art, Painted by Hand`,
    description:
      "Explore original hand-painted textiles, shirts, kurtis, jabhas, and canvas bags crafted with love in India.",
    url: "https://srujan-handpainted.in",
    siteName: siteConfig.brandName,
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${jakarta.variable}`}>
      <body className="min-h-screen bg-[#FAF6EF] text-[#1F2430] font-sans antialiased flex flex-col selection:bg-[#2A3F8F] selection:text-white">
        <WishlistProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <FloatingWhatsApp />
          <WishlistDrawer />
        </WishlistProvider>
      </body>
    </html>
  );
}
