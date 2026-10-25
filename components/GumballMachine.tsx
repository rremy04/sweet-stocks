"use client";

import { useState } from "react";

export type Gumball = {
  title: string;
  body: string;
  color: string; // tailwind bg class for the ball
  blank?: boolean; // no label on the ball; fill in title/body later
};

type GumballMachineProps = {
  balls: Gumball[];
};

// Hand-placed spots inside the globe so the balls look piled up, not gridded
const spots = [
  "left-[12%] top-[8%]",
  "left-[42%] top-[4%]",
  "left-[68%] top-[14%]",
  "left-[22%] top-[38%]",
  "left-[56%] top-[40%]",
  "left-[8%] top-[62%]",
  "left-[38%] top-[66%]",
  "left-[66%] top-[64%]",
];

export default function GumballMachine({ balls }: GumballMachineProps) {
  const [selected, setSelected] = useState<number | null>(null);
  const active = selected === null ? null : balls[selected];

  return (
    <div className="flex flex-col items-center gap-8 lg:flex-row lg:items-start lg:justify-center">
      {/* Machine */}
      <div className="flex w-72 flex-col items-center sm:w-80">
        {/* Globe */}
        <div className="relative h-72 w-72 rounded-full border-4 border-white/80 bg-white/40 shadow-inner sm:h-80 sm:w-80">
          {balls.slice(0, spots.length).map((ball, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setSelected(i === selected ? null : i)}
              aria-pressed={i === selected}
              aria-label={ball.blank ? "Empty gumball" : ball.title}
              style={{ animationDelay: `${i * 0.35}s` }}
              className={`animate-wiggle absolute h-20 w-20 rounded-full text-xs font-semibold text-brand-grape shadow-md transition hover:scale-110 focus:outline-none focus-visible:ring-4 focus-visible:ring-brand-grape ${ball.color} ${spots[i]} ${
                i === selected ? "scale-110 ring-4 ring-brand-grape" : ""
              }`}
            >
              {/* shine */}
              <span className="absolute left-3 top-2 h-4 w-6 -rotate-30 rounded-full bg-white/60" />
              {!ball.blank && (
                <span className="relative px-1 leading-tight">{ball.title}</span>
              )}
            </button>
          ))}
        </div>

        {/* Neck + base */}
        <div className="-mt-2 h-4 w-40 bg-brand-grape/80" />
        <div className="flex h-36 w-64 flex-col items-center rounded-t-3xl rounded-b-xl bg-brand-grape p-4 shadow-lg">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-pink">
            Pick a ball
          </p>
          {/* Chute */}
          <div className="mt-4 flex h-14 w-24 items-center justify-center rounded-b-3xl rounded-t-md bg-black/40">
            {active && (
              <span
                className={`h-10 w-10 rounded-full shadow ${active.color}`}
              />
            )}
          </div>
        </div>
      </div>

      {/* What fell out */}
      <div
        aria-live="polite"
        className="min-h-40 w-full max-w-md rounded-2xl border border-stone-300 bg-white p-6 shadow-sm"
      >
        {active ? (
          <>
            <h3 className="text-xl font-semibold text-brand-grape">
              {active.title}
            </h3>
            <p className="mt-3 text-brand-grape/80">{active.body}</p>
          </>
        ) : (
          <p className="text-brand-grape/70">
            Click a gumball to see what&apos;s inside.
          </p>
        )}
      </div>
    </div>
  );
}
