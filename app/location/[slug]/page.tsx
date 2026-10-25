/*

Single store page
On the URL - yoursite.com/location/columbia

*/
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getStore, stores, type Stock } from "@/lib/stores";

const stockStyles: Record<Stock, { label: string; badge: string; dot: string }> = {
  available: { label: "Available", badge: "bg-green-100 text-green-800", dot: "bg-green-500" },
  low: { label: "Running Low", badge: "bg-amber-100 text-amber-800", dot: "bg-amber-500" },
  soldOut: { label: "Sold Out", badge: "bg-red-100 text-red-800", dot: "bg-red-500" },
};

export function generateStaticParams() {
  return stores.map((store) => ({ slug: store.slug }));
}

export default async function StorePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const store = getStore(slug);

  if (!store) notFound();

  return (
    <main className="min-h-screen bg-background">
      {/* Hero banner */}
      <section className="relative h-56 w-full overflow-hidden">
        <Image
          src={store.image}
          alt={`${store.name} storefront`}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-brand-grape/50" />
        <div className="relative flex h-full flex-col justify-center px-8 text-white">
          <h1 className="text-4xl font-bold uppercase tracking-wide">
            {store.name}
          </h1>
          <p className="mt-1 text-sm">{store.location}</p>
        </div>
      </section>

      {/* Back link + flavor filters */}
      <section className="px-8 pt-6">
        <Link
          href="/location"
          className="text-sm font-medium text-brand-grape hover:underline"
        >
          ← All stores
        </Link>

        <div className="mt-4 flex flex-wrap items-center gap-2 text-sm">
          <span className="font-semibold text-brand-grape">Popular flavors:</span>
          {store.flavors.map((flavor) => (
            <span
              key={flavor}
              className="rounded-full border border-brand-grape/40 bg-white px-3 py-1 text-xs text-brand-grape"
            >
              {flavor}
            </span>
          ))}
        </div>
      </section>

      {/* Stock legend */}
      <section className="flex flex-wrap gap-4 px-8 pt-6 text-sm text-brand-grape">
        {Object.values(stockStyles).map(({ label, dot }) => (
          <span key={label} className="flex items-center gap-2">
            <span className={`h-3 w-3 rounded-full ${dot}`} />
            {label}
          </span>
        ))}
      </section>

      {/* Candy grid */}
      <section className="px-8 py-8">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {store.candies.map((candy) => {
            const status = stockStyles[candy.stock];
            return (
            <div key={candy.name} className="border-b border-stone-300 pb-6">
              <div
                className={`relative flex h-40 items-center justify-center rounded-2xl text-6xl ${candy.tint} ${
                  candy.stock === "soldOut" ? "opacity-50 grayscale" : ""
                }`}
              >
                {candy.emoji}
              </div>
              <span
                className={`mt-3 inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium ${status.badge}`}
              >
                <span className={`h-2 w-2 rounded-full ${status.dot}`} />
                {status.label}
              </span>
              <h2 className="mt-2 text-sm font-bold text-brand-grape">
                {candy.name}
              </h2>
              <p className="text-lg text-brand-grape">
                ${candy.price.toFixed(2)}
              </p>
            </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}
