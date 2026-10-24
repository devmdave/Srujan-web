"use client";

import React, { useState } from "react";
import Link from "next/link";
import { siteConfig } from "@/config/siteConfig";
import PaintStrokeDivider from "@/components/PaintStrokeDivider";
import {
  HelpCircle,
  ChevronDown,
  MessageCircle,
  ShieldCheck,
  Truck,
  CreditCard,
  Shirt,
  Sparkles,
} from "lucide-react";
import InstagramIcon from "@/components/icons/InstagramIcon";

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
      q: "Is the paint washable, or will it fade after a few washes?",
      a: "Yes, 100% washable! We use professional-grade acrylic textile pigments specially formulated for natural fibers. After painting, every piece is allowed to cure for 24 hours and then heat-set with high-temperature iron bonding. With gentle cold hand-washing and ironing on the reverse side, the colors remain vibrant for years without peeling or flaking.",
    },
    {
      category: "ordering",
      q: "Why are there no prices shown on the website? How do I order?",
      a: "Because Srujan is not a mass-production e-commerce store with factory warehouse shelves. Every piece is hand-painted on demand. You can choose whether you want a motif on a basic cotton t-shirt, an artisanal linen shirt, a pure cotton kurti, or a heavy canvas tote. Simply click 'DM for Price' on any design to chat directly with the artist on WhatsApp. We share the exact quote based on your garment and size choices.",
    },
    {
      category: "ordering",
      q: "How do I pay if there is no checkout cart?",
      a: "Payment happens directly and securely during our WhatsApp or Instagram chat via UPI (Google Pay, PhonePe, Paytm, BHIM) or direct Bank Transfer (NEFT/IMPS). We provide our verified business UPI QR code and payment receipt.",
    },
    {
      category: "ordering",
      q: "How long does it take to paint and deliver a piece?",
      a: "Standard catalog designs take 4 to 7 business days to hand-paint, dry, heat-cure, and inspect. Intricate custom commissions (like bridal kurtis or multi-figure motifs) take 7 to 12 business days. Express shipping across India typically delivers within 3 to 5 business days after dispatch with live tracking.",
    },
    {
      category: "shipping",
      q: "Do you ship all over India? What about international shipping?",
      a: "Yes! We ship all across India using trusted express couriers (Delhivery, BlueDart, India Post Speed Post). All packages are wrapped with eco-friendly butter paper, protective cushioning, and water-resistant tamper-evident outer boxing. International shipping is also available on request — just message us your country and postal code for courier rates.",
    },
    {
      category: "customs",
      q: "Can I customize the colors, garment style, or size?",
      a: "Absolutely! Customization is the very essence of Srujan. Want our 'Mayur Pankh' painted in warmer gold and terracotta instead of blue? Prefer the motif centered rather than on the chest pocket? Need plus-size (3XL/4XL) or custom chest/length measurements? Just tell us in the WhatsApp chat and we will happily adapt the painting for you.",
    },
    {
      category: "customs",
      q: "Can I send you my own garment or fabric to be painted?",
      a: "Yes! Many clients courier us their favorite white linen shirts, silk sarees, plain dupattas, or heirloom kurtas for bespoke hand-painting. Once we receive your courier at our studio, we prepare the sketch and paint your dream motif.",
    },
    {
      category: "ordering",
      q: "What is your return or exchange policy for handmade items?",
      a: "Because each piece is custom-painted specifically for you upon receiving your order, we cannot accept returns or exchanges for change of mind. However, in the rare event of transit damage or sizing discrepancy on our end, we offer a full free replacement guarantee. We always send photos of the finished piece for your approval before dispatching!",
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
    <div className="py-10 sm:py-16 bg-[#FAF6EF]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#E0A526]/20 text-[#2B2522] text-xs font-semibold mb-3">
            <HelpCircle className="w-4 h-4 text-[#E0A526]" />
            <span>Got Questions?</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-[#2B2522] tracking-tight">
            Frequently Asked Questions
          </h1>

          <p className="text-sm sm:text-base text-[#5C534E] mt-3 leading-relaxed">
            Everything you need to know about our fabric paints, washing durability, custom commissions, and the WhatsApp ordering process.
          </p>
        </div>

        {/* Tab Filters */}
        <div className="flex items-center justify-center gap-2 mb-8 flex-wrap">
          {[
            { id: "all", label: "All Questions" },
            { id: "care", label: "Paint & Wash Care" },
            { id: "ordering", label: "Ordering & Payment" },
            { id: "customs", label: "Customization" },
            { id: "shipping", label: "Pan-India Shipping" },
          ].map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => {
                setActiveTab(tab.id);
                setOpenIndex(null);
              }}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                activeTab === tab.id
                  ? "bg-[#2F3E75] text-[#FAF6EF] shadow-xs"
                  : "bg-[#F0E6D6] text-[#2B2522] hover:bg-[#E2D3BE] border border-[#E2D3BE]"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {filteredFaqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-[#F0E6D6]/80 rounded-2xl border border-[#E2D3BE] overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif font-bold text-sm sm:text-base text-[#2B2522]">
                    {faq.q}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full bg-[#FAF6EF] flex items-center justify-center text-[#2B2522] shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 bg-[#C2552E] text-white" : ""
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-[#5C534E] leading-relaxed border-t border-[#E2D3BE]/60 animate-in fade-in duration-200">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still Have Questions Box */}
        <div className="mt-14 bg-[#2F3E75] text-[#FAF6EF] rounded-3xl p-8 text-center">
          <h3 className="font-serif font-bold text-xl sm:text-2xl mb-2">
            Still have a question not covered here?
          </h3>
          <p className="text-xs sm:text-sm text-[#FAF6EF]/80 max-w-md mx-auto mb-6">
            We are just a WhatsApp message away. Ask about a specific fabric, special deadline, or custom bulk project!
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
                "Hi Srujan! I had a quick question about your hand-painted pieces."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full bg-[#C2552E] hover:bg-[#A64421] text-white font-semibold text-xs inline-flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Ask on WhatsApp</span>
            </a>
            <a
              href={siteConfig.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 text-[#FAF6EF] font-semibold text-xs border border-white/20 inline-flex items-center gap-2"
            >
              <InstagramIcon className="w-4 h-4" />
              <span>DM on Instagram</span>
            </a>
          </div>
        </div>
      </div>

      <PaintStrokeDivider color="sand" className="mt-16" />
    </div>
  );
}
