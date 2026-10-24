"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { DesignItem } from "@/data/designs";
import { getWishlistWhatsAppUrl } from "@/config/siteConfig";

interface WishlistContextType {
  wishlist: DesignItem[];
  addToWishlist: (item: DesignItem) => void;
  removeFromWishlist: (id: string) => void;
  toggleWishlist: (item: DesignItem) => void;
  isInWishlist: (id: string) => boolean;
  clearWishlist: () => void;
  isDrawerOpen: boolean;
  setIsDrawerOpen: (open: boolean) => void;
  getWhatsAppWishlistLink: () => string;
}

const WishlistContext = createContext<WishlistContextType | undefined>(undefined);

export function WishlistProvider({ children }: { children: React.ReactNode }) {
  const [wishlist, setWishlist] = useState<DesignItem[]>([]);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load from localStorage on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem("srujan_wishlist");
      if (saved) {
        setWishlist(JSON.parse(saved));
      }
    } catch {
      // LocalStorage might be disabled or unavailable
    }
    setIsLoaded(true);
  }, []);

  // Save to localStorage on change
  useEffect(() => {
    if (!isLoaded) return;
    try {
      localStorage.setItem("srujan_wishlist", JSON.stringify(wishlist));
    } catch {
      // ignore
    }
  }, [wishlist, isLoaded]);

  const addToWishlist = (item: DesignItem) => {
    setWishlist((prev) => {
      if (prev.some((d) => d.id === item.id)) return prev;
      return [...prev, item];
    });
  };

  const removeFromWishlist = (id: string) => {
    setWishlist((prev) => prev.filter((d) => d.id !== id));
  };

  const toggleWishlist = (item: DesignItem) => {
    setWishlist((prev) => {
      const exists = prev.some((d) => d.id === item.id);
      if (exists) {
        return prev.filter((d) => d.id !== item.id);
      } else {
        return [...prev, item];
      }
    });
  };

  const isInWishlist = (id: string) => {
    return wishlist.some((d) => d.id === id);
  };

  const clearWishlist = () => {
    setWishlist([]);
  };

  const getWhatsAppWishlistLink = () => {
    return getWishlistWhatsAppUrl(
      wishlist.map((item) => ({
        id: item.id,
        name: item.name,
        categoryLabel: item.categoryLabel,
      }))
    );
  };

  return (
    <WishlistContext.Provider
      value={{
        wishlist,
        addToWishlist,
        removeFromWishlist,
        toggleWishlist,
        isInWishlist,
        clearWishlist,
        isDrawerOpen,
        setIsDrawerOpen,
        getWhatsAppWishlistLink,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
}

export function useWishlist() {
  const context = useContext(WishlistContext);
  if (!context) {
    throw new Error("useWishlist must be used within a WishlistProvider");
  }
  return context;
}
