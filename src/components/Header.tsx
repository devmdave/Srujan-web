"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/config/siteConfig";
import { useWishlist } from "@/context/WishlistContext";
import navbarLogo from "@/assets/navbar_logo.png";
import {
  Heart,
  Menu,
  X,
  MessageCircle,
  ExternalLink,
} from "lucide-react";

export default function Header() {
  const pathname = usePathname();
  const { wishlist, setIsDrawerOpen } = useWishlist();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Collection", href: "/shop" },
    { label: "Custom Orders", href: "/custom-orders" },
    { label: "Our Story", href: "/about" },
    { label: "FAQ", href: "/faq" },
    { label: "Contact", href: "/contact" },
  ];

  const quickWhatsAppUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
    "Hi Srujan, I was looking at your catalog and would love to ask a quick question."
  )}`;

  return (
    <>
      {/* Top subtle announcement bar */}
      <div className="bg-[#0F1633] text-[#FAF6EF]/90 text-[11px] py-2 px-4 text-center font-normal tracking-wide flex items-center justify-center gap-2 border-b border-white/10">
        <span>Hand-painted wearable art on natural Indian fabrics</span>
        <span className="hidden sm:inline text-white/40">•</span>
        <span className="hidden sm:inline text-white/80">Every piece painted individually</span>
      </div>

      {/* Main Header */}
      <header className="sticky top-0 z-40 bg-[#16204A] text-white border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <div className="flex items-center">
              <Link
                href="/"
                className="flex items-center p-0 m-0"
                title="Srujan"
              >
                <Image
                  src={navbarLogo}
                  alt="Srujan"
                  className="h-12 md:h-16 w-auto max-w-none object-contain p-0 m-0"
                  style={{ width: "auto" }}
                  priority
                />
              </Link>
            </div>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center space-x-1 lg:space-x-4">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`px-3 py-1.5 text-xs tracking-wider uppercase transition-colors relative ${
                      isActive
                        ? "text-white font-semibold"
                        : "text-white/80 hover:text-white"
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-white" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Actions: Wishlist + Button on Dark Background */}
            <div className="flex items-center gap-3">
              {/* Wishlist Button */}
              <button
                type="button"
                onClick={() => setIsDrawerOpen(true)}
                className="relative p-2 rounded-xs text-white/90 hover:text-white hover:bg-white/10 transition-colors focus:outline-none"
                title="View your saved pieces"
                aria-label={`Wishlist with ${wishlist.length} items`}
              >
                <Heart
                  className={`w-5 h-5 transition-transform ${
                    wishlist.length > 0 ? "fill-white text-white" : ""
                  }`}
                />
                {wishlist.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-[#2A3F8F] text-white text-[10px] font-bold rounded-xs w-4 h-4 flex items-center justify-center border border-white/40">
                    {wishlist.length}
                  </span>
                )}
              </button>

              {/* Button on dark background: White button with Deep Indigo text */}
              <a
                href={quickWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-xs bg-white text-[#16204A] hover:bg-[#FAF6EF] text-xs font-semibold tracking-wide transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5 fill-[#16204A]" />
                <span>DM on WhatsApp</span>
              </a>

              {/* Mobile menu trigger button */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 text-white hover:bg-white/10 rounded-xs transition-colors"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#0F1633] border-t border-white/10 px-4 pt-3 pb-6">
            <div className="flex flex-col space-y-2 mb-4">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`px-3 py-2 text-xs uppercase tracking-wider ${
                      isActive
                        ? "bg-white text-[#16204A] font-semibold rounded-xs"
                        : "text-white/80 hover:text-white"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>

            <div className="pt-3 border-t border-white/10 flex flex-col gap-2">
              <a
                href={quickWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xs bg-white text-[#16204A] font-semibold text-xs"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>Message on WhatsApp</span>
              </a>
              <a
                href={siteConfig.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-2 px-4 rounded-xs border border-white/30 text-white text-xs hover:bg-white/10 transition-colors"
              >
                <span>@{siteConfig.instagramHandle} on Instagram</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
