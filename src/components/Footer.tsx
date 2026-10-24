"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/siteConfig";
import navbarLogo from "@/assets/navbar_logo.png";
import {
  MessageCircle,
  Mail,
  MapPin,
  Heart,
  ShieldCheck,
  Truck,
  Paintbrush,
} from "lucide-react";
import InstagramIcon from "@/components/icons/InstagramIcon";

export default function Footer() {
  const [currentYear, setCurrentYear] = React.useState(2026);

  React.useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-[#16204A] text-white border-t border-white/10">
      {/* Editorial value strip */}
      <div className="border-b border-white/10 bg-[#0F1633]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex items-start gap-3">
              <Paintbrush className="w-4 h-4 text-white/70 mt-0.5 shrink-0" />
              <div>
                <h4 className="text-xs uppercase tracking-wider font-semibold text-white">
                  Hand-painted with brush
                </h4>
                <p className="text-xs text-white/70 mt-1 leading-relaxed">
                  Every stroke laid down freehand with fine camel hair brushes.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <ShieldCheck className="w-4 h-4 text-white/70 mt-0.5 shrink-0" />
              <div>
                <h4 className="text-xs uppercase tracking-wider font-semibold text-white">
                  Washable & heat-set
                </h4>
                <p className="text-xs text-white/70 mt-1 leading-relaxed">
                  Pigments heat-bonded to natural fibers for gentle hand-washing.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Heart className="w-4 h-4 text-white/70 mt-0.5 shrink-0" />
              <div>
                <h4 className="text-xs uppercase tracking-wider font-semibold text-white">
                  Made to order
                </h4>
                <p className="text-xs text-white/70 mt-1 leading-relaxed">
                  We paint on your chosen garment, silhouette, and preferred shade.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Truck className="w-4 h-4 text-white/70 mt-0.5 shrink-0" />
              <div>
                <h4 className="text-xs uppercase tracking-wider font-semibold text-white">
                  Shipped across India
                </h4>
                <p className="text-xs text-white/70 mt-1 leading-relaxed">
                  Carefully packed in paper and dispatched with courier tracking.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-4">
            <Link href="/" className="inline-block mb-3" title={siteConfig.brandName}>
              <Image
                src={navbarLogo}
                alt={siteConfig.brandName}
                className="h-24 sm:h-28 md:h-32 w-auto object-contain -ml-2.5 sm:-ml-3"
                style={{ width: "auto" }}
                priority
              />
            </Link>
            <p className="text-xs text-white/80 leading-relaxed max-w-sm mb-6">
              Wearable art, Painted by hand.
            </p>

            <div className="flex items-center gap-2">
              <a
                href={siteConfig.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-xs border border-white/20 text-white flex items-center justify-center hover:bg-white hover:text-[#16204A] transition-colors"
                aria-label="Instagram profile"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href={`https://wa.me/${siteConfig.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-xs border border-white/20 text-white flex items-center justify-center hover:bg-white hover:text-[#16204A] transition-colors"
                aria-label="WhatsApp chat"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="w-8 h-8 rounded-xs border border-white/20 text-white flex items-center justify-center hover:bg-white hover:text-[#16204A] transition-colors"
                aria-label="Email studio"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-2">
            <h3 className="text-xs font-semibold tracking-wider uppercase text-white mb-4">
              Explore
            </h3>
            <ul className="space-y-2 text-xs text-white/80">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/shop" className="hover:text-white transition-colors">
                  Collection
                </Link>
              </li>
              <li>
                <Link href="/custom-orders" className="hover:text-white transition-colors">
                  Custom Orders
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  Our Story
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-white transition-colors">
                  Care & FAQ
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories Column */}
          <div className="lg:col-span-3">
            <h3 className="text-xs font-semibold tracking-wider uppercase text-white mb-4">
              Categories
            </h3>
            <ul className="space-y-2 text-xs text-white/80">
              <li>
                <Link href="/shop?category=t-shirts" className="hover:text-white transition-colors">
                  T-Shirts
                </Link>
              </li>
              <li>
                <Link href="/shop?category=shirts" className="hover:text-white transition-colors">
                  Linen & Cotton Shirts
                </Link>
              </li>
              <li>
                <Link href="/shop?category=jabhas" className="hover:text-white transition-colors">
                  Jabhas & Tunics
                </Link>
              </li>
              <li>
                <Link href="/shop?category=tote-bags" className="hover:text-white transition-colors">
                  Canvas Tote Bags
                </Link>
              </li>
              <li>
                <Link href="/shop?category=kurtis-dresses" className="hover:text-white transition-colors">
                  Kurtis & Dresses
                </Link>
              </li>
              <li>
                <Link href="/shop?category=pillow-covers" className="hover:text-white transition-colors">
                  Pillow Covers
                </Link>
              </li>
            </ul>
          </div>

          {/* Ordering via DM instructions */}
          <div className="lg:col-span-3">
            <h3 className="text-xs font-semibold tracking-wider uppercase text-white mb-4">
              Ordering
            </h3>
            <p className="text-xs text-white/80 leading-relaxed mb-4">
              There is no shopping cart. Click <strong className="text-white">“DM for Price”</strong> on any design to discuss sizes, fabric colors, and price quotes directly with the artist.
            </p>
            <div className="space-y-1.5 text-xs text-white/70">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-white/60 shrink-0" />
                <span>{siteConfig.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <MessageCircle className="w-3.5 h-3.5 text-white/60 shrink-0" />
                <a
                  href={`https://wa.me/${siteConfig.whatsappNumber}`}
                  className="hover:underline text-white"
                >
                  {siteConfig.whatsappDisplayNumber}
                </a>
              </div>
            </div>

            <div className="mt-5">
              {/* Button on dark background: White button with Deep Indigo text */}
              <Link
                href="/custom-orders"
                className="inline-block w-full text-center py-2 px-3 rounded-xs bg-white text-[#16204A] hover:bg-[#FAF6EF] text-xs font-semibold tracking-wide transition-colors"
              >
                Request a Custom Piece
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-white/60 gap-3">
          <p>
            © {currentYear} {siteConfig.brandName}. All designs are painted by hand.
          </p>
          <p>
            Natural fabrics • Permanent textile pigments • Made in India
          </p>
        </div>
      </div>
    </footer>
  );
}
