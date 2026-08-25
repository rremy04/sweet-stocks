/*
 * yoursite.com/
 * Homepage — route "/"
 * Renders nav, hero headline, and two search-option cards
 * (by flavor / by location) that will link to /flavor and /location.
 */
import HomeHero from "./HomeHero";
import CandyRain from "./CandyRain";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <CandyRain />
      <div className="relative z-10">
        <HomeHero />
      </div>
      
    </main>
  );
}


