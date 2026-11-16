import React from "react";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/siteConfig";
import { DESIGNS, COLLECTIONS } from "@/data/designs";
import DesignCard from "@/components/DesignCard";
import HeroSlider from "@/components/HeroSlider";
import IndianMotifBorder from "@/components/IndianMotifBorder";
import IndianPatternBg from "@/components/IndianPatternBg";
import InstagramIcon from "@/components/icons/InstagramIcon";
import tshirtCategoryImg from "@/assets/category_images/tshirt.jpeg";
import shirtCategoryImg from "@/assets/category_images/shirt.jpeg";
import kurtaCategoryImg from "@/assets/category_images/kurta.jpeg";
import totebagsCategoryImg from "@/assets/category_images/totebags.jpeg";
import pillowcoverCategoryImg from "@/assets/category_images/pillowcover.jpg";
import {
  Sparkles,
  Clock,
  MessageCircle,
} from "lucide-react";

export default function HomePage() {
  // New Arrivals (4 designs for a clean 4-column desktop, 2-column mobile grid)
  const newArrivals = DESIGNS.slice(0, 4);

  // Shop by Category: 6 core categories (rendered with circular avatars)
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
    <div className="flex flex-col bg-white text-[#1A1A1A]">
      {/* 1. FULL-WIDTH HERO BANNER SLIDER */}
      <HeroSlider />

      {/* 2. SLIM TRUST STRIP: Handpainted in India | Made to order | DM to order on WhatsApp */}
      <section className="bg-white border-b border-[#E5E5E5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 divide-x divide-[#E5E5E5] py-3.5 sm:py-4">
            <div className="flex items-center justify-center gap-1.5 sm:gap-2.5 px-2 text-center">
              <Sparkles className="w-4 h-4 text-[#7A1F2B] shrink-0 stroke-[1.5]" />
              <span className="font-body text-[12px] sm:text-[14px] font-medium text-[#1A1A1A] tracking-normal">
                Handpainted in India
              </span>
            </div>
            <div className="flex items-center justify-center gap-1.5 sm:gap-2.5 px-2 text-center">
              <Clock className="w-4 h-4 text-[#7A1F2B] shrink-0 stroke-[1.5]" />
              <span className="font-body text-[12px] sm:text-[14px] font-medium text-[#1A1A1A] tracking-normal">
                Made to order
              </span>
            </div>
            <div className="flex items-center justify-center gap-1.5 sm:gap-2.5 px-2 text-center">
              <MessageCircle className="w-4 h-4 text-[#7A1F2B] shrink-0 stroke-[1.5]" />
              <span className="font-body text-[12px] sm:text-[14px] font-medium text-[#1A1A1A] tracking-normal">
                DM to order on WhatsApp
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SHOP BY CATEGORY: Row of circular image icons with small label below each */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-10">
            {/* Section heading: 28px mobile, 40px desktop */}
            <h2 className="text-[28px] lg:text-[40px] font-heading font-normal text-[#1A1A1A] leading-tight">
              Shop by Category
            </h2>
          </div>

          {/* Row of circular image icons with label below */}
          <div className="flex items-start justify-center gap-4 sm:gap-6 md:gap-8 overflow-x-auto pb-4 pt-1 px-2 scrollbar-none">
            {categories.map((cat) => (
              <Link
                key={cat.id}
                href={`/shop?category=${cat.id}`}
                className="group flex flex-col items-center shrink-0 text-center w-20 sm:w-28 md:w-32 focus:outline-none"
              >
                {/* Circular image icon with Blush backdrop */}
                <div className="relative w-18 h-18 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full overflow-hidden border border-[#E5E5E5] bg-[#F8EFEC] group-hover:border-[#7A1F2B] transition-all duration-300 group-hover:-translate-y-1">
                  <Image
                    src={cat.image}
                    alt={cat.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 640px) 72px, (max-width: 768px) 96px, 112px"
                  />
                </div>
                {/* Small label below */}
                <span className="font-body font-normal text-[14px] sm:text-[15px] text-[#1A1A1A] mt-2.5 group-hover:text-[#7A1F2B] transition-colors line-clamp-1">
                  {cat.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Thin Indian Motif Border Divider */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <IndianMotifBorder color="maroon" height={14} className="opacity-25" />
      </div>

      {/* 4. NEW ARRIVALS: Product grid (4 columns on desktop, 2 on mobile) */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-8 sm:mb-10">
            <div>
              {/* Section heading: 28px mobile, 40px desktop */}
              <h2 className="text-[28px] lg:text-[40px] font-heading font-normal text-[#1A1A1A] leading-tight">
                New Arrivals
              </h2>
            </div>
            <Link
              href="/shop"
              className="text-[14px] sm:text-[15px] font-body font-normal text-[#7A1F2B] hover:underline"
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

      {/* 5. THE TWO COLLECTION SECTIONS AS PRODUCT GRIDS */}
      {COLLECTIONS.map((collection, index) => {
        const collectionDesigns = DESIGNS.filter(
          (d) => d.collection === collection.id
        ).slice(0, 4);

        const isFestiveDecor =
          collection.id === "festive-decor" || collection.theme === "dark";

        return (
          <React.Fragment key={collection.id}>
            {/* Indian motif border divider between collections */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <IndianMotifBorder
                color={isFestiveDecor ? "white" : "maroon"}
                height={14}
                className="opacity-25"
              />
            </div>

            {/* Collection Section: Deep Wine #2A0E13 for Handmade Festive Decor per spec */}
            <section
              className={`py-12 sm:py-16 ${
                isFestiveDecor ? "bg-[#2A0E13] text-white" : "bg-white text-[#1A1A1A]"
              }`}
            >
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Heading Area */}
                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 sm:mb-10">
                  <div className="max-w-2xl">
                    {/* Collection titles stay uppercase with a little letter-spacing (0.04em) */}
                    <h2
                      className={`text-[28px] lg:text-[40px] font-heading font-normal uppercase tracking-[0.04em] leading-tight ${
                        isFestiveDecor ? "text-white" : "text-[#1A1A1A]"
                      }`}
                    >
                      {collection.title}
                    </h2>
                    <p
                      className={`text-[15px] sm:text-[16px] mt-1.5 font-body font-normal leading-[1.6] ${
                        isFestiveDecor ? "text-white/80" : "text-[#6B6B6B]"
                      }`}
                    >
                      {collection.tagline}
                    </p>
                  </div>

                  <Link
                    href={`/shop?collection=${collection.id}`}
                    className={`shrink-0 ${
                      isFestiveDecor
                        ? "px-4 py-2 rounded-xs bg-white text-[#2A0E13] hover:bg-white/90 font-body font-normal text-[14px] sm:text-[15px] transition-colors"
                        : "text-[14px] sm:text-[15px] font-body font-normal text-[#7A1F2B] hover:underline"
                    }`}
                  >
                    View Collection →
                  </Link>
                </div>

                {/* Uniform Product Cards Grid: 4 columns desktop, 2 on mobile */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                  {collectionDesigns.map((design) => (
                    <DesignCard
                      key={design.id}
                      design={design}
                      variant={isFestiveDecor ? "dark" : "default"}
                    />
                  ))}
                </div>
              </div>
            </section>
          </React.Fragment>
        );
      })}

      {/* 6. SHORT "HOW TO ORDER" STRIP: Pick, DM, Delivered */}
      <section className="relative py-14 sm:py-16 bg-[#2A0E13] text-white overflow-hidden">
        {/* Faint Indian Pattern Backdrop */}
        <IndianPatternBg color="white" opacity={0.04} />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-10 sm:mb-12">
            {/* Section heading: 28px mobile, 40px desktop */}
            <h2 className="text-[28px] lg:text-[40px] font-heading font-normal text-white leading-tight">
              How Ordering Works
            </h2>
            <p className="text-[14px] sm:text-[15px] text-white/75 mt-1.5 font-body font-normal">
              No shopping carts. Every piece begins with a personal conversation with the artist.
            </p>
          </div>

          {/* 3 Simple Steps: Pick, DM, Delivered */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Step 1: Pick */}
            <div className="border border-white/10 bg-white/5 p-5 sm:p-6 rounded-xs flex flex-col justify-between">
              <div>
                <span className="text-[14px] font-body font-semibold text-white/50 tracking-wider">01</span>
                <h3 className="font-heading font-normal text-[20px] text-white mt-2 mb-1.5 leading-snug">
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
            <div className="border border-white/10 bg-white/5 p-5 sm:p-6 rounded-xs flex flex-col justify-between">
              <div>
                <span className="text-[14px] font-body font-semibold text-white/50 tracking-wider">02</span>
                <h3 className="font-heading font-normal text-[20px] text-white mt-2 mb-1.5 leading-snug">
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
            <div className="border border-white/10 bg-white/5 p-5 sm:p-6 rounded-xs flex flex-col justify-between">
              <div>
                <span className="text-[14px] font-body font-semibold text-white/50 tracking-wider">03</span>
                <h3 className="font-heading font-normal text-[20px] text-white mt-2 mb-1.5 leading-snug">
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

          {/* Single primary button on dark: white button with Deep Wine text */}
          <div className="mt-8 sm:mt-10 text-center">
            <a
              href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
                "Swagat hai! Hi Srujan, I would like to ask about custom pricing and ordering a hand-painted piece."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xs bg-white text-[#2A0E13] hover:bg-white/90 text-[14px] sm:text-[15px] font-body font-normal tracking-normal transition-colors"
            >
              <MessageCircle className="w-4 h-4 fill-[#2A0E13]" />
              <span>Chat with the Artist on WhatsApp</span>
            </a>
          </div>
        </div>
      </section>

      {/* 7. CUSTOMER LOVE (Small photo + one line each) */}
      <section className="py-12 sm:py-16 bg-white border-b border-[#E5E5E5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-10">
            {/* Section heading: 28px mobile, 40px desktop */}
            <h2 className="text-[28px] lg:text-[40px] font-heading font-normal text-[#1A1A1A] leading-tight">
              Customer Love
            </h2>
          </div>

          {/* 4 Cards: Blush #F8EFEC soft section background with thin #E5E5E5 border */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {testimonials.map((t, idx) => (
              <div
                key={idx}
                className="border border-[#E5E5E5] bg-[#F8EFEC] p-5 rounded-xs flex flex-col justify-between"
              >
                <p className="text-[15px] sm:text-[16px] text-[#1A1A1A] font-heading italic font-normal leading-[1.6] mb-4">
                  &ldquo;{t.quote}&rdquo;
                </p>

                <div className="pt-3 border-t border-[#E5E5E5] flex items-center gap-3">
                  <div className="relative w-10 h-10 rounded-full overflow-hidden border border-[#E5E5E5] bg-white shrink-0">
                    <Image
                      src={t.avatar}
                      alt={t.name}
                      fill
                      className="object-cover"
                      sizes="40px"
                    />
                  </div>
                  <div className="min-w-0">
                    <span className="font-body font-normal text-[14px] sm:text-[15px] text-[#1A1A1A] block truncate">
                      {t.name}
                    </span>
                    <span className="text-[12px] font-body font-normal text-[#6B6B6B] block truncate">
                      {t.setting}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. INSTAGRAM STRIP */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6 sm:mb-8">
            <div>
              {/* Section heading: 28px mobile, 40px desktop */}
              <h2 className="text-[28px] lg:text-[40px] font-heading font-normal text-[#1A1A1A] leading-tight">
                From Our Studio to Your Home
              </h2>
            </div>

            <a
              href={siteConfig.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 sm:mt-0 text-[14px] font-body font-normal text-[#7A1F2B] hover:underline inline-flex items-center gap-1.5"
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
                className="group border border-[#E5E5E5] bg-[#F8EFEC] p-2 rounded-xs block"
              >
                <div className="relative aspect-square w-full bg-white overflow-hidden rounded-xs border border-[#E5E5E5]">
                  <Image
                    src={shot.img}
                    alt={shot.caption}
                    fill
                    className="object-cover group-hover:scale-102 transition-transform duration-300"
                    sizes="(max-width: 640px) 50vw, 25vw"
                  />
                </div>
                <p className="text-[13px] font-body font-normal text-[#6B6B6B] mt-2 line-clamp-1">
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
