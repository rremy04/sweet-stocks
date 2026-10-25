/*

About Me
On the URL - yoursite.com/about

*/
const highlights = [
  {
    title: "The problem",
    body: "Customers don't know whether a trip to the store is worth it, because inventory changes constantly. Finding out your favorite candy is sold out after you've already made the drive is frustrating.",
  },
  {
    title: "The idea",
    body: "Let customers see what's currently in stock at each location, with clear Available, Running Low and Sold Out signals, and get notified when something is restocked.",
  },
  {
    title: "The upside for the business",
    body: "The same data shows which days are busiest and when sales are slow, so a store can bring out a featured flavor on a rotating schedule, such as every two weeks, to drive traffic.",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <section className="px-8 py-10">
        <h1 className="text-3xl font-bold text-brand-grape">About Me</h1>
        <p className="mt-2 max-w-2xl text-brand-grape/80">
          I&apos;m looking for an opportunity to turn my technical skills into
          solutions for real-world problems, like the one behind this project.
        </p>
      </section>

      <section className="px-8">
        <div className="max-w-3xl rounded-2xl border border-stone-300 bg-white p-6 shadow-sm">
          <div className="flex flex-wrap items-center gap-3">
            <h2 className="text-xl font-semibold text-brand-grape">
              SweetStocks
            </h2>
            <span className="rounded-full bg-brand-pink px-3 py-1 text-xs font-medium text-brand-grape">
              Prototype / portfolio project
            </span>
          </div>

          <p className="mt-3 text-brand-grape/90">
            A full-stack inventory visibility platform that helps customers
            discover product availability and receive restock notifications. It
            explores how specialty retailers could improve customer experiences
            through real-time inventory visibility.
          </p>
        </div>
      </section>

      <section className="px-8 py-8">
        <div className="grid max-w-5xl grid-cols-1 gap-5 md:grid-cols-3">
          {highlights.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-stone-300 bg-white p-5 shadow-sm"
            >
              <h3 className="font-semibold text-brand-grape">{item.title}</h3>
              <p className="mt-2 text-sm text-brand-grape/80">{item.body}</p>
            </div>
          ))}
        </div>

        <p className="mt-8 max-w-3xl text-sm text-brand-grape/70">
          Note: this project is an independent concept created to explore a
          potential customer experience solution.
        </p>
      </section>
    </main>
  );
}
