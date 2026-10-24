"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { DesignItem } from "@/data/designs";
import { getProductWhatsAppUrl } from "@/config/siteConfig";
import { useWishlist } from "@/context/WishlistContext";
import { Heart, MessageCircle, ArrowUpRight, Sparkles } from "lucide-react";

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
    // When rendered in browser, window.location is client-side, or use canonical path
    pageUrl: typeof window !== "undefined" ? `${window.location.origin}/shop/${design.id}` : `/shop/${design.id}`,
  });

  return (
    <div className="group bg-[#F0E6D6] rounded-2xl overflow-hidden border border-[#E2D3BE] shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
      {/* Image container */}
      <div className="relative aspect-4/3 w-full overflow-hidden bg-[#FAF6EF]">
        <Link href={`/shop/${design.id}`} className="block w-full h-full">
          <Image
            src={design.images[0]}
            alt={design.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            loading="lazy"
          />
        </Link>

        {/* Badges Overlay */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-10 pointer-events-none">
          {design.isNew && (
            <span className="px-2.5 py-0.5 rounded-full bg-[#E0A526] text-[#2B2522] text-[11px] font-bold tracking-wide shadow-xs flex items-center gap-1">
              <Sparkles className="w-3 h-3" />
              <span>New Motif</span>
            </span>
          )}
          {design.isFeatured && (
            <span className="px-2.5 py-0.5 rounded-full bg-[#FAF6EF]/90 backdrop-blur-xs text-[#2B2522] text-[11px] font-medium border border-[#E2D3BE]">
              Featured
            </span>
          )}
        </div>

        {/* Wishlist Heart Button */}
        <button
          type="button"
          onClick={() => toggleWishlist(design)}
          className="absolute top-3 right-3 p-2.5 rounded-full bg-[#FAF6EF]/90 backdrop-blur-xs hover:bg-[#FAF6EF] text-[#2B2522] shadow-sm transition-all duration-200 z-10 hover:scale-110 active:scale-95"
          aria-label={isSaved ? "Remove from wishlist" : "Save to wishlist"}
          title={isSaved ? "Saved to your wishlist" : "Add to wishlist"}
        >
          <Heart
            className={`w-4 h-4 transition-colors ${
              isSaved ? "fill-[#C2552E] text-[#C2552E]" : "text-[#5C534E] hover:text-[#C2552E]"
            }`}
          />
        </button>

        {/* Fabric swatches preview */}
        <div className="absolute bottom-2.5 left-3 flex items-center gap-1.5 bg-[#FAF6EF]/85 backdrop-blur-xs px-2 py-1 rounded-full border border-[#E2D3BE]/60">
          <span className="text-[10px] text-[#5C534E] font-medium mr-0.5">Fabrics:</span>
          {design.colors.slice(0, 3).map((c, i) => (
            <span
              key={i}
              className="w-2.5 h-2.5 rounded-full border border-black/20"
              style={{ backgroundColor: c.hex }}
              title={c.name}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Category tag */}
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-[11px] font-semibold tracking-wider uppercase text-[#2F3E75]">
              {design.categoryLabel}
            </span>
            <span className="text-[11px] text-[#7E726B]">
              Handmade
            </span>
          </div>

          {/* Title */}
          <Link href={`/shop/${design.id}`}>
            <h3 className="font-serif font-bold text-lg text-[#2B2522] group-hover:text-[#C2552E] transition-colors line-clamp-1">
              {design.name}
            </h3>
          </Link>

          {/* Short description */}
          <p className="text-xs text-[#5C534E] line-clamp-2 mt-1.5 leading-relaxed">
            {design.description}
          </p>

          {/* Available On tags */}
          <div className="mt-3 flex flex-wrap gap-1">
            {design.availableOn.slice(0, 2).map((item, idx) => (
              <span
                key={idx}
                className="text-[10px] px-2 py-0.5 rounded-md bg-[#FAF6EF] text-[#5C534E] border border-[#E2D3BE]"
              >
                {item}
              </span>
            ))}
            {design.availableOn.length > 2 && (
              <span className="text-[10px] px-1.5 py-0.5 text-[#7E726B]">
                +{design.availableOn.length - 2} more
              </span>
            )}
          </div>
        </div>

        {/* Action Row */}
        <div className="mt-5 pt-4 border-t border-[#E2D3BE] flex items-center gap-2">
          {/* Primary Action: DM for Price (Terracotta with white text) */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-3.5 rounded-xl bg-[#C2552E] hover:bg-[#A64421] text-white text-xs font-semibold shadow-xs transition-all duration-200 hover:shadow-sm"
          >
            <MessageCircle className="w-3.5 h-3.5 fill-white" />
            <span>DM for Price</span>
          </a>

          {/* Secondary Link: Details */}
          <Link
            href={`/shop/${design.id}`}
            className="p-2.5 rounded-xl bg-[#FAF6EF] hover:bg-white text-[#2B2522] border border-[#E2D3BE] transition-colors"
            title="View full design story & details"
            aria-label={`View details for ${design.name}`}
          >
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
