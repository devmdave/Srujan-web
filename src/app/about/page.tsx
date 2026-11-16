import React from "react";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/siteConfig";
import PaintStrokeDivider from "@/components/PaintStrokeDivider";
import {
  MessageCircle,
} from "lucide-react";

export const metadata = {
  title: "Our Story & Craft | Srujan Handpainted",
  description:
    "Learn how Srujan was born from slow, tactile Indian fabric painting and the belief that everyday clothing should feel like living art.",
};

export default function AboutPage() {
  const materials = [
    {
      title: "Archival Non-Toxic Fabric Pigments",
      desc: "We formulate with water-based textile pigments that bond into natural fibers without feeling thick, rubbery, or synthetic.",
    },
    {
      title: "100% Breathable Natural Fibers",
      desc: "Our garments and home textiles are woven from unbleached organic cotton, handspun khadi, raw linen, and soft Chanderi silk.",
    },
    {
      title: "Fine Camel Hair Brushes",
      desc: "Zero screen printing or heat transfers. Every feather vane, leaf outline, and floral border is painted with size 000 liner brushes.",
    },
    {
      title: "Heat-Fixation & Molecular Curing",
      desc: "After room-temperature air curing, high heat permanently fuses the pigment polymers with the fabric threads for wash durability.",
    },
  ];

  return (
    <div className="py-10 sm:py-16 bg-white text-[#1A1A1A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-14">
          <h1 className="text-[32px] sm:text-[44px] font-heading font-normal text-[#1A1A1A] tracking-normal leading-tight">
            Art Built by Hand, One Brushstroke at a Time
          </h1>
          <p className="text-[16px] sm:text-[18px] text-[#6B6B6B] mt-3 font-heading italic font-normal leading-[1.6]">
            &ldquo;We wanted clothes that carry the fragrance of wet pigments, the pulse of a human hand, and an individuality no factory machine can reproduce.&rdquo;
          </p>
        </div>

        {/* Origin Story */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-16">
          <div className="lg:col-span-6 border border-[#E5E5E5] bg-[#F8EFEC] p-3 rounded-xs">
            <div className="relative aspect-4/3 w-full bg-white overflow-hidden rounded-xs border border-[#E5E5E5]">
              <Image
                src="https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=1000&q=80"
                alt="Artist hand-painting floral artwork at studio desk"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 600px"
              />
            </div>
            <div className="pt-2 text-[11px] text-[#6B6B6B]">
              Studio table • Ahmedabad & Bengaluru
            </div>
          </div>

          <div className="lg:col-span-6 space-y-4 text-xs sm:text-sm text-[#6B6B6B] leading-relaxed">
            <h2 className="text-xl sm:text-2xl font-heading font-normal text-[#1A1A1A] leading-snug">
              In a world of identical printed garments, we chose the slow craft of fabric painting.
            </h2>
            <p>
              Srujan started from a quiet discomfort. Walking through stores, everything felt identical: tens of thousands of garments churned through digital machines, printed with synthetic inks.
            </p>
            <p>
              As painters, our canvas had always been stretched paper and linen boards. One morning, we laid a plain raw cotton jabha on the table, picked up camel hair brushes, and painted a peacock plume across the chest. When we wore it out, people stopped to touch the fabric and ask about the strokes.
            </p>
            <p>
              In Sanskrit, <span className="text-[#1A1A1A] font-heading font-normal">Srujan (<span className="font-gujarati font-normal">સૃજન</span>)</span> means purposeful creation. We committed to that premise: every garment, tote, and pillow cover leaving our studio would be touched by real brushes and mixed by real hands.
            </p>
          </div>
        </div>

        <PaintStrokeDivider color="maroon" className="my-8" />

        {/* Craft Philosophy */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-16">
          <div className="lg:col-span-6 space-y-4 text-xs sm:text-sm text-[#6B6B6B] leading-relaxed">
            <h2 className="text-xl sm:text-2xl font-heading font-normal text-[#1A1A1A] leading-snug">
              Slight variation is not a flaw — it is the soul of the work.
            </h2>
            <p>
              When a person paints on fabric, no two pressure points are the same. Natural dyes absorb slightly differently into handspun khadi fibers. A petal might have a slightly deeper shade on one side than another.
            </p>
            <p>
              We celebrate that. When you wear a Srujan piece, you wear something that exists nowhere else in the world in that exact form.
            </p>
          </div>

          <div className="lg:col-span-6 border border-[#E5E5E5] bg-[#F8EFEC] p-3 rounded-xs">
            <div className="relative aspect-4/3 w-full bg-white overflow-hidden rounded-xs border border-[#E5E5E5]">
              <Image
                src="https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=1000&q=80"
                alt="Brushwork on handloom cotton shirt"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 600px"
              />
            </div>
            <div className="pt-2 text-[11px] text-[#6B6B6B]">
              Natural woven cotton slub
            </div>
          </div>
        </div>

        {/* Materials Grid with Blush background */}
        <div className="bg-[#F8EFEC] p-6 sm:p-10 rounded-xs border border-[#E5E5E5] mb-16">
          <div className="max-w-xl mb-8">
            <h2 className="text-xl sm:text-2xl font-heading font-normal text-[#1A1A1A]">
              What Goes Onto the Fabric
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {materials.map((mat, i) => (
              <div
                key={i}
                className="bg-white p-5 rounded-xs border border-[#E5E5E5]"
              >
                <span className="text-xs font-mono text-[#6B6B6B]">0{i + 1}</span>
                <h3 className="font-heading font-normal text-base text-[#1A1A1A] mt-1 mb-1">
                  {mat.title}
                </h3>
                <p className="text-xs text-[#6B6B6B] leading-relaxed">
                  {mat.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Dark Box: Deep Wine #2A0E13 with white buttons */}
        <div className="bg-[#2A0E13] text-white p-8 sm:p-12 rounded-xs border border-white/10 text-left sm:text-center max-w-3xl mx-auto">
          <h2 className="text-2xl font-heading font-normal text-white mb-2">
            Talk to the Artist
          </h2>
          <p className="text-xs sm:text-sm text-white/80 max-w-md mx-auto mb-6 leading-relaxed">
            Our studio is based across Ahmedabad & Bengaluru. If you have questions about our craft or materials, reach out anytime.
          </p>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3">
            {/* White button with Deep Wine text on dark section */}
            <a
              href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
                "Hi Srujan, I just read your story on the website and wanted to say hello."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-xs bg-white text-[#2A0E13] hover:bg-white/90 font-body font-normal text-[14px] sm:text-[15px] inline-flex items-center justify-center gap-2 transition-colors"
            >
              <MessageCircle className="w-4 h-4 fill-[#2A0E13]" />
              <span>Say Hello on WhatsApp</span>
            </a>
            {/* Outlined secondary button on dark section */}
            <Link
              href="/shop"
              className="px-5 py-2.5 rounded-xs border border-white text-white hover:bg-white hover:text-[#2A0E13] font-body font-normal text-[14px] sm:text-[15px] text-center transition-colors"
            >
              Explore Collection
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
