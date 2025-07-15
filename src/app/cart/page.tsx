"use client";

import { useCartStore } from "@/store/cart-store";
import { ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const CartPage = () => {
  const items = useCartStore((state) => state.items);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const increment = useCartStore((state) => state.increment);
  const decrement = useCartStore((state) => state.decrement);
  const clearCart = useCartStore((state) => state.clearCart);
  const total = useCartStore((state) => state.getTotalPrice());

  if (items.length === 0) {
    return (
      <div className="mx-auto my-6">
        <div className="my-4 flex flex-col justify-center">
          <ShoppingCart className="mx-auto my-4 size-20 text-gray-200" />
          <h2 className="mb-4 text-center text-lg font-medium text-gray-900">
            Your Cart is Empty
          </h2>
          <p className="text-center text-sm italic text-gray-400">
            Add some products to your cart to see them here.
          </p>
          <Link
            href="/"
            className="mx-auto mt-4 w-auto rounded-lg bg-primary-text-color px-4 py-2 text-center font-bold text-white transition-all duration-300 ease-in-out hover:bg-custom-color"
          >
            Home
          </Link>
        </div>
      </div>
    );
  }

  const handleclearCart = () => {
    clearCart();
  };

  const handleGoToCheckout = () => {
    window.location.href = `/checkout`;
  };

  return (
    <div className="mx-auto my-3 rounded-lg p-8 md:w-4/5 md:shadow-lg">
      <h2 className="mb-4 text-center text-xl font-bold text-gray-900">
        Your Cart
      </h2>

      <hr />

      <ul className="mt-4 space-y-4">
        {items.map((item) => (
          <li key={item.id} className="flex items-start gap-4">
            <Image
              priority
              src={`${item?.image}`}
              alt={`${item.name} image`}
              width={16}
              height={16}
              className="size-20 object-cover"
            />
            <div className="flex-1">
              <p>{item.name}</p>
              <p className="text-sm text-gray-500">${item.price}</p>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => decrement(item.id)}
                  className="rounded bg-gray-200 px-4 py-1 font-bold hover:bg-gray-300"
                >
                  -
                </button>
                <span>{item.quantity}</span>
                <button
                  onClick={() => increment(item.id)}
                  className="rounded bg-gray-200 px-4 py-1 font-bold hover:bg-gray-300"
                >
                  +
                </button>
              </div>
            </div>
            <button
              onClick={() => removeFromCart(item.id)}
              className="flex rounded px-4 py-2 text-primary-text-color hover:border-none hover:bg-red-500 hover:text-white"
            >
              Remove
            </button>
          </li>
        ))}
        <hr />
      </ul>
      <p className="pt-2 text-center">Cart Total: ${total}</p>
      <span className="mt-4 flex flex-row items-center justify-around">
        <button
          onClick={handleclearCart}
          className="mt-4 rounded-lg border-2 border-gray-500 px-4 py-2 text-gray-600 hover:bg-red-500 hover:text-white"
        >
          Clear Cart
        </button>
        <button
          onClick={handleGoToCheckout}
          className="mt-4 rounded-lg bg-primary-text-color px-4 py-2 font-bold text-white hover:bg-custom-color hover:text-white"
        >
          Checkout
        </button>
      </span>
    </div>
  );
};

export default CartPage;
