"use client";

import React, { useState } from "react";
import Image from "next/image";
import { siteConfig, getCustomOrderWhatsAppUrl } from "@/config/siteConfig";
import PaintStrokeDivider from "@/components/PaintStrokeDivider";
import {
  Palette,
  MessageCircle,
  Gift,
  Users,
  Sparkles,
  Calendar,
  Send,
  CheckCircle2,
  Brush,
  Heart,
  HelpCircle,
} from "lucide-react";
import InstagramIcon from "@/components/icons/InstagramIcon";

export default function CustomOrdersPage() {
  const [name, setName] = useState("");
  const [itemType, setItemType] = useState("Handmade T-Shirt");
  const [idea, setIdea] = useState("");
  const [deadline, setDeadline] = useState("");
  const [fabricColor, setFabricColor] = useState("Warm Sand #F0E6D6");

  const customOrderWhatsAppUrl = getCustomOrderWhatsAppUrl({
    name: name.trim(),
    itemType,
    idea: idea.trim() || "I have a custom motif idea in mind.",
    deadline: deadline.trim(),
    fabricColor,
  });

  const occasions = [
    {
      icon: Gift,
      title: "Anniversary & Couple Sets",
      desc: "Coordinated motifs, romantic botanical flourishes, or matching hand-painted Jabha and Kurti ensembles.",
    },
    {
      icon: Heart,
      title: "Name & Monogram Gifts",
      desc: "Personalized calligraphy or Devnagari scripts painted delicately on raw linen or canvas.",
    },
    {
      icon: Sparkles,
      title: "Wedding Trousseau & Mehendi",
      desc: "Festive motifs like Pichwai Kamdhenu, temple lotuses, or marigolds for bridesmaid stoles & kurtas.",
    },
    {
      icon: Users,
      title: "Bulk & Corporate Keepsakes",
      desc: "Handcrafted tote bags, diaries, or sustainable fabric gifts that stand out from mundane corporate merchandise.",
    },
  ];

  return (
    <div className="py-10 sm:py-16 bg-[#FAF6EF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#E0A526]/20 text-[#2B2522] text-xs font-semibold mb-3">
            <Palette className="w-4 h-4 text-[#E0A526]" />
            <span>Bespoke Hand-Painted Commissions</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-[#2B2522] tracking-tight">
            Order a Custom Piece
          </h1>

          <p className="text-sm sm:text-base text-[#5C534E] mt-3 leading-relaxed">
            Have a personal story you want to wear? A favorite quote, your family flower, or a gift for someone dearest to you? We translate your sentiment into living brushstrokes.
          </p>
        </div>

        {/* 4 Occasion Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {occasions.map((occ, idx) => {
            const IconC = occ.icon;
            return (
              <div
                key={idx}
                className="bg-[#F0E6D6]/70 rounded-2xl p-6 border border-[#E2D3BE] flex flex-col justify-between hover:bg-[#F0E6D6] transition-colors"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#2F3E75] text-[#FAF6EF] flex items-center justify-center mb-4">
                    <IconC className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif font-bold text-lg text-[#2B2522] mb-1.5">
                    {occ.title}
                  </h3>
                  <p className="text-xs text-[#5C534E] leading-relaxed">
                    {occ.desc}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-[#E2D3BE]/60 text-[11px] font-semibold text-[#C2552E]">
                  Available on all fabrics
                </div>
              </div>
            );
          })}
        </div>

        {/* Custom Order Form & Process Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left: Interactive Custom Inquiry Form */}
          <div className="lg:col-span-7 bg-[#F0E6D6] rounded-3xl p-6 sm:p-10 border border-[#E2D3BE] shadow-md">
            <div className="mb-6">
              <span className="text-xs font-bold text-[#C2552E] uppercase tracking-wider">
                Direct WhatsApp Inquiry Generator
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#2B2522] mt-1">
                Tell Us What You Envision
              </h2>
              <p className="text-xs text-[#5C534E] mt-1.5">
                Fill out the details below. When you click the button, a formatted message will open instantly in WhatsApp directly to the artist!
              </p>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                window.open(customOrderWhatsAppUrl, "_blank");
              }}
              className="space-y-4 text-xs"
            >
              {/* Name */}
              <div>
                <label className="block font-semibold text-[#2B2522] mb-1.5">
                  Your Full Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Radhika Sharma"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-[#FAF6EF] text-[#2B2522] border border-[#E2D3BE] focus:outline-none focus:ring-2 focus:ring-[#C2552E]/30 focus:border-[#C2552E]"
                />
              </div>

              {/* Item Type */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-semibold text-[#2B2522] mb-1.5">
                    What Item Would You Like Us to Paint?
                  </label>
                  <select
                    value={itemType}
                    onChange={(e) => setItemType(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-[#FAF6EF] text-[#2B2522] border border-[#E2D3BE] focus:outline-none focus:ring-2 focus:ring-[#C2552E]/30 focus:border-[#C2552E] cursor-pointer"
                  >
                    <option value="T-Shirt (Bio-Wash Cotton)">T-Shirt (Bio-Wash Cotton)</option>
                    <option value="Men's Linen Shirt">Men&apos;s Linen Shirt</option>
                    <option value="Traditional Jabha / Kurta">Traditional Jabha / Kurta</option>
                    <option value="Women's Kurti / Dress">Women&apos;s Kurti / Dress</option>
                    <option value="Heavy Canvas Tote Bag">Heavy Canvas Tote Bag</option>
                    <option value="Cotton Pillow / Cushion Covers">Cotton Pillow / Cushion Covers</option>
                    <option value="Tussar Silk Stole / Dupatta">Tussar Silk Stole / Dupatta</option>
                    <option value="My Own Fabric (I will courier to studio)">
                      My Own Fabric (I will courier to studio)
                    </option>
                    <option value="Other Custom Artwork">Other Custom Artwork</option>
                  </select>
                </div>

                {/* Fabric Color */}
                <div>
                  <label className="block font-semibold text-[#2B2522] mb-1.5">
                    Preferred Fabric Color
                  </label>
                  <select
                    value={fabricColor}
                    onChange={(e) => setFabricColor(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-[#FAF6EF] text-[#2B2522] border border-[#E2D3BE] focus:outline-none focus:ring-2 focus:ring-[#C2552E]/30 focus:border-[#C2552E] cursor-pointer"
                  >
                    <option value="Warm Sand #F0E6D6">Warm Sand</option>
                    <option value="Cotton White #FAF6EF">Cotton White</option>
                    <option value="Raw Charcoal #2B2522">Raw Charcoal</option>
                    <option value="Deep Indigo #2F3E75">Deep Indigo</option>
                    <option value="Sage / Deep Green">Sage / Deep Green</option>
                    <option value="Earthy Mustard">Earthy Mustard</option>
                    <option value="Not sure / Open to artist recommendation">
                      Open to artist recommendation
                    </option>
                  </select>
                </div>
              </div>

              {/* Idea / Motif details */}
              <div>
                <label className="block font-semibold text-[#2B2522] mb-1.5">
                  Describe Your Motif / Concept Idea
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="e.g. A couple portrait silhouette with marigold vines, or a peacock feather with personalized wedding initials on the chest placket..."
                  value={idea}
                  onChange={(e) => setIdea(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-[#FAF6EF] text-[#2B2522] border border-[#E2D3BE] focus:outline-none focus:ring-2 focus:ring-[#C2552E]/30 focus:border-[#C2552E] placeholder:text-[#7E726B]"
                />
              </div>

              {/* Deadline */}
              <div>
                <label className="block font-semibold text-[#2B2522] mb-1.5">
                  Needed By Date (Optional)
                </label>
                <input
                  type="text"
                  placeholder="e.g. In 2 weeks, or by 15th November for a birthday"
                  value={deadline}
                  onChange={(e) => setDeadline(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-[#FAF6EF] text-[#2B2522] border border-[#E2D3BE] focus:outline-none focus:ring-2 focus:ring-[#C2552E]/30 focus:border-[#C2552E]"
                />
              </div>

              {/* Submit Button (Opens WhatsApp with pre-filled details) */}
              <div className="pt-3">
                <button
                  type="submit"
                  className="w-full py-4 px-6 rounded-2xl bg-[#C2552E] hover:bg-[#A64421] text-white font-bold text-sm shadow-md transition-all duration-200 flex items-center justify-center gap-2.5"
                >
                  <MessageCircle className="w-5 h-5 fill-white" />
                  <span>Send Custom Inquiry via WhatsApp</span>
                </button>
                <p className="text-[11px] text-[#5C534E] text-center mt-2">
                  No advance payment needed to discuss. We will share a sketch and quotation first.
                </p>
              </div>
            </form>
          </div>

          {/* Right: How Custom Orders Unfold & FAQs */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#FAF6EF] rounded-3xl p-6 sm:p-8 border border-[#E2D3BE]">
              <h3 className="font-serif font-bold text-xl text-[#2B2522] mb-4">
                How Custom Commissions Work
              </h3>

              <div className="space-y-4 text-xs text-[#5C534E]">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#E0A526] text-[#2B2522] flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                    1
                  </div>
                  <div>
                    <strong className="text-[#2B2522] block font-semibold">
                      Discussion & Rough Charcoal Sketch
                    </strong>
                    We chat over WhatsApp, understand your concept, and share a rough sketch and placement mock-up.
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#E0A526] text-[#2B2522] flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                    2
                  </div>
                  <div>
                    <strong className="text-[#2B2522] block font-semibold">
                      Fabric & Sizing Confirmation
                    </strong>
                    We provide the exact garment measurements or receive your own courier fabric at our studio.
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#E0A526] text-[#2B2522] flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                    3
                  </div>
                  <div>
                    <strong className="text-[#2B2522] block font-semibold">
                      Hand-Painting & Video Work-in-Progress
                    </strong>
                    We send you a photo or short video clip while your piece is being painted at our studio table.
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#E0A526] text-[#2B2522] flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                    4
                  </div>
                  <div>
                    <strong className="text-[#2B2522] block font-semibold">
                      Heat-Fixing & Safe Dispatch
                    </strong>
                    The pigment is steam cured for permanent washability and dispatched with live courier tracking.
                  </div>
                </div>
              </div>
            </div>

            {/* Prefer Instagram Box */}
            <div className="bg-[#2F3E75] text-[#FAF6EF] rounded-3xl p-6 sm:p-8">
              <h3 className="font-serif font-bold text-lg mb-2">
                Prefer to chat on Instagram?
              </h3>
              <p className="text-xs text-[#FAF6EF]/80 mb-5 leading-relaxed">
                Send us your reference pins or screenshots directly in our DMs. We are active daily!
              </p>
              <a
                href={siteConfig.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-[#2F3E75] font-semibold text-xs shadow-sm hover:bg-[#FAF6EF] transition-colors"
              >
                <InstagramIcon className="w-4 h-4" />
                <span>DM @{siteConfig.instagramHandle}</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <PaintStrokeDivider color="sand" className="mt-16" />
    </div>
  );
}
