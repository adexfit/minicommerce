"use client";

import Spinner from "@/components/Spinner";
import { useCartStore } from "@/store/cart-store";
import { ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const Checkout = () => {
  const items = useCartStore((state) => state.items);
  const total = useCartStore((state) => state.getTotalPrice());
  const clearCart = useCartStore((state) => state.clearCart);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);

  if (items.length === 0) {
    return (
      <div className="mx-auto my-6">
        {loading ? (
          <Spinner />
        ) : (
          <div className="my-4 flex flex-col justify-center">
            <ShoppingCart className="mx-auto my-4 size-20 text-gray-200" />
            <h2 className="mb-4 text-center text-lg font-medium text-gray-900">
              Your Cart is Empty
            </h2>

            <Link
              href="/"
              className="mx-auto mt-4 w-auto rounded-lg bg-primary-text-color px-4 py-2 text-center font-bold text-white transition-all duration-300 ease-in-out hover:bg-custom-color"
            >
              Home
            </Link>
          </div>
        )}
      </div>
    );
  }

  const handlePlaceOrder = () => {
    clearCart();
    window.location.href = `/orderplaced/${Date.now() + Math.random()}`;
  };

  return (
    <div className="mx-auto rounded-lg p-8 md:my-8 md:w-4/5 md:shadow-lg">
      <h2 className="mb-4 text-center text-lg font-medium text-gray-900">
        Order Summary
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
              className="size-16 object-cover"
            />
            <div className="flex-1">
              <p>{item.name}</p>
              <p className="text-sm text-gray-500">${item.price}</p>
            </div>
            <p className="flex px-4 py-2 text-primary-text-color">
              {item.quantity}
            </p>
          </li>
        ))}
        <hr />
      </ul>
      <p className="pt-2 text-center text-gray-500">Cart Total: ${total}</p>
      <span className="mt-4 flex flex-row items-center justify-around">
        <Link href={"/cart"}>
          <button className="mt-4 rounded-lg border-2 border-red-400 px-4 py-2 text-red-500 hover:bg-red-500 hover:text-white">
            Edit Cart
          </button>
        </Link>

        <button
          onClick={handlePlaceOrder}
          className="mt-4 rounded-lg bg-primary-text-color px-4 py-2 font-bold text-white hover:bg-custom-color hover:text-white"
        >
          Place order
        </button>
      </span>
    </div>
  );
};

export default Checkout;
