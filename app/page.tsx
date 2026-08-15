import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <nav className="flex items-center justify-between px-8 py-6">
        <h1 className="text-2xl font-bold">SweetStocks</h1>

        <div className="flex gap-6">
          <a href="#" className="hover:underline">
            Stores
          </a>
          <a href="#" className="hover:underline">
            About
          </a>
        </div>
      </nav>

      <section className="flex min-h-[80vh] flex-col items-center justify-center px-6 text-center">
        <h2 className="max-w-3xl text-5xl font-bold tracking-tight">
          Know your candy before you go.
        </h2>

        <p className="mt-6 max-w-xl text-lg text-gray-600">
          Find your favorite flavors and check availability before
          making the trip.
        </p>

        <div className="mt-8 flex w-full max-w-lg">
          <input
            type="text"
            placeholder="Search for a flavor..."
            className="w-full rounded-l-lg border border-gray-300 px-4 py-3"
          />

          <button className="rounded-r-lg bg-black px-6 py-3 text-white">
            Search
          </button>
        </div>

        <button className="mt-6 rounded-full bg-black px-6 py-3 text-white">
          Browse Flavors
        </button>
      </section>
    </main>
  );
}