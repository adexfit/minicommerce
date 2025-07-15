"use client";

import { useCartStore } from "@/store/cart-store";
import { Search, ShoppingCart } from "lucide-react";
import Link from "next/link";

const NavBar = () => {
    const items = useCartStore((state) => state.items);

    return (
        <nav className="p-5 bg-white text-gray-800 shadow-md sticky top-0 z-50 ">
            <div className="container mx-auto px-4  flex items-center justify-between">
                <Link href="/" className="text-primary text-xl font-bold">
                    <span className="text-custom-color">Mini</span>
                    Commerce
                </Link>

                <div className="flex items-center gap-6">
                    <Link
                        href="/cart"
                        className="text-black hover:text-custom-color transition-colors relative"
                        aria-label="Cart"
                    >
                        <ShoppingCart className="size-6" />
                        <p className="bg-custom-color rounded-full text-white text-xs px-[6px] py-[3px] absolute -top-4 -right-3">
                            {items.length}
                        </p>
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
