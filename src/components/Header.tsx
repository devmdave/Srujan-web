"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { siteConfig } from "@/config/siteConfig";
import { useWishlist } from "@/context/WishlistContext";
import navbarLogo from "@/assets/navbar_logo.png";
import navbarLogoDark from "@/assets/navbar_logo_dark.png";
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
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  useEffect(() => {
    setMobileMenuOpen(false);
    setSearchOpen(false);
  }, [pathname]);

  const isHome = pathname === "/";
  const isTransparent = isHome && !isScrolled && !mobileMenuOpen && !searchOpen;

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
      setMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`w-full z-40 transition-all duration-300 ${
        isHome
          ? `fixed top-0 left-0 right-0 ${
              isTransparent
                ? "bg-gradient-to-b from-black/75 via-black/35 to-transparent text-white"
                : "bg-white/95 backdrop-blur-md text-[#111111] shadow-xs border-b border-[#E5E5E5]"
            }`
          : "sticky top-0 bg-white text-[#111111]"
      }`}
    >
      {/* Announcement bar: extends behind hero on homepage, white on non-home */}
      <div
        className={`text-[12px] sm:text-[13px] py-2 px-4 text-center font-body font-normal tracking-wide flex items-center justify-center gap-2 transition-all duration-300 ${
          isHome
            ? isScrolled
              ? "max-h-0 opacity-0 overflow-hidden py-0 border-none"
              : isTransparent
              ? "bg-transparent text-white/90 border-b border-white/15"
              : "bg-white text-[#111111] border-b border-[#E5E5E5]"
            : "bg-white text-[#111111] border-b border-[#E5E5E5]"
        }`}
      >
        <span>Handpainted in India · DM to order</span>
      </div>

      {/* Main Navbar: Two Rows */}
      <div className="w-full">
        {/* ROW 1: Logo centered, Search & Wishlist on right, Mobile Hamburger on left */}
        <div
          className={`transition-colors duration-200 ${
            isTransparent
              ? "border-b border-white/15"
              : "border-b border-[#E5E5E5]"
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div
              className={`grid grid-cols-3 items-center transition-all duration-200 ${
                isScrolled ? "h-16 md:h-16" : "h-16 md:h-20"
              }`}
            >
              {/* Left: Mobile hamburger menu trigger */}
              <div className="flex items-center justify-start">
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className={`md:hidden p-2 -ml-2 rounded-xs transition-colors ${
                    isTransparent
                      ? "text-white hover:bg-white/10"
                      : "text-[#111111] hover:bg-gray-100"
                  }`}
                  aria-label="Toggle navigation menu"
                >
                  {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
              </div>

              {/* Center: Logo centered horizontally, linking to home page */}
              <div className="flex items-center justify-center">
                <Link
                  href="/"
                  className="flex items-center justify-center gap-2.5 group"
                  title="Srujan - Wearable Art"
                >
                  <Image
                    src={isTransparent ? navbarLogo : navbarLogoDark}
                    alt="Srujan Logo"
                    className={`${
                      isScrolled ? "h-12 md:h-14" : "h-12 md:h-16"
                    } w-auto max-w-none object-contain transition-all duration-200 group-hover:opacity-85`}
                    style={{ width: "auto" }}
                    priority
                  />
                </Link>
              </div>

              {/* Right: Search icon and Wishlist icon */}
              <div className="flex items-center justify-end gap-1 sm:gap-3">
                {/* Search Toggle Icon (Desktop) */}
                <button
                  type="button"
                  onClick={() => setSearchOpen(!searchOpen)}
                  className={`hidden md:flex p-2 rounded-xs transition-colors ${
                    isTransparent
                      ? "text-white hover:bg-white/10"
                      : "text-[#111111] hover:bg-gray-100"
                  }`}
                  title="Search collection"
                  aria-label="Search collection"
                >
                  <Search className="w-5 h-5" />
                </button>

                {/* Wishlist Button */}
                <button
                  type="button"
                  onClick={() => setIsDrawerOpen(true)}
                  className={`relative p-2 rounded-xs transition-colors ${
                    isTransparent
                      ? "text-white hover:bg-white/10"
                      : "text-[#111111] hover:bg-gray-100"
                  }`}
                  title="View your saved pieces"
                  aria-label={`Wishlist with ${wishlist.length} items`}
                >
                  <Heart
                    className={`w-5 h-5 transition-transform ${
                      wishlist.length > 0
                        ? "fill-[#7A1F2B] text-[#7A1F2B]"
                        : isTransparent
                        ? "text-white"
                        : "text-[#111111]"
                    }`}
                  />
                  {wishlist.length > 0 && (
                    <span className="absolute -top-1 -right-1 bg-[#7A1F2B] text-white text-[10px] font-body font-bold rounded-xs w-4 h-4 flex items-center justify-center">
                      {wishlist.length}
                    </span>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* ROW 2: Desktop Links centered horizontally under logo */}
        <nav
          className={`hidden md:flex items-center justify-center h-12 transition-colors duration-200 ${
            isTransparent
              ? "border-b border-white/15"
              : "border-b border-[#E5E5E5]"
          }`}
        >
          <div className="flex items-center gap-8 lg:gap-10">
            {navLinks.map((link) => {
              const isActive =
                pathname === link.href ||
                (link.href === "/shop" && pathname.startsWith("/shop"));
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative py-3 text-[14px] sm:text-[15px] font-body font-normal uppercase tracking-[0.06em] group transition-colors duration-200 ${
                    isTransparent
                      ? "text-white/90 hover:text-white"
                      : "text-[#111111]"
                  }`}
                >
                  <span>{link.label}</span>
                  <span
                    className={`absolute bottom-0 left-0 right-0 h-[1px] transition-opacity duration-150 ${
                      isTransparent ? "bg-white" : "bg-[#111111]"
                    } ${
                      isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                    }`}
                  />
                </Link>
              );
            })}
          </div>
        </nav>

        {/* Slide-down Search Bar Overlay */}
        {searchOpen && (
          <div className="border-b border-[#E5E5E5] bg-white px-4 py-3 text-[#111111]">
            <form
              onSubmit={handleSearchSubmit}
              className="max-w-xl mx-auto flex items-center gap-2"
            >
              <div className="relative flex-1">
                <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search kurtis, jabhas, floral motifs, totes..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  autoFocus
                  className="w-full bg-gray-50 border border-[#E5E5E5] rounded-xs pl-9 pr-3 py-2 text-[14px] font-body text-[#111111] placeholder-gray-400 focus:outline-none focus:border-[#111111]"
                />
              </div>
              <button
                type="submit"
                className="px-5 py-2 bg-[#7A1F2B] hover:bg-[#5E1620] text-white text-[14px] font-body font-normal rounded-xs transition-colors"
              >
                Search
              </button>
              <button
                type="button"
                onClick={() => setSearchOpen(false)}
                className="p-2 text-gray-500 hover:text-[#111111]"
                aria-label="Close search"
              >
                <X className="w-4 h-4" />
              </button>
            </form>
          </div>
        )}

        {/* Mobile Full-Width Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-[#E5E5E5] px-4 pt-3 pb-6 text-[#111111]">
            {/* Mobile Search input */}
            <form onSubmit={handleSearchSubmit} className="mb-4">
              <div className="relative">
                <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search designs..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-gray-50 border border-[#E5E5E5] rounded-xs pl-9 pr-3 py-2 text-[14px] font-body text-[#111111] placeholder-gray-400 focus:outline-none focus:border-[#111111]"
                />
              </div>
            </form>

            {/* Links with thin lines between items */}
            <div className="flex flex-col divide-y divide-[#E5E5E5] border-t border-b border-[#E5E5E5] mb-5">
              {navLinks.map((link) => {
                const isActive =
                  pathname === link.href ||
                  (link.href === "/shop" && pathname.startsWith("/shop"));
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`py-3.5 text-[15px] font-body font-normal uppercase tracking-[0.06em] flex items-center justify-between transition-colors ${
                      isActive
                        ? "text-[#111111]"
                        : "text-[#111111]/80 hover:text-[#111111]"
                    }`}
                  >
                    <span>{link.label}</span>
                    {isActive && (
                      <span className="w-1.5 h-1.5 rounded-full bg-[#111111]" />
                    )}
                  </Link>
                );
              })}
            </div>

            {/* Mobile Actions: WhatsApp & Instagram */}
            <div className="flex flex-col gap-2">
              <a
                href={quickWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xs bg-[#7A1F2B] hover:bg-[#5E1620] text-white font-body font-normal text-[14px] transition-colors"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>DM on WhatsApp</span>
              </a>
              <a
                href={siteConfig.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-2 px-4 rounded-xs border border-[#E5E5E5] text-[#111111] text-[13px] font-body font-normal hover:bg-gray-50 transition-colors"
              >
                <span>@{siteConfig.instagramHandle} on Instagram</span>
                <ExternalLink className="w-3 h-3 text-gray-500" />
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
