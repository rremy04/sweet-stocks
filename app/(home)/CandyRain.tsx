// Candy will fall at different positions
const candies = [
  { emoji: "🍬", left: "5%", duration: "6s", delay: "0s" },
  { emoji: "🍭", left: "15%", duration: "8s", delay: "1s" },
  { emoji: "🍫", left: "25%", duration: "7s", delay: "2.5s" },
  { emoji: "🍬", left: "38%", duration: "9s", delay: "0.5s" },
  { emoji: "🍭", left: "50%", duration: "6.5s", delay: "3s" },
  { emoji: "🍫", left: "62%", duration: "7.5s", delay: "1.5s" },
  { emoji: "🍬", left: "75%", duration: "8.5s", delay: "2s" },
  { emoji: "🍭", left: "85%", duration: "6s", delay: "0.8s" },
  { emoji: "🍫", left: "93%", duration: "9s", delay: "3.5s" },
]

export default function CandyRain() {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
      {candies.map((candy, i) => (
        <span
          key={i}
          className="absolute top-[-10%] text-3xl animate-fall"
          style={{
            left: candy.left,
            animationDuration: candy.duration,
            animationDelay: candy.delay,
          }}
        >
          {candy.emoji}
        </span>
      ))}
    </div>
  );
}
