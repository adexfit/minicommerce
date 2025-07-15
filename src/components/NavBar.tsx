"use client";

import { useCartStore } from "@/store/cart-store";
import { Search, ShoppingCart } from "lucide-react";
import Link from "next/link";

const NavBar = () => {
  const items = useCartStore((state) => state.items);

  return (
    <nav className="sticky top-0 z-50 bg-white p-5 text-gray-800 shadow-md">
      <div className="container mx-auto flex items-center justify-between px-4">
        <Link href="/" className="text-primary text-xl font-bold">
          <span className="text-custom-color">Mini</span>
          <span>Commerce</span>
        </Link>

        <div className="flex items-center gap-6">
          <Link
            href="/cart"
            className="relative text-black transition-colors hover:text-custom-color"
            aria-label="Cart"
            data-testid="ourcart"
          >
            <ShoppingCart className="size-6" />
            <p className="absolute -right-3 -top-4 rounded-full bg-custom-color px-[6px] py-[3px] text-xs text-white">
              {items.length}
            </p>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
