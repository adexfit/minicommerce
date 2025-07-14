"use client";

import { useCartStore } from "@/store/cart-store";
import { ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Checkout = () => {
    const items = useCartStore((state) => state.items);
    const removeFromCart = useCartStore((state) => state.removeFromCart);
    const increment = useCartStore((state) => state.increment);
    const decrement = useCartStore((state) => state.decrement);
    const clearCart = useCartStore((state) => state.clearCart);
    const total = useCartStore((state) => state.getTotalPrice());

    if (items.length === 0) {
        return (
            <div className="mx-auto my-6">
                <div className=" flex flex-col justify-center my-4">
                    <ShoppingCart className="h-20 w-20 mx-auto text-gray-200 my-4" />
                    <h2 className="text-lg font-medium mb-4 text-center text-gray-900">
                        Your Cart is Empty
                    </h2>
                    <p className="text-center text-gray-400 text-sm italic">
                        Add some products to your cart to see them here.
                    </p>
                    <Link
                        href="/"
                        className="px-4 py-2 rounded-lg text-white bg-primary-text-color hover:bg-custom-color font-bold w-auto mx-auto mt-4 text-center transition-all ease-in-out duration-300"
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

    const handlePlaceOrder = () => {
        clearCart();
        window.location.href = `/orderplaced/${Date.now() + Math.random()}`;
    };

    return (
        <div className="my-8 p-8 md:w-[80%] mx-auto   rounded-lg md:shadow-lg">
            <h2 className="text-lg font-medium mb-4 text-center text-gray-900">
                Your Cart
            </h2>

            <hr />

            <ul className="space-y-4 mt-4">
                {items.map((item) => (
                    <li key={item.id} className="flex items-start gap-4">
                        <Image
                            priority
                            src={`${item?.image}`}
                            alt={item.name}
                            width={16}
                            height={16}
                            className="w-16 h-16 object-cover"
                        />
                        <div className="flex-1">
                            <p>{item.name}</p>
                            <p className="text-sm text-gray-500">
                                ${item.price}
                            </p>
                            <div className="flex items-center gap-2">
                                <button
                                    onClick={() => decrement(item.id)}
                                    className="bg-gray-200 py-1 px-4 rounded hover:bg-amber-200"
                                >
                                    -
                                </button>
                                <span>{item.quantity}</span>
                                <button
                                    onClick={() => increment(item.id)}
                                    className="bg-gray-200 py-1 px-4 rounded hover:bg-amber-200"
                                >
                                    +
                                </button>
                            </div>
                            {/* <button
                                onClick={() => removeFromCart(item.id)}
                                className="flex md:hidden text-primary-text-color px-4 py-2 mt-4 rounded hover:bg-red-500 hover:text-white hover:border-none"
                            >
                                Remove
                            </button> */}
                        </div>
                        <button
                            onClick={() => removeFromCart(item.id)}
                            className="flex  text-primary-text-color px-4 py-2 rounded hover:bg-red-500 hover:text-white hover:border-none"
                        >
                            Remove
                        </button>
                    </li>
                ))}
                <hr />
            </ul>
            <p className="pt-2">Cart Total: {total}</p>
            <span className="flex flex-row justify-around items-center mt-4">
                <button
                    onClick={handleclearCart}
                    className="mt-4 border-2 border-red-400 text-red-500   hover:bg-red-500 hover:text-white px-4 py-2 rounded-lg"
                >
                    Clear Cart
                </button>
                <button
                    onClick={handlePlaceOrder}
                    className=" mt-4 font-bold bg-primary-text-color text-white   hover:bg-custom-color hover:text-white px-4 py-2 rounded-lg"
                >
                    Place order
                </button>
            </span>
        </div>
    );
};

export default Checkout;
