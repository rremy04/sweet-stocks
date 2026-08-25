
import ChoiceCard from "@/components/ChoiceCard";

export default function HomeHero() {
  return (
  <section className="flex min-h-[80vh] flex-col items-center justify-center px-6 text-center">
        <h2 className="max-w-3xl text-5xl font-bold text-bg-brand-grape tracking-tight">
          Know your candy before you go.
        </h2>

        <p className="mt-6 max-w-xl text-lg text-bg-brand-grape">
          Find your favorite flavors and check availability before
          making the trip.
        </p>

        {/* Search Choice */}
        <div className="mt-10">
          <h3 className="mb-6 text-xl text-bg-brand-grape font-semibold">
            What would you like to search?
          </h3>
          <div className="flex flex-col gap-4 sm:flex-row">
            <ChoiceCard
              icon="🍬"
              title="By Flavor"
              description="Find stores that have a flavor you are looking for."
              href="/flavor"
            />
            <ChoiceCard
              icon="📍"
              title="By Location"
              description="See what flavors are available at a specific store."
              href="/location"
            />
          </div>
        </div>
      </section>

  );
}


