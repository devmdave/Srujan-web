"use client";

import React, { useState, useMemo, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { CATEGORIES, DESIGNS, COLLECTIONS } from "@/data/designs";
import DesignCard from "@/components/DesignCard";
import PaintStrokeDivider from "@/components/PaintStrokeDivider";
import {
  Search,
  Filter,
  ArrowUpDown,
  X,
  Info,
} from "lucide-react";
import { siteConfig } from "@/config/siteConfig";

function ShopContent() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("category") || "all";
  const initialCollection = searchParams.get("collection") || "all";

  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);
  const [selectedCollection, setSelectedCollection] = useState<string>(initialCollection);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState<"featured" | "newest" | "name">("featured");

  // Filter & Sort
  const filteredDesigns = useMemo(() => {
    return DESIGNS.filter((design) => {
      const matchesCategory =
        selectedCategory === "all" || design.category === selectedCategory;

      const matchesCollection =
        selectedCollection === "all" || design.collection === selectedCollection;

      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        design.name.toLowerCase().includes(q) ||
        design.description.toLowerCase().includes(q) ||
        design.categoryLabel.toLowerCase().includes(q) ||
        design.availableOn.some((item) => item.toLowerCase().includes(q));

      return matchesCategory && matchesCollection && matchesSearch;
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
  }, [selectedCategory, selectedCollection, searchQuery, sortBy]);

  const activeCategoryLabel =
    CATEGORIES.find((c) => c.id === selectedCategory)?.label || "All Designs";

  return (
    <div className="py-10 sm:py-16 bg-white text-[#1A1A1A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl mb-10">
          <h1 className="text-[32px] sm:text-[44px] font-heading font-normal text-[#1A1A1A] mt-1 tracking-normal leading-tight">
            The Collection
          </h1>
          <p className="text-[16px] text-[#6B6B6B] mt-2 leading-[1.6] font-body font-normal">
            Every piece is painted by hand upon order. There are no prices shown here because we tailor the fabric, silhouette, and size to you. Click “DM for Price” to ask the artist directly.
          </p>

          {/* Simple DM notice strip with Blush background */}
          <div className="mt-4 p-3 bg-[#F8EFEC] border border-[#E5E5E5] rounded-xs text-[14px] font-body text-[#1A1A1A] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2.5">
            <div className="flex items-center gap-2">
              <Info className="w-4 h-4 text-[#7A1F2B] shrink-0" />
              <span>Click “DM for Price” on any piece to chat on WhatsApp.</span>
            </div>
            <a
              href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
                "Hi Srujan, I would like to ask about custom pricing for your collection."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-[#7A1F2B] hover:bg-[#5E1620] text-white text-[14px] font-body font-normal tracking-normal rounded-xs shrink-0 transition-colors"
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
                      ? "bg-[#7A1F2B] text-white border-[#7A1F2B] font-normal"
                      : "bg-[#F8EFEC] text-[#1A1A1A] border-[#E5E5E5] hover:border-[#7A1F2B]"
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
              <Search className="w-3.5 h-3.5 text-[#6B6B6B] absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search by motif or garment (e.g. Peacock, Kurti, Warli)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-8 py-2 rounded-xs bg-white text-xs text-[#1A1A1A] border border-[#E5E5E5] focus:outline-none focus:border-[#7A1F2B] placeholder:text-[#6B6B6B]"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[#6B6B6B] hover:text-[#1A1A1A]"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Sort & Count */}
            <div className="flex items-center justify-between sm:justify-end gap-3 text-xs">
              <span className="text-[#6B6B6B]">
                {filteredDesigns.length} piece{filteredDesigns.length === 1 ? "" : "s"}
              </span>

              <div className="flex items-center gap-1.5 bg-[#F8EFEC] px-2.5 py-1.5 rounded-xs border border-[#E5E5E5]">
                <ArrowUpDown className="w-3 h-3 text-[#6B6B6B]" />
                <span className="text-[#6B6B6B] hidden sm:inline">Sort:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="bg-transparent font-normal text-[#1A1A1A] focus:outline-none cursor-pointer"
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
        {(selectedCategory !== "all" || selectedCollection !== "all" || searchQuery) && (
          <div className="flex items-center gap-2 mb-6 text-xs text-[#6B6B6B] flex-wrap">
            <span>Filtering:</span>
            {selectedCollection !== "all" && (
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-xs bg-[#7A1F2B] text-white">
                <span>
                  Collection:{" "}
                  {COLLECTIONS.find((c) => c.id === selectedCollection)?.title ||
                    selectedCollection}
                </span>
                <button
                  type="button"
                  onClick={() => setSelectedCollection("all")}
                  className="hover:opacity-75"
                >
                  <X className="w-2.5 h-2.5" />
                </button>
              </span>
            )}
            {selectedCategory !== "all" && (
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-xs bg-[#7A1F2B] text-white">
                <span>Category: {activeCategoryLabel}</span>
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
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-xs bg-[#F8EFEC] text-[#1A1A1A] border border-[#E5E5E5]">
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
                setSelectedCollection("all");
                setSearchQuery("");
              }}
              className="text-[#7A1F2B] hover:underline font-normal ml-1"
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
          <div className="bg-[#F8EFEC] rounded-xs p-12 text-center border border-[#E5E5E5] my-8">
            <Filter className="w-8 h-8 text-[#6B6B6B] mx-auto mb-3" />
            <h3 className="font-heading font-normal text-lg text-[#1A1A1A] mb-1">
              No matching pieces found
            </h3>
            <p className="text-xs text-[#6B6B6B] max-w-sm mx-auto mb-5">
              Try another category, or ask the artist directly if we can paint your idea.
            </p>
            <div className="flex items-center justify-center gap-3">
              <button
                type="button"
                onClick={() => {
                  setSelectedCategory("all");
                  setSearchQuery("");
                }}
                className="px-4 py-2 rounded-xs border border-[#7A1F2B] text-[#7A1F2B] hover:bg-[#7A1F2B] hover:text-white font-body font-normal text-[14px] sm:text-[15px] transition-colors"
              >
                Clear filters
              </button>
              <a
                href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
                  "Hi Srujan, I didn't see the exact motif I was looking for. Can you paint a custom design?"
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xs bg-[#7A1F2B] hover:bg-[#5E1620] text-white font-body font-normal text-[14px] sm:text-[15px] transition-colors"
              >
                Request Custom Motif
              </a>
            </div>
          </div>
        )}
      </div>

      <PaintStrokeDivider color="maroon" className="mt-14" />
    </div>
  );
}

export default function ShopPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center bg-white">
          <p className="text-sm font-body font-normal text-[#6B6B6B]">Loading Srujan Collection...</p>
        </div>
      }
    >
      <ShopContent />
    </Suspense>
  );
}
