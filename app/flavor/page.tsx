/*

Search by flavor
On the URL - yoursite.com/flavor

*/
"use client";

import { useState } from "react";
import Link from "next/link";
import { allFlavors, getCandyAvailability } from "@/lib/stores";
import { stockStyles } from "@/lib/stockStyles";

const catalog = getCandyAvailability();

export default function FlavorPage() {
  const [query, setQuery] = useState("");
  const [activeFlavors, setActiveFlavors] = useState<string[]>([]);
  const [inStockOnly, setInStockOnly] = useState(false);

  function toggleFlavor(flavor: string) {
    setActiveFlavors((current) =>
      current.includes(flavor)
        ? current.filter((f) => f !== flavor)
        : [...current, flavor]
    );
  }

  function reset() {
    setQuery("");
    setActiveFlavors([]);
    setInStockOnly(false);
  }

  const results = catalog.filter(({ candy, stores }) => {
    const matchesName = candy.name.toLowerCase().includes(query.trim().toLowerCase());
    const matchesFlavor =
      activeFlavors.length === 0 || activeFlavors.includes(candy.flavor);
    const matchesStock =
      !inStockOnly || stores.some((s) => s.stock !== "soldOut");
    return matchesName && matchesFlavor && matchesStock;
  });

  const chip = (active: boolean) =>
    `rounded-lg border px-4 py-2 text-sm transition ${
      active
        ? "border-brand-grape bg-brand-grape text-white"
        : "border-brand-grape/40 bg-white text-brand-grape hover:border-brand-grape"
    }`;

  return (
    <main className="min-h-screen bg-background">
      {/* Banner */}
      <section className="bg-brand-grape px-8 py-14 text-brand-pink">
        <h1 className="text-4xl font-bold uppercase tracking-wide">
          Find your flavor
        </h1>
        <p className="mt-1 text-sm">See which stores have it right now</p>
      </section>

      {/* Filters */}
      <section className="px-8 pt-8">
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for a candy"
          aria-label="Search for a candy"
          className="w-full max-w-md rounded-lg border border-brand-grape/40 bg-white px-4 py-2 text-brand-grape outline-none focus:border-brand-grape"
        />

        <div className="mt-5 flex flex-wrap items-center gap-2">
          <span className="mr-2 text-sm font-semibold text-brand-grape">
            Popular filters:
          </span>
          {allFlavors.map((flavor) => (
            <button
              key={flavor}
              type="button"
              onClick={() => toggleFlavor(flavor)}
              aria-pressed={activeFlavors.includes(flavor)}
              className={chip(activeFlavors.includes(flavor))}
            >
              {flavor}
            </button>
          ))}
          <button
            type="button"
            onClick={() => setInStockOnly((v) => !v)}
            aria-pressed={inStockOnly}
            className={chip(inStockOnly)}
          >
            In stock only
          </button>
          <button
            type="button"
            onClick={reset}
            className="ml-2 text-sm font-medium text-brand-grape underline"
          >
            Reset
          </button>
        </div>
      </section>

      {/* Candy grid */}
      <section className="px-8 py-8">
        {results.length === 0 ? (
          <p className="text-brand-grape/70">
            No candies match those filters. Try resetting them.
          </p>
        ) : (
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {results.map(({ candy, stores }) => (
              <div key={candy.name} className="border-b border-stone-300 pb-6">
                <div
                  className={`flex h-40 items-center justify-center rounded-2xl text-6xl ${candy.tint}`}
                >
                  {candy.emoji}
                </div>
                <h2 className="mt-4 text-sm font-bold text-brand-grape">
                  {candy.name}
                </h2>
                <p className="text-xs text-brand-grape/70">{candy.flavor}</p>
                <p className="text-lg text-brand-grape">
                  ${candy.price.toFixed(2)}
                </p>

                {/* Which stores carry it */}
                <div className="mt-3 flex flex-wrap gap-2">
                  {stores.map((store) => {
                    const status = stockStyles[store.stock];
                    return (
                      <Link
                        key={store.slug}
                        href={`/location/${store.slug}`}
                        title={`${store.name}: ${status.label}`}
                        className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium ${status.badge}`}
                      >
                        <span className={`h-2 w-2 rounded-full ${status.dot}`} />
                        {store.name}
                      </Link>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
