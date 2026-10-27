"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/siteConfig";
import navbarLogo from "@/assets/navbar_logo.png";
import IndianMotifBorder from "@/components/IndianMotifBorder";
import IndianPatternBg from "@/components/IndianPatternBg";
import {
  MessageCircle,
  Mail,
  MapPin,
  Truck,
} from "lucide-react";
import InstagramIcon from "@/components/icons/InstagramIcon";

export default function Footer() {
  const [currentYear, setCurrentYear] = React.useState(2026);

  React.useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="relative bg-[#16204A] text-white overflow-hidden">
      {/* Faint Indian Pattern Backdrop */}
      <IndianPatternBg color="white" opacity={0.04} />

      {/* Thin Decorative Indian Motif Border Strip Above Footer */}
      <div className="border-b border-white/10">
        <IndianMotifBorder color="white" height={14} className="opacity-35" />
      </div>

      {/* Main Footer Container */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Brand & Socials Column */}
          <div className="lg:col-span-4">
            <Link href="/" className="inline-flex items-center gap-2 mb-3" title={siteConfig.brandName}>
              <Image
                src={navbarLogo}
                alt={siteConfig.brandName}
                className="h-16 sm:h-20 w-auto object-contain -ml-2"
                style={{ width: "auto" }}
                priority
              />
              <span className="font-gujarati font-medium text-lg sm:text-xl tracking-widest text-white/80 select-none">
                સૃજન
              </span>
            </Link>
            <p className="text-[14px] text-white/75 leading-[1.6] max-w-sm mb-5 font-body font-normal">
              Handpainted in India · Hath se banaya wearable art on natural Indian cottons, khadi, and linens.
            </p>

            {/* Social Icons & WhatsApp */}
            <div className="flex items-center gap-2.5">
              <a
                href={siteConfig.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xs border border-white/20 text-white flex items-center justify-center hover:bg-white hover:text-[#16204A] transition-colors"
                aria-label="Instagram profile"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href={`https://wa.me/${siteConfig.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xs border border-white/20 text-white flex items-center justify-center hover:bg-white hover:text-[#16204A] transition-colors"
                aria-label="WhatsApp chat"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="w-9 h-9 rounded-xs border border-white/20 text-white flex items-center justify-center hover:bg-white hover:text-[#16204A] transition-colors"
                aria-label="Email studio"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Simple Column 1: Shop */}
          <div className="lg:col-span-3">
            <h3 className="text-[13px] font-body font-bold tracking-wider uppercase text-white mb-4">
              Shop
            </h3>
            <ul className="space-y-2 text-[14px] text-white/75 font-body font-normal">
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
                  Jabhas (Kurtas)
                </Link>
              </li>
              <li>
                <Link href="/shop?category=tote-bags" className="hover:text-white transition-colors">
                  Tote Bags
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
              <li>
                <Link href="/shop" className="hover:text-white transition-colors font-medium text-white/90">
                  All Designs →
                </Link>
              </li>
            </ul>
          </div>

          {/* Simple Column 2: Info */}
          <div className="lg:col-span-2">
            <h3 className="text-[13px] font-body font-bold tracking-wider uppercase text-white mb-4">
              Info
            </h3>
            <ul className="space-y-2 text-[14px] text-white/75 font-body font-normal">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  Our Story
                </Link>
              </li>
              <li>
                <Link href="/custom-orders" className="hover:text-white transition-colors">
                  Custom Orders
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

          {/* Simple Column 3: Contact */}
          <div className="lg:col-span-3">
            <h3 className="text-[13px] font-body font-bold tracking-wider uppercase text-white mb-4">
              Contact
            </h3>
            <p className="text-[14px] text-white/75 leading-[1.6] mb-3 font-body font-normal">
              Click <strong className="text-white font-semibold">“DM for Price”</strong> on any design to discuss sizing, fabric choices, and quotes directly with the artist.
            </p>
            <div className="space-y-2 text-[14px] text-white/75 font-body font-normal">
              <div className="flex items-center gap-2">
                <MessageCircle className="w-3.5 h-3.5 text-white/60 shrink-0" />
                <a
                  href={`https://wa.me/${siteConfig.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline text-white font-medium"
                >
                  {siteConfig.whatsappDisplayNumber} (WhatsApp)
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-white/60 shrink-0" />
                <span>{siteConfig.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Truck className="w-3.5 h-3.5 text-white/60 shrink-0" />
                <span>Pan-India Courier Shipping</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-[13px] text-white/60 gap-3 font-body font-normal">
          <p>
            © {currentYear} {siteConfig.brandName} (<span className="font-gujarati font-medium">સૃજન</span>). All designs hand-painted in India.
          </p>
          <p>
            Natural Indian fabrics · Permanent textile pigments · Made to order
          </p>
        </div>
      </div>
    </footer>
  );
}
