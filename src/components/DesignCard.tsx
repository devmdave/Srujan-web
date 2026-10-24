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
}

export default function DesignCard({ design }: DesignCardProps) {
  const { isInWishlist, toggleWishlist } = useWishlist();
  const isSaved = isInWishlist(design.id);

  const defaultProduct = design.availableOn[0] || design.categoryLabel || "Handmade Piece";
  const whatsappUrl = getProductWhatsAppUrl({
    designName: design.name,
    productType: defaultProduct,
    pageUrl: typeof window !== "undefined" ? `${window.location.origin}/shop/${design.id}` : `/shop/${design.id}`,
  });

  return (
    <div className="group bg-[#EFE8DC] rounded-xs overflow-hidden border border-[#E2DACB] hover:border-[#1F2430]/40 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between">
      {/* Product image on top (portrait 4:5 ratio, neutral background) */}
      <div className="relative aspect-4/5 w-full overflow-hidden bg-[#FAF6EF]">
        <Link href={`/shop/${design.id}`} className="block w-full h-full relative">
          {/* Primary image */}
          <Image
            src={design.images[0]}
            alt={design.name}
            fill
            className="object-cover transition-opacity duration-300"
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 25vw"
            loading="lazy"
          />

          {/* Hover on desktop: second image fades in */}
          {design.images[1] && (
            <Image
              src={design.images[1]}
              alt={`${design.name} alternate view`}
              fill
              className="object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 25vw"
              loading="lazy"
            />
          )}
        </Link>

        {/* Small "New" badge on image when isNew is true (blue or white, never yellow) */}
        {design.isNew && (
          <div className="absolute top-2.5 left-2.5 z-10 pointer-events-none">
            <span className="px-2 py-0.5 rounded-xs bg-[#2A3F8F] text-white text-[10px] uppercase font-semibold tracking-wider">
              New
            </span>
          </div>
        )}

        {/* Wishlist heart in top-right corner of image */}
        <button
          type="button"
          onClick={() => toggleWishlist(design)}
          className="absolute top-2.5 right-2.5 p-2 rounded-xs bg-white text-[#1F2430] border border-[#E2DACB] hover:bg-[#FAF6EF] transition-colors z-10"
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

      {/* Content below image */}
      <div className="p-3.5 sm:p-4 flex-1 flex flex-col justify-between">
        <div>
          {/* Design name (clicking opens product detail page) */}
          <Link href={`/shop/${design.id}`}>
            <h3 className="font-serif text-sm sm:text-base text-[#1F2430] group-hover:text-[#2A3F8F] transition-colors line-clamp-1">
              {design.name}
            </h3>
          </Link>

          {/* Product type below name in small grey text */}
          <p className="text-[11px] text-[#717A8C] mt-0.5 truncate">
            {design.categoryLabel}
          </p>
        </div>

        {/* "DM for Price" button at bottom of card */}
        <div className="mt-3 pt-2.5 border-t border-[#E2DACB]">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-xs bg-[#2A3F8F] hover:bg-[#203173] text-white text-xs font-semibold tracking-wide transition-colors text-center"
          >
            <MessageCircle className="w-3.5 h-3.5 fill-white shrink-0" />
            <span>DM for Price</span>
          </a>
        </div>
      </div>
    </div>
  );
}
