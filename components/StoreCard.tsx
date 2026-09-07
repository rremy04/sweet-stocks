/* Store Location Cards in */
// import Link from "next/Link";
import Image from "next/image"


type Store = {
    name: string;
    location: string;
    image: string;
    flavors: string[]

}

type StoreCardProps = {
    store: Store
}

export default function StoreCard({store}: StoreCardProps) {
    return (
        // I'll need the Link Later on when I'm 
        <div className="overflow-hidden rounded-2xl border border-stone-600 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md">
            {/* Store Image Placeholder */}
            <div className="flex relative h-40 items-center justify-center bg-background">
                {/* <span className="text-5xl">📍</span> */}
                <Image src={store.image} alt={store.image} fill className="object-cover" />

            </div>

            {/* Store Information */}
            <div className="p-5">
                <h2 className="text-lg font-semibold text-stone-800">
                    {store.name}
                </h2>

                <p className="mt-1 text-sm text-stone-500">
                  {store.location}
                </p>

                <div className="mt-5">
                  <p className="text-sm font-medium text-stone-700">
                    Available flavors
                  </p>

                  <div className="mt-3 flex flex-wrap gap-2">
                    {store.flavors.map((flavor) => (
                      <span
                        key={flavor}
                        className="rounded-full bg-background px-3 py-1 text-xs text-stone-700"
                      >
                        {flavor}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Once uncommented, you'd replace the <button> with a <Link> the same way ChoiceCard does it, passing href={/* derived path */}.
                {/* It will need to be a dynamic route folder structure first, */}
                <button className="mt-5 w-full rounded-lg bg-stone-800 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-rose-500">
                  View Store
                </button>
              </div>
            </div>





    );
}