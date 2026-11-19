// Starting data for the local database. Prices are in cents.
// Placeholder candies and stock levels, replace with real inventory later.

export type StockStatus = "AVAILABLE" | "LOW" | "SOLD_OUT";

export const stores = [
  { slug: "columbia", name: "Columbia", city: "Columbia", state: "MD", imageUrl: "/images/columbia.jpg" },
  { slug: "bethesda", name: "Bethesda", city: "Bethesda", state: "MD", imageUrl: "/images/bethesda.jpg" },
  { slug: "tysons", name: "Tysons", city: "Tysons", state: "VA", imageUrl: "/images/tysons.jpg" },
  { slug: "baltimore", name: "Baltimore", city: "Baltimore", state: "MD", imageUrl: "/images/baltimore.jpg" },
];

export const candies = [
  { slug: "mega-cola-rambos", name: "Mega Cola Rambos", priceCents: 495, flavor: "Cola" },
  { slug: "strawberry-rolls", name: "Strawberry Rolls", priceCents: 495, flavor: "Strawberry" },
  { slug: "danish-skull", name: "Danish Skull", priceCents: 495, flavor: "Strawberry" },
  { slug: "pineapple-rings", name: "Pineapple Rings", priceCents: 495, flavor: "Pineapple" },
  { slug: "blue-sharks", name: "Blue Sharks", priceCents: 495, flavor: "Blueberry" },
  { slug: "orange-rings", name: "Orange Rings", priceCents: 495, flavor: "Orange" },
  { slug: "vanilla-mallows", name: "Vanilla Mallows", priceCents: 495, flavor: "Vanilla" },
  { slug: "sour-lemon-drops", name: "Sour Lemon Drops", priceCents: 495, flavor: "Lemon" },
  { slug: "blueberry-bites", name: "Blueberry Bites", priceCents: 495, flavor: "Blueberry" },
  { slug: "mango-gummies", name: "Mango Gummies", priceCents: 495, flavor: "Mango" },
  { slug: "raspberry-twists", name: "Raspberry Twists", priceCents: 495, flavor: "Raspberry" },
];

// storeSlug -> [candySlug, status]
export const inventory: Record<string, [string, StockStatus][]> = {
  columbia: [
    ["strawberry-rolls", "AVAILABLE"],
    ["sour-lemon-drops", "LOW"],
    ["raspberry-twists", "AVAILABLE"],
    ["blueberry-bites", "SOLD_OUT"],
    ["mega-cola-rambos", "AVAILABLE"],
    ["blue-sharks", "LOW"],
  ],
  bethesda: [
    ["strawberry-rolls", "AVAILABLE"],
    ["blueberry-bites", "AVAILABLE"],
    ["mango-gummies", "LOW"],
    ["danish-skull", "SOLD_OUT"],
    ["vanilla-mallows", "AVAILABLE"],
  ],
  tysons: [
    ["sour-lemon-drops", "LOW"],
    ["raspberry-twists", "AVAILABLE"],
    ["mango-gummies", "AVAILABLE"],
    ["orange-rings", "SOLD_OUT"],
    ["pineapple-rings", "AVAILABLE"],
    ["mega-cola-rambos", "AVAILABLE"],
    ["vanilla-mallows", "LOW"],
  ],
  baltimore: [
    ["strawberry-rolls", "AVAILABLE"],
    ["sour-lemon-drops", "SOLD_OUT"],
    ["blueberry-bites", "AVAILABLE"],
    ["pineapple-rings", "LOW"],
    ["blue-sharks", "AVAILABLE"],
    ["danish-skull", "LOW"],
  ],
};
