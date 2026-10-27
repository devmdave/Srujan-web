"use client";

import React, { useState } from "react";
import { siteConfig, createWhatsAppUrl } from "@/config/siteConfig";
import PaintStrokeDivider from "@/components/PaintStrokeDivider";
import InstagramIcon from "@/components/icons/InstagramIcon";
import {
  MessageCircle,
  Mail,
  MapPin,
  Clock,
} from "lucide-react";

export default function ContactPage() {
  const [senderName, setSenderName] = useState("");
  const [topic, setTopic] = useState("General Inquiry");
  const [message, setMessage] = useState("");

  const directWhatsAppLink = createWhatsAppUrl(
    `Hi Srujan, my name is ${senderName || "a visitor"}. Regarding ${topic}: ${
      message || "I would love to chat about your hand-painted pieces."
    }`
  );

  return (
    <div className="py-10 sm:py-16 bg-[#FAF6EF] text-[#1F2430]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl mb-12">
          <div className="flex items-center gap-2 mb-1">
            <span className="font-gujarati font-medium text-base sm:text-lg tracking-widest text-[#2A3F8F]">
              સૃજન
            </span>
            <span className="text-xs text-[#717A8C]">·</span>
            <span className="text-[12px] sm:text-[13px] font-body font-semibold tracking-wider uppercase text-[#717A8C]">
              Sampark · Contact Studio
            </span>
          </div>
          <h1 className="text-[32px] sm:text-[44px] font-heading font-medium text-[#1F2430] mt-1 tracking-normal leading-tight">
            Contact the Studio
          </h1>
          <p className="text-[16px] text-[#4B5263] mt-2 leading-[1.6] font-body font-normal">
            Whether you want a quote on an existing piece, have a custom wedding inquiry, or want to discuss fabric painting — reach out directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct Contact Channels */}
          <div className="lg:col-span-5 space-y-4">
            {/* WhatsApp Card */}
            <div className="bg-[#EFE8DC] p-5 rounded-xs border border-[#E2DACB]">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-xs bg-[#2A3F8F] text-white flex items-center justify-center shrink-0">
                  <MessageCircle className="w-4 h-4 fill-white" />
                </div>
                <div className="flex-1">
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-[#717A8C]">
                    Direct Chat
                  </span>
                  <h3 className="font-heading font-medium text-base text-[#1F2430] mt-0.5">
                    WhatsApp
                  </h3>
                  <p className="text-xs text-[#4B5263] mt-0.5 leading-relaxed">
                    Fastest way to talk sizing, fabric shades, and quotes with the artist.
                  </p>
                  <a
                    href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
                      "Hi Srujan, I am reaching out from your website contact page."
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-1.5 px-4 py-2 rounded-xs bg-[#2A3F8F] hover:bg-[#203173] text-white text-[14px] font-body font-bold tracking-normal transition-colors"
                  >
                    <span>Message {siteConfig.whatsappDisplayNumber}</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Instagram Card */}
            <div className="bg-[#EFE8DC] p-5 rounded-xs border border-[#E2DACB]">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-xs bg-[#16204A] text-white flex items-center justify-center shrink-0">
                  <InstagramIcon className="w-4 h-4" />
                </div>
                <div className="flex-1">
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-[#717A8C]">
                    Visual Portfolio
                  </span>
                  <h3 className="font-heading font-medium text-base text-[#1F2430] mt-0.5">
                    Instagram DMs
                  </h3>
                  <p className="text-xs text-[#4B5263] mt-0.5 leading-relaxed">
                    Send photos, references, or queries directly to our studio inbox.
                  </p>
                  <a
                    href={siteConfig.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-1.5 px-4 py-2 rounded-xs border border-[#2A3F8F] text-[#2A3F8F] hover:bg-[#2A3F8F] hover:text-white text-[14px] font-body font-bold tracking-normal transition-colors"
                  >
                    <span>@{siteConfig.instagramHandle}</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Details Card */}
            <div className="bg-[#FAF6EF] p-5 rounded-xs border border-[#E2DACB] space-y-3 text-xs text-[#4B5263]">
              <div className="flex items-start gap-2.5">
                <Mail className="w-3.5 h-3.5 text-[#2A3F8F] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#1F2430] block font-semibold">
                    Email
                  </strong>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="hover:underline text-[#2A3F8F]"
                  >
                    {siteConfig.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <MapPin className="w-3.5 h-3.5 text-[#2A3F8F] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#1F2430] block font-semibold">
                    Location
                  </strong>
                  <span>{siteConfig.location}</span>
                  <p className="text-[11px] text-[#717A8C] mt-0.5">
                    Visits by prior WhatsApp appointment.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Clock className="w-3.5 h-3.5 text-[#2A3F8F] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#1F2430] block font-semibold">
                    Studio Hours
                  </strong>
                  <span>Monday – Saturday: 10:00 AM – 7:30 PM IST</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Message Composer */}
          <div className="lg:col-span-7 bg-[#EFE8DC] p-6 sm:p-8 rounded-xs border border-[#E2DACB]">
            <span className="text-[10px] uppercase font-semibold tracking-wider text-[#717A8C]">
              Direct Message
            </span>
            <h2 className="text-xl sm:text-2xl font-heading font-medium text-[#1F2430] mt-1 mb-2">
              Send a Note to the Artist
            </h2>
            <p className="text-xs text-[#4B5263] mb-6 leading-relaxed">
              Type your note below. We will format it and open WhatsApp so you can send it in one tap.
            </p>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                window.open(directWhatsAppLink, "_blank");
              }}
              className="space-y-4 text-xs font-body"
            >
              <div>
                <label className="block font-semibold text-[#1F2430] mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Aarav Mehta"
                  value={senderName}
                  onChange={(e) => setSenderName(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xs bg-[#FAF6EF] text-[#1F2430] border border-[#E2DACB] focus:outline-none focus:border-[#2A3F8F]"
                />
              </div>

              <div>
                <label className="block font-semibold text-[#1F2430] mb-1">
                  Topic
                </label>
                <select
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xs bg-[#FAF6EF] text-[#1F2430] border border-[#E2DACB] focus:outline-none focus:border-[#2A3F8F] cursor-pointer"
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
                  <option value="General question">
                    General question
                  </option>
                </select>
              </div>

              <div>
                <label className="block font-semibold text-[#1F2430] mb-1">
                  Your Message
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="Tell us what you would like to know..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xs bg-[#FAF6EF] text-[#1F2430] border border-[#E2DACB] focus:outline-none focus:border-[#2A3F8F]"
                />
              </div>

              {/* Primary button: Nunito Sans 700, 14-15px, no all-caps */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 px-4 rounded-xs bg-[#2A3F8F] hover:bg-[#203173] text-white font-body font-bold text-[14px] sm:text-[15px] tracking-normal transition-colors flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>Send via WhatsApp</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <PaintStrokeDivider color="sand" className="mt-16" />
    </div>
  );
}
