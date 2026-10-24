"use client";

import React, { useState, useMemo, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { CATEGORIES, DESIGNS } from "@/data/designs";
import DesignCard from "@/components/DesignCard";
import PaintStrokeDivider from "@/components/PaintStrokeDivider";
import {
  Search,
  Filter,
  ArrowUpDown,
  MessageCircle,
  X,
  Info,
} from "lucide-react";
import { siteConfig } from "@/config/siteConfig";

function ShopContent() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("category") || "all";

  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState<"featured" | "newest" | "name">("featured");

  // Filter & Sort
  const filteredDesigns = useMemo(() => {
    return DESIGNS.filter((design) => {
      const matchesCategory =
        selectedCategory === "all" || design.category === selectedCategory;

      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        design.name.toLowerCase().includes(q) ||
        design.description.toLowerCase().includes(q) ||
        design.categoryLabel.toLowerCase().includes(q) ||
        design.availableOn.some((item) => item.toLowerCase().includes(q));

      return matchesCategory && matchesSearch;
    }).sort((a, b) => {
      if (sortBy === "featured") {
        return (b.isFeatured ? 1 : 0) - (a.isFeatured ? 1 : 0);
      }
      if (sortBy === "newest") {
        return (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0);
      }
      if (sortBy === "name") {
        return a.name.localeCompare(b.name);
      }
      return 0;
    });
  }, [selectedCategory, searchQuery, sortBy]);

  const activeCategoryLabel =
    CATEGORIES.find((c) => c.id === selectedCategory)?.label || "All Designs";

  return (
    <div className="py-10 sm:py-16 bg-[#FAF6EF] text-[#1F2430]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl mb-10">
          <span className="text-[11px] font-sans tracking-widest uppercase text-[#717A8C]">
            Catalog
          </span>
          <h1 className="text-3xl sm:text-5xl font-serif text-[#1F2430] mt-1 tracking-tight">
            The Collection
          </h1>
          <p className="text-xs sm:text-sm text-[#4B5263] mt-2 leading-relaxed">
            Every piece is painted by hand upon order. There are no prices shown here because we tailor the fabric, silhouette, and size to you. Click “DM for Price” to ask the artist directly.
          </p>

          {/* Simple DM notice strip */}
          <div className="mt-4 p-3 bg-[#EFE8DC] border border-[#E2DACB] rounded-xs text-xs text-[#1F2430] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2.5">
            <div className="flex items-center gap-2">
              <Info className="w-3.5 h-3.5 text-[#2A3F8F] shrink-0" />
              <span>Click “DM for Price” on any piece to chat on WhatsApp.</span>
            </div>
            <a
              href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
                "Hi Srujan, I would like to ask about custom pricing for your collection."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1 bg-[#2A3F8F] hover:bg-[#203173] text-white text-[11px] font-semibold tracking-wider uppercase rounded-xs shrink-0 transition-colors"
            >
              Ask on WhatsApp
            </a>
          </div>
        </div>

        {/* Filter Controls Bar */}
        <div className="space-y-4 mb-8">
          {/* Category Chips Scroll */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
            {CATEGORIES.map((category) => {
              const isSelected = selectedCategory === category.id;
              return (
                <button
                  key={category.id}
                  type="button"
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-3 py-1.5 rounded-xs text-xs tracking-wider uppercase whitespace-nowrap transition-colors border ${
                    isSelected
                      ? "bg-[#2A3F8F] text-white border-[#2A3F8F] font-semibold"
                      : "bg-[#EFE8DC] text-[#1F2430] border-[#E2DACB] hover:border-[#1F2430]/40"
                  }`}
                >
                  {category.label}
                  {category.id === "all" && ` (${DESIGNS.length})`}
                </button>
              );
            })}
          </div>

          {/* Search & Sort Row */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-2">
            {/* Search Input with thin border */}
            <div className="relative flex-1 max-w-md">
              <Search className="w-3.5 h-3.5 text-[#717A8C] absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search by motif or garment (e.g. Peacock, Kurti, Warli)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-8 py-2 rounded-xs bg-[#FAF6EF] text-xs text-[#1F2430] border border-[#E2DACB] focus:outline-none focus:border-[#2A3F8F] placeholder:text-[#717A8C]"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[#717A8C] hover:text-[#1F2430]"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Sort & Count */}
            <div className="flex items-center justify-between sm:justify-end gap-3 text-xs">
              <span className="text-[#717A8C]">
                {filteredDesigns.length} piece{filteredDesigns.length === 1 ? "" : "s"}
              </span>

              <div className="flex items-center gap-1.5 bg-[#EFE8DC] px-2.5 py-1.5 rounded-xs border border-[#E2DACB]">
                <ArrowUpDown className="w-3 h-3 text-[#717A8C]" />
                <span className="text-[#717A8C] hidden sm:inline">Sort:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="bg-transparent font-medium text-[#1F2430] focus:outline-none cursor-pointer"
                >
                  <option value="featured">Featured First</option>
                  <option value="newest">Newest First</option>
                  <option value="name">Alphabetical</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Active Filters Display */}
        {(selectedCategory !== "all" || searchQuery) && (
          <div className="flex items-center gap-2 mb-6 text-xs text-[#717A8C] flex-wrap">
            <span>Filtering:</span>
            {selectedCategory !== "all" && (
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-xs bg-[#2A3F8F] text-white">
                <span>{activeCategoryLabel}</span>
                <button
                  type="button"
                  onClick={() => setSelectedCategory("all")}
                  className="hover:opacity-75"
                >
                  <X className="w-2.5 h-2.5" />
                </button>
              </span>
            )}
            {searchQuery && (
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-xs bg-[#EFE8DC] text-[#1F2430] border border-[#E2DACB]">
                <span>&ldquo;{searchQuery}&rdquo;</span>
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="hover:opacity-75"
                >
                  <X className="w-2.5 h-2.5" />
                </button>
              </span>
            )}
            <button
              type="button"
              onClick={() => {
                setSelectedCategory("all");
                setSearchQuery("");
              }}
              className="text-[#2A3F8F] hover:underline font-medium ml-1"
            >
              Reset
            </button>
          </div>
        )}

        {/* Product Grid */}
        {filteredDesigns.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredDesigns.map((design) => (
              <DesignCard key={design.id} design={design} />
            ))}
          </div>
        ) : (
          <div className="bg-[#EFE8DC] rounded-xs p-12 text-center border border-[#E2DACB] my-8">
            <Filter className="w-8 h-8 text-[#717A8C] mx-auto mb-3" />
            <h3 className="font-serif text-lg text-[#1F2430] mb-1">
              No matching pieces found
            </h3>
            <p className="text-xs text-[#717A8C] max-w-sm mx-auto mb-5">
              Try another category, or ask the artist directly if we can paint your idea.
            </p>
            <div className="flex items-center justify-center gap-3">
              <button
                type="button"
                onClick={() => {
                  setSelectedCategory("all");
                  setSearchQuery("");
                }}
                className="px-4 py-2 rounded-xs border border-[#1F2430] text-[#1F2430] text-xs font-semibold"
              >
                Clear filters
              </button>
              <a
                href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
                  "Hi Srujan, I didn't see the exact motif I was looking for. Can you paint a custom design?"
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xs bg-[#2A3F8F] hover:bg-[#203173] text-white text-xs font-semibold"
              >
                Request Custom Motif
              </a>
            </div>
          </div>
        )}
      </div>

      <PaintStrokeDivider color="sand" className="mt-14" />
    </div>
  );
}

export default function ShopPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center bg-[#FAF6EF]">
          <p className="text-xs font-serif text-[#717A8C]">Loading Srujan Collection...</p>
        </div>
      }
    >
      <ShopContent />
    </Suspense>
  );
}
