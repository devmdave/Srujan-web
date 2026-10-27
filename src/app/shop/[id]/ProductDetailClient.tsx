"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { DesignItem } from "@/data/designs";
import { siteConfig, getProductWhatsAppUrl } from "@/config/siteConfig";
import { useWishlist } from "@/context/WishlistContext";
import DesignCard from "@/components/DesignCard";
import PaintStrokeDivider from "@/components/PaintStrokeDivider";
import InstagramIcon from "@/components/icons/InstagramIcon";
import {
  Heart,
  MessageCircle,
  Share2,
  ChevronRight,
  ShieldCheck,
  Clock,
  Shirt,
  Check,
  ZoomIn,
} from "lucide-react";

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
    <div className="py-8 sm:py-14 bg-[#FAF6EF] text-[#1F2430]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumbs */}
        <nav className="flex items-center text-xs text-[#717A8C] mb-6 sm:mb-8 flex-wrap gap-1">
          <Link href="/" className="hover:text-[#1F2430]">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-[#717A8C]" />
          <Link href="/shop" className="hover:text-[#1F2430]">
            Shop
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-[#717A8C]" />
          <Link
            href={`/shop?category=${design.category}`}
            className="hover:text-[#1F2430]"
          >
            {design.categoryLabel}
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-[#717A8C]" />
          <span className="font-semibold text-[#1F2430] truncate max-w-xs">
            {design.name}
          </span>
        </nav>

        {/* Main Grid: Gallery on Left, Details & Order on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* LEFT: Image Gallery with Zoom */}
          <div className="lg:col-span-7 space-y-4">
            {/* Main Featured Image Container with Neutral Backdrop */}
            <div
              className={`relative aspect-4/3 sm:aspect-square w-full rounded-xs overflow-hidden bg-[#FAF6EF] border border-[#E2DACB] group cursor-zoom-in ${
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
                  isZoomed ? "scale-140" : "group-hover:scale-102"
                }`}
                sizes="(max-width: 1024px) 100vw, 600px"
              />

              {/* Badges on top */}
              <div className="absolute top-3 left-3 flex flex-col gap-1 z-10 pointer-events-none">
                {design.isNew && (
                  <span className="px-2 py-0.5 rounded-xs bg-[#2A3F8F] text-white text-[10px] uppercase font-semibold tracking-wider">
                    New Motif
                  </span>
                )}
                <span className="px-2 py-0.5 rounded-xs bg-white text-[#1F2430] text-[10px] uppercase font-medium tracking-wider border border-[#E2DACB]">
                  Hand-painted
                </span>
              </div>

              {/* Zoom hint badge */}
              <div className="absolute bottom-3 right-3 bg-white px-2.5 py-1 rounded-xs text-[10px] uppercase tracking-wider text-[#1F2430] border border-[#E2DACB] flex items-center gap-1.5 opacity-90 group-hover:opacity-100 transition-opacity">
                <ZoomIn className="w-3 h-3" />
                <span>{isZoomed ? "Reset zoom" : "Click to inspect brushwork"}</span>
              </div>
            </div>

            {/* Thumbnail switcher (if multiple images) */}
            {design.images.length > 1 && (
              <div className="flex items-center gap-2 overflow-x-auto pb-1">
                {design.images.map((img, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => {
                      setActiveImageIndex(idx);
                      setIsZoomed(false);
                    }}
                    className={`relative w-16 h-16 rounded-xs overflow-hidden shrink-0 border transition-all ${
                      activeImageIndex === idx
                        ? "border-[#2A3F8F] ring-1 ring-[#2A3F8F]"
                        : "border-[#E2DACB] opacity-70 hover:opacity-100"
                    }`}
                  >
                    <Image
                      src={img}
                      alt={`Thumbnail ${idx + 1}`}
                      fill
                      className="object-cover"
                      sizes="64px"
                    />
                  </button>
                ))}
              </div>
            )}

            {/* Quiet notice box under Gallery */}
            <div className="bg-[#EFE8DC] rounded-xs p-4 border border-[#E2DACB] text-xs text-[#1F2430] space-y-1">
              <strong className="font-semibold block text-[#1F2430]">
                Handmade Individuality
              </strong>
              <p className="text-[#4B5263] leading-relaxed">
                Each piece is painted freehand with fine brushes and mixed pigments. Slight variations in stroke pressure, floral contours, and dye saturation are the natural signature of authentic handmade craft.
              </p>
            </div>
          </div>

          {/* RIGHT: Product Details & Dynamic WhatsApp DM Action */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-[11px] font-sans tracking-widest uppercase text-[#717A8C]">
                  {design.categoryLabel}
                </span>

                <div className="flex items-center gap-2">
                  {/* Share button */}
                  <button
                    type="button"
                    onClick={handleCopyLink}
                    className="p-1.5 rounded-xs border border-[#E2DACB] bg-white hover:bg-[#FAF6EF] text-[#1F2430] text-xs transition-colors"
                    title="Copy design link"
                    aria-label="Share design"
                  >
                    {copiedLink ? <Check className="w-3.5 h-3.5 text-[#2F5D4B]" /> : <Share2 className="w-3.5 h-3.5" />}
                  </button>

                  {/* Wishlist toggle */}
                  <button
                    type="button"
                    onClick={() => toggleWishlist(design)}
                    className="p-1.5 rounded-xs border border-[#E2DACB] bg-white hover:bg-[#FAF6EF] text-[#1F2430] transition-colors"
                    aria-label={isSaved ? "Remove from wishlist" : "Save to wishlist"}
                    title={isSaved ? "Saved" : "Save to wishlist"}
                  >
                    <Heart
                      className={`w-3.5 h-3.5 transition-colors ${
                        isSaved ? "fill-[#2A3F8F] text-[#2A3F8F]" : "text-[#717A8C]"
                      }`}
                    />
                  </button>
                </div>
              </div>

              {/* Title: Fraunces softer rounded heading */}
              <h1 className="text-3xl sm:text-4xl font-heading font-medium text-[#1F2430] tracking-normal">
                {design.name}
              </h1>

              {/* Lead Time & Handmade tag */}
              <div className="mt-2 flex items-center gap-3 text-[13px] font-body text-[#717A8C]">
                <span className="inline-flex items-center gap-1 text-[#2F5D4B] font-semibold">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Washable & Heat-Cured</span>
                </span>
                <span>•</span>
                <span className="inline-flex items-center gap-1 font-normal">
                  <Clock className="w-3.5 h-3.5 text-[#717A8C]" />
                  <span>Lead Time: {design.leadTimeDays}</span>
                </span>
              </div>
            </div>

            {/* Short Story & Inspiration */}
            <div className="border-l-2 border-[#2A3F8F] pl-3 py-0.5">
              <span className="text-[12px] font-body font-semibold uppercase tracking-wider text-[#717A8C] block mb-1">
                Inspiration
              </span>
              <p className="text-[15px] sm:text-[16px] text-[#4B5263] italic font-heading font-normal leading-[1.6]">
                &ldquo;{design.story}&rdquo;
              </p>
            </div>

            <p className="text-[16px] text-[#4B5263] leading-[1.6] font-body font-normal">
              {design.description}
            </p>

            {/* Interactive Options: "Available to Paint On" */}
            <div className="space-y-4 pt-4 border-t border-[#E2DACB]">
              <div>
                <label className="block text-xs font-semibold text-[#1F2430] uppercase tracking-wider mb-2">
                  1. Choose silhouette to paint on:
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {design.availableOn.map((item) => {
                    const isSelected = selectedProductType === item;
                    return (
                      <button
                        key={item}
                        type="button"
                        onClick={() => setSelectedProductType(item)}
                        className={`p-2.5 rounded-xs text-left text-xs transition-colors border ${
                          isSelected
                            ? "bg-[#2A3F8F] text-white border-[#2A3F8F] font-semibold"
                            : "bg-[#EFE8DC] text-[#1F2430] border-[#E2DACB] hover:border-[#1F2430]/40"
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span>{item}</span>
                          {isSelected && <Check className="w-3 h-3 text-white" />}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Color Swatches */}
              <div>
                <label className="block text-xs font-semibold text-[#1F2430] uppercase tracking-wider mb-2">
                  2. Fabric shade:{" "}
                  <span className="font-normal text-[#717A8C]">{selectedColor}</span>
                </label>
                <div className="flex items-center gap-2 flex-wrap">
                  {design.colors.map((color) => {
                    const isSelected = selectedColor === color.name;
                    return (
                      <button
                        key={color.name}
                        type="button"
                        onClick={() => setSelectedColor(color.name)}
                        className={`flex items-center gap-1.5 px-2.5 py-1 rounded-xs text-xs border transition-colors ${
                          isSelected
                            ? "border-[#2A3F8F] bg-white ring-1 ring-[#2A3F8F] font-semibold text-[#1F2430]"
                            : "border-[#E2DACB] bg-[#EFE8DC] text-[#1F2430]"
                        }`}
                      >
                        <span
                          className="w-3 h-3 rounded-xs border border-black/20"
                          style={{ backgroundColor: color.hex }}
                        />
                        <span>{color.name}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Size options */}
              <div>
                <label className="block text-xs font-semibold text-[#1F2430] uppercase tracking-wider mb-2">
                  3. Size: <span className="font-normal text-[#717A8C]">{selectedSize}</span>
                </label>
                <div className="flex items-center gap-1.5 flex-wrap">
                  {design.sizes.map((size) => {
                    const isSelected = selectedSize === size;
                    return (
                      <button
                        key={size}
                        type="button"
                        onClick={() => setSelectedSize(size)}
                        className={`px-2.5 py-1 rounded-xs text-xs transition-colors border ${
                          isSelected
                            ? "bg-[#1F2430] text-white border-[#1F2430] font-semibold"
                            : "bg-[#EFE8DC] text-[#1F2430] border-[#E2DACB] hover:border-[#1F2430]/40"
                        }`}
                      >
                        {size}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Core Ordering Flow Action Box */}
            <div className="pt-2 space-y-2.5">
              {/* Primary Action Button: Nunito Sans 700, 14-15px, no all-caps */}
              <a
                href={productWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 px-6 rounded-xs bg-[#2A3F8F] hover:bg-[#203173] text-white font-body font-bold text-[14px] sm:text-[15px] tracking-normal transition-colors text-center"
              >
                <MessageCircle className="w-4 h-4 fill-white shrink-0" />
                <span>DM for Price on WhatsApp</span>
              </a>

              {/* Secondary Action: Nunito Sans 700, 14-15px, no all-caps */}
              <a
                href={siteConfig.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-2.5 px-6 rounded-xs border border-[#2A3F8F] text-[#2A3F8F] hover:bg-[#2A3F8F] hover:text-white font-body font-bold text-[14px] sm:text-[15px] tracking-normal transition-colors text-center"
              >
                <InstagramIcon className="w-3.5 h-3.5" />
                <span>Order on Instagram (@{siteConfig.instagramHandle})</span>
              </a>
            </div>

            {/* Care Instructions */}
            <div className="pt-4 border-t border-[#E2DACB]">
              <h3 className="text-xs font-semibold text-[#1F2430] uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <Shirt className="w-3.5 h-3.5 text-[#2A3F8F]" />
                <span>Fabric Care Instructions</span>
              </h3>
              <ul className="space-y-1 text-xs text-[#4B5263]">
                {design.careInstructions.map((instruction, idx) => (
                  <li key={idx} className="flex items-start gap-1.5">
                    <span className="text-[#2A3F8F]">•</span>
                    <span>{instruction}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* RELATED DESIGNS SECTION */}
        {relatedDesigns.length > 0 && (
          <div className="mt-16 sm:mt-20 pt-10 border-t border-[#E2DACB]">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8">
              <div>
                <span className="text-[12px] font-body font-semibold tracking-widest uppercase text-[#717A8C]">
                  Related Pieces
                </span>
                <h2 className="text-[28px] lg:text-[40px] font-heading font-medium text-[#1F2430] leading-tight mt-1">
                  You Might Also Admire
                </h2>
              </div>
              <Link
                href="/shop"
                className="mt-2 sm:mt-0 text-[14px] sm:text-[15px] font-body font-semibold text-[#2A3F8F] hover:underline"
              >
                View collection →
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

      <PaintStrokeDivider color="sand" className="mt-16" />
    </div>
  );
}
