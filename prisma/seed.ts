import "dotenv/config";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../generated/prisma/client";
import { candies, inventory, stores } from "./seed-data";

const prisma = new PrismaClient({
  adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL }),
});

// Uses upsert everywhere, so running the seed twice doesn't duplicate anything
async function main() {
  const storeIds = new Map<string, number>();
  for (const store of stores) {
    const row = await prisma.store.upsert({
      where: { slug: store.slug },
      update: store,
      create: store,
    });
    storeIds.set(store.slug, row.id);
  }

  const flavorIds = new Map<string, number>();
  for (const name of new Set(candies.map((c) => c.flavor))) {
    const row = await prisma.flavor.upsert({
      where: { name },
      update: {},
      create: { name },
    });
    flavorIds.set(name, row.id);
  }

  const candyIds = new Map<string, number>();
  for (const { flavor, ...candy } of candies) {
    const data = { ...candy, flavorId: flavorIds.get(flavor)! };
    const row = await prisma.candy.upsert({
      where: { slug: candy.slug },
      update: data,
      create: data,
    });
    candyIds.set(candy.slug, row.id);
  }

  for (const [storeSlug, items] of Object.entries(inventory)) {
    for (const [candySlug, status] of items) {
      const storeId = storeIds.get(storeSlug)!;
      const candyId = candyIds.get(candySlug)!;
      await prisma.inventory.upsert({
        where: { storeId_candyId: { storeId, candyId } },
        update: { status },
        create: { storeId, candyId, status },
      });
    }
  }

  console.log(
    `Seeded ${stores.length} stores, ${flavorIds.size} flavors, ${candies.length} candies`
  );
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
