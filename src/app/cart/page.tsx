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
                <div className=" flex flex-col justify-center my-4">
                    <ShoppingCart className="size-20 mx-auto text-gray-200 my-4" />
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

    const handleGoToCheckout = () => {
        window.location.href = `/checkout`;
    };

    return (
        <div className="my-3 p-8 md:w-4/5 mx-auto rounded-lg md:shadow-lg">
            <h2 className="text-xl font-bold mb-4 text-center text-gray-900">
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
                            className="size-20 object-cover"
                        />
                        <div className="flex-1">
                            <p>{item.name}</p>
                            <p className="text-sm text-gray-500">
                                ${item.price}
                            </p>
                            <div className="flex items-center gap-2">
                                <button
                                    onClick={() => decrement(item.id)}
                                    className="bg-gray-200 py-1 px-4 rounded hover:bg-gray-300 font-bold"
                                >
                                    -
                                </button>
                                <span>{item.quantity}</span>
                                <button
                                    onClick={() => increment(item.id)}
                                    className="bg-gray-200 py-1 px-4 rounded hover:bg-gray-300 font-bold"
                                >
                                    +
                                </button>
                            </div>
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
            <p className="pt-2 text-center">Cart Total: ${total}</p>
            <span className="flex flex-row justify-around items-center mt-4">
                <button
                    onClick={handleclearCart}
                    className="mt-4 border-2 border-gray-500 text-gray-600   hover:bg-red-500 hover:text-white px-4 py-2 rounded-lg"
                >
                    Clear Cart
                </button>
                <button
                    onClick={handleGoToCheckout}
                    className=" mt-4 font-bold bg-primary-text-color text-white   hover:bg-custom-color hover:text-white px-4 py-2 rounded-lg"
                >
                    Checkout
                </button>
            </span>
        </div>
    );
};

export default CartPage;
