import React from "react";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/siteConfig";
import { DESIGNS, COLLECTIONS } from "@/data/designs";
import DesignCard from "@/components/DesignCard";
import IndianMotifBorder from "@/components/IndianMotifBorder";
import IndianPatternBg from "@/components/IndianPatternBg";
import InstagramIcon from "@/components/icons/InstagramIcon";
import tshirtCategoryImg from "@/assets/category_images/tshirt.jpeg";
import shirtCategoryImg from "@/assets/category_images/shirt.jpeg";
import kurtaCategoryImg from "@/assets/category_images/kurta.jpeg";
import totebagsCategoryImg from "@/assets/category_images/totebags.jpeg";
import pillowcoverCategoryImg from "@/assets/category_images/pillowcover.jpg";
import {
  ArrowRight,
  MessageCircle,
} from "lucide-react";

export default function HomePage() {
  // New Arrivals (4 designs for a clean 4-column desktop, 2-column mobile grid)
  const newArrivals = DESIGNS.slice(0, 4);

  // Shop by Category: 6 core categories
  const categories = [
    {
      id: "t-shirts",
      name: "T-Shirts",
      image: tshirtCategoryImg,
    },
    {
      id: "shirts",
      name: "Shirts",
      image: shirtCategoryImg,
    },
    {
      id: "jabhas",
      name: "Jabhas",
      image: kurtaCategoryImg,
    },
    {
      id: "tote-bags",
      name: "Tote Bags",
      image: totebagsCategoryImg,
    },
    {
      id: "kurtis-dresses",
      name: "Kurtis & Dresses",
      image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "pillow-covers",
      name: "Pillow Covers",
      image: pillowcoverCategoryImg,
    },
  ];

  // Customer Love: Everyday Indian wearers in festive, college, and home settings
  const testimonials = [
    {
      name: "Ananya Deshmukh",
      setting: "College Ethnic Day, Pune",
      garment: "Mayur Pankh Kurti",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=240&q=80",
      quote:
        "The hand-painted peacock feather kurti got countless compliments at college utsav. Breathable and genuinely handcrafted.",
    },
    {
      name: "Rohan & Priyal",
      setting: "Diwali Gifting, Bengaluru",
      garment: "Twin Jabha & Kurti Set",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=240&q=80",
      quote:
        "Ordered twin jabhas for Diwali pooja. The delicate brushstrokes and cotton khadi feel so personal and authentic.",
    },
    {
      name: "Meera Patel",
      setting: "Everyday Living, Ahmedabad",
      garment: "Lotus Canvas Tote & Jabha",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=240&q=80",
      quote:
        "Pure khadi with original brush painting. Washed it three times gently in cold water and the pigments remain rich.",
    },
    {
      name: "Dr. Radhika Sharma",
      setting: "Festive Evening, Jaipur",
      garment: "Kamdhenu Handloom Jabha",
      avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=240&q=80",
      quote:
        "So much warmer than mass-produced prints. The placement on the mandarin collar is flawless karigari.",
    },
  ];

  // Studio and craftsmanship moments for Instagram strip
  const instagramShots = [
    {
      img: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=600&q=80",
      caption: "Mixing mineral pigments on our studio ceramic palette",
    },
    {
      img: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=600&q=80",
      caption: "Hand-painted organic cotton drying in morning sunlight",
    },
    {
      img: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=600&q=80",
      caption: "Finishing touch on the handcrafted lotus hemline",
    },
    {
      img: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=600&q=80",
      caption: "Folk motifs freehand on natural unbleached canvas",
    },
  ];

  return (
    <div className="flex flex-col bg-[#FAF6EF] text-[#1F2430]">
      {/* 1. ARCH-SHAPED HERO SECTION */}
      <section className="pt-8 pb-12 sm:pt-12 sm:pb-16 border-b border-[#E2DACB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Short, confident copy with Gujarati wordmark and 1 button */}
            <div className="lg:col-span-7 space-y-5 sm:space-y-6">
              <div className="flex items-center gap-2">
                <span className="font-gujarati font-medium text-base sm:text-lg tracking-widest text-[#2A3F8F]">
                  સૃજન
                </span>
                <span className="text-xs text-[#717A8C]">·</span>
                <span className="text-[12px] sm:text-[13px] font-body font-semibold tracking-[0.15em] uppercase text-[#717A8C]">
                  Hath Se Banaya · Handpainted in India
                </span>
              </div>

              {/* Hero heading: 40px mobile, 64px desktop, line-height 1.1, normal letter-spacing */}
              <h1 className="text-[40px] lg:text-[64px] font-heading font-medium text-[#1F2430] tracking-normal leading-[1.1]">
                Wearable art, <br />
                <span className="italic font-normal">painted by hand.</span>
              </h1>

              {/* Body text: Nunito Sans 400, 16px, line-height 1.6 */}
              <p className="text-[16px] leading-[1.6] text-[#4B5263] max-w-lg font-body font-normal">
                Every piece is hand-painted with camel hair brush on natural Indian cottons, khadi, and linens. Created for festive mornings, thoughtful gifting, and everyday celebrations.
              </p>

              {/* One primary Shop Now button: Nunito Sans 700, 14-15px, no all-caps */}
              <div className="pt-2">
                <Link
                  href="/shop"
                  className="px-7 py-3.5 rounded-xs bg-[#2A3F8F] hover:bg-[#203173] text-white font-body font-bold text-[14px] sm:text-[15px] tracking-normal transition-colors inline-flex items-center justify-center gap-2"
                >
                  <span>Shop Now</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Minimal 3-point feature label row */}
              <div className="pt-6 border-t border-[#E2DACB] grid grid-cols-3 gap-2 sm:gap-4 text-[#717A8C]">
                <div>
                  <span className="block font-heading font-semibold text-[18px] sm:text-[20px] text-[#1F2430]">
                    100%
                  </span>
                  <span className="text-[13px] font-body font-normal text-[#717A8C]">Hath se banaya</span>
                </div>
                <div className="border-l border-[#E2DACB] pl-3 sm:pl-4">
                  <span className="block font-heading font-semibold text-[18px] sm:text-[20px] text-[#1F2430]">
                    Washable
                  </span>
                  <span className="text-[13px] font-body font-normal text-[#717A8C]">Heat-set colors</span>
                </div>
                <div className="border-l border-[#E2DACB] pl-3 sm:pl-4">
                  <span className="block font-heading font-semibold text-[18px] sm:text-[20px] text-[#1F2430]">
                    Pan-India
                  </span>
                  <span className="text-[13px] font-body font-normal text-[#717A8C]">Speed delivery</span>
                </div>
              </div>
            </div>

            {/* Right Column: Mehrab (Arch) Shape Hero Image */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-[380px] sm:max-w-[420px] aspect-[4/5] mehrab-hero overflow-hidden border border-[#E2DACB] bg-[#EFE8DC]">
                <Image
                  src={kurtaCategoryImg}
                  alt="Srujan hand-painted lotus motif on natural Indian khadi kurta"
                  fill
                  priority
                  loading="eager"
                  className="object-cover object-center"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 40vw"
                />
                {/* Subtle handcrafted provenance badge */}
                <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 p-2.5 sm:p-3 bg-[#FAF6EF]/95 backdrop-blur-xs border border-[#E2DACB] rounded-xs flex items-center justify-between text-xs">
                  <div>
                    <span className="block font-heading font-medium text-[14px] text-[#1F2430]">
                      Lotus Blossom Jabha
                    </span>
                    <span className="text-[12px] font-body font-normal text-[#717A8C] block">
                      Permanent pigments on unbleached khadi
                    </span>
                  </div>
                  <span className="text-[11px] uppercase tracking-wider font-body font-bold px-2 py-0.5 rounded-xs bg-[#2A3F8F]/10 text-[#2A3F8F] shrink-0">
                    ORIGINAL
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SHOP BY CATEGORY: Row of arch-shaped image icons with small label below each */}
      <section className="py-12 sm:py-16 bg-[#FAF6EF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-10">
            <span className="text-[12px] font-body font-semibold tracking-widest uppercase text-[#717A8C]">
              Vibhag · Categories
            </span>
            {/* Section heading: 28px mobile, 40px desktop */}
            <h2 className="text-[28px] lg:text-[40px] font-heading font-medium text-[#1F2430] leading-tight mt-1">
              Shop by Category
            </h2>
          </div>

          {/* Row of arch-shaped image icons with label below */}
          <div className="flex items-start justify-center gap-4 sm:gap-6 md:gap-8 overflow-x-auto pb-4 pt-1 px-2 scrollbar-none">
            {categories.map((cat) => (
              <Link
                key={cat.id}
                href={`/shop?category=${cat.id}`}
                className="group flex flex-col items-center shrink-0 text-center w-20 sm:w-28 md:w-32 focus:outline-none"
              >
                {/* Arch-shaped image icon */}
                <div className="relative w-full aspect-[3/4] mehrab-category overflow-hidden border border-[#E2DACB] bg-[#EFE8DC] group-hover:border-[#2A3F8F] transition-all duration-300 group-hover:-translate-y-1">
                  <Image
                    src={cat.image}
                    alt={cat.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 640px) 80px, (max-width: 768px) 112px, 128px"
                  />
                </div>
                {/* Small label below */}
                <span className="font-heading font-medium text-[15px] sm:text-[16px] text-[#1F2430] mt-2.5 group-hover:text-[#2A3F8F] transition-colors line-clamp-1">
                  {cat.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Thin Indian Motif Border Divider */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <IndianMotifBorder color="blue" height={14} className="opacity-25" />
      </div>

      {/* 3. NEW ARRIVALS: Product grid (4 columns on desktop, 2 on mobile) */}
      <section className="py-12 sm:py-16 bg-[#FAF6EF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-8 sm:mb-10">
            <div>
              <span className="text-[12px] font-body font-semibold tracking-widest uppercase text-[#717A8C]">
                Naye Aagman
              </span>
              {/* Section heading: 28px mobile, 40px desktop */}
              <h2 className="text-[28px] lg:text-[40px] font-heading font-medium text-[#1F2430] leading-tight mt-1">
                New Arrivals
              </h2>
            </div>
            <Link
              href="/shop"
              className="text-[14px] sm:text-[15px] font-body font-semibold text-[#2A3F8F] hover:underline"
            >
              View All Pieces →
            </Link>
          </div>

          {/* 4-column desktop, 2-column mobile grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {newArrivals.map((design) => (
              <DesignCard key={design.id} design={design} />
            ))}
          </div>
        </div>
      </section>

      {/* 4. THE TWO COLLECTION SECTIONS AS PRODUCT GRIDS */}
      {COLLECTIONS.map((collection, index) => {
        const collectionDesigns = DESIGNS.filter(
          (d) => d.collection === collection.id
        ).slice(0, 4);

        return (
          <React.Fragment key={collection.id}>
            {/* Indian motif border divider between collections */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <IndianMotifBorder color="blue" height={14} className="opacity-25" />
            </div>

            <section className="py-12 sm:py-16 bg-[#FAF6EF]">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Heading Area */}
                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 sm:mb-10">
                  <div className="max-w-2xl">
                    <span className="text-[12px] font-body font-semibold tracking-widest uppercase text-[#717A8C]">
                      Collection {index + 1}
                    </span>
                    {/* Collection titles stay uppercase with a little letter-spacing (0.04em) */}
                    <h2 className="text-[28px] lg:text-[40px] font-heading font-medium text-[#1F2430] mt-1 uppercase tracking-[0.04em] leading-tight">
                      {collection.title}
                    </h2>
                    <p className="text-[15px] sm:text-[16px] text-[#4B5263] mt-1.5 font-body font-normal leading-[1.6]">
                      {collection.tagline}
                    </p>
                  </div>

                  <Link
                    href={`/shop?collection=${collection.id}`}
                    className="shrink-0 text-[14px] sm:text-[15px] font-body font-semibold text-[#2A3F8F] hover:underline"
                  >
                    View Collection →
                  </Link>
                </div>

                {/* Uniform Product Cards Grid: 4 columns desktop, 2 on mobile */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                  {collectionDesigns.map((design) => (
                    <DesignCard key={design.id} design={design} />
                  ))}
                </div>
              </div>
            </section>
          </React.Fragment>
        );
      })}

      {/* 5. SHORT "HOW TO ORDER" STRIP: Pick, DM, Delivered */}
      <section className="relative py-14 sm:py-16 bg-[#16204A] text-white overflow-hidden">
        {/* Faint Indian Pattern Backdrop */}
        <IndianPatternBg color="white" opacity={0.04} />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-10 sm:mb-12">
            <span className="text-[12px] font-body font-semibold tracking-widest uppercase text-white/70">
              Asan Vidhi · Simple Flow
            </span>
            {/* Section heading: 28px mobile, 40px desktop */}
            <h2 className="text-[28px] lg:text-[40px] font-heading font-medium text-white leading-tight mt-1">
              How Ordering Works
            </h2>
            <p className="text-[14px] sm:text-[15px] text-white/75 mt-1.5 font-body font-normal">
              No shopping carts. Every piece begins with a personal conversation with the artist.
            </p>
          </div>

          {/* 3 Simple Steps: Pick, DM, Delivered */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Step 1: Pick */}
            <div className="border border-white/10 bg-[#0F1633] p-5 sm:p-6 rounded-xs flex flex-col justify-between">
              <div>
                <span className="text-[14px] font-heading font-medium text-white/50 tracking-wider">01</span>
                <h3 className="font-heading font-medium text-[20px] text-white mt-2 mb-1.5 leading-snug">
                  Pick a Design
                </h3>
                <p className="text-[14px] text-white/80 leading-[1.6] font-body font-normal">
                  Choose any motif from our catalog, or suggest your own theme for a kurti, jabha, shirt, or canvas tote.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-white/10 text-[12px] text-white/60 font-body font-normal">
                Tees, shirts, kurtis, jabhas & totes
              </div>
            </div>

            {/* Step 2: DM */}
            <div className="border border-white/10 bg-[#0F1633] p-5 sm:p-6 rounded-xs flex flex-col justify-between">
              <div>
                <span className="text-[14px] font-heading font-medium text-white/50 tracking-wider">02</span>
                <h3 className="font-heading font-medium text-[20px] text-white mt-2 mb-1.5 leading-snug">
                  DM for Price
                </h3>
                <p className="text-[14px] text-white/80 leading-[1.6] font-body font-normal">
                  Tap “DM for Price” to open WhatsApp with your chosen design pre-filled. We finalize sizing, fabric color, and price.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-white/10 text-[12px] text-white/60 font-body font-normal">
                Direct artist conversation & custom sizing
              </div>
            </div>

            {/* Step 3: Delivered */}
            <div className="border border-white/10 bg-[#0F1633] p-5 sm:p-6 rounded-xs flex flex-col justify-between">
              <div>
                <span className="text-[14px] font-heading font-medium text-white/50 tracking-wider">03</span>
                <h3 className="font-heading font-medium text-[20px] text-white mt-2 mb-1.5 leading-snug">
                  Handpainted & Delivered
                </h3>
                <p className="text-[14px] text-white/80 leading-[1.6] font-body font-normal">
                  We hand-paint your piece, heat-cure the pigment for wash durability, and courier it safely across India.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-white/10 text-[12px] text-white/60 font-body font-normal">
                Permanent pigments · Pan-India courier
              </div>
            </div>
          </div>

          {/* Single primary button on dark: Nunito Sans 700, 14-15px, no all-caps */}
          <div className="mt-8 sm:mt-10 text-center">
            <a
              href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
                "Swagat hai! Hi Srujan, I would like to ask about custom pricing and ordering a hand-painted piece."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xs bg-white text-[#16204A] hover:bg-[#FAF6EF] text-[14px] sm:text-[15px] font-body font-bold tracking-normal transition-colors"
            >
              <MessageCircle className="w-4 h-4 fill-[#16204A]" />
              <span>Chat with the Artist on WhatsApp</span>
            </a>
          </div>
        </div>
      </section>

      {/* 6. CUSTOMER LOVE (Small photo + one line each) */}
      <section className="py-12 sm:py-16 bg-[#FAF6EF] border-b border-[#E2DACB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="text-[12px] font-body font-semibold tracking-widest uppercase text-[#717A8C]">
              Pyaar Aur Prerna
            </span>
            {/* Section heading: 28px mobile, 40px desktop */}
            <h2 className="text-[28px] lg:text-[40px] font-heading font-medium text-[#1F2430] leading-tight mt-1">
              Customer Love
            </h2>
          </div>

          {/* 4 Cards: Small photo + one line each */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {testimonials.map((t, idx) => (
              <div
                key={idx}
                className="border border-[#E2DACB] bg-[#EFE8DC] p-5 rounded-xs flex flex-col justify-between"
              >
                <p className="text-[15px] sm:text-[16px] text-[#1F2430] font-heading italic font-normal leading-[1.6] mb-4">
                  &ldquo;{t.quote}&rdquo;
                </p>

                <div className="pt-3 border-t border-[#E2DACB] flex items-center gap-3">
                  <div className="relative w-10 h-10 rounded-full overflow-hidden border border-[#E2DACB] bg-[#FAF6EF] shrink-0">
                    <Image
                      src={t.avatar}
                      alt={t.name}
                      fill
                      className="object-cover"
                      sizes="40px"
                    />
                  </div>
                  <div className="min-w-0">
                    <span className="font-heading font-semibold text-[14px] sm:text-[15px] text-[#1F2430] block truncate">
                      {t.name}
                    </span>
                    <span className="text-[12px] font-body font-normal text-[#717A8C] block truncate">
                      {t.setting}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. INSTAGRAM STRIP */}
      <section className="py-12 sm:py-16 bg-[#FAF6EF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6 sm:mb-8">
            <div>
              <span className="text-[12px] font-body font-semibold tracking-widest uppercase text-[#717A8C]">
                Studio Glimpses
              </span>
              {/* Section heading: 28px mobile, 40px desktop */}
              <h2 className="text-[28px] lg:text-[40px] font-heading font-medium text-[#1F2430] leading-tight mt-1">
                From Our Studio to Your Home
              </h2>
            </div>

            <a
              href={siteConfig.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 sm:mt-0 text-[14px] font-body font-semibold text-[#2A3F8F] hover:underline inline-flex items-center gap-1.5"
            >
              <InstagramIcon className="w-3.5 h-3.5" />
              <span>@{siteConfig.instagramHandle}</span>
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
            {instagramShots.map((shot, i) => (
              <a
                key={i}
                href={siteConfig.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group border border-[#E2DACB] bg-[#EFE8DC] p-2 rounded-xs block"
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
                <p className="text-[13px] font-body font-normal text-[#717A8C] mt-2 line-clamp-1">
                  {shot.caption}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
