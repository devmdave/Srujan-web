/**
 * Srujan - Catalog Data
 * 
 * You can add, edit, or remove designs here.
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
    | "pillow-covers"
    | "others";
  categoryLabel: string;
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
  { id: "others", label: "Stoles & Decor" },
] as const;

export const DESIGNS: DesignItem[] = [
  {
    id: "mayur-pankh-motif",
    name: "Mayur Pankh (Peacock Feather)",
    category: "t-shirts",
    categoryLabel: "T-Shirts",
    images: [
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1000&q=80",
    ],
    description:
      "A fluid, freehand rendition of India's sacred peacock plume, painted with emerald green, lapis indigo, and delicate gold shimmer accents.",
    story:
      "Inspired by the monsoon dawn in Gujarat when wild peacocks wander through village courtyards. Each eye of the feather is laid down with three distinct coats of pigment to achieve radiant dimensional depth.",
    availableOn: ["100% Organic Cotton T-Shirt", "Linen Half-Sleeve Shirt", "Oversized Drop-Shoulder Tee"],
    colors: [
      { name: "Cotton White", hex: "#FAF6EF" },
      { name: "Warm Sand", hex: "#F0E6D6" },
      { name: "Raw Charcoal", hex: "#2B2522" },
      { name: "Vintage Indigo", hex: "#2F3E75" },
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
    images: [
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=1000&q=80",
    ],
    description:
      "An evocative botanical spine flowing along the front button placket, adorned with curling leaves, flowering buds, and songbirds.",
    story:
      "The Kalpavriksha or wish-fulfilling tree symbolizes shelter, resilience, and interconnected nature. Painted using deep terracotta and ochre shades with needle-fine liner brush strokes.",
    availableOn: ["Pure Cotton Slub Shirt", "Raw Linen Mandarin Collar Shirt", "Kurti Top"],
    colors: [
      { name: "Off-White Khadi", hex: "#FAF6EF" },
      { name: "Earthy Sand", hex: "#F0E6D6" },
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
    name: "Kutch Sunset Mirrored Dunes",
    category: "jabhas",
    categoryLabel: "Jabhas",
    images: [
      "https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=1000&q=80",
    ],
    description:
      "Traditional Indian comfort meets contemporary brushwork. A relaxed, collarless Jabha featuring geometric sunset waves and warm tribal borders.",
    story:
      "The Jabha is an authentic staple of Gujarat and Western India — breezy, soulful, and timeless. Here, we brush warm mustard yellows and burnt sienna across the chest and cuffs, reminiscent of evening light settling over the Great Rann.",
    availableOn: ["Handloom Cotton Jabha", "Khadi Short Kurta", "Comfort Unisex Tunic"],
    colors: [
      { name: "Bleached Cotton", hex: "#FAF6EF" },
      { name: "Warm Mustard", hex: "#E0A526" },
      { name: "Natural Sand", hex: "#F0E6D6" },
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
    images: [
      "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1574634534894-89d7576c8259?auto=format&fit=crop&w=1000&q=80",
    ],
    description:
      "Heavyweight 400 GSM natural canvas tote painted with auspicious twin fish and blooming water lilies in authentic Madhubani cross-hatch strokes.",
    story:
      "In folk folklore, the twin fish symbolize abundance and fearless movement against the current. Built for daily markets, book lovers, and college carryalls with reinforced box stitching.",
    availableOn: ["100% Cotton Heavy Canvas Tote with Inner Pocket", "Mini Book Sling"],
    colors: [
      { name: "Natural Raw Canvas", hex: "#F0E6D6" },
      { name: "Midnight Charcoal", hex: "#2B2522" },
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
    name: "Kamdhenu & Golden Lotus Kurti",
    category: "kurtis-dresses",
    categoryLabel: "Kurtis & Dresses",
    images: [
      "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1000&q=80",
    ],
    description:
      "A regal A-line straight kurti adorned with hand-painted sacred cows and floating pink lotus blossoms inspired by 400-year-old Nathdwara Pichwai art.",
    story:
      "Pichwai paintings traditionally hang behind temple deities. We adapt this temple heritage into graceful, everyday celebration wear using gold leaf pigment highlights and fine camel hair brush strokes.",
    availableOn: ["Pure Chanderi Silk-Cotton Kurti", "South Handloom Cotton Kurti", "Long Tiered Maxi Dress"],
    colors: [
      { name: "Ivory Cotton", hex: "#FAF6EF" },
      { name: "Sage Deep Green", hex: "#2F5D4B" },
      { name: "Terracotta Glow", hex: "#C2552E" },
      { name: "Royal Indigo", hex: "#2F3E75" },
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
    images: [
      "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1000&q=80",
    ],
    description:
      "Fiery scarlet and orange Gulmohar floral sprays brushed diagonally across textured handwoven slub cotton cushions.",
    story:
      "During peak Indian summer, Gulmohar trees paint the sky on fire. We captured those flamboyant blossoms onto cushion covers that breathe vitality and warmth into your living room or reading nook.",
    availableOn: ["Heavy Slub Cotton 16x16 Cushion Cover", "Textured Linen 18x18 Cushion Cover", "Lumbar Pillow (12x20)"],
    colors: [
      { name: "Warm Sand", hex: "#F0E6D6" },
      { name: "Cotton White", hex: "#FAF6EF" },
      { name: "Raw Charcoal", hex: "#2B2522" },
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
    id: "rani-bagh-marigold-stole",
    name: "Genda Phool (Marigold) Silk Stole",
    category: "others",
    categoryLabel: "Stoles & Decor",
    images: [
      "https://images.unsplash.com/photo-1607083206869-4c7672e72a8a?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=1000&q=80",
    ],
    description:
      "A lightweight tussar silk stole scattered with hand-painted saffron and yellow marigolds that flutter like celebratory confetti.",
    story:
      "Marigolds are the soul of Indian festivals, welcomes, and beginnings. Each petal is dabbed with wet-on-wet technique so colors softly bleed into natural silk fibers.",
    availableOn: ["Pure Cotton-Silk Stole (2.2m)", "Chiffon Dupatta (2.5m)", "Framed Fabric Wall Tapestry"],
    colors: [
      { name: "Raw Unbleached Ecru", hex: "#FAF6EF" },
      { name: "Mustard Sunrise", hex: "#E0A526" },
      { name: "Deep Indigo", hex: "#2F3E75" },
    ],
    sizes: ["Stole: 22 x 80 inches", "Dupatta: 36 x 98 inches"],
    isFeatured: true,
    isNew: true,
    leadTimeDays: "5-7 days",
    careInstructions: [
      "Dry clean recommended for first wash",
      "Subsequent washes: hand rinse in cold water with liquid silk detergent",
      "Steam iron while lightly damp",
    ],
  },
  {
    id: "warli-tarpa-dance-tee",
    name: "Warli Rhythm & Tarpa Dance",
    category: "t-shirts",
    categoryLabel: "T-Shirts",
    images: [
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1000&q=80",
    ],
    description:
      "Minimalist tribal rhythm depicted in charcoal ink and terracotta tones, showcasing circular dancers moving to the rustic Tarpa trumpet.",
    story:
      "Rooted in the ancient Warli tribe of Maharashtra, this art is painted with rhythmic geometry using triangular human forms holding hands in circular harmony with mother nature.",
    availableOn: ["Combed Cotton Bio-Wash Tee", "Heavyweight Boxy Fit Tee", "Canvas Tote"],
    colors: [
      { name: "Warm Sand", hex: "#F0E6D6" },
      { name: "Terracotta Earth", hex: "#C2552E" },
      { name: "Charcoal Ash", hex: "#2B2522" },
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
    name: "Monsoon Clouds & Flying Cranes",
    category: "shirts",
    categoryLabel: "Shirts",
    images: [
      "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=1000&q=80",
    ],
    description:
      "A serene painterly composition of storm clouds drifting across the shoulder with a pair of Japanese/Indian cranes soaring across the chest.",
    story:
      "Designed for those who view shirts as their canvas. Atmospheric indigo gradients meet crisp white brush strokes that create an illusion of misty monsoon rain.",
    availableOn: ["100% Breathable Linen Resort Shirt", "Slub Cotton Button-Down"],
    colors: [
      { name: "Cotton White", hex: "#FAF6EF" },
      { name: "Indigo Blue", hex: "#2F3E75" },
      { name: "Sage Mist", hex: "#D8DEC9" },
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
    images: [
      "https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=1000&q=80",
    ],
    description:
      "Inspired by Sindhi & Kachchhi Ajrakh symmetry. Hand-painted stars and octagonal florets painted with natural indigo and madder red hues.",
    story:
      "Rather than block carving, our artist hand-strokes each star freehand, giving this traditional geometric pattern an organic, breathing human pulse.",
    availableOn: ["Traditional Khadi Jabha", "Long Sleeve Mandarin Shirt"],
    colors: [
      { name: "Unbleached Sand", hex: "#F0E6D6" },
      { name: "Deep Indigo", hex: "#2F3E75" },
      { name: "Terracotta Red", hex: "#C2552E" },
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
    name: "Champa & Night Jasmine Cushion",
    category: "pillow-covers",
    categoryLabel: "Pillow Covers",
    images: [
      "https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=1000&q=80",
    ],
    description:
      "Delicate yellow plumeria (Champa) and sweet Parijat blossoms scattered as if fallen onto the morning grass.",
    story:
      "Fragrant garden nostalgia rendered in subtle white gouache and warm mustard pigment on heavy woven cotton canvas.",
    availableOn: ["Heavy Slub Cotton 16x16 Cushion", "18x18 Cushion", "Bed Runner (Custom)"],
    colors: [
      { name: "Warm Sand", hex: "#F0E6D6" },
      { name: "Forest Deep Green", hex: "#2F5D4B" },
      { name: "Charcoal Ink", hex: "#2B2522" },
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
    images: [
      "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=1000&q=80",
    ],
    description:
      "A poetic tiered flared cotton dress hand-painted with the rare purplish-blue blossoms of the Western Ghats blooming over rolling indigo gradients.",
    story:
      "The legendary Neelakurinji flower blooms only once every twelve years in Munnar. We painted its story along the flared hemline so it sways like mist in the hills with every step.",
    availableOn: ["Tiered Flared Cotton Maxi Dress", "Sleeveless Anarkali Kurti", "Linen Tunic"],
    colors: [
      { name: "Cotton White", hex: "#FAF6EF" },
      { name: "Deep Indigo", hex: "#2F3E75" },
      { name: "Vintage Lavender Sand", hex: "#F0E6D6" },
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
