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
        className="fixed inset-0 bg-[#16204A]/60 transition-opacity"
        onClick={() => setIsDrawerOpen(false)}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-6">
        <div className="w-screen max-w-md bg-[#FAF6EF] flex flex-col border-l border-[#E2DACB]">
          {/* Header */}
          <div className="p-5 border-b border-[#E2DACB] bg-[#EFE8DC] flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <Heart className="w-4 h-4 fill-[#2A3F8F] text-[#2A3F8F]" />
              <div>
                <h2 className="font-serif text-base font-semibold text-[#1F2430]">
                  Saved Pieces ({wishlist.length})
                </h2>
                <p className="text-[11px] text-[#717A8C]">Your personal collection</p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setIsDrawerOpen(false)}
              className="p-1.5 text-[#1F2430] hover:bg-white rounded-xs transition-colors"
              aria-label="Close wishlist"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Body */}
          <div className="flex-1 overflow-y-auto p-5">
            {wishlist.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-6">
                <Heart className="w-8 h-8 stroke-1 text-[#717A8C] mb-3" />
                <h3 className="font-serif text-base text-[#1F2430] mb-1">
                  Your wishlist is empty
                </h3>
                <p className="text-xs text-[#717A8C] max-w-xs mb-6 leading-relaxed">
                  Save pieces while browsing the catalog to ask for custom sizing and prices together.
                </p>
                <button
                  type="button"
                  onClick={() => setIsDrawerOpen(false)}
                  className="px-4 py-2 rounded-xs bg-[#2A3F8F] text-white text-xs font-semibold hover:bg-[#203173] transition-colors"
                >
                  Browse Collection
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="bg-[#EFE8DC] p-3 text-xs text-[#1F2430] border border-[#E2DACB] rounded-xs">
                  <span className="font-semibold text-[#2A3F8F]">Note: </span>
                  Every piece is painted by hand upon order. You can send all your saved pieces together in one WhatsApp message.
                </div>

                <div className="divide-y divide-[#E2DACB]">
                  {wishlist.map((item) => (
                    <div key={item.id} className="py-3 flex gap-3 items-center">
                      <div className="w-14 h-14 relative overflow-hidden bg-[#FAF6EF] shrink-0 border border-[#E2DACB] rounded-xs">
                        <Image
                          src={item.images[0]}
                          alt={item.name}
                          fill
                          className="object-cover"
                          sizes="56px"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <span className="text-[10px] font-semibold uppercase tracking-wider text-[#717A8C]">
                          {item.categoryLabel}
                        </span>
                        <h4 className="font-serif text-sm text-[#1F2430] truncate">
                          {item.name}
                        </h4>
                        <div className="mt-0.5">
                          <Link
                            href={`/shop/${item.id}`}
                            onClick={() => setIsDrawerOpen(false)}
                            className="text-[11px] text-[#2A3F8F] hover:underline inline-flex items-center gap-1"
                          >
                            <span>View story</span>
                            <ArrowRight className="w-2.5 h-2.5" />
                          </Link>
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeFromWishlist(item.id)}
                        className="p-1.5 text-[#717A8C] hover:text-[#1F2430] transition-colors"
                        title="Remove from wishlist"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Footer actions */}
          {wishlist.length > 0 && (
            <div className="p-4 border-t border-[#E2DACB] bg-[#EFE8DC] space-y-2.5">
              {/* Primary Srujan Blue button with white text */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xs bg-[#2A3F8F] hover:bg-[#203173] text-white font-semibold text-xs tracking-wide transition-colors"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>DM Wishlist on WhatsApp</span>
              </a>

              <div className="flex items-center justify-between text-xs pt-1">
                <button
                  type="button"
                  onClick={clearWishlist}
                  className="text-[#717A8C] hover:text-[#1F2430] underline"
                >
                  Clear all
                </button>
                <button
                  type="button"
                  onClick={() => setIsDrawerOpen(false)}
                  className="text-[#1F2430] font-medium hover:underline"
                >
                  Continue browsing
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
