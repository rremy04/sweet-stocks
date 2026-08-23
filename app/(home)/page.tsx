/*
 * yoursite.com/
 * Homepage — route "/"
 * Renders nav, hero headline, and two search-option cards
 * (by flavor / by location) that will link to /flavor and /location.
 * TODO: extract Navbar and SearchOption into components/, and
 * move Navbar into layout.tsx so it's shared across all pages.
 */
import HomeHero from "./HomeHero";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FDE5DE]">
      {/* Navbar Section */}
      {/* Hero Section */}
      <HomeHero />
    </main>
  );
}


