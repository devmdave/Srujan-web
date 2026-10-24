"use client";

import React, { useState } from "react";
import { siteConfig, createWhatsAppUrl } from "@/config/siteConfig";
import PaintStrokeDivider from "@/components/PaintStrokeDivider";
import {
  MessageCircle,
  Mail,
  MapPin,
  Clock,
  Sparkles,
  Send,
  Phone,
  CheckCircle2,
} from "lucide-react";
import InstagramIcon from "@/components/icons/InstagramIcon";

export default function ContactPage() {
  const [senderName, setSenderName] = useState("");
  const [topic, setTopic] = useState("General Inquiry");
  const [message, setMessage] = useState("");

  const directWhatsAppLink = createWhatsAppUrl(
    `Hi Srujan! My name is ${senderName || "a visitor"}. Regarding ${topic}: ${
      message || "I'd love to chat about your hand-painted pieces!"
    }`
  );

  return (
    <div className="py-10 sm:py-16 bg-[#FAF6EF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#E0A526]/20 text-[#2B2522] text-xs font-semibold mb-3">
            <Sparkles className="w-4 h-4 text-[#E0A526]" />
            <span>We Love Hearing From You</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-[#2B2522] tracking-tight">
            Connect With the Srujan Studio
          </h1>

          <p className="text-sm sm:text-base text-[#5C534E] mt-3 leading-relaxed">
            Whether you want a quote on an existing motif, have an idea for a customized wedding gift, or just want to talk about fabric paints — we’re here.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct Contact Channels */}
          <div className="lg:col-span-5 space-y-6">
            {/* WhatsApp Card */}
            <div className="bg-[#F0E6D6] rounded-3xl p-6 sm:p-7 border border-[#E2D3BE] shadow-xs">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#25D366] text-white flex items-center justify-center shrink-0 shadow-sm">
                  <MessageCircle className="w-6 h-6 fill-white" />
                </div>
                <div className="flex-1">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#C2552E]">
                    Fastest Response (Direct DM)
                  </span>
                  <h3 className="font-serif font-bold text-lg text-[#2B2522] mt-0.5">
                    WhatsApp Chat
                  </h3>
                  <p className="text-xs text-[#5C534E] mt-1 leading-relaxed">
                    Chat directly with the artist to discuss designs, sizes, and price quotes.
                  </p>
                  <a
                    href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
                      "Hi Srujan! I'm reaching out from your website contact page."
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#25D366] hover:bg-[#1EBE5D] text-white text-xs font-semibold shadow-xs transition-colors"
                  >
                    <span>Message {siteConfig.whatsappDisplayNumber}</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Instagram Card */}
            <div className="bg-[#F0E6D6] rounded-3xl p-6 sm:p-7 border border-[#E2D3BE] shadow-xs">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#2F3E75] text-[#FAF6EF] flex items-center justify-center shrink-0 shadow-sm">
                  <InstagramIcon className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#2F3E75]">
                    Visual Portfolio & Daily DMs
                  </span>
                  <h3 className="font-serif font-bold text-lg text-[#2B2522] mt-0.5">
                    Instagram DMs
                  </h3>
                  <p className="text-xs text-[#5C534E] mt-1 leading-relaxed">
                    Send reference photos, reels, or questions straight to our Instagram inbox.
                  </p>
                  <a
                    href={siteConfig.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#2F3E75] hover:bg-[#222E57] text-[#FAF6EF] text-xs font-semibold shadow-xs transition-colors"
                  >
                    <span>@{siteConfig.instagramHandle}</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Email & Location details */}
            <div className="bg-[#FAF6EF] rounded-3xl p-6 sm:p-7 border border-[#E2D3BE] space-y-4 text-xs text-[#5C534E]">
              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-[#C2552E] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#2B2522] block font-semibold">
                    Email Inquiries
                  </strong>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="hover:underline text-[#2F3E75] font-medium"
                  >
                    {siteConfig.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#C2552E] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#2B2522] block font-semibold">
                    Studio Locations
                  </strong>
                  <span>{siteConfig.location}</span>
                  <p className="text-[11px] text-[#7E726B] mt-0.5">
                    Visits by prior WhatsApp appointment only.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-[#C2552E] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#2B2522] block font-semibold">
                    Studio Hours
                  </strong>
                  <span>Monday – Saturday: 10:00 AM – 7:30 PM IST</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Quick WhatsApp Message Composer */}
          <div className="lg:col-span-7 bg-[#F0E6D6] rounded-3xl p-6 sm:p-10 border border-[#E2D3BE] shadow-md">
            <span className="text-xs font-bold uppercase tracking-wider text-[#C2552E]">
              Quick Message Composer
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#2B2522] mt-1 mb-2">
              Send a Direct Note to the Artist
            </h2>
            <p className="text-xs text-[#5C534E] mb-6 leading-relaxed">
              Type your note below. We will format it and immediately launch WhatsApp so you can send it in one tap!
            </p>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                window.open(directWhatsAppLink, "_blank");
              }}
              className="space-y-4 text-xs"
            >
              <div>
                <label className="block font-semibold text-[#2B2522] mb-1.5">
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Aarav Mehta"
                  value={senderName}
                  onChange={(e) => setSenderName(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-[#FAF6EF] text-[#2B2522] border border-[#E2D3BE] focus:outline-none focus:ring-2 focus:ring-[#C2552E]/30 focus:border-[#C2552E]"
                />
              </div>

              <div>
                <label className="block font-semibold text-[#2B2522] mb-1.5">
                  What is this regarding?
                </label>
                <select
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-[#FAF6EF] text-[#2B2522] border border-[#E2D3BE] focus:outline-none focus:ring-2 focus:ring-[#C2552E]/30 focus:border-[#C2552E] cursor-pointer"
                >
                  <option value="Price inquiry on a specific design">
                    Price inquiry on a specific design
                  </option>
                  <option value="Custom commission for wedding / gift">
                    Custom commission for wedding / gift
                  </option>
                  <option value="Bulk or corporate hand-painted order">
                    Bulk or corporate hand-painted order
                  </option>
                  <option value="Shipping or Delivery question">
                    Shipping or Delivery question
                  </option>
                  <option value="General feedback or question">
                    General feedback or question
                  </option>
                </select>
              </div>

              <div>
                <label className="block font-semibold text-[#2B2522] mb-1.5">
                  Your Message / Question
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="Tell us what you'd like to ask..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-[#FAF6EF] text-[#2B2522] border border-[#E2D3BE] focus:outline-none focus:ring-2 focus:ring-[#C2552E]/30 focus:border-[#C2552E]"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-4 px-6 rounded-2xl bg-[#C2552E] hover:bg-[#A64421] text-white font-bold text-sm shadow-md transition-all duration-200 flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>Send via WhatsApp</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <PaintStrokeDivider color="mustard" className="mt-16" />
    </div>
  );
}
