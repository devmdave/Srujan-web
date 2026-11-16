"use client";

import React, { useState } from "react";
import { siteConfig, getCustomOrderWhatsAppUrl } from "@/config/siteConfig";
import PaintStrokeDivider from "@/components/PaintStrokeDivider";
import InstagramIcon from "@/components/icons/InstagramIcon";
import {
  MessageCircle,
  Gift,
  Users,
  Heart,
  Calendar,
} from "lucide-react";

export default function CustomOrdersPage() {
  const [name, setName] = useState("");
  const [itemType, setItemType] = useState("Handmade T-Shirt");
  const [idea, setIdea] = useState("");
  const [deadline, setDeadline] = useState("");
  const [fabricColor, setFabricColor] = useState("Blush #F8EFEC");

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
      title: "Anniversary & Couple Pieces",
      desc: "Coordinated motifs, botanical flourishes, or matching hand-painted sets.",
    },
    {
      icon: Heart,
      title: "Names & Monograms",
      desc: "Personalized script or subtle calligraphy painted on linen or raw canvas.",
    },
    {
      icon: Calendar,
      title: "Festive & Wedding Ensembles",
      desc: "Temple lotuses, Kamdhenu, or floral vines for festive occasions.",
    },
    {
      icon: Users,
      title: "Custom Keepsakes",
      desc: "Handcrafted canvas totes or fabric pieces for special milestones.",
    },
  ];

  return (
    <div className="py-10 sm:py-16 bg-white text-[#1A1A1A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl mb-12">
          <h1 className="text-[32px] sm:text-[44px] font-heading font-normal text-[#1A1A1A] mt-1 tracking-normal leading-tight">
            Order a Custom Piece
          </h1>
          <p className="text-[16px] text-[#6B6B6B] mt-2 leading-[1.6] font-body font-normal">
            Have a personal thought, a favorite flower, or a gift for someone dear? We paint directly on fabric based on your vision.
          </p>
        </div>

        {/* 4 Occasion Cards with Blush background */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          {occasions.map((occ, idx) => {
            const IconC = occ.icon;
            return (
              <div
                key={idx}
                className="bg-[#F8EFEC] p-5 rounded-xs border border-[#E5E5E5] flex flex-col justify-between"
              >
                <div>
                  <IconC className="w-4 h-4 text-[#7A1F2B] mb-3" />
                  <h3 className="font-heading font-normal text-base text-[#1A1A1A] mb-1.5">
                    {occ.title}
                  </h3>
                  <p className="text-xs text-[#6B6B6B] leading-relaxed">
                    {occ.desc}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-[#E5E5E5] text-[10px] uppercase font-semibold text-[#6B6B6B]">
                  On your chosen fabric
                </div>
              </div>
            );
          })}
        </div>

        {/* Custom Order Form & Steps */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left: Custom Inquiry Form with Blush background */}
          <div className="lg:col-span-7 bg-[#F8EFEC] p-6 sm:p-8 rounded-xs border border-[#E5E5E5]">
            <div className="mb-6">
              <h2 className="text-xl sm:text-2xl font-heading font-normal text-[#1A1A1A] mt-1">
                Tell Us What You Envision
              </h2>
              <p className="text-xs text-[#6B6B6B] mt-1">
                Fill out the details below. Clicking the button opens WhatsApp with your pre-filled inquiry.
              </p>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                window.open(customOrderWhatsAppUrl, "_blank");
              }}
              className="space-y-4 text-xs font-body"
            >
              {/* Name */}
              <div>
                <label className="block font-semibold text-[#1A1A1A] mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Radhika Sharma"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xs bg-white text-[#1A1A1A] border border-[#E5E5E5] focus:outline-none focus:border-[#7A1F2B]"
                />
              </div>

              {/* Item Type & Fabric Color */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-semibold text-[#1A1A1A] mb-1">
                    Garment / Silhouette
                  </label>
                  <select
                    value={itemType}
                    onChange={(e) => setItemType(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xs bg-white text-[#1A1A1A] border border-[#E5E5E5] focus:outline-none focus:border-[#7A1F2B] cursor-pointer"
                  >
                    <option value="T-Shirt (Bio-Wash Cotton)">T-Shirt (Bio-Wash Cotton)</option>
                    <option value="Men's Linen Shirt">Men&apos;s Linen Shirt</option>
                    <option value="Traditional Jabha / Kurta">Traditional Jabha / Kurta</option>
                    <option value="Women's Kurti / Dress">Women&apos;s Kurti / Dress</option>
                    <option value="Heavy Canvas Tote Bag">Heavy Canvas Tote Bag</option>
                    <option value="Cotton Pillow / Cushion Covers">Cotton Pillow / Cushion Covers</option>
                    <option value="Tussar Silk Stole / Dupatta">Tussar Silk Stole / Dupatta</option>
                    <option value="My Own Fabric (couriered to studio)">
                      My Own Fabric (couriered to studio)
                    </option>
                    <option value="Other Custom Artwork">Other Custom Artwork</option>
                  </select>
                </div>

                <div>
                  <label className="block font-semibold text-[#1A1A1A] mb-1">
                    Fabric Shade
                  </label>
                  <select
                    value={fabricColor}
                    onChange={(e) => setFabricColor(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xs bg-white text-[#1A1A1A] border border-[#E5E5E5] focus:outline-none focus:border-[#7A1F2B] cursor-pointer"
                  >
                    <option value="Blush #F8EFEC">Blush</option>
                    <option value="Cotton White #FFFFFF">White</option>
                    <option value="Charcoal #1A1A1A">Charcoal</option>
                    <option value="Maroon #7A1F2B">Maroon</option>
                    <option value="Deep Wine #2A0E13">Deep Wine</option>
                    <option value="Open to artist recommendation">
                      Open to artist recommendation
                    </option>
                  </select>
                </div>
              </div>

              {/* Idea / Motif details */}
              <div>
                <label className="block font-semibold text-[#1A1A1A] mb-1">
                  Describe Your Motif Idea
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="e.g. A peacock feather motif along the placket, or lotus buds on a blush kurti..."
                  value={idea}
                  onChange={(e) => setIdea(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xs bg-white text-[#1A1A1A] border border-[#E5E5E5] focus:outline-none focus:border-[#7A1F2B] placeholder:text-[#6B6B6B]"
                />
              </div>

              {/* Deadline */}
              <div>
                <label className="block font-semibold text-[#1A1A1A] mb-1">
                  Needed By Date (Optional)
                </label>
                <input
                  type="text"
                  placeholder="e.g. By 15th November for a birthday"
                  value={deadline}
                  onChange={(e) => setDeadline(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xs bg-white text-[#1A1A1A] border border-[#E5E5E5] focus:outline-none focus:border-[#7A1F2B]"
                />
              </div>

              {/* Primary button: Maroon #7A1F2B with white text */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 px-4 rounded-xs bg-[#7A1F2B] hover:bg-[#5E1620] text-white font-body font-normal text-[14px] sm:text-[15px] tracking-normal transition-colors flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>Send Inquiry via WhatsApp</span>
                </button>
                <p className="text-[11px] text-[#6B6B6B] text-center mt-2">
                  No payment needed to inquire. We share sketches and estimates first.
                </p>
              </div>
            </form>
          </div>

          {/* Right: How Custom Orders Work */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white p-6 rounded-xs border border-[#E5E5E5]">
              <h3 className="font-heading font-normal text-lg text-[#1A1A1A] mb-3">
                How Custom Orders Work
              </h3>

              <div className="space-y-4 text-xs text-[#6B6B6B]">
                <div>
                  <strong className="text-[#1A1A1A] block font-semibold">
                    1. Conversation & Sketch
                  </strong>
                  We discuss your idea over WhatsApp and share a rough sketch and placement guide.
                </div>

                <div>
                  <strong className="text-[#1A1A1A] block font-semibold">
                    2. Fabric & Sizing
                  </strong>
                  We confirm garment measurements or receive your own courier fabric at our studio.
                </div>

                <div>
                  <strong className="text-[#1A1A1A] block font-semibold">
                    3. Painting in Studio
                  </strong>
                  The artist paints the piece by hand with permanent fabric pigments.
                </div>

                <div>
                  <strong className="text-[#1A1A1A] block font-semibold">
                    4. Heat-Fixing & Dispatch
                  </strong>
                  The artwork is steam-ironed for washability and couriered with tracking.
                </div>
              </div>
            </div>

            {/* Dark Box: Deep Wine #2A0E13 with white button */}
            <div className="bg-[#2A0E13] text-white p-6 rounded-xs border border-white/10">
              <h3 className="font-heading font-normal text-base mb-1.5">
                Prefer Instagram?
              </h3>
              <p className="text-xs text-white/80 mb-4 leading-relaxed">
                Send your inspiration pins or screenshots directly to our Instagram inbox.
              </p>
              {/* White button on dark section */}
              <a
                href={siteConfig.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xs bg-white text-[#2A0E13] hover:bg-white/90 font-body font-normal text-[14px] sm:text-[15px] transition-colors"
              >
                <InstagramIcon className="w-4 h-4" />
                <span>DM @{siteConfig.instagramHandle}</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <PaintStrokeDivider color="maroon" className="mt-16" />
    </div>
  );
}
