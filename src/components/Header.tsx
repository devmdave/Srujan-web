"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/config/siteConfig";
import { useWishlist } from "@/context/WishlistContext";
import {
  Heart,
  Menu,
  X,
  MessageCircle,
  Sparkles,
  Palette,
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
    "Hi Srujan! I'm browsing your hand-painted catalog and would love to ask a quick question."
  )}`;

  return (
    <>
      {/* Top announcement bar */}
      <div className="bg-[#222E57] text-[#FAF6EF] text-xs py-1.5 px-4 text-center font-medium tracking-wide flex items-center justify-center gap-2 border-b border-[#3d4d8c]">
        <Sparkles className="w-3.5 h-3.5 text-[#E0A526]" />
        <span>100% Hand-Painted Wearable Art & Bespoke Fabric Commissions</span>
        <span className="hidden sm:inline text-[#E0A526]">•</span>
        <span className="hidden sm:inline">No mass production, every stroke unique</span>
      </div>

      {/* Main Header */}
      <header className="sticky top-0 z-40 bg-[#2F3E75] text-[#FAF6EF] shadow-md transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo & Tagline */}
            <div className="flex items-center gap-3">
              <Link
                href="/"
                className="group flex flex-col justify-center"
                title={`${siteConfig.brandName} - ${siteConfig.brandSlogan}`}
              >
                <div className="flex items-center gap-2">
                  <span className="text-3xl sm:text-4xl font-serif font-bold tracking-tight text-[#FAF6EF] group-hover:text-[#F0E6D6] transition-colors">
                    {siteConfig.brandName}
                  </span>
                  <span className="w-2.5 h-2.5 rounded-full bg-[#E0A526] group-hover:scale-125 transition-transform" />
                </div>
                <span className="text-[11px] sm:text-xs text-[#FAF6EF]/80 font-serif italic tracking-wide -mt-1 hidden sm:block">
                  {siteConfig.brandSlogan}
                </span>
              </Link>
            </div>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`px-3 py-2 text-sm font-medium rounded-md transition-all duration-150 relative ${
                      isActive
                        ? "text-[#FAF6EF] bg-[#222E57] font-semibold"
                        : "text-[#FAF6EF]/90 hover:text-white hover:bg-[#394B8C]"
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <span className="absolute bottom-0.5 left-3 right-3 h-0.5 bg-[#E0A526] rounded-full" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Actions: Wishlist Heart + DM WhatsApp CTA */}
            <div className="flex items-center gap-2 sm:gap-3">
              {/* Wishlist Button */}
              <button
                type="button"
                onClick={() => setIsDrawerOpen(true)}
                className="relative p-2.5 rounded-full bg-[#222E57] hover:bg-[#394B8C] text-[#FAF6EF] transition-colors focus:outline-none focus:ring-2 focus:ring-[#E0A526]"
                title="View your saved wishlist"
                aria-label={`Wishlist with ${wishlist.length} items`}
              >
                <Heart
                  className={`w-5 h-5 transition-transform ${
                    wishlist.length > 0 ? "fill-[#C2552E] text-[#C2552E] scale-110" : ""
                  }`}
                />
                {wishlist.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-[#E0A526] text-[#2B2522] text-[11px] font-bold rounded-full w-5 h-5 flex items-center justify-center border-2 border-[#2F3E75]">
                    {wishlist.length}
                  </span>
                )}
              </button>

              {/* Primary Action Button: DM on WhatsApp */}
              <a
                href={quickWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#C2552E] hover:bg-[#A64421] text-white text-sm font-semibold shadow-sm transition-all duration-200 hover:shadow-md hover:-translate-y-0.5 active:translate-y-0"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>DM on WhatsApp</span>
              </a>

              {/* Mobile menu trigger button */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 rounded-lg bg-[#222E57] text-[#FAF6EF] hover:bg-[#394B8C] transition-colors"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#222E57] border-t border-[#3d4d8c] px-4 pt-3 pb-6 animate-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col space-y-2 mb-4">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`px-4 py-2.5 rounded-lg text-base font-medium flex items-center justify-between ${
                      isActive
                        ? "bg-[#C2552E] text-white font-semibold"
                        : "text-[#FAF6EF] hover:bg-[#2F3E75]"
                    }`}
                  >
                    <span>{link.label}</span>
                    {isActive && <span className="text-xs">● Active</span>}
                  </Link>
                );
              })}
            </div>

            <div className="pt-3 border-t border-[#3d4d8c] flex flex-col gap-2.5">
              <a
                href={quickWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#C2552E] text-white font-medium text-sm shadow-sm"
              >
                <MessageCircle className="w-4 h-4" />
                <span>DM Artist on WhatsApp</span>
              </a>
              <a
                href={siteConfig.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-[#2F3E75] text-[#FAF6EF] text-sm hover:bg-[#394B8C] transition-colors"
              >
                <span>@{siteConfig.instagramHandle} on Instagram</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
