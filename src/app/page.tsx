import React from "react";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/siteConfig";
import { DESIGNS, COLLECTIONS } from "@/data/designs";
import DesignCard from "@/components/DesignCard";
import PaintStrokeDivider from "@/components/PaintStrokeDivider";
import InstagramIcon from "@/components/icons/InstagramIcon";
import tshirtCategoryImg from "@/assets/category_images/tshirt.jpeg";
import shirtCategoryImg from "@/assets/category_images/shirt.jpeg";
import kurtaCategoryImg from "@/assets/category_images/kurta.jpeg";
import totebagsCategoryImg from "@/assets/category_images/totebags.jpeg";
import pillowcoverCategoryImg from "@/assets/category_images/pillowcover.jpg";
import {
  ArrowRight,
  ArrowUpRight,
  MessageCircle,
  Pencil,
  Brush,
  Flame,
  Package,
} from "lucide-react";

export default function HomePage() {
  const featuredDesigns = DESIGNS.filter((d) => d.isFeatured).slice(0, 8);

  const categories = [
    {
      id: "t-shirts",
      name: "T-Shirts",
      desc: "Bio-washed cotton & relaxed fits",
      image: tshirtCategoryImg,
    },
    {
      id: "shirts",
      name: "Shirts",
      desc: "Textured linen and slub cotton",
      image: shirtCategoryImg,
    },
    {
      id: "jabhas",
      name: "Jabhas (Kurtas)",
      desc: "Traditional, airy kurtas",
      image: kurtaCategoryImg,
    },
    {
      id: "tote-bags",
      name: "Tote Bags",
      desc: "Heavy canvas carryalls",
      image: totebagsCategoryImg,
    },
    {
      id: "kurtis-dresses",
      name: "Kurtis & Dresses",
      desc: "Chanderi and handloom silhouettes",
      image: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "pillow-covers",
      name: "Pillow Covers",
      desc: "Heavy woven cotton cushions",
      image: pillowcoverCategoryImg,
    },
  ];

  const processSteps = [
    {
      icon: Pencil,
      num: "01",
      title: "Charcoal Sketch",
      desc: "Every motif begins on paper with rough charcoal studies before any brush touches the fabric.",
    },
    {
      icon: Brush,
      num: "02",
      title: "Brush Painting",
      desc: "We paint directly onto the cloth using camel hair brushes and permanent textile pigments.",
    },
    {
      icon: Flame,
      num: "03",
      title: "Heat-Setting",
      desc: "After a full day of air drying, high-temperature heat bonds the colors into the natural cotton fibers.",
    },
    {
      icon: Package,
      num: "04",
      title: "Hand Packed",
      desc: "Wrapped in simple butter paper with a handwritten note, and couriered safely to your home.",
    },
  ];

  const testimonials = [
    {
      name: "Ananya Deshmukh",
      city: "Pune",
      garment: "Mayur Pankh T-Shirt",
      quote:
        "The peacock feather looks like an original watercolor on cloth. It didn't fade after gentle washing, and it feels completely natural to wear.",
    },
    {
      name: "Rohan & Priyal",
      city: "Bengaluru",
      garment: "Anniversary Jabha & Kurti Set",
      quote:
        "We wanted something made for our anniversary that wasn't generic. The artist helped us choose the fabric shade over WhatsApp and finished it right on time.",
    },
    {
      name: "Meera Patel",
      city: "Ahmedabad",
      garment: "Lotus Canvas Tote",
      quote:
        "Heavy natural canvas and very delicate brush lines. Knowing someone actually painted this for me makes it feel special every time I carry it.",
    },
  ];

  const instagramShots = [
    {
      img: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=600&q=80",
      caption: "Mixing shades on the ceramic palette",
    },
    {
      img: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=600&q=80",
      caption: "Canvas bags drying under morning light",
    },
    {
      img: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=600&q=80",
      caption: "Warli figures on sand-toned cotton",
    },
    {
      img: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=600&q=80",
      caption: "Finishing the Kamdhenu lotus hem",
    },
  ];

  return (
    <div className="flex flex-col bg-[#FAF6EF] text-[#1F2430]">
      {/* 1. EDITORIAL ASYMMETRIC HERO SECTION */}
      <section className="pt-8 pb-14 sm:py-16 lg:py-20 border-b border-[#E2DACB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Column: Confident Editorial Typography */}
            <div className="lg:col-span-7 space-y-6 sm:space-y-8">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2A3F8F]" aria-hidden="true" />
                <span className="text-[11px] sm:text-xs font-sans tracking-[0.2em] uppercase text-[#717A8C]">
                  Handmade in India · Bespoke Fabric Art
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.25rem] font-serif text-[#1F2430] tracking-tight leading-[1.08]">
                Wearable art, <br />
                <span className="italic font-normal">painted by hand.</span>
              </h1>

              <p className="text-sm sm:text-base text-[#4B5263] leading-relaxed max-w-xl font-sans">
                Every piece at Srujan is hand-painted with brush and pigment on natural Indian cottons, khadi, and linens. No screens, no bulk printing — just the art of slow, intentional craft.
              </p>

              {/* Action Buttons: Srujan Blue primary + Outlined secondary */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
                <Link
                  href="/shop"
                  className="px-6 sm:px-7 py-3 sm:py-3.5 rounded-xs bg-[#2A3F8F] hover:bg-[#203173] text-white font-semibold text-xs tracking-wider uppercase transition-colors inline-flex items-center justify-center gap-2 group shadow-xs"
                >
                  <span>Explore Collection</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>

                <Link
                  href="/custom-orders"
                  className="px-6 sm:px-7 py-3 sm:py-3.5 rounded-xs border border-[#2A3F8F] text-[#2A3F8F] hover:bg-[#2A3F8F] hover:text-white font-semibold text-xs tracking-wider uppercase transition-colors inline-flex items-center justify-center gap-2 group"
                >
                  <span>Create Something Personal</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>

              {/* Feature labels row */}
              <div className="pt-8 border-t border-[#E2DACB] grid grid-cols-3 gap-2 sm:gap-6 text-xs text-[#717A8C]">
                <div>
                  <span className="block font-serif text-sm sm:text-base lg:text-xl font-medium text-[#1F2430]">100%</span>
                  <span className="text-[10px] sm:text-xs text-[#717A8C] mt-0.5 block">Hand-brushed</span>
                </div>
                <div className="border-l border-[#E2DACB] pl-2 sm:pl-6">
                  <span className="block font-serif text-sm sm:text-base lg:text-xl font-medium text-[#1F2430]">Washable</span>
                  <span className="text-[10px] sm:text-xs text-[#717A8C] mt-0.5 block">Heat-bonded</span>
                </div>
                <div className="border-l border-[#E2DACB] pl-2 sm:pl-6">
                  <span className="block font-serif text-sm sm:text-base lg:text-xl font-medium text-[#1F2430]">One of a kind</span>
                  <span className="text-[10px] sm:text-xs text-[#717A8C] mt-0.5 block">Painted individually</span>
                </div>
              </div>
            </div>

            {/* Right Column: Immersive Hand-Painted Fabric Presentation */}
            <div className="lg:col-span-5 relative mt-4 lg:mt-0">
              <div className="relative w-full aspect-[4/5] max-h-[560px] bg-[#EFE8DC] rounded-xs overflow-hidden border border-[#E2DACB] shadow-sm">
                <Image
                  src={kurtaCategoryImg}
                  alt="Hand-painted floral lotus motif on natural Indian khadi fabric"
                  fill
                  priority
                  className="object-cover object-center"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 42vw"
                />
                {/* Subtle handcrafted provenance badge */}
                <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 p-3 bg-[#FAF6EF]/92 backdrop-blur-xs border border-[#E2DACB] rounded-xs flex items-center justify-between text-xs shadow-xs">
                  <div>
                    <span className="block font-serif text-[#1F2430] font-medium text-xs sm:text-sm">
                      Lotus Blossom Motif
                    </span>
                    <span className="text-[10px] sm:text-[11px] text-[#717A8C] block mt-0.5">
                      Permanent pigments on raw cotton khadi
                    </span>
                  </div>
                  <span className="text-[10px] uppercase tracking-wider font-semibold px-2 py-0.5 rounded-xs bg-[#2A3F8F]/10 text-[#2A3F8F] shrink-0">
                    Original Piece
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SHORT, QUIET BRAND INTRO */}
      <section className="py-16 sm:py-20 bg-[#FAF6EF]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-left sm:text-center space-y-4">
          <span className="text-[11px] font-sans tracking-widest uppercase text-[#717A8C]">
            About the Name
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif text-[#1F2430] leading-snug">
            Srujan (सृजन) means creation in Sanskrit.
          </h2>
          <p className="text-sm sm:text-base text-[#4B5263] leading-relaxed font-sans">
            We started with a wooden desk, fine brushes, and plain unbleached fabric. Instead of keeping art behind glass frames, we wanted people to wear it on everyday walks, summer evenings, and quiet mornings. We embrace the gentle variations of the brush — because that is where the human touch lives.
          </p>
        </div>
      </section>

      {/* 3. SHOP BY CATEGORY (Editorial Asymmetric Layout) */}
      <section className="py-16 sm:py-20 bg-[#EFE8DC] border-y border-[#E2DACB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10">
            <div>
              <span className="text-[11px] font-sans tracking-widest uppercase text-[#717A8C]">
                Garments & Canvases
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif text-[#1F2430] mt-1">
                Shop by Category
              </h2>
            </div>
            <Link
              href="/shop"
              className="mt-2 sm:mt-0 text-xs font-semibold uppercase tracking-wider text-[#2A3F8F] hover:underline"
            >
              View all pieces →
            </Link>
          </div>

          {/* Asymmetric Category Grid with mixed sizes */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat, idx) => (
              <Link
                key={cat.id}
                href={`/shop?category=${cat.id}`}
                className="group border border-[#E2DACB] bg-[#FAF6EF] p-3 rounded-xs hover:border-[#1F2430]/40 transition-colors flex flex-col"
              >
                <div className="relative aspect-4/3 w-full overflow-hidden bg-[#FAF6EF] rounded-xs border border-[#E2DACB]">
                  <Image
                    src={cat.image}
                    alt={cat.name}
                    fill
                    className="object-cover group-hover:scale-102 transition-transform duration-300"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="pt-3 pb-1 flex items-baseline justify-between">
                  <h3 className="font-serif text-lg text-[#1F2430] group-hover:text-[#2A3F8F] transition-colors">
                    {cat.name}
                  </h3>
                  <span className="text-[11px] text-[#717A8C]">
                    View
                  </span>
                </div>
                <p className="text-xs text-[#717A8C]">
                  {cat.desc}
                </p>
              </Link>
            ))}

            {/* Custom Commission Card (Editorial Outlined) */}
            <div className="border border-[#2A3F8F] bg-[#FAF6EF] p-6 rounded-xs flex flex-col justify-between">
              <div>
                <span className="text-[10px] uppercase font-semibold tracking-wider text-[#2A3F8F]">
                  Bespoke Work
                </span>
                <h3 className="font-serif text-xl text-[#1F2430] mt-2 mb-2">
                  Have your own fabric or motif in mind?
                </h3>
                <p className="text-xs text-[#4B5263] leading-relaxed">
                  We paint on customer-provided garments, wedding gifts, and custom names or verses.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#E2DACB]">
                <Link
                  href="/custom-orders"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#2A3F8F] hover:underline"
                >
                  <span>Request Custom Piece</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. THEMED COLLECTION SECTIONS (E-COMMERCE ROW FORMAT) */}
      {COLLECTIONS.map((collection) => {
        const isDark = collection.theme === "dark";
        const collectionDesigns = DESIGNS.filter(
          (d) => d.collection === collection.id
        ).slice(0, 4);

        return (
          <section
            key={collection.id}
            className={`py-14 sm:py-20 border-t ${isDark
              ? "bg-[#16204A] text-white border-white/10"
              : "bg-[#FAF6EF] text-[#1F2430] border-[#E2DACB]"
              }`}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              {/* Heading Area: Title + Tagline on Left, Works Button on Right (Desktop) / Below (Mobile) */}
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 sm:mb-10">
                <div className="max-w-2xl">
                  <h2
                    className={`text-2xl sm:text-4xl font-serif uppercase tracking-tight ${isDark ? "text-white" : "text-[#1F2430]"
                      }`}
                  >
                    {collection.title}
                  </h2>
                  <p
                    className={`text-xs sm:text-sm mt-1.5 font-sans leading-relaxed ${isDark ? "text-white/80" : "text-[#4B5263]"
                      }`}
                  >
                    {collection.tagline}
                  </p>
                </div>

                {/* "Works" button sits on right of heading on desktop, below tagline on mobile */}
                <div className="shrink-0">
                  <Link
                    href={`/shop?collection=${collection.id}`}
                    className={`inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xs text-xs font-semibold tracking-wider uppercase transition-colors ${isDark
                      ? "bg-white text-[#16204A] hover:bg-[#FAF6EF]"
                      : "bg-[#2A3F8F] text-white hover:bg-[#203173]"
                      }`}
                  >
                    <span>Works</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              {/* Uniform Product Cards Grid: 4 columns desktop, 2 on tablet, 2 on mobile */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                {collectionDesigns.map((design) => (
                  <DesignCard key={design.id} design={design} />
                ))}
              </div>
            </div>
          </section>
        );
      })}

      {/* Paint Stroke Divider */}
      <PaintStrokeDivider color="blue" />

      {/* 5. HOW ORDERING WORKS (Deep Indigo #16204A Dark Section) */}
      <section className="py-16 sm:py-20 bg-[#16204A] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <span className="text-[11px] font-sans tracking-widest uppercase text-white/70">
              The Process
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif text-white mt-1">
              How Ordering Works
            </h2>
            <p className="text-xs text-white/80 mt-2">
              There is no shopping cart. Every purchase begins with a direct conversation with the artist.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Step 1 */}
            <div className="border border-white/10 bg-[#0F1633] p-6 rounded-xs flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono text-white/50">01</span>
                <h3 className="font-serif text-lg text-white mt-2 mb-2">
                  Pick a design
                </h3>
                <p className="text-xs text-white/80 leading-relaxed">
                  Choose any motif from our catalog, or tell us your own idea, favorite flowers, or initials.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-white/10 text-[11px] text-white/60">
                Adaptable to tees, shirts, kurtis & totes
              </div>
            </div>

            {/* Step 2 */}
            <div className="border border-white/10 bg-[#0F1633] p-6 rounded-xs flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono text-white/50">02</span>
                <h3 className="font-serif text-lg text-white mt-2 mb-2">
                  DM on WhatsApp
                </h3>
                <p className="text-xs text-white/80 leading-relaxed">
                  Click “DM for Price”. It creates a pre-filled message with your design choice so we can finalize sizing, fabric shade, and price.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-white/10 text-[11px] text-white/60">
                Personal sizing & fabric advice
              </div>
            </div>

            {/* Step 3 */}
            <div className="border border-white/10 bg-[#0F1633] p-6 rounded-xs flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono text-white/50">03</span>
                <h3 className="font-serif text-lg text-white mt-2 mb-2">
                  We paint & deliver
                </h3>
                <p className="text-xs text-white/80 leading-relaxed">
                  We hand-paint your piece, let it air dry, heat-set the pigment for washability, and ship it across India with tracking.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-white/10 text-[11px] text-white/60">
                Permanent, washable & packaged carefully
              </div>
            </div>
          </div>

          <div className="mt-10">
            {/* White button on dark section */}
            <a
              href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
                "Hi Srujan, I would love to ask about how ordering a piece works."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xs bg-white text-[#16204A] hover:bg-[#FAF6EF] text-xs font-semibold tracking-wider uppercase transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-[#16204A]" />
              <span>Ask a Question on WhatsApp</span>
            </a>
          </div>
        </div>
      </section>

      {/* 7. WORDS FROM WEARERS (Editorial Quote Cards) */}
      <section className="py-16 sm:py-20 bg-[#EFE8DC] border-t border-[#E2DACB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-xl mb-12">
            <span className="text-[11px] font-sans tracking-widest text-[#717A8C]">
              What they say about us?
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif text-[#1F2430] mt-1">
              Testimonials
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, idx) => (
              <div
                key={idx}
                className="border border-[#E2DACB] bg-[#FAF6EF] p-6 rounded-xs flex flex-col justify-between"
              >
                <p className="text-xs sm:text-sm text-[#1F2430] font-serif italic leading-relaxed mb-6">
                  &ldquo;{t.quote}&rdquo;
                </p>

                <div className="pt-4 border-t border-[#E2DACB] flex items-center justify-between text-xs">
                  <div>
                    <span className="font-semibold text-[#1F2430] block">{t.name}</span>
                    <span className="text-[11px] text-[#717A8C]">{t.city}</span>
                  </div>
                  <span className="text-[10px] text-[#717A8C] uppercase tracking-wider">
                    {t.garment}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. INSTAGRAM GRID */}
      <section className="py-16 sm:py-20 bg-[#FAF6EF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8">
            <div>
              <span className="text-[11px] font-sans tracking-widest text-[#717A8C]">
                Best Works Delivered untill now
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif text-[#1F2430] mt-1">
                Our Recent Handpainted Works
              </h2>
            </div>

            <a
              href={siteConfig.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 sm:mt-0 text-xs font-semibold uppercase tracking-wider text-[#2A3F8F] hover:underline inline-flex items-center gap-1.5"
            >
              <InstagramIcon className="w-3.5 h-3.5" />
              <span>@{siteConfig.instagramHandle}</span>
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {instagramShots.map((shot, i) => (
              <a
                key={i}
                href={siteConfig.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group border border-[#E2DACB] bg-[#EFE8DC] p-2 rounded-xs"
              >
                <div className="relative aspect-square w-full bg-[#FAF6EF] overflow-hidden rounded-xs border border-[#E2DACB]">
                  <Image
                    src={shot.img}
                    alt={shot.caption}
                    fill
                    className="object-cover group-hover:scale-102 transition-transform duration-300"
                    sizes="(max-width: 640px) 50vw, 25vw"
                  />
                </div>
                <p className="text-[11px] text-[#717A8C] mt-2 line-clamp-1">
                  {shot.caption}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* 9. BOTTOM DARK BANNER (Deep Indigo #16204A) */}
      <section className="py-16 bg-[#16204A] text-white">
        <div className="max-w-3xl mx-auto px-4 text-left sm:text-center space-y-5">
          <h2 className="text-2xl sm:text-3xl font-serif text-white">
            Have a thought, verse, or gift in mind?
          </h2>
          <p className="text-xs sm:text-sm text-white/80 max-w-lg mx-auto leading-relaxed">
            We are always happy to discuss custom motifs, personal colors, or painting on your own fabric.
          </p>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 pt-2">
            {/* White button on dark section */}
            <Link
              href="/custom-orders"
              className="px-6 py-3 rounded-xs bg-white text-[#16204A] hover:bg-[#FAF6EF] font-semibold text-xs tracking-wider uppercase transition-colors text-center"
            >
              Start a Custom Inquiry
            </Link>
            {/* Secondary button on dark section: white border */}
            <a
              href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
                "Hi Srujan, I have an idea for a custom hand-painted piece."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xs border border-white text-white hover:bg-white hover:text-[#16204A] font-semibold text-xs tracking-wider uppercase transition-colors text-center inline-flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
