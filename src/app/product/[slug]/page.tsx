"use client";

import Spinner from "@/components/Spinner";
import { useProducts } from "@/hooks/useProducts";
import { useCartStore } from "@/store/cart-store";
import { ParamProp } from "@/types/types";
import { ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { toast, ToastContainer } from "react-toastify";

const SingleProduct = ({ params }: ParamProp) => {
  const addToCart = useCartStore((state) => state.addToCart);
  const addedTocartNotice = () => toast("product added to cart successfully");

  const { data: productData, isLoading, error } = useProducts();
  if (isLoading) return <Spinner />;
  if (error) return <p>Error loading Products</p>;

  const { slug } = params;
  const productId: number = Number(slug);

  const product = productData?.find((u) => u.id === productId);

  if (!product) return <p>No product found</p>;

  const handleAddToCart = () => {
    addToCart({
      id: product.id.toString(),
      name: product.name,
      price: product.price,
      quantity: 1,
      image: product.image,
    });
    addedTocartNotice();
  };

  return (
    <div className="mx-auto flex flex-col gap-6 px-4 py-8 md:w-4/5 md:flex-row">
      <div className="relative flex-1">
        <ToastContainer />

        <Image
          priority
          src={product.image}
          width={425}
          height={500}
          alt={`${product.name} image`}
        />
      </div>
      <div className="flex-1">
        <h1 className="mb-2 text-left text-lg font-bold text-gray-800 md:text-xl">
          {product.name}
        </h1>
        <p className="text-lg text-custom-color2">{`Price: $ ${product.price}`}</p>
        <p className="pt-4 text-justify text-gray-600">
          <span className="font-bold text-gray-800">Description: </span>

          {product.description}
        </p>
        <span className="flex flex-wrap justify-center gap-4 pt-4">
          <button
            className="flex items-center gap-2 rounded bg-custom-color2 px-4 py-2 font-semibold text-white transition-all duration-300 ease-in-out hover:bg-gray-800 hover:text-gray-100"
            onClick={handleAddToCart}
          >
            <ShoppingCart className="size-5" />
            <span>Add to cart</span>
          </button>

          <Link href={"/cart"}>
            <button className="rounded border-2 px-4 py-2 font-semibold text-gray-500 transition-all duration-300 ease-in-out hover:bg-gray-800 hover:text-gray-100">
              Go to cart
            </button>
          </Link>

          <Link href={"/"}>
            <button className="rounded border-2 px-4 py-2 font-semibold text-gray-500 transition-all duration-300 ease-in-out hover:bg-gray-800 hover:text-gray-100">
              Continue Shopping
            </button>
          </Link>
        </span>
      </div>
    </div>
  );
};

export default SingleProduct;
