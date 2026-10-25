// shown on every page
import Link from "next/link";
export default function Navbar() {
    return (
        <nav className="flex items-center bg-brand-pink justify-between px-8 py-6">
            <Link href="/" className="text-2xl text-brand-grape font-bold">
                SweetStocks
            </Link>
            <div className="flex gap-6">
            <Link href="/location" className="text-bg-brand-grape hover:underline">
                Stores
            </Link>
            <Link href="/about" className="text-bg-brand-grape hover:underline">
                About
            </Link>
            </div>
        </nav>
    );
}
4