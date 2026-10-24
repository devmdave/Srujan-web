import React from "react";
import { notFound } from "next/navigation";
import { DESIGNS, DesignItem } from "@/data/designs";
import ProductDetailClient from "./ProductDetailClient";
import type { Metadata } from "next";
import { siteConfig } from "@/config/siteConfig";

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return DESIGNS.map((d) => ({
    id: d.id,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const design = DESIGNS.find((d) => d.id === id);

  if (!design) {
    return {
      title: "Design Not Found | Srujan",
    };
  }

  return {
    title: `${design.name} (${design.categoryLabel}) | Srujan Handpainted`,
    description: `${design.description} Hand-painted on demand on your choice of ${design.availableOn.join(", ")}. DM for price & sizing.`,
    openGraph: {
      title: `${design.name} - Hand-Painted Fabric Art | Srujan`,
      description: design.description,
      images: [
        {
          url: design.images[0],
          alt: design.name,
        },
      ],
    },
  };
}

export default async function ProductDetailPage({ params }: Props) {
  const { id } = await params;
  const design = DESIGNS.find((d) => d.id === id);

  if (!design) {
    notFound();
  }

  // Related designs from same or adjacent category
  const relatedDesigns = DESIGNS.filter(
    (d) => d.id !== design.id && (d.category === design.category || d.isFeatured)
  ).slice(0, 4);

  return <ProductDetailClient design={design} relatedDesigns={relatedDesigns} />;
}
