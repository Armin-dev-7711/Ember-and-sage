import type { GlimpseColumn } from "../types";

/**
 * Mock data for the "A Glimpse Inside" atmosphere gallery.
 * Grouped by desktop column; items are ordered top → bottom.
 */
export const galleryColumns: GlimpseColumn[] = [
  {
    id: "col-1",
    items: [
      {
        id: "booth",
        title: "The dining booths",
        alt: "Curved olive velvet booths and copper disc pendant lights with the open-fire kitchen glowing in the background",
        aspectRatio: "3/4",
        imageSrc: "/images/home/glimpse/glimpse-booth.jpg",
      },
      {
        id: "salmon",
        title: "Fire-roasted salmon",
        alt: "Fire-roasted salmon fillet with charred citrus, grilled asparagus and fresh herbs on a black plate",
        aspectRatio: "4/3",
        imageSrc: "/images/home/glimpse/glimpse-salmon.jpg",
      },
    ],
  },
  {
    id: "col-2",
    items: [
      {
        id: "chef-fire",
        title: "The open fire",
        alt: "A chef cooking two pans over a roaring open fire with embers and sparks in the air",
        aspectRatio: "16/10",
        imageSrc: "/images/home/glimpse/glimpse-chef-fire.jpg",
      },
      {
        id: "cocktail",
        title: "Smoked cocktail",
        alt: "Amber cocktail with rising smoke tendrils on a dark glossy bar",
        aspectRatio: "4/5",
        imageSrc: "/images/home/glimpse/glimpse-cocktail.jpg",
      },
      {
        id: "dining-room",
        title: "The dining room",
        alt: "Nighttime dining room with an open stone hearth fire and seated guests by candlelight",
        aspectRatio: "16/10",
        imageSrc: "/images/home/glimpse/glimpse-dining-room.jpg",
      },
    ],
  },
  {
    id: "col-3",
    items: [
      {
        id: "gnocchi",
        title: "Sage butter gnocchi",
        alt: "Bowl of sage butter gnocchi with wild mushrooms and an antique silver fork",
        aspectRatio: "1/1",
        imageSrc: "/images/home/glimpse/glimpse-gnocchi.jpg",
      },
      {
        id: "exterior",
        title: "The restaurant at night",
        alt: "Restaurant facade at night with warm mullioned windows and outdoor cafe tables",
        aspectRatio: "4/3",
        imageSrc: "/images/home/glimpse/glimpse-exterior.jpg",
      },
      {
        id: "torte",
        title: "Dark chocolate torte",
        alt: "Slice of dark chocolate torte with toasted hazelnuts, sea salt and meringue cream",
        aspectRatio: "4/5",
        imageSrc: "/images/home/glimpse/glimpse-torte.jpg",
      },
    ],
  },
];
