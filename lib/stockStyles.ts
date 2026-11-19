import type { Stock } from "@/lib/stores";

// Colors and labels for each stock level, shared by the store and flavor pages
export const stockStyles: Record<Stock, { label: string; badge: string; dot: string }> = {
  available: { label: "Available", badge: "bg-green-100 text-green-800", dot: "bg-green-500" },
  low: { label: "Running Low", badge: "bg-amber-100 text-amber-800", dot: "bg-amber-500" },
  soldOut: { label: "Sold Out", badge: "bg-red-100 text-red-800", dot: "bg-red-500" },
};
