"use client";

import React, { useState } from "react";
import Image from "next/image";
import { siteConfig, createWhatsAppUrl } from "@/config/siteConfig";
import PaintStrokeDivider from "@/components/PaintStrokeDivider";
import { ChevronDown } from "lucide-react";

export default function ContactPage() {
  const [senderName, setSenderName] = useState("");
  const [topic, setTopic] = useState("Price inquiry on a specific design");
  const [message, setMessage] = useState("");

  const directWhatsAppLink = createWhatsAppUrl(
    `Hi Srujan, my name is ${senderName || "a visitor"}.\nRegarding: ${topic}\n\n${
      message || "I would love to chat about your hand-painted pieces."
    }`
  );

  return (
    <div className="py-20 sm:py-28 bg-[#FAF7F2] text-[#1A1A1A] min-h-screen">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Magazine-Style Editorial Opening */}
        <div className="max-w-4xl mb-16 sm:mb-24">
          <h1 className="text-[42px] sm:text-[60px] lg:text-[76px] font-heading font-normal text-[#1A1A1A] leading-[1.04] tracking-normal">
            Connect with the Atelier
          </h1>
          <p className="text-[19px] sm:text-[23px] text-[#6B6B6B] font-heading italic mt-5 leading-relaxed max-w-2xl">
            &ldquo;Every piece we paint begins with a conversation.&rdquo;
          </p>
        </div>

        {/* Asymmetric Editorial Spread */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-start">
          {/* Left Column: Brand Story & Atelier Journal (Cols 1-5) */}
          <div className="lg:col-span-5 space-y-12">
            {/* Textile & Atelier Visual Element */}
            <div className="space-y-3">
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#F2ECE5] rounded-xs">
                <Image
                  src="https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=1000&q=80"
                  alt="Hand-painted textile and natural fabric drape in Srujan studio"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  priority
                />
              </div>
              <p className="text-[12px] font-body text-[#8C8479] italic leading-normal">
                Natural cottons, hand-mixed pigments & fine brushes · Ahmedabad & Bengaluru
              </p>
            </div>

            {/* Narrative Contact Sections with Whisper-Thin Rules */}
            <div className="pt-8 border-t border-[#EAE4DC] space-y-2">
              <h3 className="text-xl sm:text-2xl font-heading font-normal text-[#1A1A1A]">
                The Atelier
              </h3>
              <p className="text-[15px] text-[#1A1A1A] font-body leading-relaxed">
                {siteConfig.location}
              </p>
              <p className="text-[13px] text-[#8C8479] font-body leading-relaxed pt-1">
                Visits are welcomed by prior WhatsApp appointment to review raw fabrics, placement swatches, and works-in-progress.
              </p>
            </div>

            <div className="pt-8 border-t border-[#EAE4DC] space-y-2">
              <h3 className="text-xl sm:text-2xl font-heading font-normal text-[#1A1A1A]">
                Direct Line
              </h3>
              <div>
                <a
                  href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
                    "Hi Srujan, I am reaching out from your website contact page."
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-baseline gap-2 text-[18px] sm:text-[20px] font-body font-normal text-[#1A1A1A] hover:text-[#7A1F2B] transition-colors"
                >
                  <span>{siteConfig.whatsappDisplayNumber}</span>
                  <span className="text-[14px] text-[#7A1F2B] transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1">
                    ↗
                  </span>
                </a>
              </div>
              <p className="text-[13px] text-[#8C8479] font-body leading-relaxed pt-1">
                WhatsApp is our primary medium for quick sizing discussions, motif previews, and direct quotes. Active Monday – Saturday, 10:00 AM – 7:30 PM IST.
              </p>
            </div>

            <div className="pt-8 border-t border-[#EAE4DC] space-y-2">
              <h3 className="text-xl sm:text-2xl font-heading font-normal text-[#1A1A1A]">
                Visual Portfolio
              </h3>
              <div>
                <a
                  href={siteConfig.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-baseline gap-2 text-[18px] sm:text-[20px] font-body font-normal text-[#1A1A1A] hover:text-[#7A1F2B] transition-colors"
                >
                  <span>@{siteConfig.instagramHandle}</span>
                  <span className="text-[14px] text-[#7A1F2B] transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1">
                    ↗
                  </span>
                </a>
              </div>
              <p className="text-[13px] text-[#8C8479] font-body leading-relaxed pt-1">
                Explore our working archives, painting videos, or send screenshots of motifs you would like us to interpret.
              </p>
            </div>

            <div className="pt-8 border-t border-[#EAE4DC] space-y-2">
              <h3 className="text-xl sm:text-2xl font-heading font-normal text-[#1A1A1A]">
                Written Inquiries
              </h3>
              <div>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="group inline-flex items-baseline gap-2 text-[16px] sm:text-[17px] font-body font-normal text-[#1A1A1A] hover:text-[#7A1F2B] transition-colors"
                >
                  <span>{siteConfig.email}</span>
                  <span className="text-[14px] text-[#7A1F2B] transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1">
                    ↗
                  </span>
                </a>
              </div>
              <p className="text-[13px] text-[#8C8479] font-body leading-relaxed pt-1">
                For creative collaborations, bridal trousseau inquiries, and atelier press.
              </p>
            </div>
          </div>

          {/* Asymmetric Spacer Column on Desktop (Col 6) */}
          <div className="hidden lg:block lg:col-span-1" />

          {/* Right Column: Note to the Artist & Minimal Form (Cols 7-12) */}
          <div className="lg:col-span-6 space-y-10">
            <div>
              <h2 className="text-3xl sm:text-4xl font-heading font-normal text-[#1A1A1A] leading-tight">
                A Note to the Artist
              </h2>
              <p className="text-[15px] sm:text-[16px] text-[#6B6B6B] font-body leading-relaxed mt-3 max-w-lg">
                Tell us about an upcoming occasion, a personal motif, or silhouette you envision. We will curate our thoughts and connect with you on WhatsApp.
              </p>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                window.open(directWhatsAppLink, "_blank");
              }}
              className="space-y-10 sm:space-y-12 font-body pt-2"
            >
              {/* Name Field */}
              <div className="group">
                <label
                  htmlFor="senderName"
                  className="block text-[11px] sm:text-[12px] uppercase tracking-widest text-[#8C8479] mb-2 font-body font-normal transition-colors group-focus-within:text-[#7A1F2B]"
                >
                  Your Name
                </label>
                <input
                  id="senderName"
                  type="text"
                  required
                  placeholder="Enter your name"
                  value={senderName}
                  onChange={(e) => setSenderName(e.target.value)}
                  className="w-full bg-transparent border-b border-[#D8D2C7] focus:border-[#7A1F2B] py-3 text-[16px] sm:text-[17px] text-[#1A1A1A] placeholder:text-[#B5ADA3] rounded-none focus:outline-none transition-colors"
                />
              </div>

              {/* Topic / Nature of Inquiry */}
              <div className="group">
                <label
                  htmlFor="topic"
                  className="block text-[11px] sm:text-[12px] uppercase tracking-widest text-[#8C8479] mb-2 font-body font-normal transition-colors group-focus-within:text-[#7A1F2B]"
                >
                  Nature of Inquiry
                </label>
                <div className="relative">
                  <select
                    id="topic"
                    value={topic}
                    onChange={(e) => setTopic(e.target.value)}
                    className="w-full bg-transparent border-b border-[#D8D2C7] focus:border-[#7A1F2B] py-3 pr-8 text-[16px] sm:text-[17px] text-[#1A1A1A] rounded-none focus:outline-none cursor-pointer appearance-none transition-colors"
                  >
                    <option value="Price inquiry on a specific design" className="bg-[#FAF7F2] text-[#1A1A1A]">
                      Price inquiry on a specific design
                    </option>
                    <option value="Custom commission for wedding / gift" className="bg-[#FAF7F2] text-[#1A1A1A]">
                      Custom commission for wedding / gift
                    </option>
                    <option value="Bulk or corporate hand-painted order" className="bg-[#FAF7F2] text-[#1A1A1A]">
                      Bulk or corporate hand-painted order
                    </option>
                    <option value="Shipping or Delivery question" className="bg-[#FAF7F2] text-[#1A1A1A]">
                      Shipping or Delivery question
                    </option>
                    <option value="General question" className="bg-[#FAF7F2] text-[#1A1A1A]">
                      General question
                    </option>
                  </select>
                  <ChevronDown className="w-4 h-4 text-[#8C8479] absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
              </div>

              {/* Message Field */}
              <div className="group">
                <label
                  htmlFor="message"
                  className="block text-[11px] sm:text-[12px] uppercase tracking-widest text-[#8C8479] mb-2 font-body font-normal transition-colors group-focus-within:text-[#7A1F2B]"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  required
                  placeholder="Describe the motif, fabric shade, garment silhouette, or custom thought you have in mind..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full bg-transparent border-b border-[#D8D2C7] focus:border-[#7A1F2B] py-3 text-[16px] sm:text-[17px] text-[#1A1A1A] placeholder:text-[#B5ADA3] rounded-none focus:outline-none transition-colors resize-none leading-relaxed"
                />
              </div>

              {/* Minimal Text-Style CTA */}
              <div className="pt-4">
                <button
                  type="submit"
                  className="group inline-flex items-center gap-2.5 text-[16px] sm:text-[17px] font-body font-normal text-[#7A1F2B] hover:text-[#5E1620] tracking-wide border-b border-[#7A1F2B] hover:border-[#5E1620] pb-1.5 transition-all duration-200 cursor-pointer"
                >
                  <span>Send via WhatsApp</span>
                  <span className="text-[17px] transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1">
                    ↗
                  </span>
                </button>
                <p className="text-[12px] text-[#8C8479] mt-3 font-body font-normal leading-relaxed">
                  Opens a direct WhatsApp conversation with the artist. No pre-payment or automated cart required.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>

      <PaintStrokeDivider color="maroon" className="mt-24 sm:mt-32" />
    </div>
  );
}
