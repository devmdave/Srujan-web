"use client";

import React from "react";
import Link from "next/link";
import { siteConfig } from "@/config/siteConfig";
import {
  MessageCircle,
  Mail,
  MapPin,
  Heart,
  Sparkles,
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
    <footer className="bg-[#222E57] text-[#FAF6EF] border-t border-[#34447d]">
      {/* Brand value strip */}
      <div className="border-b border-[#34447d]/60 bg-[#1d274c]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex items-start gap-3.5">
              <div className="p-2.5 rounded-xl bg-[#2F3E75] text-[#E0A526]">
                <Paintbrush className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-[#FAF6EF]">100% Hand-Painted</h4>
                <p className="text-xs text-[#FAF6EF]/70 mt-0.5">
                  Every brushstroke is painted freehand with professional textile pigments.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3.5">
              <div className="p-2.5 rounded-xl bg-[#2F3E75] text-[#E0A526]">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-[#FAF6EF]">Washable & Heat-Cured</h4>
                <p className="text-xs text-[#FAF6EF]/70 mt-0.5">
                  Treated & iron-fixed to withstand gentle hand washing for years.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3.5">
              <div className="p-2.5 rounded-xl bg-[#2F3E75] text-[#E0A526]">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-[#FAF6EF]">Customizable On Demand</h4>
                <p className="text-xs text-[#FAF6EF]/70 mt-0.5">
                  Pick your favorite motif on your choice of garment, cut, and color.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3.5">
              <div className="p-2.5 rounded-xl bg-[#2F3E75] text-[#E0A526]">
                <Truck className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-[#FAF6EF]">Safe Pan-India Shipping</h4>
                <p className="text-xs text-[#FAF6EF]/70 mt-0.5">
                  Hand-wrapped in eco-conscious packaging with tracking to your doorstep.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Brand Col */}
          <div className="lg:col-span-4">
            <Link href="/" className="inline-block group mb-3">
              <div className="flex items-center gap-2">
                <span className="text-3xl font-serif font-bold text-[#FAF6EF] group-hover:text-[#F0E6D6] transition-colors">
                  {siteConfig.brandName}
                </span>
                <span className="w-2.5 h-2.5 rounded-full bg-[#E0A526]" />
              </div>
              <p className="text-xs text-[#E0A526] font-serif italic mt-0.5">
                {siteConfig.brandMeaning}
              </p>
            </Link>
            <p className="text-sm text-[#FAF6EF]/80 leading-relaxed max-w-sm mb-6">
              {siteConfig.shortBio}
            </p>

            <div className="flex items-center gap-3">
              <a
                href={siteConfig.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#2F3E75] hover:bg-[#3d4f91] text-[#FAF6EF] flex items-center justify-center transition-colors shadow-sm"
                aria-label="Instagram profile"
              >
                <InstagramIcon className="w-5 h-5" />
              </a>
              <a
                href={`https://wa.me/${siteConfig.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#2F3E75] hover:bg-[#3d4f91] text-[#FAF6EF] flex items-center justify-center transition-colors shadow-sm"
                aria-label="WhatsApp direct chat"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="w-10 h-10 rounded-full bg-[#2F3E75] hover:bg-[#3d4f91] text-[#FAF6EF] flex items-center justify-center transition-colors shadow-sm"
                aria-label="Email us"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links Col */}
          <div className="lg:col-span-2">
            <h3 className="text-sm font-semibold tracking-wider uppercase text-[#E0A526] mb-4">
              Explore
            </h3>
            <ul className="space-y-2.5 text-sm text-[#FAF6EF]/80">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/shop" className="hover:text-white transition-colors">
                  All Designs
                </Link>
              </li>
              <li>
                <Link href="/custom-orders" className="hover:text-white transition-colors">
                  Order a Custom Piece
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  Our Story & Craft
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-white transition-colors">
                  FAQ & Care Guide
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact the Artist
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories Col */}
          <div className="lg:col-span-3">
            <h3 className="text-sm font-semibold tracking-wider uppercase text-[#E0A526] mb-4">
              Categories
            </h3>
            <ul className="space-y-2.5 text-sm text-[#FAF6EF]/80">
              <li>
                <Link href="/shop?category=t-shirts" className="hover:text-white transition-colors">
                  Hand-Painted T-Shirts
                </Link>
              </li>
              <li>
                <Link href="/shop?category=shirts" className="hover:text-white transition-colors">
                  Handmade Linen Shirts
                </Link>
              </li>
              <li>
                <Link href="/shop?category=jabhas" className="hover:text-white transition-colors">
                  Traditional Jabhas & Kurtas
                </Link>
              </li>
              <li>
                <Link href="/shop?category=tote-bags" className="hover:text-white transition-colors">
                  Heavy Canvas Tote Bags
                </Link>
              </li>
              <li>
                <Link href="/shop?category=kurtis-dresses" className="hover:text-white transition-colors">
                  Festive Kurtis & Flared Dresses
                </Link>
              </li>
              <li>
                <Link href="/shop?category=pillow-covers" className="hover:text-white transition-colors">
                  Slub Cotton Cushion Covers
                </Link>
              </li>
              <li>
                <Link href="/shop?category=others" className="hover:text-white transition-colors">
                  Stoles & Wall Hangings
                </Link>
              </li>
            </ul>
          </div>

          {/* How to Order / Contact Note */}
          <div className="lg:col-span-3">
            <h3 className="text-sm font-semibold tracking-wider uppercase text-[#E0A526] mb-4">
              Order Via DM
            </h3>
            <p className="text-xs text-[#FAF6EF]/80 leading-relaxed mb-4">
              We do not run an automated shopping cart. To buy any piece, simply click{" "}
              <strong className="text-[#FAF6EF] font-semibold">“DM for Price”</strong> or send us
              a message on WhatsApp or Instagram with your size & preferences.
            </p>
            <div className="space-y-2 text-xs text-[#FAF6EF]/80">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#E0A526] shrink-0" />
                <span>{siteConfig.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-[#E0A526] shrink-0" />
                <a
                  href={`https://wa.me/${siteConfig.whatsappNumber}`}
                  className="hover:underline text-white font-medium"
                >
                  {siteConfig.whatsappDisplayNumber}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <InstagramIcon className="w-4 h-4 text-[#E0A526] shrink-0" />
                <a
                  href={siteConfig.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline text-white font-medium"
                >
                  @{siteConfig.instagramHandle}
                </a>
              </div>
            </div>

            <div className="mt-5">
              <Link
                href="/custom-orders"
                className="inline-block w-full text-center py-2 px-4 rounded-xl bg-[#C2552E] hover:bg-[#A64421] text-white text-xs font-semibold tracking-wide transition-colors"
              >
                Request Custom Design
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="mt-12 pt-6 border-t border-[#34447d]/60 flex flex-col sm:flex-row items-center justify-between text-xs text-[#FAF6EF]/70 gap-4">
          <p>
            © {currentYear} {siteConfig.brandName}. All designs are original hand-painted creations.
          </p>
          <p className="flex items-center gap-1.5">
            <span>Handmade with care & fine brushes in India</span>
            <Heart className="w-3.5 h-3.5 fill-[#C2552E] text-[#C2552E]" />
          </p>
        </div>
      </div>
    </footer>
  );
}
