"use client";

import { useState } from "react";
import Link from "next/link";
import { ShoppingCart, Search } from "lucide-react";

const NavBar = () => {
  const [showSearch, setShowSearch] = useState(false);

  return (
    <header className="bg-white text-black shadow-md">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold">
          Logo
        </Link>

        <div className="hidden md:flex w-1/2">
          <input
            type="text"
            placeholder="Search..."
            className="w-full px-4 py-2 rounded-md bg-white text-black border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex items-center gap-4">
          {/* Search Icon for mobile */}
          <button
            onClick={() => setShowSearch((prev) => !prev)}
            className="md:hidden text-black hover:text-gray-600 transition-colors"
            aria-label="Toggle Search"
          >
            <Search className="h-6 w-6" />
          </button>

          <Link
            href="/cart"
            className="text-black hover:text-gray-600 transition-colors"
            aria-label="Cart"
          >
            <ShoppingCart className="h-6 w-6" />
          </Link>
        </div>
      </div>

      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out md:hidden ${
          showSearch ? "max-h-40 pt-2 pb-4" : "max-h-0"
        }`}
      >
        <div className="container mx-auto px-4">
          <input
            type="text"
            placeholder="Search..."
            className="w-full px-4 py-2 rounded-md bg-white text-black border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>
    </header>
  );
};

export default NavBar;
