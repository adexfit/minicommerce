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
                    <div className=" flex flex-col justify-center my-4">
                        <ShoppingCart className="size-20 mx-auto text-gray-200 my-4" />
                        <h2 className="text-lg font-medium mb-4 text-center text-gray-900">
                            Your Cart is Empty
                        </h2>

                        <Link
                            href="/"
                            className="px-4 py-2 rounded-lg text-white bg-primary-text-color hover:bg-custom-color font-bold w-auto mx-auto mt-4 text-center transition-all ease-in-out duration-300"
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
        <div className="md:my-8 p-8 md:w-4/5 mx-auto   rounded-lg md:shadow-lg">
            <h2 className="text-lg font-medium mb-4 text-center text-gray-900">
                Order Summary
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
                            className="size-16 object-cover"
                        />
                        <div className="flex-1">
                            <p>{item.name}</p>
                            <p className="text-sm text-gray-500">
                                ${item.price}
                            </p>
                        </div>
                        <p className="flex  text-primary-text-color px-4 py-2 ">
                            {item.quantity}
                        </p>
                    </li>
                ))}
                <hr />
            </ul>
            <p className="pt-2 text-center text-gray-500">
                Cart Total: ${total}
            </p>
            <span className="flex flex-row justify-around items-center mt-4">
                <Link href={"/cart"}>
                    <button className="mt-4 border-2 border-red-400 text-red-500   hover:bg-red-500 hover:text-white px-4 py-2 rounded-lg">
                        Edit Cart
                    </button>
                </Link>

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
