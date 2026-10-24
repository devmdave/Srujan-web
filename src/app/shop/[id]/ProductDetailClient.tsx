"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { DesignItem } from "@/data/designs";
import { siteConfig, getProductWhatsAppUrl } from "@/config/siteConfig";
import { useWishlist } from "@/context/WishlistContext";
import DesignCard from "@/components/DesignCard";
import PaintStrokeDivider from "@/components/PaintStrokeDivider";
import {
  Heart,
  MessageCircle,
  Sparkles,
  Share2,
  ChevronRight,
  ShieldCheck,
  Clock,
  Shirt,
  Info,
  Check,
  ZoomIn,
} from "lucide-react";
import InstagramIcon from "@/components/icons/InstagramIcon";

interface ProductDetailClientProps {
  design: DesignItem;
  relatedDesigns: DesignItem[];
}

export default function ProductDetailClient({
  design,
  relatedDesigns,
}: ProductDetailClientProps) {
  const { isInWishlist, toggleWishlist } = useWishlist();
  const isSaved = isInWishlist(design.id);

  // Gallery state
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);

  // User interactive choices for pre-filling WhatsApp message
  const [selectedProductType, setSelectedProductType] = useState(
    design.availableOn[0] || "Custom Garment"
  );
  const [selectedColor, setSelectedColor] = useState(
    design.colors[0]?.name || "Natural"
  );
  const [selectedSize, setSelectedSize] = useState(
    design.sizes[0] || "Standard"
  );

  const [copiedLink, setCopiedLink] = useState(false);
  const [pageUrl, setPageUrl] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setPageUrl(window.location.href);
    }
  }, []);

  // Construct dynamic WhatsApp link
  const productWhatsAppUrl = getProductWhatsAppUrl({
    designName: design.name,
    productType: `${selectedProductType} (Color: ${selectedColor}, Size: ${selectedSize})`,
    pageUrl: pageUrl || `https://srujan-handpainted.in/shop/${design.id}`,
  });

  const handleCopyLink = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2500);
    }
  };

  return (
    <div className="py-8 sm:py-12 bg-[#FAF6EF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumbs */}
        <nav className="flex items-center text-xs text-[#5C534E] mb-6 sm:mb-8 flex-wrap gap-1">
          <Link href="/" className="hover:text-[#2B2522]">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-[#7E726B]" />
          <Link href="/shop" className="hover:text-[#2B2522]">
            Collection
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-[#7E726B]" />
          <Link
            href={`/shop?category=${design.category}`}
            className="hover:text-[#2B2522]"
          >
            {design.categoryLabel}
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-[#7E726B]" />
          <span className="font-semibold text-[#2B2522] truncate max-w-xs">
            {design.name}
          </span>
        </nav>

        {/* Main Grid: Gallery on Left, Details & Order on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* LEFT: Image Gallery with Zoom */}
          <div className="lg:col-span-7 space-y-4">
            {/* Main Featured Image Container */}
            <div
              className={`relative aspect-4/3 sm:aspect-square w-full rounded-3xl overflow-hidden bg-[#F0E6D6] border-2 border-[#E2D3BE] shadow-md group cursor-zoom-in ${
                isZoomed ? "cursor-zoom-out" : ""
              }`}
              onClick={() => setIsZoomed(!isZoomed)}
            >
              <Image
                src={design.images[activeImageIndex] || design.images[0]}
                alt={`${design.name} hand-painted detail view`}
                fill
                priority
                className={`object-cover transition-transform duration-300 ${
                  isZoomed ? "scale-150" : "group-hover:scale-105"
                }`}
                sizes="(max-width: 1024px) 100vw, 600px"
              />

              {/* Badges on top */}
              <div className="absolute top-4 left-4 flex flex-col gap-2 z-10 pointer-events-none">
                {design.isNew && (
                  <span className="px-3 py-1 rounded-full bg-[#E0A526] text-[#2B2522] text-xs font-bold shadow-xs">
                    ✦ New Studio Motif
                  </span>
                )}
                <span className="px-3 py-1 rounded-full bg-[#FAF6EF]/90 backdrop-blur-xs text-[#2B2522] text-xs font-medium border border-[#E2D3BE]">
                  100% Hand-Painted
                </span>
              </div>

              {/* Zoom hint badge */}
              <div className="absolute bottom-4 right-4 bg-[#FAF6EF]/85 backdrop-blur-xs px-3 py-1.5 rounded-full text-[11px] text-[#2B2522] border border-[#E2D3BE] flex items-center gap-1.5 opacity-80 group-hover:opacity-100 transition-opacity">
                <ZoomIn className="w-3.5 h-3.5" />
                <span>{isZoomed ? "Click to reset" : "Click to zoom brushwork"}</span>
              </div>
            </div>

            {/* Thumbnail switcher (if multiple images) */}
            {design.images.length > 1 && (
              <div className="flex items-center gap-3 overflow-x-auto pb-2">
                {design.images.map((img, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => {
                      setActiveImageIndex(idx);
                      setIsZoomed(false);
                    }}
                    className={`relative w-20 h-20 rounded-xl overflow-hidden shrink-0 border-2 transition-all ${
                      activeImageIndex === idx
                        ? "border-[#C2552E] ring-2 ring-[#C2552E]/30 scale-102"
                        : "border-[#E2D3BE] opacity-75 hover:opacity-100"
                    }`}
                  >
                    <Image
                      src={img}
                      alt={`Thumbnail ${idx + 1}`}
                      fill
                      className="object-cover"
                      sizes="80px"
                    />
                  </button>
                ))}
              </div>
            )}

            {/* Artistic Note Box under Gallery */}
            <div className="bg-[#F0E6D6]/80 rounded-2xl p-5 border border-[#E2D3BE] text-xs text-[#2B2522] flex items-start gap-3">
              <Sparkles className="w-5 h-5 text-[#E0A526] shrink-0 mt-0.5" />
              <div>
                <strong className="font-serif font-bold text-sm text-[#2B2522] block mb-0.5">
                  Handcrafted Individuality Notice:
                </strong>
                <p className="text-[#5C534E] leading-relaxed">
                  Each piece is painted individually by hand using hair brushes and mixed pigments. Slight variations in stroke thickness, color bleeding, and petal curves are not defects — they are the authentic soul of handmade Indian art.
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT: Product Details & Dynamic WhatsApp DM Action */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-semibold tracking-widest uppercase text-[#2F3E75]">
                  {design.categoryLabel}
                </span>

                <div className="flex items-center gap-2">
                  {/* Share button */}
                  <button
                    type="button"
                    onClick={handleCopyLink}
                    className="p-2 rounded-full bg-[#F0E6D6] hover:bg-[#E2D3BE] text-[#2B2522] text-xs transition-colors"
                    title="Copy design link"
                    aria-label="Share design"
                  >
                    {copiedLink ? <Check className="w-4 h-4 text-[#2F5D4B]" /> : <Share2 className="w-4 h-4" />}
                  </button>

                  {/* Wishlist toggle */}
                  <button
                    type="button"
                    onClick={() => toggleWishlist(design)}
                    className="p-2 rounded-full bg-[#F0E6D6] hover:bg-[#E2D3BE] text-[#2B2522] transition-colors"
                    aria-label={isSaved ? "Remove from wishlist" : "Save to wishlist"}
                    title={isSaved ? "Saved in wishlist" : "Add to wishlist"}
                  >
                    <Heart
                      className={`w-4 h-4 transition-colors ${
                        isSaved ? "fill-[#C2552E] text-[#C2552E]" : "text-[#2B2522]"
                      }`}
                    />
                  </button>
                </div>
              </div>

              {/* Title */}
              <h1 className="text-3xl sm:text-4xl font-serif font-bold text-[#2B2522] tracking-tight">
                {design.name}
              </h1>

              {/* Lead Time & Handmade tag */}
              <div className="mt-2.5 flex items-center gap-3 text-xs text-[#5C534E]">
                <span className="inline-flex items-center gap-1 text-[#2F5D4B] font-medium">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Permanent Heat-Set Colors</span>
                </span>
                <span>•</span>
                <span className="inline-flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-[#E0A526]" />
                  <span>Studio Lead Time: {design.leadTimeDays}</span>
                </span>
              </div>
            </div>

            {/* Short Story & Inspiration */}
            <div className="bg-[#FAF6EF] border-l-3 border-[#C2552E] pl-4 py-1">
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#C2552E] mb-1">
                Story & Inspiration
              </h3>
              <p className="text-xs sm:text-sm text-[#5C534E] italic font-serif leading-relaxed">
                &ldquo;{design.story}&rdquo;
              </p>
            </div>

            <p className="text-xs sm:text-sm text-[#5C534E] leading-relaxed">
              {design.description}
            </p>

            {/* Interactive Options: "Available to Paint On" */}
            <div className="space-y-4 pt-3 border-t border-[#E2D3BE]">
              <div>
                <label className="block text-xs font-bold text-[#2B2522] uppercase tracking-wider mb-2">
                  1. Choose Garment / Silhouette to Paint On:
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {design.availableOn.map((item) => {
                    const isSelected = selectedProductType === item;
                    return (
                      <button
                        key={item}
                        type="button"
                        onClick={() => setSelectedProductType(item)}
                        className={`p-2.5 rounded-xl text-left text-xs font-medium border transition-all ${
                          isSelected
                            ? "bg-[#2F3E75] text-[#FAF6EF] border-[#2F3E75] shadow-xs"
                            : "bg-[#F0E6D6] text-[#2B2522] border-[#E2D3BE] hover:bg-[#E2D3BE]"
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span>{item}</span>
                          {isSelected && <Check className="w-3.5 h-3.5 text-[#E0A526]" />}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Color Swatches (Display & select) */}
              <div>
                <label className="block text-xs font-bold text-[#2B2522] uppercase tracking-wider mb-2">
                  2. Preferred Fabric Color:{" "}
                  <span className="font-normal text-[#5C534E]">{selectedColor}</span>
                </label>
                <div className="flex items-center gap-2.5 flex-wrap">
                  {design.colors.map((color) => {
                    const isSelected = selectedColor === color.name;
                    return (
                      <button
                        key={color.name}
                        type="button"
                        onClick={() => setSelectedColor(color.name)}
                        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs border transition-all ${
                          isSelected
                            ? "border-[#C2552E] bg-white ring-2 ring-[#C2552E]/30 font-semibold"
                            : "border-[#E2D3BE] bg-[#F0E6D6] text-[#2B2522]"
                        }`}
                      >
                        <span
                          className="w-3.5 h-3.5 rounded-full border border-black/20"
                          style={{ backgroundColor: color.hex }}
                        />
                        <span>{color.name}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Size options (Display & select) */}
              <div>
                <label className="block text-xs font-bold text-[#2B2522] uppercase tracking-wider mb-2">
                  3. Size Selection:{" "}
                  <span className="font-normal text-[#5C534E]">{selectedSize}</span>
                </label>
                <div className="flex items-center gap-1.5 flex-wrap">
                  {design.sizes.map((size) => {
                    const isSelected = selectedSize === size;
                    return (
                      <button
                        key={size}
                        type="button"
                        onClick={() => setSelectedSize(size)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-all ${
                          isSelected
                            ? "bg-[#2B2522] text-[#FAF6EF] border-[#2B2522]"
                            : "bg-[#F0E6D6] text-[#2B2522] border-[#E2D3BE] hover:bg-[#E2D3BE]"
                        }`}
                      >
                        {size}
                      </button>
                    );
                  })}
                </div>
                <p className="text-[11px] text-[#7E726B] mt-1.5">
                  ✦ Custom tailor-made measurements are gladly accepted during our WhatsApp chat.
                </p>
              </div>
            </div>

            {/* Core Ordering Flow Action Box */}
            <div className="pt-4 space-y-3">
              {/* Notice why DM */}
              <div className="p-3.5 rounded-xl bg-[#F0E6D6] border border-[#E2D3BE] text-xs text-[#2B2522]">
                <span className="font-bold text-[#C2552E]">No Online Cart / Checkout: </span>
                Every piece is painted fresh upon order. Clicking below sends your chosen garment, size, and design details straight to the artist on WhatsApp.
              </div>

              {/* Primary Action Button: "DM for Price" in Terracotta #C2552E */}
              <a
                href={productWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2.5 py-4 px-6 rounded-2xl bg-[#C2552E] hover:bg-[#A64421] text-white font-bold text-base shadow-md hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 text-center"
              >
                <MessageCircle className="w-5 h-5 fill-white shrink-0" />
                <span>DM for Price on WhatsApp</span>
              </a>

              {/* Secondary Action: "Order on Instagram" */}
              <a
                href={siteConfig.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 px-6 rounded-2xl bg-[#FAF6EF] hover:bg-white text-[#2F3E75] border-2 border-[#2F3E75] font-semibold text-xs transition-colors text-center"
              >
                <InstagramIcon className="w-4 h-4 text-[#2F3E75]" />
                <span>Order on Instagram (@{siteConfig.instagramHandle})</span>
              </a>
            </div>

            {/* Care Instructions Accordion/List */}
            <div className="pt-4 border-t border-[#E2D3BE]">
              <h3 className="text-xs font-bold text-[#2B2522] uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                <Shirt className="w-4 h-4 text-[#C2552E]" />
                <span>Fabric Care Instructions</span>
              </h3>
              <ul className="space-y-1.5 text-xs text-[#5C534E]">
                {design.careInstructions.map((instruction, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-[#E0A526] font-bold">•</span>
                    <span>{instruction}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* RELATED DESIGNS SECTION */}
        {relatedDesigns.length > 0 && (
          <div className="mt-20 pt-12 border-t border-[#E2D3BE]">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8">
              <div>
                <span className="text-xs font-semibold tracking-widest text-[#2F3E75] uppercase">
                  More Artistry
                </span>
                <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#2B2522] mt-1">
                  You Might Also Admire
                </h2>
              </div>
              <Link
                href="/shop"
                className="mt-2 sm:mt-0 text-xs font-semibold text-[#C2552E] hover:underline"
              >
                View all collection →
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedDesigns.map((relDesign) => (
                <DesignCard key={relDesign.id} design={relDesign} />
              ))}
            </div>
          </div>
        )}
      </div>

      <PaintStrokeDivider color="mustard" className="mt-16" />
    </div>
  );
}
