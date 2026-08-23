"use client";

import { useState } from "react";

export default function FlavorPage() {
  return (
    <main className="min-h-screen bg-[#FDE5DE]">
      <section className="px-8 py-10">
        <h1 className="text-3xl font-bold text-stone-800">
          Search by Flavor
        </h1>

        <p className="mt-2 text-stone-600">
          Find stores that carry your favorite flavor.
        </p>
      </section>
    </main>
  );
}