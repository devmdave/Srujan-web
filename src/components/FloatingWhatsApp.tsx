"use client";

import React, { useState } from "react";
import { siteConfig } from "@/config/siteConfig";
import { MessageCircle, X } from "lucide-react";

export default function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(true);

  const defaultUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
    "Hi Srujan! I'm browsing your hand-painted collection and would love to ask about your designs."
  )}`;

  return (
    <div className="fixed bottom-6 right-5 sm:bottom-8 sm:right-8 z-50 flex items-center group">
      {/* Tooltip speech bubble */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 mr-3 bg-[#FAF6EF] text-[#2B2522] py-2 px-3.5 rounded-2xl shadow-lg border border-[#F0E6D6] animate-in fade-in slide-in-from-right-4 duration-300">
          <div className="text-xs">
            <p className="font-semibold text-[#2B2522]">Chat with the artist</p>
            <p className="text-[11px] text-[#5C534E]">Ask for prices or custom ideas</p>
          </div>
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              setShowTooltip(false);
            }}
            className="text-[#5C534E] hover:text-[#2B2522] p-0.5 rounded-full"
            aria-label="Dismiss chat tip"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Button with WhatsApp Green #25D366 */}
      <a
        href={defaultUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Srujan on WhatsApp"
        className="w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-xl hover:scale-105 active:scale-95 transition-all duration-200 whatsapp-pulse focus:outline-none focus:ring-4 focus:ring-[#25D366]/40"
      >
        <MessageCircle className="w-7 h-7 fill-white" />
      </a>
    </div>
  );
}
