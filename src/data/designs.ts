/**
 * Srujan - Catalog Data
 * 
 * Central data file for all hand-painted designs.
 * No prices are listed because every piece is painted to order.
 */

export interface DesignColor {
  name: string;
  hex: string;
}

export interface DesignItem {
  id: string;
  name: string;
  category:
  | "t-shirts"
  | "shirts"
  | "jabhas"
  | "tote-bags"
  | "kurtis-dresses"
  | "pillow-covers";

  categoryLabel: string;
  collection?: "handmade-happiness" | "festive-decor" | string;
  images: string[];
  description: string;
  story: string;
  availableOn: string[];
  colors: DesignColor[];
  sizes: string[];
  isFeatured: boolean;
  isNew: boolean;
  leadTimeDays: string;
  careInstructions: string[];
}

export const CATEGORIES = [
  { id: "all", label: "All Designs" },
  { id: "t-shirts", label: "T-Shirts" },
  { id: "shirts", label: "Shirts" },
  { id: "jabhas", label: "Jabhas" },
  { id: "tote-bags", label: "Tote Bags" },
  { id: "kurtis-dresses", label: "Kurtis & Dresses" },
  { id: "pillow-covers", label: "Pillow Covers" },
] as const;

export interface CollectionInfo {
  id: string;
  title: string;
  tagline: string;
  theme: "light" | "dark";
}

export const COLLECTIONS: CollectionInfo[] = [
  {
    id: "handmade-happiness",
    title: "HANDMADE HAPPINESS",
    tagline: "This time, make your festive season special by giving them an authentic look.",
    theme: "light",
  },
  {
    id: "festive-decor",
    title: "HANDMADE FESTIVE DECOR",
    tagline: "Celebrate every occasion with timeless charm and beautifully handcrafted details.",
    theme: "dark",
  },
];

export const DESIGNS: DesignItem[] = [
  {
    id: "mayur-pankh-motif",
    name: "Mayur Pankh (Peacock Feather)",
    category: "t-shirts",
    categoryLabel: "T-Shirts",
    collection: "handmade-happiness",
    images: [
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1000&q=80",
    ],
    description:
      "A fluid, freehand rendition of a peacock plume painted in deep indigo, sage green, and charcoal linework.",
    story:
      "Inspired by wild peacocks in village courtyards at dawn. Each eye of the feather is layered with three distinct brush strokes to create quiet dimensional depth.",
    availableOn: ["100% Organic Cotton T-Shirt", "Linen Half-Sleeve Shirt", "Oversized Drop-Shoulder Tee"],
    colors: [
      { name: "White", hex: "#FFFFFF" },
      { name: "Blush", hex: "#F8EFEC" },
      { name: "Charcoal", hex: "#1A1A1A" },
      { name: "Deep Wine", hex: "#2A0E13" },
    ],
    sizes: ["XS", "S", "M", "L", "XL", "XXL", "Custom Tailored"],
    isFeatured: true,
    isNew: true,
    leadTimeDays: "4-6 days",
    careInstructions: [
      "Gentle hand wash inside out in cold water",
      "Use mild, bleach-free detergent",
      "Do not scrub directly over the painted motif",
      "Iron on the reverse side with medium heat",
    ],
  },
  {
    id: "kalamkari-tree-of-life",
    name: "Tree of Life (Kalamkari Roots)",
    category: "shirts",
    categoryLabel: "Shirts",
    collection: "handmade-happiness",
    images: [
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=1000&q=80",
    ],
    description:
      "An evocative botanical spine flowing along the front placket, adorned with curling leaves and fine linework.",
    story:
      "The Kalpavriksha tree symbolizes shelter and quiet resilience. Painted using deep indigo and charcoal washes with needle-fine liner brushes.",
    availableOn: ["Pure Cotton Slub Shirt", "Raw Linen Mandarin Collar Shirt", "Kurti Top"],
    colors: [
      { name: "Off-White Khadi", hex: "#FFFFFF" },
      { name: "Blush", hex: "#F8EFEC" },
      { name: "Olive Tint", hex: "#D8DEC9" },
    ],
    sizes: ["S", "M", "L", "XL", "XXL", "Custom Fit"],
    isFeatured: true,
    isNew: false,
    leadTimeDays: "5-7 days",
    careInstructions: [
      "Hand wash with eco-friendly detergent",
      "Air dry in shade to preserve pigment vitality",
      "Warm iron on reverse side",
    ],
  },
  {
    id: "kutch-sunset-jabha",
    name: "Kutch Mirrored Dunes Jabha",
    category: "jabhas",
    categoryLabel: "Jabhas",
    collection: "handmade-happiness",
    images: [
      "https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=1000&q=80",
    ],
    description:
      "A relaxed, collarless Jabha featuring geometric dune waves and quiet tribal borders across the chest.",
    story:
      "The Jabha is an authentic staple of Gujarat — airy, comfortable, and timeless. Here, we brush indigo strokes across the placket and cuffs.",
    availableOn: ["Handloom Cotton Jabha", "Khadi Short Kurta", "Comfort Unisex Tunic"],
    colors: [
      { name: "White", hex: "#FFFFFF" },
      { name: "Blush", hex: "#F8EFEC" },
      { name: "Deep Wine", hex: "#2A0E13" },
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    isFeatured: true,
    isNew: true,
    leadTimeDays: "5-8 days",
    careInstructions: [
      "First wash separately in cold water",
      "Do not wring harshly",
      "Iron inside-out with a damp pressing cloth",
    ],
  },
  {
    id: "madhubani-lotus-tote",
    name: "Matsya & Kamal Canvas Tote",
    category: "tote-bags",
    categoryLabel: "Tote Bags",
    collection: "festive-decor",
    images: [
      "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1574634534894-89d7576c8259?auto=format&fit=crop&w=1000&q=80",
    ],
    description:
      "Heavyweight natural canvas tote painted with twin fish and blooming water lilies in Madhubani cross-hatch strokes.",
    story:
      "In folk tradition, twin fish symbolize abundance and calm movement. Made for books and everyday markets with reinforced box stitching.",
    availableOn: ["100% Cotton Heavy Canvas Tote with Inner Pocket", "Mini Book Sling"],
    colors: [
      { name: "Natural Canvas", hex: "#F8EFEC" },
      { name: "Charcoal", hex: "#1A1A1A" },
    ],
    sizes: ["Standard 16x15 inches with 11-inch drop strap"],
    isFeatured: true,
    isNew: false,
    leadTimeDays: "3-5 days",
    careInstructions: [
      "Spot clean with cold water and mild soap sponge",
      "Do not machine tumble dry",
      "Steam iron from the reverse if needed",
    ],
  },
  {
    id: "pichwai-kamdhenu-kurti",
    name: "Kamdhenu & Lotus Kurti",
    category: "kurtis-dresses",
    categoryLabel: "Kurtis & Dresses",
    collection: "handmade-happiness",
    images: [
      "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1000&q=80",
    ],
    description:
      "A straight cotton kurti adorned with hand-painted sacred cows and floating lotus blossoms inspired by Nathdwara Pichwai heritage.",
    story:
      "We adapt temple art heritage into wearable, everyday clothing using subtle brush strokes on handspun cotton.",
    availableOn: ["Pure Chanderi Silk-Cotton Kurti", "South Handloom Cotton Kurti", "Long Tiered Maxi Dress"],
    colors: [
      { name: "Ivory Cotton", hex: "#FFFFFF" },
      { name: "Deep Wine", hex: "#2A0E13" },
      { name: "Deep Wine", hex: "#2A0E13" },
      { name: "Maroon", hex: "#7A1F2B" },
    ],
    sizes: ["XS", "S", "M", "L", "XL", "XXL", "Custom Measurements"],
    isFeatured: true,
    isNew: true,
    leadTimeDays: "7-10 days",
    careInstructions: [
      "Dry clean or delicate hand wash in mild shampoo water",
      "Do not bleach or soak",
      "Iron on back side at low silk/cotton setting",
    ],
  },
  {
    id: "gulmohar-cushion-cover",
    name: "Gulmohar in Bloom Pillow Covers",
    category: "pillow-covers",
    categoryLabel: "Pillow Covers",
    collection: "festive-decor",
    images: [
      "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1000&q=80",
    ],
    description:
      "Subtle botanical branches brushed diagonally across textured handwoven slub cotton cushions.",
    story:
      "Inspired by the afternoon shade under flowering Gulmohar branches, bringing warmth into a quiet reading room.",
    availableOn: ["Heavy Slub Cotton 16x16 Cushion Cover", "Textured Linen 18x18 Cushion Cover", "Lumbar Pillow (12x20)"],
    colors: [
      { name: "Blush", hex: "#F8EFEC" },
      { name: "White", hex: "#FFFFFF" },
      { name: "Charcoal", hex: "#1A1A1A" },
    ],
    sizes: ["16 x 16 inches", "18 x 18 inches", "12 x 20 inches"],
    isFeatured: true,
    isNew: false,
    leadTimeDays: "4-6 days",
    careInstructions: [
      "Removable zippered cover",
      "Cold water gentle wash",
      "Do not brush or rub surface violently",
      "Iron on reverse side",
    ],
  },
  {
    id: "warli-tarpa-dance-tee",
    name: "Warli Rhythm & Tarpa Dance",
    category: "t-shirts",
    categoryLabel: "T-Shirts",
    collection: "handmade-happiness",
    images: [
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1000&q=80",
    ],
    description:
      "Minimalist tribal rhythm depicted in charcoal ink, showcasing circular dancers moving together.",
    story:
      "Rooted in ancient Warli art, painted with simple geometric triangular forms holding hands in harmony.",
    availableOn: ["Combed Cotton Bio-Wash Tee", "Heavyweight Boxy Fit Tee", "Canvas Tote"],
    colors: [
      { name: "Blush", hex: "#F8EFEC" },
      { name: "Deep Wine", hex: "#2A0E13" },
      { name: "Charcoal", hex: "#1A1A1A" },
    ],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    isFeatured: false,
    isNew: false,
    leadTimeDays: "3-5 days",
    careInstructions: [
      "Machine wash gentle inside out with cold water",
      "Tumble dry low or line dry in shade",
      "Iron on back side",
    ],
  },
  {
    id: "monsoon-megh-cranes-shirt",
    name: "Monsoon Clouds & Cranes",
    category: "shirts",
    categoryLabel: "Shirts",
    collection: "handmade-happiness",
    images: [
      "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=1000&q=80",
    ],
    description:
      "A serene painterly composition of storm clouds drifting across the shoulder with a pair of cranes across the chest.",
    story:
      "Designed for those who view shirts as their canvas. Atmospheric indigo gradients meet crisp white brush strokes.",
    availableOn: ["100% Breathable Linen Resort Shirt", "Slub Cotton Button-Down"],
    colors: [
      { name: "White", hex: "#FFFFFF" },
      { name: "Maroon", hex: "#7A1F2B" },
      { name: "Deep Wine", hex: "#2A0E13" },
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    isFeatured: false,
    isNew: true,
    leadTimeDays: "6-8 days",
    careInstructions: [
      "Gentle cold hand wash",
      "Do not bleach",
      "Hang dry immediately",
      "Warm iron on reverse side",
    ],
  },
  {
    id: "mandala-ajrakh-jabha",
    name: "Geometric Bloom Ajrakh Jabha",
    category: "jabhas",
    categoryLabel: "Jabhas",
    collection: "festive-decor",
    images: [
      "https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=1000&q=80",
    ],
    description:
      "Inspired by traditional Ajrakh symmetry, painted freehand in indigo and deep charcoal hues.",
    story:
      "Rather than block carving, our artist hand-strokes each star freehand, giving geometric patterns an organic pulse.",
    availableOn: ["Traditional Khadi Jabha", "Long Sleeve Mandarin Shirt"],
    colors: [
      { name: "Blush", hex: "#F8EFEC" },
      { name: "Deep Wine", hex: "#2A0E13" },
      { name: "Charcoal", hex: "#1A1A1A" },
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    isFeatured: false,
    isNew: false,
    leadTimeDays: "5-7 days",
    careInstructions: [
      "Hand wash with gentle detergent",
      "Line dry in partial shade",
      "Iron on back side",
    ],
  },
  {
    id: "champa-jasmine-pillow-cover",
    name: "Champa & Jasmine Cushion",
    category: "pillow-covers",
    categoryLabel: "Pillow Covers",
    collection: "festive-decor",
    images: [
      "https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=1000&q=80",
    ],
    description:
      "Delicate plumeria and sweet jasmine blossoms scattered as if fallen onto morning cloth.",
    story:
      "Garden nostalgia rendered in subtle white gouache and indigo linework on heavy woven cotton canvas.",
    availableOn: ["Heavy Slub Cotton 16x16 Cushion", "18x18 Cushion", "Bed Runner (Custom)"],
    colors: [
      { name: "Blush", hex: "#F8EFEC" },
      { name: "Deep Wine", hex: "#2A0E13" },
      { name: "Charcoal", hex: "#1A1A1A" },
    ],
    sizes: ["16 x 16 inches", "18 x 18 inches"],
    isFeatured: false,
    isNew: false,
    leadTimeDays: "3-5 days",
    careInstructions: [
      "Zip off cover and gentle hand wash in cold water",
      "Do not bleach",
      "Iron inside-out",
    ],
  },
  {
    id: "neelakurinji-flared-dress",
    name: "Neelakurinji Blossom & Indigo Waves",
    category: "kurtis-dresses",
    categoryLabel: "Kurtis & Dresses",
    collection: "handmade-happiness",
    images: [
      "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=1000&q=80",
    ],
    description:
      "A tiered flared cotton dress hand-painted with purplish-blue blossoms over rolling indigo brushwork.",
    story:
      "The rare Neelakurinji flower blooms once every twelve years in the hills. We painted its story along the flared hemline.",
    availableOn: ["Tiered Flared Cotton Maxi Dress", "Sleeveless Anarkali Kurti", "Linen Tunic"],
    colors: [
      { name: "White", hex: "#FFFFFF" },
      { name: "Deep Wine", hex: "#2A0E13" },
      { name: "Blush", hex: "#F8EFEC" },
    ],
    sizes: ["XS", "S", "M", "L", "XL", "XXL", "Custom Measurements"],
    isFeatured: true,
    isNew: true,
    leadTimeDays: "7-12 days",
    careInstructions: [
      "Delicate hand wash with mild liquid soap",
      "Do not squeeze or wring excessively",
      "Dry flat in shade",
      "Steam iron on the reverse",
    ],
  },
];
