"use client";

import { ShoppingCart } from "lucide-react";
import { useParams } from "next/navigation";

const OrderPlaced = () => {
    const { slug } = useParams();
    return (
        <div className="flex  flex-col justify-center align-middle py-6">
            <ShoppingCart className="h-20 w-20 mx-auto text-gray-200 my-4" />
            <p className="text-center text-2xl ">Thank you</p>
            <p className="text-center py-4 text-gray-600 text-sm">
                Order ID: {slug}
            </p>
        </div>
    );
};

export default OrderPlaced;
