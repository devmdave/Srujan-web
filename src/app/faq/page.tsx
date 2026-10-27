"use client";

import React, { useState } from "react";
import Link from "next/link";
import { siteConfig } from "@/config/siteConfig";
import PaintStrokeDivider from "@/components/PaintStrokeDivider";
import InstagramIcon from "@/components/icons/InstagramIcon";
import {
  ChevronDown,
  MessageCircle,
} from "lucide-react";

interface FAQItem {
  q: string;
  a: string;
  category: "care" | "ordering" | "shipping" | "customs";
}

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [activeTab, setActiveTab] = useState<string>("all");

  const faqs: FAQItem[] = [
    {
      category: "care",
      q: "Is the paint washable, or will it fade over time?",
      a: "Yes, 100% washable. We use professional-grade acrylic fabric pigments formulated specifically for natural fibers. After painting, every piece is air-cured for 24 hours and then heat-set with high-temperature iron bonding. With gentle cold hand-washing and ironing on the reverse, the colors remain vibrant for years without peeling or flaking.",
    },
    {
      category: "ordering",
      q: "Why are there no prices shown on the website? How do I order?",
      a: "Because Srujan is not a mass-production warehouse. Every piece is hand-painted on demand. You can choose whether you want a motif on a cotton t-shirt, an artisanal linen shirt, a pure cotton kurti, or a heavy canvas tote. Simply click 'DM for Price' on any design to message the artist on WhatsApp. We share the exact quote based on your garment and size choices.",
    },
    {
      category: "ordering",
      q: "How do I pay if there is no checkout cart?",
      a: "Payment happens directly and securely during our WhatsApp or Instagram chat via UPI (Google Pay, PhonePe, Paytm, BHIM) or direct Bank Transfer (NEFT/IMPS). We provide our verified business UPI QR code and payment confirmation.",
    },
    {
      category: "ordering",
      q: "How long does it take to paint and deliver a piece?",
      a: "Standard catalog designs take 4 to 7 business days to hand-paint, dry, heat-cure, and inspect. Intricate custom commissions (like bridal kurtis or multi-figure motifs) take 7 to 12 business days. Express shipping across India typically delivers within 3 to 5 business days after dispatch with live tracking.",
    },
    {
      category: "shipping",
      q: "Do you ship all over India? What about international shipping?",
      a: "Yes. We ship across India using trusted express couriers (Delhivery, BlueDart, India Post Speed Post). All packages are wrapped with eco-friendly butter paper, protective cushioning, and water-resistant boxing. International shipping is also available on request — just message us your country and postal code for courier rates.",
    },
    {
      category: "customs",
      q: "Can I customize the colors, garment style, or size?",
      a: "Absolutely. Customization is the very essence of Srujan. Want our 'Mayur Pankh' in softer shades? Prefer the motif centered rather than on the chest pocket? Need plus-size or custom measurements? Just tell us in the WhatsApp chat and we will happily adapt the painting for you.",
    },
    {
      category: "customs",
      q: "Can I send you my own garment or fabric to be painted?",
      a: "Yes. Many clients courier us their favorite white linen shirts, silk sarees, plain dupattas, or heirloom kurtas for bespoke hand-painting. Once we receive your courier at our studio, we prepare the sketch and paint your chosen motif.",
    },
    {
      category: "ordering",
      q: "What is your return or exchange policy for handmade items?",
      a: "Because each piece is custom-painted specifically for you upon receiving your order, we cannot accept returns for change of mind. However, in the rare event of transit damage or sizing discrepancy on our end, we offer a full free replacement guarantee. We always send photos of the finished piece for your approval before dispatching.",
    },
    {
      category: "care",
      q: "How should I wash and care for my hand-painted garment?",
      a: "Follow these simple tips to keep your artwork radiant: 1) Gentle hand wash inside-out in cold water; 2) Use a mild liquid detergent; 3) Never use bleach, harsh stain removers, or wire scrub brushes on the painted area; 4) Dry in partial shade inside-out; 5) Always iron on the reverse side using medium cotton/linen heat.",
    },
  ];

  const filteredFaqs = faqs.filter((faq) => {
    if (activeTab === "all") return true;
    return faq.category === activeTab;
  });

  return (
    <div className="py-10 sm:py-16 bg-[#FAF6EF] text-[#1F2430]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl mb-12">
          <div className="flex items-center gap-2 mb-1">
            <span className="font-gujarati font-medium text-base sm:text-lg tracking-widest text-[#2A3F8F]">
              સૃજન
            </span>
            <span className="text-xs text-[#717A8C]">·</span>
            <span className="text-[12px] sm:text-[13px] font-body font-semibold tracking-wider uppercase text-[#717A8C]">
              Margdarshan · Questions & Care
            </span>
          </div>
          <h1 className="text-[32px] sm:text-[44px] font-heading font-medium text-[#1F2430] mt-1 tracking-normal leading-tight">
            Frequently Asked Questions
          </h1>
          <p className="text-[16px] text-[#4B5263] mt-2 leading-[1.6] font-body font-normal">
            Everything you need to know about our fabric paints, washing durability, custom commissions, and the WhatsApp ordering process.
          </p>
        </div>

        {/* Tab Filters */}
        <div className="flex items-center gap-1.5 mb-8 flex-wrap">
          {[
            { id: "all", label: "All Questions" },
            { id: "care", label: "Paint & Care" },
            { id: "ordering", label: "Ordering & Payment" },
            { id: "customs", label: "Customization" },
            { id: "shipping", label: "Shipping" },
          ].map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => {
                setActiveTab(tab.id);
                setOpenIndex(null);
              }}
              className={`px-3 py-1.5 rounded-xs text-xs tracking-wider uppercase transition-colors border ${
                activeTab === tab.id
                  ? "bg-[#2A3F8F] text-white border-[#2A3F8F] font-semibold"
                  : "bg-[#EFE8DC] text-[#1F2430] border-[#E2DACB] hover:border-[#1F2430]/40"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Accordion List */}
        <div className="space-y-2.5">
          {filteredFaqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-[#EFE8DC] rounded-xs border border-[#E2DACB] overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full p-4 text-left flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-heading font-medium text-sm sm:text-base text-[#1F2430]">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-[#717A8C] shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-[#2A3F8F]" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-4 pb-4 pt-1 text-xs text-[#4B5263] leading-relaxed border-t border-[#E2DACB]">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Dark Box: Deep Indigo #16204A with white buttons */}
        <div className="mt-14 bg-[#16204A] text-white rounded-xs p-8 sm:p-10 border border-white/10 text-left sm:text-center">
          <h3 className="font-heading font-medium text-xl sm:text-2xl text-white mb-2">
            Have a question not listed here?
          </h3>
          <p className="text-xs text-white/80 max-w-md mx-auto mb-6 leading-relaxed">
            Message us anytime on WhatsApp. We are happy to advise on fabric care, custom sizes, or delivery dates.
          </p>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3">
            {/* White button on dark section: Nunito Sans 700, 14-15px, no all-caps */}
            <a
              href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
                "Hi Srujan, I had a quick question about your hand-painted pieces."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xs bg-white text-[#16204A] hover:bg-[#FAF6EF] font-body font-bold text-[14px] sm:text-[15px] tracking-normal inline-flex items-center justify-center gap-2 transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-[#16204A]" />
              <span>Ask on WhatsApp</span>
            </a>
            {/* Outlined white button on dark section: Nunito Sans 700, 14-15px, no all-caps */}
            <a
              href={siteConfig.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xs border border-white text-white hover:bg-white hover:text-[#16204A] font-body font-bold text-[14px] sm:text-[15px] tracking-normal inline-flex items-center justify-center gap-2 transition-colors"
            >
              <InstagramIcon className="w-3.5 h-3.5" />
              <span>DM on Instagram</span>
            </a>
          </div>
        </div>
      </div>

      <PaintStrokeDivider color="sand" className="mt-16" />
    </div>
  );
}
