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
        <div className="flex flex-col md:flex-row py-8 md:w-4/5 mx-auto gap-6 px-4">
            <div className="flex-1 relative">
                <ToastContainer />

                <Image
                    priority
                    src={product.image}
                    width={425}
                    height={500}
                    alt="product image"
                />
            </div>
            <div className="flex-1">
                <h1 className="text-left font-bold text-lg md:text-xl text-gray-800 mb-2">
                    {product.name}
                </h1>
                <p className="text-lg text-custom-color2">{`Price: $ ${product.price}`}</p>
                <p className="pt-4 text-justify text-gray-600">
                    <span className="font-bold text-gray-800">
                        Description:{" "}
                    </span>

                    {product.description}
                </p>
                <span className="pt-4 flex justify-center flex-wrap gap-4">
                    <button
                        className="flex gap-2 items-center bg-custom-color2 text-white font-semibold py-2 px-4 rounded hover:bg-gray-800 hover:text-gray-100 transition-all duration-300 ease-in-out"
                        onClick={handleAddToCart}
                    >
                        <ShoppingCart className="size-5" />
                        <span>Add to cart</span>
                    </button>

                    <Link href={"/cart"}>
                        <button className="border-2  text-gray-500  font-semibold py-2 px-4 rounded hover:bg-gray-800 hover:text-gray-100 transition-all duration-300 ease-in-out">
                            Go to cart
                        </button>
                    </Link>

                    <Link href={"/"}>
                        <button className="border-2  text-gray-500 font-semibold py-2 px-4 rounded hover:bg-gray-800 hover:text-gray-100 transition-all duration-300 ease-in-out">
                            Continue Shopping
                        </button>
                    </Link>
                </span>
            </div>
        </div>
    );
};

export default SingleProduct;
