// shown on every page

export default function Navbar() {
    return (
        <nav className="flex items-center bg-brand-pink justify-between px-8 py-6">
            <h1 className="text-2xl text-bg-brand-grape font-bold">SweetStocks</h1>

            <div className="flex gap-6">
            <a href="#" className="text-bg-brand-grape hover:underline">
                Stores
            </a>
            <a href="#" className="text-bg-brand-grape hover:underline">
                About
            </a>
            </div>
        </nav>
    );
}
