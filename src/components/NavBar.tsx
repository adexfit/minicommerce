"use client";

import { useCartStore } from "@/store/cart-store";
import { Search, ShoppingCart } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const NavBar = () => {
    const items = useCartStore((state) => state.items);
    const [showSearch, setShowSearch] = useState(false);

    return (
        <nav className="p-5 bg-white text-gray-800 shadow-md sticky top-0 z-50 ">
            <div className="container mx-auto px-4  flex items-center justify-between">
                <Link href="/" className="text-primary text-xl font-bold">
                    <span className="text-custom-color">Mini</span>
                    Commerce
                </Link>

                <div className="hidden md:flex w-1/2">
                    <input
                        type="text"
                        id="search"
                        name="search"
                        placeholder="Search..."
                        className="w-full px-4 py-2 rounded-md bg-white text-black border border-gray-300 focus:outline-none focus:ring-2 focus:ring-custom-color2"
                    />
                </div>

                <div className="flex items-center gap-6">
                    {/* Search Icon for mobile */}
                    <button
                        onClick={() => setShowSearch((prev) => !prev)}
                        className="md:hidden text-black hover:text-gray-600 transition-colors"
                        aria-label="Toggle Search"
                        id="search"
                        name="search"
                    >
                        <Search className="h-6 w-6" />
                    </button>

                    {/* <Link
                        href="/"
                        className="hidden md:flex text-gray-700 hover:text-custom-color transition-colors"
                        aria-label="Home"
                    >
                        All Products
                    </Link> */}

                    <Link
                        href="/cart"
                        className="text-black hover:text-custom-color transition-colors relative"
                        aria-label="Cart"
                    >
                        <ShoppingCart className="h-6 w-6" />
                        <p className="bg-custom-color rounded-full text-white text-xs px-[6px] py-[3px] absolute -top-4 -right-3">
                            {items.length}
                        </p>
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
                        id="search2"
                        name="search2"
                        placeholder="Search..."
                        className="w-full px-4 py-2 rounded-md bg-white text-black border border-gray-300 focus:outline-none focus:ring-2 focus:ring-custom-color2"
                    />
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
