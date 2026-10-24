import React from "react";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/siteConfig";
import { DESIGNS } from "@/data/designs";
import DesignCard from "@/components/DesignCard";
import PaintStrokeDivider from "@/components/PaintStrokeDivider";
import {
  Sparkles,
  ArrowRight,
  MessageCircle,
  Heart,
  Palette,
  CheckCircle2,
  Brush,
  Flame,
  Package,
  Pencil,
  Quote,
  Clock,
  Layers,
} from "lucide-react";
import InstagramIcon from "@/components/icons/InstagramIcon";

export default function HomePage() {
  const featuredDesigns = DESIGNS.filter((d) => d.isFeatured).slice(0, 8);

  const categories = [
    {
      id: "t-shirts",
      name: "T-Shirts",
      count: "Bio-wash & Oversized tees",
      image: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: "shirts",
      name: "Shirts",
      count: "Linen & Slub Cotton",
      image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: "jabhas",
      name: "Jabhas",
      count: "Traditional breezy tunics",
      image: "https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: "tote-bags",
      name: "Tote Bags",
      count: "Heavy canvas carryalls",
      image: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: "kurtis-dresses",
      name: "Kurtis & Dresses",
      count: "Flared silhouettes & Chanderi",
      image: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: "pillow-covers",
      name: "Pillow Covers",
      count: "Slub linen & textured canvas",
      image: "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: "others",
      name: "Others & Decor",
      count: "Silk stoles & Wall tapestries",
      image: "https://images.unsplash.com/photo-1607083206869-4c7672e72a8a?auto=format&fit=crop&w=600&q=80",
    },
  ];

  const processSteps = [
    {
      icon: Pencil,
      num: "01",
      title: "Sketch & Blueprint",
      desc: "Every concept starts with raw charcoal pencils and reference botanical studies directly on paper before touching the cloth.",
    },
    {
      icon: Brush,
      num: "02",
      title: "Freehand Brushwork",
      desc: "Armed with fine 00 camel hair brushes and rich textile pigments, the artist builds layers of tone, gradient, and fine contour strokes.",
    },
    {
      icon: Flame,
      num: "03",
      title: "Curing & Heat-Setting",
      desc: "After 24 hours of natural air-drying, high-pressure steam and heat bond the pigments permanently into the fabric fibers for washability.",
    },
    {
      icon: Package,
      num: "04",
      title: "Eco-Friendly Packing",
      desc: "Wrapped in recycled butter paper with a handwritten provenance note, dried flower sprig, and shipped safely across India.",
    },
  ];

  const testimonials = [
    {
      name: "Ananya Deshmukh",
      city: "Pune",
      garment: "Mayur Pankh T-Shirt",
      quote:
        "The peacock feather looks like an original watercolor painting sitting on my tee. The colors didn't fade even after five gentle washes. Getting so many compliments on my campus!",
    },
    {
      name: "Rohan & Priyal",
      city: "Bengaluru",
      garment: "Custom Wedding Anniversary Jabha & Kurti Set",
      quote:
        "We ordered matching hand-painted motifs for our anniversary dinner. The artist was so sweet over WhatsApp, helped us choose the raw cotton tone and finished it before our deadline.",
    },
    {
      name: "Meera Patel",
      city: "Ahmedabad",
      garment: "Madhubani Lotus Tote Bag",
      quote:
        "Sturdy heavy canvas with gorgeous fish strokes. Knowing someone sat down and hand-painted each petal specifically for me makes this so special compared to fast fashion.",
    },
  ];

  const instagramShots = [
    {
      img: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=600&q=80",
      caption: "Mixing lapis indigo on the palette",
    },
    {
      img: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=600&q=80",
      caption: "Freshly cured canvas totes drying in sunlight",
    },
    {
      img: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=600&q=80",
      caption: "Warli dancers coming to life on sand khadi",
    },
    {
      img: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=600&q=80",
      caption: "Detailing the Kamdhenu lotus kurti",
    },
  ];

  return (
    <div className="flex flex-col">
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden pt-8 pb-16 lg:py-20 bg-linear-to-b from-[#FAF6EF] via-[#F7EFE4] to-[#FAF6EF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Text & CTAs */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E0A526]/20 border border-[#E0A526]/50 text-[#2B2522] text-xs font-semibold">
                <Sparkles className="w-3.5 h-3.5 text-[#E0A526]" />
                <span>Original Handcrafted Fabric Art</span>
                <span className="text-[#5C534E]">•</span>
                <span className="text-[#5C534E]">India</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-extrabold text-[#2B2522] tracking-tight leading-[1.15]">
                Wearable art,{" "}
                <span className="relative inline-block text-[#C2552E]">
                  painted by hand
                  <span className="absolute left-0 bottom-1 w-full h-3 bg-[#E0A526]/30 -z-1 -rotate-1 rounded-sm" />
                </span>
                .
              </h1>

              <p className="text-base sm:text-lg text-[#5C534E] leading-relaxed max-w-2xl mx-auto lg:mx-0 font-normal">
                Every piece at <strong className="text-[#2B2522] font-semibold">Srujan</strong> is hand-painted directly onto fabric with fine brushwork and permanent pigments. No screen printing, no mass factories. Each piece is made by hand, so no two are ever exactly alike.
              </p>

              {/* Action Buttons: Terracotta primary + Indigo secondary */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <Link
                  href="/shop"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-[#C2552E] hover:bg-[#A64421] text-white font-semibold text-base shadow-md hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5"
                >
                  <span>Explore Designs</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  href="/custom-orders"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-[#FAF6EF] hover:bg-white text-[#2F3E75] font-semibold text-base border-2 border-[#2F3E75] transition-all duration-200 hover:shadow-sm"
                >
                  <Palette className="w-4 h-4 text-[#2F3E75]" />
                  <span>Order a Custom Piece</span>
                </Link>
              </div>

              {/* Micro Trust points */}
              <div className="pt-6 border-t border-[#E2D3BE]/80 grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs text-[#5C534E]">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#2F5D4B]" />
                  <span>Permanent & Washable</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#2F5D4B]" />
                  <span>Bespoke on Any Garment</span>
                </div>
                <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                  <CheckCircle2 className="w-4 h-4 text-[#2F5D4B]" />
                  <span>Direct WhatsApp with Artist</span>
                </div>
              </div>
            </div>

            {/* Right Column: Hero Visual Showcase */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {/* Decorative background shape */}
                <div className="absolute -inset-4 bg-linear-to-tr from-[#E0A526]/20 via-[#C2552E]/15 to-[#2F3E75]/20 rounded-3xl transform rotate-2 filter blur-lg -z-10" />

                <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-[#FAF6EF] bg-[#F0E6D6]">
                  <div className="relative aspect-4/5 w-full">
                    <Image
                      src="https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=1200&q=85"
                      alt="Hand-painted textile brushwork in progress"
                      fill
                      priority
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 500px"
                    />
                  </div>

                  {/* Floating Artist Tag */}
                  <div className="absolute bottom-4 left-4 right-4 bg-[#FAF6EF]/95 backdrop-blur-md p-4 rounded-2xl border border-[#E2D3BE] shadow-lg flex items-center justify-between">
                    <div>
                      <span className="text-[11px] font-bold text-[#C2552E] tracking-wider uppercase">
                        Authentic Handcraft
                      </span>
                      <h4 className="font-serif font-bold text-sm text-[#2B2522]">
                        Every stroke tells a human story
                      </h4>
                      <p className="text-[11px] text-[#5C534E]">
                        Ahmedabad & Bengaluru Studio
                      </p>
                    </div>
                    <span className="w-10 h-10 rounded-full bg-[#E0A526]/30 text-[#2B2522] flex items-center justify-center font-serif text-lg font-bold">
                      सृ
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Paint Stroke Divider */}
      <PaintStrokeDivider color="mustard" />

      {/* 2. SHORT BRAND INTRO */}
      <section className="py-14 bg-[#FAF6EF]">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-4">
          <span className="text-xs font-semibold tracking-widest text-[#2F3E75] uppercase">
            The Philosophy of Srujan
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#2B2522]">
            Art belongs in daily living, not just on museum walls
          </h2>
          <p className="text-base sm:text-lg text-[#5C534E] leading-relaxed">
            In Sanskrit, <em className="font-serif text-[#C2552E] font-semibold">Srujan</em> means the act of purposeful creation. We started with a wooden worktable, fine camel-hair brushes, raw unbleached cotton, and rich fabric paints. We celebrate the gentle impermanence and warmth of the human hand — slight variations in paint thickness, subtle contours, and personal soul that factory machines can never replicate.
          </p>
        </div>
      </section>

      {/* 3. SHOP BY CATEGORY */}
      <section className="py-16 bg-[#F0E6D6]/70 border-y border-[#E2D3BE]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
            <div>
              <span className="text-xs font-semibold tracking-widest text-[#2F3E75] uppercase">
                Handcrafted Canvases
              </span>
              <h2 className="text-3xl font-serif font-bold text-[#2B2522] mt-1">
                Shop by Category
              </h2>
              <p className="text-sm text-[#5C534E] mt-1">
                Choose the silhouette you love — we can adapt almost any motif onto it.
              </p>
            </div>
            <Link
              href="/shop"
              className="mt-4 md:mt-0 text-sm font-semibold text-[#C2552E] hover:text-[#A64421] inline-flex items-center gap-1.5 group"
            >
              <span>View full catalog</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {categories.map((cat) => (
              <Link
                key={cat.id}
                href={`/shop?category=${cat.id}`}
                className="group relative rounded-2xl overflow-hidden bg-[#FAF6EF] border border-[#E2D3BE] shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col"
              >
                <div className="relative aspect-4/3 w-full overflow-hidden bg-[#FAF6EF]">
                  <Image
                    src={cat.image}
                    alt={cat.name}
                    fill
                    className="object-cover group-hover:scale-108 transition-transform duration-500"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/10 to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <h3 className="font-serif font-bold text-base sm:text-lg">
                      {cat.name}
                    </h3>
                    <p className="text-[11px] text-[#FAF6EF]/80 line-clamp-1">
                      {cat.count}
                    </p>
                  </div>
                </div>

                <div className="p-3 bg-[#2F3E75] text-[#FAF6EF] flex items-center justify-between text-xs font-medium group-hover:bg-[#222E57] transition-colors">
                  <span>Browse motifs</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}

            {/* Custom Commission Tile */}
            <Link
              href="/custom-orders"
              className="group rounded-2xl overflow-hidden bg-[#2F5D4B] text-white p-6 border border-[#234739] shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-[#E0A526] mb-3">
                  <Palette className="w-5 h-5" />
                </div>
                <h3 className="font-serif font-bold text-xl leading-tight">
                  Have your own garment or motif idea?
                </h3>
                <p className="text-xs text-[#FAF6EF]/80 mt-2 leading-relaxed">
                  We paint on customer-provided fabrics, couple sets, and wedding gifts.
                </p>
              </div>

              <div className="mt-6 flex items-center justify-between text-xs font-semibold text-[#E0A526]">
                <span>Start Custom Request</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* 4. FEATURED DESIGNS */}
      <section className="py-16 bg-[#FAF6EF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-semibold tracking-widest text-[#2F3E75] uppercase">
              Curated Masterpieces
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#2B2522] mt-1">
              Featured Hand-Painted Designs
            </h2>
            <p className="text-sm text-[#5C534E] mt-2">
              Browse our most-loved motifs. Remember: there are no prices shown because each piece is made to order. Click <span className="text-[#C2552E] font-semibold">“DM for Price”</span> to chat directly with the artist on WhatsApp.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredDesigns.map((design) => (
              <DesignCard key={design.id} design={design} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/shop"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#2F3E75] hover:bg-[#222E57] text-[#FAF6EF] font-semibold text-sm shadow-sm transition-all duration-200"
            >
              <span>Explore All 12 Designs</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Paint Stroke Divider */}
      <PaintStrokeDivider color="sand" flip />

      {/* 5. HOW ORDERING WORKS (Deep Green #2F5D4B Accent Section) */}
      <section className="py-16 bg-[#2F5D4B] text-[#FAF6EF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-semibold tracking-widest text-[#E0A526] uppercase">
              Simple 3-Step Process
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white mt-1">
              How Ordering Works
            </h2>
            <p className="text-sm text-[#FAF6EF]/85 mt-2">
              No robotic carts or mass warehouses. Every piece begins with a direct, personal conversation with the artist.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Step 1 */}
            <div className="bg-[#244b3c] rounded-2xl p-8 border border-white/10 relative flex flex-col justify-between">
              <div>
                <span className="text-4xl font-serif font-bold text-[#E0A526] opacity-80">
                  01
                </span>
                <h3 className="font-serif font-bold text-xl text-white mt-3 mb-2">
                  Pick a Design
                </h3>
                <p className="text-sm text-[#FAF6EF]/80 leading-relaxed">
                  Browse our catalog of botanical, tribal, and folk art motifs. Pick an existing design or share your own personal idea, name, or reference image.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-white/10 text-xs text-[#E0A526] font-medium flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4" />
                <span>Available across t-shirts, kurtis, totes & more</span>
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-[#244b3c] rounded-2xl p-8 border border-white/10 relative flex flex-col justify-between">
              <div>
                <span className="text-4xl font-serif font-bold text-[#E0A526] opacity-80">
                  02
                </span>
                <h3 className="font-serif font-bold text-xl text-white mt-3 mb-2">
                  DM Us on WhatsApp or Instagram
                </h3>
                <p className="text-sm text-[#FAF6EF]/80 leading-relaxed">
                  Click <strong>“DM for Price”</strong>. It automatically prepares a pre-filled WhatsApp link with the design details. We’ll discuss sizing, fabric colors, custom touches, and finalize the price with you.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-white/10 text-xs text-[#E0A526] font-medium flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4" />
                <span>Instant response & fabric consultation</span>
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-[#244b3c] rounded-2xl p-8 border border-white/10 relative flex flex-col justify-between">
              <div>
                <span className="text-4xl font-serif font-bold text-[#E0A526] opacity-80">
                  03
                </span>
                <h3 className="font-serif font-bold text-xl text-white mt-3 mb-2">
                  We Paint & Deliver
                </h3>
                <p className="text-sm text-[#FAF6EF]/80 leading-relaxed">
                  The artist paints your garment with precision brushwork, lets it air-cure, and heat-fixes the pigments. We safely box and courier it with live tracking across India.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-white/10 text-xs text-[#E0A526] font-medium flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4" />
                <span>Permanent, washable, and ready to wear</span>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <a
              href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
                "Hi Srujan! I'd like to ask a question about ordering a hand-painted piece."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#C2552E] hover:bg-[#A64421] text-white font-semibold text-sm shadow-md transition-all duration-200"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Have a question? DM Us Directly</span>
            </a>
          </div>
        </div>
      </section>

      {/* 6. PROCESS STRIP (Behind-The-Scenes Craftsmanship) */}
      <section className="py-16 bg-[#FAF6EF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-semibold tracking-widest text-[#2F3E75] uppercase">
              Behind the Brush
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#2B2522] mt-1">
              The Journey of a Hand-Painted Garment
            </h2>
            <p className="text-sm text-[#5C534E] mt-2">
              From raw unbleached fiber to a finished wearable canvas — see how your piece comes alive.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step) => {
              const IconComp = step.icon;
              return (
                <div
                  key={step.num}
                  className="bg-[#F0E6D6]/70 rounded-2xl p-6 border border-[#E2D3BE] flex flex-col justify-between hover:bg-[#F0E6D6] transition-colors"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-xl bg-[#2F3E75] text-[#FAF6EF] flex items-center justify-center">
                        <IconComp className="w-6 h-6" />
                      </div>
                      <span className="text-2xl font-serif font-bold text-[#E0A526]">
                        {step.num}
                      </span>
                    </div>

                    <h3 className="font-serif font-bold text-lg text-[#2B2522] mb-2">
                      {step.title}
                    </h3>

                    <p className="text-xs text-[#5C534E] leading-relaxed">
                      {step.desc}
                    </p>
                  </div>

                  <div className="mt-5 pt-3 border-t border-[#E2D3BE]/60 text-[11px] text-[#2F3E75] font-semibold">
                    Handmade in Studio
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 7. TESTIMONIALS / CUSTOMER PHOTOS */}
      <section className="py-16 bg-[#F0E6D6]/80 border-t border-[#E2D3BE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-semibold tracking-widest text-[#2F3E75] uppercase">
              Collector Love
            </span>
            <h2 className="text-3xl font-serif font-bold text-[#2B2522] mt-1">
              Words From Wearers of Srujan
            </h2>
            <p className="text-sm text-[#5C534E] mt-2">
              Real stories from art lovers and gift buyers who turned fabric into keepsakes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, idx) => (
              <div
                key={idx}
                className="bg-[#FAF6EF] rounded-2xl p-6 sm:p-7 border border-[#E2D3BE] shadow-xs flex flex-col justify-between"
              >
                <div>
                  <Quote className="w-8 h-8 text-[#E0A526] mb-3 opacity-70" />
                  <p className="text-sm text-[#2B2522] italic leading-relaxed mb-6 font-serif">
                    “{t.quote}”
                  </p>
                </div>

                <div className="pt-4 border-t border-[#E2D3BE] flex items-center justify-between">
                  <div>
                    <h4 className="font-bold text-sm text-[#2B2522]">{t.name}</h4>
                    <p className="text-xs text-[#7E726B]">{t.city}, India</p>
                  </div>
                  <span className="text-[11px] px-2.5 py-1 rounded-full bg-[#2F3E75]/10 text-[#2F3E75] font-medium">
                    {t.garment}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. INSTAGRAM FEED SECTION */}
      <section className="py-16 bg-[#FAF6EF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold tracking-widest text-[#C2552E] uppercase">
                <InstagramIcon className="w-4 h-4" />
                <span>On the Gram</span>
              </div>
              <h2 className="text-3xl font-serif font-bold text-[#2B2522] mt-1">
                Follow the Studio Feed
              </h2>
              <p className="text-sm text-[#5C534E] mt-1">
                Daily studio painting clips, wet palette mixes, and behind-the-scenes stories.
              </p>
            </div>

            <a
              href={siteConfig.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 sm:mt-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#2F3E75] hover:bg-[#222E57] text-[#FAF6EF] text-xs font-semibold shadow-xs transition-colors"
            >
              <InstagramIcon className="w-4 h-4" />
              <span>Follow @{siteConfig.instagramHandle}</span>
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {instagramShots.map((shot, i) => (
              <a
                key={i}
                href={siteConfig.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative aspect-square rounded-2xl overflow-hidden bg-[#F0E6D6] border border-[#E2D3BE]"
              >
                <Image
                  src={shot.img}
                  alt={shot.caption}
                  fill
                  className="object-cover group-hover:scale-108 transition-transform duration-500"
                  sizes="(max-width: 640px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center p-4 text-center text-white">
                  <InstagramIcon className="w-6 h-6 mb-2 text-[#E0A526]" />
                  <p className="text-xs font-medium line-clamp-2">{shot.caption}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* 9. BOTTOM BESPOKE CTA BANNER */}
      <section className="py-14 bg-[#222E57] text-white">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <span className="w-12 h-12 rounded-full bg-[#E0A526]/20 text-[#E0A526] inline-flex items-center justify-center text-xl font-serif font-bold mx-auto">
            ✦
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white leading-tight">
            Want something painted specially for you or a loved one?
          </h2>
          <p className="text-base text-[#FAF6EF]/80 max-w-xl mx-auto">
            Whether it’s a favorite verse, birth flowers, wedding dates, or a traditional Indian motif on your favorite shirt — we’re here to paint your vision.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Link
              href="/custom-orders"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#C2552E] hover:bg-[#A64421] text-white font-semibold text-sm shadow-md transition-colors"
            >
              Order a Custom Commission
            </Link>
            <a
              href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
                "Hi Srujan! I have an idea for a custom hand-painted piece."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-7 py-4 rounded-full bg-white/10 hover:bg-white/20 text-[#FAF6EF] font-semibold text-sm border border-white/20 transition-colors inline-flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
