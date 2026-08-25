/* 

Browse stores
On the URL - yoursite.com/location

*/
"use client";

import { useState } from "react";

const stores = [
  {
    name: "Columbia",
    location: "Columbia, MD",
    flavors: ["Strawberry", "Lemon", "Raspberry", "Blueberry"],
  },
  {
    name: "Bethesda",
    location: "Bethesda, MD",
    flavors: ["Strawberry", "Blueberry", "Mango"],
  },
  {
    name: "Tysons",
    location: "Tysons, VA",
    flavors: ["Lemon", "Raspberry", "Mango", "Orange"],
  },
  {
    name: "Baltimore",
    location: "Baltimore, MD",
    flavors: ["Strawberry", "Lemon", "Blueberry"],
  },
];

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
            <div
              key={store.name}
              className="overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              {/* Store Image Placeholder */}
              <div className="flex h-40 items-center justify-center bg-background">
                <span className="text-5xl">📍</span>
              </div>

              {/* Store Information */}
              <div className="p-5">
                <h2 className="text-lg font-semibold text-stone-800">
                  {store.name}
                </h2>

                <p className="mt-1 text-sm text-stone-500">
                  {store.location}
                </p>

                <div className="mt-5">
                  <p className="text-sm font-medium text-stone-700">
                    Available flavors
                  </p>

                  <div className="mt-3 flex flex-wrap gap-2">
                    {store.flavors.map((flavor) => (
                      <span
                        key={flavor}
                        className="rounded-full bg-background px-3 py-1 text-xs text-stone-700"
                      >
                        {flavor}
                      </span>
                    ))}
                  </div>
                </div>

                <button className="mt-5 w-full rounded-lg bg-stone-800 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-rose-500">
                  View Store
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}