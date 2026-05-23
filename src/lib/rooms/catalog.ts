import { images } from "@/lib/design-tokens";
import type { RoomType } from "@/lib/booking/types";

export interface RoomCatalogEntry {
  id: RoomType;
  slug: string;
  collectionKey: "collection1" | "collection2" | "collection3";
  titleKey: "heritage" | "obsidian" | "ivory";
  bodyKey: "heritageBody" | "obsidianBody" | "ivoryBody";
  price: number;
  image: string;
  gallery: string[];
  size: string;
  view: string;
}

export const roomCatalog: RoomCatalogEntry[] = [
  {
    id: "heritage",
    slug: "heritage-suite",
    collectionKey: "collection1",
    titleKey: "heritage",
    bodyKey: "heritageBody",
    price: 850,
    image: images.heritageSuite,
    gallery: [images.heritageSuite, images.bathroom, images.staircase],
    size: "72 m²",
    view: "Garden courtyard",
  },
  {
    id: "obsidian",
    slug: "obsidian-studio",
    collectionKey: "collection2",
    titleKey: "obsidian",
    bodyKey: "obsidianBody",
    price: 620,
    image: images.obsidianStudio,
    gallery: [images.obsidianStudio, images.quietude, images.bathroom],
    size: "48 m²",
    view: "City twilight",
  },
  {
    id: "ivory",
    slug: "ivory-pavilion",
    collectionKey: "collection3",
    titleKey: "ivory",
    bodyKey: "ivoryBody",
    price: 1150,
    image: images.ivoryPavilion,
    gallery: [images.ivoryPavilion, images.quietude, images.materialHonesty],
    size: "96 m²",
    view: "Northern light",
  },
];

export function getRoomBySlug(slug: string) {
  return roomCatalog.find((r) => r.slug === slug);
}
