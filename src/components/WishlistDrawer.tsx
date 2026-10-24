"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useWishlist } from "@/context/WishlistContext";
import { X, Trash2, MessageCircle, Heart, ArrowRight } from "lucide-react";

export default function WishlistDrawer() {
  const {
    wishlist,
    removeFromWishlist,
    clearWishlist,
    isDrawerOpen,
    setIsDrawerOpen,
    getWhatsAppWishlistLink,
  } = useWishlist();

  if (!isDrawerOpen) return null;

  const whatsappUrl = getWhatsAppWishlistLink();

  return (
    <div className="fixed inset-0 z-50 overflow-hidden" role="dialog" aria-modal="true">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/40 backdrop-blur-xs transition-opacity"
        onClick={() => setIsDrawerOpen(false)}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#FAF6EF] shadow-2xl flex flex-col border-l border-[#F0E6D6]">
          {/* Header */}
          <div className="p-5 border-b border-[#F0E6D6] bg-[#F0E6D6]/60 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="p-2 bg-[#FAF6EF] rounded-full text-[#C2552E] shadow-xs">
                <Heart className="w-5 h-5 fill-[#C2552E]" />
              </div>
              <div>
                <h2 className="font-serif font-bold text-lg text-[#2B2522]">
                  Saved Designs ({wishlist.length})
                </h2>
                <p className="text-xs text-[#5C534E]">Your handpicked favorites</p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setIsDrawerOpen(false)}
              className="p-2 rounded-lg text-[#2B2522] hover:bg-[#FAF6EF] transition-colors"
              aria-label="Close wishlist"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body */}
          <div className="flex-1 overflow-y-auto p-5">
            {wishlist.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-6">
                <div className="w-16 h-16 rounded-full bg-[#F0E6D6] flex items-center justify-center text-[#5C534E] mb-4">
                  <Heart className="w-8 h-8 stroke-1" />
                </div>
                <h3 className="font-serif text-lg font-semibold text-[#2B2522] mb-1">
                  Your wishlist is empty
                </h3>
                <p className="text-xs text-[#5C534E] max-w-xs mb-6 leading-relaxed">
                  Click the heart icon on any hand-painted design in our catalog to save it here for a combined inquiry.
                </p>
                <button
                  type="button"
                  onClick={() => setIsDrawerOpen(false)}
                  className="px-5 py-2.5 rounded-full bg-[#2F3E75] text-[#FAF6EF] text-xs font-semibold hover:bg-[#222E57] transition-colors"
                >
                  Explore Collection
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="bg-[#F0E6D6]/70 rounded-xl p-3.5 text-xs text-[#2B2522] border border-[#E2D3BE]/80">
                  <span className="font-semibold text-[#C2552E]">Artist Note: </span>
                  Since each design is painted by hand to order, there is no checkout cart. You can send all saved designs directly in one WhatsApp message to get quotes and customization advice!
                </div>

                <div className="divide-y divide-[#F0E6D6]">
                  {wishlist.map((item) => (
                    <div key={item.id} className="py-3.5 flex gap-3.5 items-center">
                      <div className="w-16 h-16 relative rounded-lg overflow-hidden bg-[#F0E6D6] shrink-0 border border-[#E2D3BE]">
                        <Image
                          src={item.images[0]}
                          alt={item.name}
                          fill
                          className="object-cover"
                          sizes="64px"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <span className="text-[10px] font-semibold tracking-wider uppercase text-[#2F3E75]">
                          {item.categoryLabel}
                        </span>
                        <h4 className="font-serif font-bold text-sm text-[#2B2522] truncate">
                          {item.name}
                        </h4>
                        <p className="text-[11px] text-[#5C534E] truncate">
                          Can be painted on: {item.availableOn.slice(0, 2).join(", ")}
                        </p>
                        <div className="mt-1">
                          <Link
                            href={`/shop/${item.id}`}
                            onClick={() => setIsDrawerOpen(false)}
                            className="text-[11px] text-[#C2552E] font-medium hover:underline inline-flex items-center gap-1"
                          >
                            <span>View story</span>
                            <ArrowRight className="w-3 h-3" />
                          </Link>
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeFromWishlist(item.id)}
                        className="p-2 text-[#7E726B] hover:text-[#C2552E] rounded-lg hover:bg-[#F0E6D6] transition-colors"
                        title="Remove from wishlist"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Footer actions */}
          {wishlist.length > 0 && (
            <div className="p-5 border-t border-[#F0E6D6] bg-[#FAF6EF] space-y-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2.5 py-3.5 px-4 rounded-full bg-[#C2552E] hover:bg-[#A64421] text-white font-semibold text-sm shadow-md transition-all duration-200"
              >
                <MessageCircle className="w-5 h-5 fill-white" />
                <span>DM My Wishlist on WhatsApp</span>
              </a>

              <div className="flex items-center justify-between text-xs pt-1">
                <button
                  type="button"
                  onClick={clearWishlist}
                  className="text-[#7E726B] hover:text-[#C2552E] underline"
                >
                  Clear all items
                </button>
                <button
                  type="button"
                  onClick={() => setIsDrawerOpen(false)}
                  className="text-[#2F3E75] font-medium hover:underline"
                >
                  Keep browsing
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
