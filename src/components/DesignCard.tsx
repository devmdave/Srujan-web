"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { DesignItem } from "@/data/designs";
import { getProductWhatsAppUrl } from "@/config/siteConfig";
import { useWishlist } from "@/context/WishlistContext";
import { Heart, MessageCircle, ArrowUpRight } from "lucide-react";

interface DesignCardProps {
  design: DesignItem;
}

export default function DesignCard({ design }: DesignCardProps) {
  const { isInWishlist, toggleWishlist } = useWishlist();
  const isSaved = isInWishlist(design.id);

  const defaultProduct = design.availableOn[0] || "Handmade Fabric";
  const whatsappUrl = getProductWhatsAppUrl({
    designName: design.name,
    productType: defaultProduct,
    pageUrl: typeof window !== "undefined" ? `${window.location.origin}/shop/${design.id}` : `/shop/${design.id}`,
  });

  return (
    <div className="group bg-[#EFE8DC] rounded-xs overflow-hidden border border-[#E2DACB] hover:border-[#1F2430]/30 transition-colors flex flex-col justify-between">
      {/* Neutral image container */}
      <div className="relative aspect-4/3 w-full overflow-hidden bg-[#FAF6EF]">
        <Link href={`/shop/${design.id}`} className="block w-full h-full">
          <Image
            src={design.images[0]}
            alt={design.name}
            fill
            className="object-cover group-hover:scale-103 transition-transform duration-300 ease-out"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            loading="lazy"
          />
        </Link>

        {/* Badges Overlay */}
        <div className="absolute top-2.5 left-2.5 flex flex-col gap-1 z-10 pointer-events-none">
          {design.isNew && (
            <span className="px-2 py-0.5 rounded-xs bg-[#2A3F8F] text-white text-[10px] uppercase font-semibold tracking-wider">
              New
            </span>
          )}
        </div>

        {/* Wishlist Button */}
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

      {/* Content */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Category */}
          <div className="flex items-center justify-between mb-1">
            <span className="text-[10px] uppercase tracking-wider font-semibold text-[#717A8C]">
              {design.categoryLabel}
            </span>
            <span className="text-[10px] text-[#717A8C]">
              Hand-painted
            </span>
          </div>

          {/* Title */}
          <Link href={`/shop/${design.id}`}>
            <h3 className="font-serif text-base sm:text-lg text-[#1F2430] group-hover:text-[#2A3F8F] transition-colors line-clamp-1">
              {design.name}
            </h3>
          </Link>

          {/* Description */}
          <p className="text-xs text-[#4B5263] line-clamp-2 mt-1 leading-relaxed">
            {design.description}
          </p>

          {/* Available On tags */}
          <div className="mt-3 flex flex-wrap gap-1">
            {design.availableOn.slice(0, 2).map((item, idx) => (
              <span
                key={idx}
                className="text-[10px] px-1.5 py-0.5 rounded-xs bg-[#FAF6EF] text-[#4B5263] border border-[#E2DACB]"
              >
                {item}
              </span>
            ))}
            {design.availableOn.length > 2 && (
              <span className="text-[10px] text-[#717A8C] self-center">
                +{design.availableOn.length - 2}
              </span>
            )}
          </div>
        </div>

        {/* Action Row */}
        <div className="mt-4 pt-3 border-t border-[#E2DACB] flex items-center gap-2">
          {/* Primary Action Button: Srujan Blue with White text */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-xs bg-[#2A3F8F] hover:bg-[#203173] text-white text-xs font-semibold tracking-wide transition-colors text-center"
          >
            <MessageCircle className="w-3.5 h-3.5 fill-white" />
            <span>DM for Price</span>
          </a>

          {/* Secondary Link: Details */}
          <Link
            href={`/shop/${design.id}`}
            className="p-2 rounded-xs bg-[#FAF6EF] hover:bg-white text-[#1F2430] border border-[#E2DACB] transition-colors"
            title="View full piece"
            aria-label={`View ${design.name}`}
          >
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
