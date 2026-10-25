/* Shared store data used by /location and /location/[slug] */

export type Stock = "available" | "low" | "soldOut";

export type Candy = {
  name: string;
  price: number;
  emoji: string; // placeholder until we have real candy photos
  tint: string; // tailwind bg class for the tile
};

export type StockedCandy = Candy & { stock: Stock };

export type Store = {
  slug: string;
  name: string;
  location: string;
  image: string;
  flavors: string[];
  candies: StockedCandy[];
};

const mega = { name: "Mega Cola Rambos", price: 4.95, emoji: "🥤", tint: "bg-stone-200" };
const rolls = { name: "Strawberry Rolls", price: 4.95, emoji: "🍓", tint: "bg-rose-100" };
const skull = { name: "Danish Skull", price: 4.95, emoji: "💀", tint: "bg-pink-100" };
const pineapple = { name: "Pineapple Rings", price: 4.95, emoji: "🍍", tint: "bg-yellow-100" };
const sharks = { name: "Blue Sharks", price: 4.95, emoji: "🦈", tint: "bg-sky-100" };
const oranges = { name: "Orange Rings", price: 4.95, emoji: "🍊", tint: "bg-orange-100" };
const mallows = { name: "Vanilla Mallows", price: 4.95, emoji: "🍥", tint: "bg-purple-100" };
const lemons = { name: "Sour Lemon Drops", price: 4.95, emoji: "🍋", tint: "bg-amber-100" };
const berries = { name: "Blueberry Bites", price: 4.95, emoji: "🫐", tint: "bg-indigo-100" };
const mango = { name: "Mango Gummies", price: 4.95, emoji: "🥭", tint: "bg-orange-100" };
const raspberry = { name: "Raspberry Twists", price: 4.95, emoji: "🍇", tint: "bg-fuchsia-100" };

// Same candy, different stock level depending on the store
const at = (candy: Candy, stock: Stock): StockedCandy => ({ ...candy, stock });

export const stores: Store[] = [
  {
    slug: "columbia",
    name: "Columbia",
    location: "Columbia, MD",
    image: "/images/columbia.jpg",
    flavors: ["Strawberry", "Lemon", "Raspberry", "Blueberry"],
    candies: [at(rolls, "available"), at(lemons, "low"), at(raspberry, "available"), at(berries, "soldOut"), at(mega, "available"), at(sharks, "low")],
  },
  {
    slug: "bethesda",
    name: "Bethesda",
    location: "Bethesda, MD",
    image: "/images/bethesda.jpg",
    flavors: ["Strawberry", "Blueberry", "Mango"],
    candies: [at(rolls, "available"), at(berries, "available"), at(mango, "low"), at(skull, "soldOut"), at(mallows, "available")],
  },
  {
    slug: "tysons",
    name: "Tysons",
    location: "Tysons, VA",
    image: "/images/tysons.jpg",
    flavors: ["Lemon", "Raspberry", "Mango", "Orange"],
    candies: [at(lemons, "low"), at(raspberry, "available"), at(mango, "available"), at(oranges, "soldOut"), at(pineapple, "available"), at(mega, "available"), at(mallows, "low")],
  },
  {
    slug: "baltimore",
    name: "Baltimore",
    location: "Baltimore, MD",
    image: "/images/baltimore.jpg",
    flavors: ["Strawberry", "Lemon", "Blueberry"],
    candies: [at(rolls, "available"), at(lemons, "soldOut"), at(berries, "available"), at(pineapple, "low"), at(sharks, "available"), at(skull, "low")],
  },
];

export function getStore(slug: string) {
  return stores.find((store) => store.slug === slug);
}
