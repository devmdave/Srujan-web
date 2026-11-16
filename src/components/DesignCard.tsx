"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { DesignItem } from "@/data/designs";
import { getProductWhatsAppUrl } from "@/config/siteConfig";
import { useWishlist } from "@/context/WishlistContext";
import { Heart, MessageCircle } from "lucide-react";

interface DesignCardProps {
  design: DesignItem;
  variant?: "default" | "dark";
}

export default function DesignCard({ design, variant = "default" }: DesignCardProps) {
  const { isInWishlist, toggleWishlist } = useWishlist();
  const isSaved = isInWishlist(design.id);
  const isDark = variant === "dark";

  const defaultProduct = design.availableOn[0] || design.categoryLabel || "Handmade Piece";
  const whatsappUrl = getProductWhatsAppUrl({
    designName: design.name,
    productType: defaultProduct,
    pageUrl: typeof window !== "undefined" ? `${window.location.origin}/shop/${design.id}` : `/shop/${design.id}`,
  });

  return (
    <div
      className={`group rounded-sm overflow-hidden border transition-all duration-300 flex flex-col justify-between h-full ${
        isDark
          ? "bg-[#2A0E13] border-white/15 hover:border-white/40 text-white"
          : "bg-white border-[#E5E5E5] hover:border-[#7A1F2B]/60 text-[#1A1A1A]"
      }`}
    >
      {/* Product image on top (portrait 4:5 ratio) with Blush background */}
      <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#F8EFEC]">
        <Link href={`/shop/${design.id}`} className="block w-full h-full relative">
          <Image
            src={design.images[0]}
            alt={design.name}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            loading="lazy"
          />
          {design.images[1] && (
            <Image
              src={design.images[1]}
              alt={`${design.name} alternate view`}
              fill
              className="object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              loading="lazy"
            />
          )}
        </Link>

        {/* Small "New" badge on image when isNew is true (maroon with white text per spec) */}
        {design.isNew && (
          <div className="absolute top-2.5 left-2.5 z-10 pointer-events-none">
            <span className="px-2 py-0.5 rounded-xs bg-[#7A1F2B] text-white text-[11px] font-body font-bold uppercase tracking-wider">
              NEW
            </span>
          </div>
        )}

        {/* Wishlist heart in top-right corner of image */}
        <button
          type="button"
          onClick={() => toggleWishlist(design)}
          className={`absolute top-2.5 right-2.5 p-2 rounded-xs border transition-colors z-10 ${
            isDark
              ? "bg-white/10 text-white border-white/20 hover:bg-white/20"
              : "bg-white text-[#1A1A1A] border-[#E5E5E5] hover:bg-gray-50"
          }`}
          aria-label={isSaved ? "Remove from wishlist" : "Save to wishlist"}
          title={isSaved ? "Saved" : "Save to wishlist"}
        >
          <Heart
            className={`w-3.5 h-3.5 transition-colors ${
              isSaved
                ? "fill-[#7A1F2B] text-[#7A1F2B]"
                : isDark
                ? "text-white/70"
                : "text-[#6B6B6B]"
            }`}
          />
        </button>
      </div>

      {/* Content below image */}
      <div className="p-3 sm:p-4 flex-1 flex flex-col justify-between">
        <div>
          {/* Design name: Work Sans 400, 15-16px, regular weight */}
          <Link href={`/shop/${design.id}`}>
            <h3
              className={`product-name font-body font-normal text-[15px] sm:text-[16px] transition-colors line-clamp-1 leading-snug ${
                isDark
                  ? "text-white group-hover:text-white/80"
                  : "text-[#1A1A1A] group-hover:text-[#7A1F2B]"
              }`}
            >
              {design.name}
            </h3>
          </Link>

          {/* Product type: Work Sans 400, 13px */}
          <p
            className={`font-body font-normal text-[13px] mt-0.5 truncate ${
              isDark ? "text-white/70" : "text-[#6B6B6B]"
            }`}
          >
            {design.categoryLabel}
          </p>
        </div>

        {/* "DM for Price" button */}
        <div
          className={`mt-3 pt-2.5 border-t ${
            isDark ? "border-white/15" : "border-[#E5E5E5]"
          }`}
        >
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`w-full inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xs text-[14px] sm:text-[15px] font-body font-normal tracking-normal transition-colors text-center ${
              isDark
                ? "bg-white text-[#2A0E13] hover:bg-white/90"
                : "bg-[#7A1F2B] hover:bg-[#5E1620] text-white"
            }`}
          >
            <MessageCircle
              className={`w-3.5 h-3.5 shrink-0 ${
                isDark ? "fill-[#2A0E13]" : "fill-white"
              }`}
            />
            <span>DM for Price</span>
          </a>
        </div>
      </div>
    </div>
  );
}
