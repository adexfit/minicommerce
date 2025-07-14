// app/cart/page.tsx (or any component)
"use client";

import { useCartStore } from "@/store/cart-store";
import Image from "next/image";

const CartPage = () => {
    const items = useCartStore((state) => state.items);
    const removeFromCart = useCartStore((state) => state.removeFromCart);
    const increment = useCartStore((state) => state.increment);
    const decrement = useCartStore((state) => state.decrement);
    const clearCart = useCartStore((state) => state.clearCart);
    const total = useCartStore((state) => state.getTotalPrice());

    if (items.length === 0) {
        return <p>Your cart is empty.</p>;
    }
    const checkout = () => {
        // Implement your checkout logic here
        alert("Checkout functionality is not implemented yet.");
    };

    const handleclearCart = () => {
        clearCart();
    };

    return (
        <div className="my-8 p-8 w-[80%] mx-auto   rounded-lg shadow-lg">
            <h2 className="text-lg font-medium mb-4 text-center text-gray-900">
                Your Cart
            </h2>

            <hr />

            <ul className="space-y-4 mt-4">
                {items.map((item) => (
                    <li key={item.id} className="flex items-center gap-4">
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
                            <p>${item.price}</p>
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
                        </div>
                        <button
                            onClick={() => removeFromCart(item.id)}
                            className=" text-gray-600 px-4 py-2 rounded hover:bg-red-500 hover:text-white hover:border-none"
                        >
                            Remove
                        </button>
                    </li>
                ))}
                <hr />
            </ul>
            <p className="pt-2">Cart Total: {total}</p>
            <span className="flex justify-around items-center mt-4">
                <button
                    onClick={handleclearCart}
                    className="mt-4 border-2 border-red-400 text-red-500   hover:bg-red-500 hover:text-white px-4 py-2 rounded-sm"
                >
                    Clear Cart
                </button>
                <button
                    onClick={checkout}
                    className="mt-4 border-2 border-gray-700 text-gray-800   hover:bg-gray-800 hover:text-white px-4 py-2 rounded-sm"
                >
                    Checkout
                </button>
            </span>
        </div>
    );
};

export default CartPage;
