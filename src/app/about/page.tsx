import React from "react";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/siteConfig";
import PaintStrokeDivider from "@/components/PaintStrokeDivider";
import {
  Palette,
  Heart,
  Sparkles,
  Brush,
  Flame,
  Shirt,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  MessageCircle,
} from "lucide-react";

export const metadata = {
  title: "Our Story & The Craft | Srujan Handpainted",
  description:
    "Learn how Srujan was born from a love for slow, tactile Indian art and the belief that everyday clothing should feel like living paintings.",
};

export default function AboutPage() {
  const materials = [
    {
      title: "Archival Non-Toxic Fabric Pigments",
      desc: "We exclusively formulate with water-based, eco-conscious acrylic textile mediums that sink into natural fibers rather than sitting like plastic rubber on top.",
    },
    {
      title: "100% Breathable Natural Fibers",
      desc: "All our apparel and homeware are hand-sourced from Indian weaving clusters: unbleached organic cotton, handspun khadi, textured raw linen, and lustrous Chanderi silks.",
    },
    {
      title: "Fine Liner & Mop Camel-Hair Brushes",
      desc: "Zero mechanical printheads or screens. Every feather vane, floral stamens, and tribal outline is laid down with 000-size liner brushes.",
    },
    {
      title: "Heat-Fixation & Molecular Curing",
      desc: "After 24 hours of natural room-temperature air curing, high-temperature heat bonds the pigment polymers permanently with the fabric thread.",
    },
  ];

  return (
    <div className="py-10 sm:py-16 bg-[#FAF6EF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#E0A526]/20 text-[#2B2522] text-xs font-semibold mb-3">
            <Heart className="w-4 h-4 text-[#C2552E] fill-[#C2552E]" />
            <span>The Story of Srujan</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-[#2B2522] tracking-tight">
            Art Built By Hand, One Brushstroke at a Time
          </h1>

          <p className="text-base sm:text-lg text-[#5C534E] mt-3 leading-relaxed font-serif italic">
            &ldquo;We wanted clothes that feel alive — clothes that carry the fragrance of wet pigments, the pulse of a human hand, and an individuality no factory can reproduce.&rdquo;
          </p>
        </div>

        {/* Section 1: The Origin Story */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center mb-16">
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-[#F0E6D6] aspect-4/3 sm:aspect-square bg-[#F0E6D6]">
              <Image
                src="https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=1000&q=80"
                alt="Artist hand-painting floral artwork at studio desk"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 600px"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-[#FAF6EF]/90 backdrop-blur-md p-4 rounded-2xl border border-[#E2D3BE] text-xs text-[#2B2522]">
                <strong className="font-serif font-bold block text-sm">
                  The Studio Table
                </strong>
                <span>Where morning sketches turn into wearable art.</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-5 text-sm sm:text-base text-[#5C534E] leading-relaxed">
            <span className="text-xs font-bold uppercase tracking-widest text-[#2F3E75]">
              Why Srujan Began
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#2B2522] leading-snug">
              In a world of identical polyester prints, we chose the slow craft of fabric painting.
            </h2>
            <p>
              Srujan was born from a simple yearning. Walking through retail stores in Indian cities, everything felt homogeneous: mass-printed designs run through digital machines tens of thousands of times.
            </p>
            <p>
              As painters, our canvas was always paper and stretched linen. One day, on a whim, we laid down a vintage raw cotton jabha on the studio desk, grabbed a bottle of Prussian blue and terracotta pigment, and freehand painted a peacock feather. When we wore it out, people didn&apos;t just ask where we bought it — they touched the fabric, marveling at the brush texture.
            </p>
            <p>
              In Sanskrit, <strong className="text-[#C2552E] font-serif">Srujan (सृजन)</strong> translates to the sacred act of bringing something into existence. We took that vow: every single t-shirt, kurti, shirt, tote, and pillow cover leaving our hands would be touched by real human bristles.
            </p>
          </div>
        </div>

        <PaintStrokeDivider color="mustard" className="my-8" />

        {/* Section 2: The Philosophy of Handcraft */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center mb-16">
          <div className="lg:col-span-6 order-2 lg:order-1 space-y-5 text-sm sm:text-base text-[#5C534E] leading-relaxed">
            <span className="text-xs font-bold uppercase tracking-widest text-[#2F3E75]">
              Our Craft Philosophy
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#2B2522] leading-snug">
              Imperfection is not a flaw; it is the heartbeat of the artist.
            </h2>
            <p>
              When a human being paints on fabric, no two pressure points are identical. The dye absorbs slightly differently into the slub fibers of handspun khadi. One lotus petal may have a slightly deeper pink undertone than the next.
            </p>
            <p>
              To us, that is the entire point. When you wear a Srujan garment, you are not wearing a mass-market SKU. You are wearing a collector&apos;s piece that exists nowhere else on Earth in that exact configuration.
            </p>
            <div className="p-4 rounded-2xl bg-[#F0E6D6] border border-[#E2D3BE] text-xs text-[#2B2522] space-y-2">
              <div className="flex items-center gap-2 font-semibold text-[#C2552E]">
                <Sparkles className="w-4 h-4" />
                <span>Our Core Promises to You:</span>
              </div>
              <ul className="space-y-1 pl-5 list-disc text-[#5C534E]">
                <li>Zero factory screen prints or heat transfer vinyls.</li>
                <li>Paints tested rigorously for colorfastness and gentle washability.</li>
                <li>Direct artist accessibility — no corporate bot barriers.</li>
              </ul>
            </div>
          </div>

          <div className="lg:col-span-6 order-1 lg:order-2 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-[#F0E6D6] aspect-4/3 sm:aspect-square bg-[#F0E6D6]">
              <Image
                src="https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=1000&q=80"
                alt="Delicate brushwork on handloom cotton shirt"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 600px"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-[#FAF6EF]/90 backdrop-blur-md p-4 rounded-2xl border border-[#E2D3BE] text-xs text-[#2B2522]">
                <strong className="font-serif font-bold block text-sm">
                  Textile Alchemy
                </strong>
                <span>Natural woven slub cottons that breathe with your body.</span>
              </div>
            </div>
          </div>
        </div>

        {/* Section 3: Materials & Chemistry Grid */}
        <div className="bg-[#F0E6D6]/70 rounded-3xl p-8 sm:p-12 border border-[#E2D3BE] mb-16">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-semibold tracking-widest text-[#2F3E75] uppercase">
              Pure Ingredients
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#2B2522] mt-1">
              What Goes Onto Your Fabric
            </h2>
            <p className="text-xs sm:text-sm text-[#5C534E] mt-2">
              Art on garments must be soft, non-toxic, and built to survive loving wear.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {materials.map((mat, i) => (
              <div
                key={i}
                className="bg-[#FAF6EF] p-6 rounded-2xl border border-[#E2D3BE] flex flex-col justify-between"
              >
                <div>
                  <div className="w-8 h-8 rounded-lg bg-[#2F3E75] text-[#E0A526] flex items-center justify-center font-bold text-xs mb-3">
                    0{i + 1}
                  </div>
                  <h3 className="font-serif font-bold text-base text-[#2B2522] mb-1.5">
                    {mat.title}
                  </h3>
                  <p className="text-xs text-[#5C534E] leading-relaxed">
                    {mat.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Studio Location & Chat CTA */}
        <div className="bg-[#2F3E75] text-[#FAF6EF] rounded-3xl p-8 sm:p-12 text-center max-w-4xl mx-auto">
          <span className="text-xs font-semibold tracking-widest text-[#E0A526] uppercase">
            Let&apos;s Connect
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold mt-2 mb-3">
            Come Talk Art With Us
          </h2>
          <p className="text-xs sm:text-sm text-[#FAF6EF]/85 max-w-lg mx-auto mb-6 leading-relaxed">
            Our studio is based across Ahmedabad & Bengaluru. We love connecting with fellow art enthusiasts, gift seekers, and slow fashion lovers.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
                "Hi Srujan! I just read your story on the website and wanted to say hello!"
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-full bg-[#C2552E] hover:bg-[#A64421] text-white font-semibold text-xs inline-flex items-center gap-2 shadow-md"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Say Hello on WhatsApp</span>
            </a>
            <Link
              href="/shop"
              className="px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-[#FAF6EF] font-semibold text-xs border border-white/20"
            >
              Explore Our Creations
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
