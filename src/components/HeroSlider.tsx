"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

export interface HeroSlide {
  id: string;
  label: string;
  headline: string;
  subtext: string;
  buttonText: string;
  buttonLink: string;
  desktopImage: string;
  mobileImage: string;
  alt: string;
}

/**
 * Slide content easily editable from one single data array.
 * Desktop images: 1920x900.
 * Mobile images: 800x1000.
 */
export const HERO_SLIDES: HeroSlide[] = [
  {
    id: "handmade-happiness",
    label: "COLLECTION 01",
    headline: "Handmade Happiness",
    subtext: "Festive looks, painted by hand.",
    buttonText: "Shop Now",
    buttonLink: "/shop?collection=handmade-happiness",
    desktopImage:
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1920&h=900&q=85",
    mobileImage:
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&h=1000&q=85",
    alt: "Hand-painted Indian festive apparel worn in authentic celebration",
  },
  {
    id: "festive-decor",
    label: "COLLECTION 02",
    headline: "Handmade Festive Decor",
    subtext: "Carry the festival with you.",
    buttonText: "Shop Now",
    buttonLink: "/shop?collection=festive-decor",
    desktopImage:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1920&h=900&q=85",
    mobileImage:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&h=1000&q=85",
    alt: "Handcrafted festive decor and living textiles painted by hand",
  },
  {
    id: "custom-orders",
    label: "BESPOKE SERVICE",
    headline: "Custom Orders",
    subtext: "Your idea, painted on fabric.",
    buttonText: "Order Yours",
    buttonLink: "/custom-orders",
    desktopImage:
      "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=1920&h=900&q=85",
    mobileImage:
      "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=800&h=1000&q=85",
    alt: "Artist hand-painting bespoke motif onto unbleached cotton",
  },
];

export default function HeroSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);

  const totalSlides = HERO_SLIDES.length;

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  // Auto-play every 5 seconds, paused on hover
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [isPaused, nextSlide]);

  // Touch swipe support for mobile
  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;
    if (Math.abs(diff) > 40) {
      if (diff > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }
    touchStartX.current = null;
  };

  return (
    <section
      className="relative w-full h-[100svh] min-h-[580px] sm:min-h-[660px] overflow-hidden bg-black select-none"
      aria-label="Homepage hero banner slider"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Slides */}
      {HERO_SLIDES.map((slide, index) => {
        const isActive = index === currentIndex;
        return (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              isActive
                ? "opacity-100 z-10 pointer-events-auto"
                : "opacity-0 z-0 pointer-events-none"
            }`}
            aria-hidden={!isActive}
          >
            {/* Background Image: picture element with responsive srcset for mobile portrait / desktop */}
            <picture className="absolute inset-0 w-full h-full">
              <source media="(max-width: 640px)" srcSet={slide.mobileImage} />
              <source media="(min-width: 641px)" srcSet={slide.desktopImage} />
              <img
                src={slide.desktopImage}
                alt={slide.alt}
                loading={index === 0 ? "eager" : "lazy"}
                fetchPriority={index === 0 ? "high" : "auto"}
                className="w-full h-full object-cover object-center"
              />
            </picture>

            {/* Soft dark overlay: solid black at 25-30% opacity, no gradients */}
            <div className="absolute inset-0 bg-black/30" aria-hidden="true" />

            {/* Content: Left-aligned, vertically centered, offset slightly for navbar */}
            <div className="relative z-10 w-full h-full flex items-center pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16">
              <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 w-full">
                <div className="max-w-xl text-left text-white space-y-3 sm:space-y-4">
                  {/* Headline in Crimson Pro: 40px mobile, 72px desktop, regular weight */}
                  <h1 className="font-heading text-[40px] sm:text-[56px] lg:text-[72px] font-normal text-white leading-[1.08] tracking-normal">
                    {slide.headline}
                  </h1>

                  {/* One line of subtext in Work Sans: 16-18px */}
                  <p className="font-body text-[16px] sm:text-[18px] text-white/90 leading-snug">
                    {slide.subtext}
                  </p>

                  {/* One single button per slide: white with black text, sharp 2-4px corners, regular weight */}
                  <div className="pt-2 sm:pt-3">
                    <Link
                      href={slide.buttonLink}
                      className="inline-flex items-center justify-center px-7 py-3.5 bg-white text-[#111111] hover:bg-white/90 font-body font-normal text-[14px] sm:text-[15px] rounded-[3px] transition-colors tracking-normal"
                    >
                      <span>{slide.buttonText}</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}

      {/* Desktop Left / Right Navigation Arrows: thin white circle outline */}
      <button
        type="button"
        onClick={prevSlide}
        className="hidden md:flex absolute left-6 lg:left-10 top-1/2 -translate-y-1/2 mt-6 sm:mt-8 z-20 w-11 h-11 rounded-full border border-white/60 text-white hover:bg-white/20 hover:border-white items-center justify-center transition-colors focus:outline-none"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-5 h-5 stroke-[1.5]" />
      </button>

      <button
        type="button"
        onClick={nextSlide}
        className="hidden md:flex absolute right-6 lg:right-10 top-1/2 -translate-y-1/2 mt-6 sm:mt-8 z-20 w-11 h-11 rounded-full border border-white/60 text-white hover:bg-white/20 hover:border-white items-center justify-center transition-colors focus:outline-none"
        aria-label="Next slide"
      >
        <ChevronRight className="w-5 h-5 stroke-[1.5]" />
      </button>

      {/* Dot Indicators: Bottom center (white, active dot filled) */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2.5">
        {HERO_SLIDES.map((slide, idx) => {
          const isActive = idx === currentIndex;
          return (
            <button
              key={slide.id}
              type="button"
              onClick={() => setCurrentIndex(idx)}
              className={`transition-all duration-300 rounded-full focus:outline-none ${
                isActive
                  ? "w-6 h-2 bg-white"
                  : "w-2 h-2 bg-transparent border border-white/80 hover:border-white"
              }`}
              aria-label={`Go to slide ${idx + 1}: ${slide.headline}`}
              aria-current={isActive ? "true" : undefined}
            />
          );
        })}
      </div>
    </section>
  );
}

