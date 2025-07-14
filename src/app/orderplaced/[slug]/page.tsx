"use client";

import { ShoppingCart } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";

const OrderPlaced = () => {
    const { slug } = useParams();
    return (
        <div className="flex  flex-col justify-center align-middle py-6">
            <ShoppingCart className="size-20 mx-auto text-gray-200 my-4" />
            <p className="text-center text-2xl ">Thank you</p>
            <p className="text-center py-4 text-gray-600 text-sm">
                Order ID: {slug}
            </p>
            <Link
                href="/"
                className="px-4 py-2 rounded-lg text-white bg-primary-text-color hover:bg-custom-color font-bold w-auto mx-auto mt-4 text-center transition-all ease-in-out duration-300"
            >
                Home
            </Link>
        </div>
    );
};

export default OrderPlaced;
