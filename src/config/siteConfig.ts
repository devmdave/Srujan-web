/**
 * Srujan - Handmade Fabric Painting Brand Configuration
 * 
 * You can edit your brand information, contact details, social links,
 * and WhatsApp templates here without touching any components.
 */

export const siteConfig = {
  // Brand details
  brandName: "Srujan",
  brandSlogan: "Wearable art, painted by hand",
  brandMeaning: "Srujan (सृजन) means creation in Sanskrit",
  tagline: "Every brushstroke is original. No two pieces are ever the same.",
  shortBio:
    "Handcrafted fabric painting brand based in India. We hand-paint wearable art on pure cottons, khadi, and linens — from everyday t-shirts and tote bags to festive kurtis and bespoke jabhas.",

  // Contact and Social Information
  // Change your WhatsApp number here (country code + number without spaces or '+')
  whatsappNumber: "91972711181",
  whatsappDisplayNumber: "+91 97271 11181",

  // Change your Instagram handle here
  instagramHandle: "srujan.handpainted",
  instagramUrl: "https://instagram.com/srujan.handpainted",

  // Email and Location
  email: "hello.srujan@gmail.com",
  location: "Ahmedabad & Bengaluru, India",
  shippingNotice: "Pan-India Shipping via Speed Courier • Worldwide on request",
  timelineNotice: "Made to order: 4-7 business days for hand-painting and heat-curing",

  // Ordering Guidelines
  orderingNotice:
    "We don't do mass production or automated carts. Every purchase begins with a personal conversation with the artist so we can tailor the size, fabric, and placement to you.",
};

/**
 * Helper to construct WhatsApp link with encoded text
 */
export function createWhatsAppUrl(message: string): string {
  const cleanPhone = siteConfig.whatsappNumber.replace(/[^0-9]/g, "");
  return `https://wa.me/${cleanPhone}?text=${encodeURIComponent(message.trim())}`;
}

/**
 * Generate dynamic WhatsApp link for a specific design
 */
export function getProductWhatsAppUrl(params: {
  designName: string;
  productType?: string;
  pageUrl?: string;
}): string {
  const { designName, productType = "Standard Garment", pageUrl = "" } = params;
  const urlPart = pageUrl ? `\n\nLink: ${pageUrl}` : "";
  const text = `Hi Srujan! I'm interested in the design "${designName}" on ${productType}. Could you share the price, fabric options, and availability?${urlPart}`;
  return createWhatsAppUrl(text);
}

/**
 * Generate dynamic WhatsApp link for custom orders
 */
export function getCustomOrderWhatsAppUrl(params: {
  name: string;
  itemType: string;
  idea: string;
  deadline?: string;
  fabricColor?: string;
}): string {
  const { name, itemType, idea, deadline, fabricColor } = params;
  let text = `Hi Srujan! My name is ${name || "a customer"}.\n`;
  text += `I would love to commission a custom hand-painted piece!\n\n`;
  text += `• Item: ${itemType || "Custom Fabric"}\n`;
  if (fabricColor) text += `• Preferred Fabric Color: ${fabricColor}\n`;
  text += `• My Idea/Theme: ${idea}\n`;
  if (deadline) text += `• Needed By: ${deadline}\n\n`;
  text += `Could you let me know if this is possible and share an estimate?`;
  return createWhatsAppUrl(text);
}

/**
 * Generate dynamic WhatsApp link for the entire wishlist
 */
export function getWishlistWhatsAppUrl(
  items: Array<{ name: string; categoryLabel: string; id: string }>
): string {
  if (!items.length) return createWhatsAppUrl("Hi Srujan! I'd like to ask about your hand-painted designs.");

  let text = `Hi Srujan! I browsed your catalog and saved these ${items.length} hand-painted design(s) to my wishlist:\n\n`;
  items.forEach((item, index) => {
    text += `${index + 1}. "${item.name}" (${item.categoryLabel})\n`;
  });
  text += `\nCould you please share the price and options for these pieces? Thank you!`;
  return createWhatsAppUrl(text);
}
