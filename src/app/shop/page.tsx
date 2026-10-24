"use client";

import React, { useState, useMemo, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { CATEGORIES, DESIGNS } from "@/data/designs";
import DesignCard from "@/components/DesignCard";
import PaintStrokeDivider from "@/components/PaintStrokeDivider";
import {
  Search,
  Filter,
  Sparkles,
  ArrowUpDown,
  MessageCircle,
  X,
  HelpCircle,
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
      // Category filter
      const matchesCategory =
        selectedCategory === "all" || design.category === selectedCategory;

      // Search filter
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
    <div className="py-10 sm:py-14 bg-[#FAF6EF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E0A526]/20 text-[#2B2522] text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#E0A526]" />
            <span>Pure Handcrafted Catalog</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-[#2B2522] tracking-tight">
            The Srujan Collection
          </h1>

          <p className="text-sm sm:text-base text-[#5C534E] mt-3 leading-relaxed">
            Every motif here is individually hand-painted with professional textile pigments. We don&apos;t display prices because every piece is customized to your preferred fabric, silhouette, and size.
          </p>

          {/* DM Ordering Note Banner */}
          <div className="mt-5 p-4 rounded-2xl bg-[#F0E6D6] border border-[#E2D3BE] text-xs text-[#2B2522] flex flex-col sm:flex-row items-center justify-between gap-3 text-left">
            <div className="flex items-start gap-2.5">
              <HelpCircle className="w-4 h-4 text-[#C2552E] shrink-0 mt-0.5" />
              <div>
                <strong className="font-semibold text-[#2B2522]">
                  How to order any piece:
                </strong>{" "}
                Click <span className="font-bold text-[#C2552E]">“DM for Price”</span> on any card to message the artist directly on WhatsApp with your size and preferred garment.
              </div>
            </div>

            <a
              href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
                "Hi Srujan! I'd like to ask about custom pricing for your collection."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 px-4 py-2 rounded-xl bg-[#C2552E] hover:bg-[#A64421] text-white font-semibold text-xs inline-flex items-center gap-1.5 shadow-xs"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-white" />
              <span>Ask a Question</span>
            </a>
          </div>
        </div>

        {/* Filter Controls Bar */}
        <div className="space-y-4 mb-8">
          {/* Category Chips Scroll */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {CATEGORIES.map((category) => {
              const isSelected = selectedCategory === category.id;
              return (
                <button
                  key={category.id}
                  type="button"
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-200 ${
                    isSelected
                      ? "bg-[#2F3E75] text-[#FAF6EF] shadow-sm"
                      : "bg-[#F0E6D6] text-[#2B2522] hover:bg-[#E2D3BE]/80 border border-[#E2D3BE]"
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
            {/* Search Input */}
            <div className="relative flex-1 max-w-md">
              <Search className="w-4 h-4 text-[#7E726B] absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search motifs, garments (e.g. Peacock, Kurti, Warli)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-9 py-2.5 rounded-xl bg-[#FAF6EF] text-xs text-[#2B2522] border border-[#E2D3BE] focus:outline-none focus:ring-2 focus:ring-[#C2552E]/30 focus:border-[#C2552E] placeholder:text-[#7E726B]"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#7E726B] hover:text-[#2B2522]"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Sort & Count */}
            <div className="flex items-center justify-between sm:justify-end gap-3">
              <span className="text-xs text-[#5C534E]">
                Showing <strong className="text-[#2B2522]">{filteredDesigns.length}</strong> piece
                {filteredDesigns.length === 1 ? "" : "s"}
              </span>

              <div className="flex items-center gap-1.5 bg-[#F0E6D6] px-3 py-1.5 rounded-xl border border-[#E2D3BE] text-xs">
                <ArrowUpDown className="w-3.5 h-3.5 text-[#5C534E]" />
                <span className="text-[#5C534E] hidden sm:inline">Sort:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="bg-transparent font-medium text-[#2B2522] focus:outline-none cursor-pointer"
                >
                  <option value="featured">Featured First</option>
                  <option value="newest">Newest First</option>
                  <option value="name">Alphabetical (A-Z)</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Active Filters Display */}
        {(selectedCategory !== "all" || searchQuery) && (
          <div className="flex items-center gap-2 mb-6 text-xs text-[#5C534E] flex-wrap">
            <span>Active filters:</span>
            {selectedCategory !== "all" && (
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-[#2F3E75] text-[#FAF6EF]">
                <span>Category: {activeCategoryLabel}</span>
                <button
                  type="button"
                  onClick={() => setSelectedCategory("all")}
                  className="hover:opacity-75"
                >
                  <X className="w-3 h-3" />
                </button>
              </span>
            )}
            {searchQuery && (
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-[#F0E6D6] text-[#2B2522] border border-[#E2D3BE]">
                <span>Query: &ldquo;{searchQuery}&rdquo;</span>
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="hover:opacity-75"
                >
                  <X className="w-3 h-3" />
                </button>
              </span>
            )}
            <button
              type="button"
              onClick={() => {
                setSelectedCategory("all");
                setSearchQuery("");
              }}
              className="text-[#C2552E] hover:underline font-medium ml-1"
            >
              Reset all
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
          <div className="bg-[#F0E6D6]/60 rounded-3xl p-12 text-center border border-[#E2D3BE] my-8">
            <Filter className="w-10 h-10 text-[#7E726B] mx-auto mb-3" />
            <h3 className="font-serif font-bold text-xl text-[#2B2522] mb-1">
              No matching hand-painted pieces found
            </h3>
            <p className="text-xs text-[#5C534E] max-w-md mx-auto mb-6">
              Try choosing another category or clearing your search. Or, request a completely custom motif!
            </p>
            <div className="flex items-center justify-center gap-3">
              <button
                type="button"
                onClick={() => {
                  setSelectedCategory("all");
                  setSearchQuery("");
                }}
                className="px-5 py-2.5 rounded-full bg-[#2F3E75] text-white text-xs font-semibold"
              >
                Clear all filters
              </button>
              <a
                href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
                  "Hi Srujan! I didn't see the exact design I was looking for in your catalog. Can you paint a custom one?"
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-full bg-[#C2552E] text-white text-xs font-semibold"
              >
                Request Custom Motif
              </a>
            </div>
          </div>
        )}
      </div>

      <PaintStrokeDivider color="mustard" className="mt-14" />
    </div>
  );
}

export default function ShopPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center bg-[#FAF6EF]">
          <div className="text-center">
            <span className="w-10 h-10 border-4 border-[#2F3E75] border-t-transparent rounded-full animate-spin inline-block" />
            <p className="text-sm font-serif mt-3 text-[#2B2522]">Loading Srujan Catalog...</p>
          </div>
        </div>
      }
    >
      <ShopContent />
    </Suspense>
  );
}
