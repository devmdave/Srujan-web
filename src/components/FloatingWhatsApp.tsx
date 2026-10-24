"use client";

import React, { useState } from "react";
import { siteConfig } from "@/config/siteConfig";
import { MessageCircle, X } from "lucide-react";

export default function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(true);

  const defaultUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
    "Hi Srujan, I was looking through your hand-painted collection and would love to ask a question."
  )}`;

  return (
    <div className="fixed bottom-6 right-5 sm:bottom-8 sm:right-8 z-50 flex items-center">
      {/* Editorial tooltip note */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 mr-3 bg-white text-[#1F2430] py-1.5 px-3 rounded-xs border border-[#E2DACB] shadow-xs text-xs">
          <span>Chat with the artist</span>
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              setShowTooltip(false);
            }}
            className="text-[#717A8C] hover:text-[#1F2430] p-0.5"
            aria-label="Dismiss chat tip"
          >
            <X className="w-3 h-3" />
          </button>
        </div>
      )}

      {/* Floating Button with WhatsApp Green #25D366 ONLY */}
      <a
        href={defaultUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Srujan on WhatsApp"
        className="w-12 h-12 rounded-full bg-[#25D366] hover:bg-[#1EBE5D] text-white flex items-center justify-center transition-transform hover:scale-105 active:scale-95 shadow-md whatsapp-pulse"
      >
        <MessageCircle className="w-6 h-6 fill-white" />
      </a>
    </div>
  );
}
