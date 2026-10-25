/* 

Browse stores
On the URL - yoursite.com/location

*/
/* We need this since we are dealing with real-time user interaction */
"use client";

import { useState } from "react";
import StoreCard from "@/components/StoreCard";
import { stores } from "@/lib/stores";

const filters = ["All Stores", "Maryland", "Virginia"];

export default function LocationPage() {
  const [activeFilter, setActiveFilter] = useState("All Stores");

  const filteredStores =
    activeFilter === "All Stores"
      ? stores
      : stores.filter((store) =>
          store.location.includes(activeFilter === "Maryland" ? "MD" : "VA")
        );

  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <section className="px-8 py-10">
        <h1 className="text-3xl font-bold text-stone-800">
          Find a Store
        </h1>

        <p className="mt-2 text-stone-600">
          See what flavors are currently available at each location.
        </p>
      </section>

      {/* Filters */}
      <div className="flex gap-2 overflow-x-auto border-b border-stone-200 px-8">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`whitespace-nowrap border-b-2 px-4 py-3 text-sm font-medium transition-colors ${
              activeFilter === filter
                ? "border-rose-400 text-rose-500"
                : "border-transparent text-stone-500 hover:text-stone-700"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Store Cards */}
      <section className="px-8 py-8">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {filteredStores.map((store) => (
            <StoreCard key={store.name} store={store} />
          ))}
        </div>
      </section>
    </main>
  );
}


