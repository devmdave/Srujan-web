"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { siteConfig } from "@/config/siteConfig";
import { useWishlist } from "@/context/WishlistContext";
import navbarLogo from "@/assets/navbar_logo.png";
import IndianMotifBorder from "@/components/IndianMotifBorder";
import {
  Heart,
  Search,
  Menu,
  X,
  MessageCircle,
  ExternalLink,
} from "lucide-react";

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const { wishlist, setIsDrawerOpen } = useWishlist();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Shop", href: "/shop" },
    { label: "Custom Orders", href: "/custom-orders" },
    { label: "Our Story", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  const quickWhatsAppUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
    "Hi Srujan, I would love to ask about your hand-painted pieces."
  )}`;

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/shop?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchOpen(false);
    }
  };

  return (
    <>
      {/* Top thin announcement bar in Deep Indigo */}
      <div className="bg-[#16204A] text-[#FAF6EF]/90 text-[13px] py-2 px-4 text-center font-body font-normal tracking-wide flex items-center justify-center gap-2 border-b border-white/10">
        <span>Handpainted in India · DM to order</span>
      </div>

      {/* Main Navbar: Sticky on scroll */}
      <header className="sticky top-0 z-40 bg-[#16204A] text-white shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo on the left with Gujarati wordmark accent in Noto Serif Gujarati */}
            <div className="flex items-center gap-2">
              <Link
                href="/"
                className="flex items-center gap-2.5 p-0 m-0 group"
                title="Srujan - Wearable Art"
              >
                <Image
                  src={navbarLogo}
                  alt="Srujan Logo"
                  className="h-11 sm:h-12 md:h-14 w-auto max-w-none object-contain p-0 m-0 transition-opacity group-hover:opacity-90"
                  style={{ width: "auto" }}
                  priority
                />
                <span className="font-gujarati font-medium text-base sm:text-lg tracking-widest text-white/80 pl-2.5 border-l border-white/20 select-none hidden sm:inline-block">
                  સૃજન
                </span>
              </Link>
            </div>

            {/* Links in the center: Nunito Sans 600, 15px, no all-caps */}
            <nav className="hidden md:flex items-center space-x-1 lg:space-x-5">
              {navLinks.map((link) => {
                const isActive =
                  pathname === link.href ||
                  (link.href === "/shop" && pathname.startsWith("/shop"));
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`px-3 py-1.5 text-[15px] font-body font-semibold transition-colors relative ${
                      isActive
                        ? "text-white"
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

            {/* Search + Wishlist icons on the right */}
            <div className="flex items-center gap-2 sm:gap-3">
              {/* Search Toggle Icon */}
              <button
                type="button"
                onClick={() => setSearchOpen(!searchOpen)}
                className="p-2 rounded-xs text-white/90 hover:text-white hover:bg-white/10 transition-colors focus:outline-none"
                title="Search collection"
                aria-label="Search collection"
              >
                <Search className="w-5 h-5" />
              </button>

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
                  <span className="absolute -top-1 -right-1 bg-[#2A3F8F] text-white text-[11px] font-body font-bold rounded-xs w-4 h-4 flex items-center justify-center border border-white/40">
                    {wishlist.length}
                  </span>
                )}
              </button>

              {/* Mobile menu trigger */}
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

        {/* Search Bar Slide-down overlay */}
        {searchOpen && (
          <div className="border-t border-white/10 bg-[#0F1633] px-4 py-3">
            <form
              onSubmit={handleSearchSubmit}
              className="max-w-xl mx-auto flex items-center gap-2"
            >
              <div className="relative flex-1">
                <Search className="w-4 h-4 text-white/50 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search kurtis, jabhas, floral motifs, totes..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  autoFocus
                  className="w-full bg-[#16204A] border border-white/20 rounded-xs pl-9 pr-3 py-2 text-[14px] font-body text-white placeholder-white/50 focus:outline-none focus:border-white"
                />
              </div>
              {/* Button: Nunito Sans 700, 14-15px, no all-caps */}
              <button
                type="submit"
                className="px-5 py-2 bg-[#2A3F8F] hover:bg-[#203173] text-white text-[14px] font-body font-bold rounded-xs transition-colors"
              >
                Search
              </button>
              <button
                type="button"
                onClick={() => setSearchOpen(false)}
                className="p-2 text-white/70 hover:text-white"
                aria-label="Close search"
              >
                <X className="w-4 h-4" />
              </button>
            </form>
          </div>
        )}

        {/* Thin decorative Indian motif border strip directly under navbar */}
        <IndianMotifBorder color="white" height={12} className="opacity-35" />

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
                    className={`px-3 py-2.5 text-[15px] font-body font-semibold ${
                      isActive
                        ? "bg-white text-[#16204A] rounded-xs"
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
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xs bg-white text-[#16204A] font-body font-bold text-[14px]"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>DM on WhatsApp</span>
              </a>
              <a
                href={siteConfig.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-2 px-4 rounded-xs border border-white/30 text-white text-[13px] font-body hover:bg-white/10 transition-colors"
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
