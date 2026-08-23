// shown on every page

export default function Navbar() {
    return (
        <nav className="flex items-center justify-between px-8 py-6">
            <h1 className="text-2xl font-bold text-gray-500">SweetStocks</h1>

            <div className="flex gap-6">
            <a href="#" className="hover:underline">
                Stores
            </a>
            <a href="#" className="hover:underline">
                About
            </a>
            </div>
        </nav>
    );
}