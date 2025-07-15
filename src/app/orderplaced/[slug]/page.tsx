"use client";

import { ShoppingCart } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";

const OrderPlaced = () => {
  const { slug } = useParams();
  return (
    <div className="flex flex-col justify-center py-6 align-middle">
      <ShoppingCart className="mx-auto my-4 size-20 text-gray-200" />
      <p className="text-center text-2xl">Thank you</p>
      <p className="py-4 text-center text-sm text-gray-600">Order ID: {slug}</p>
      <Link
        href="/"
        className="mx-auto mt-4 w-auto rounded-lg bg-primary-text-color px-4 py-2 text-center font-bold text-white transition-all duration-300 ease-in-out hover:bg-custom-color"
      >
        Home
      </Link>
    </div>
  );
};

export default OrderPlaced;
