import GumballMachine, { type Gumball } from "@/components/GumballMachine";

/*

About Me
On the URL - yoursite.com/about

*/
// Order matters: the globe places balls by position, so labelled balls sit at
// slots 0, 2, 5 and 7 to keep them from touching each other.
const balls: Gumball[] = [
  {
    title: "The problem",
    body: "Customers don't know whether a trip to the store is worth it, because inventory changes constantly. Finding out your favorite candy is sold out after you've already made the drive is frustrating.",
    color: "bg-rose-300",
  },
  {
    title: "Coming soon",
    body: "Nothing in this one yet.",
    color: "bg-purple-300",
    blank: true,
  },
  {
    title: "The idea",
    body: "Let customers see what's currently in stock at each location, with clear Available, Running Low and Sold Out signals, and get notified when something is restocked.",
    color: "bg-yellow-300",
  },
  {
    title: "Coming soon",
    body: "Nothing in this one yet.",
    color: "bg-orange-300",
    blank: true,
  },
  {
    title: "Coming soon",
    body: "Nothing in this one yet.",
    color: "bg-pink-300",
    blank: true,
  },
  {
    title: "The upside",
    body: "The same data shows which days are busiest and when sales are slow, so a store can bring out a featured flavor on a rotating schedule, such as every two weeks, to drive traffic.",
    color: "bg-sky-300",
  },
  {
    title: "Coming soon",
    body: "Nothing in this one yet.",
    color: "bg-teal-300",
    blank: true,
  },
  {
    title: "SweetStocks",
    body: "A full-stack inventory visibility platform that helps customers discover product availability and receive restock notifications. A prototype / portfolio project exploring how specialty retailers could improve customer experiences through real-time inventory visibility.",
    color: "bg-green-300",
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

      <section className="px-8 py-8">
        <GumballMachine balls={balls} />

        <p className="mt-8 max-w-3xl text-sm text-brand-grape/70">
          Note: this project is an independent concept created to explore a
          potential customer experience solution.
        </p>
      </section>
    </main>
  );
}
