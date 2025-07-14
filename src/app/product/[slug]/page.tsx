"use client";

import { useProducts } from "@/hooks/useProducts";
import { useCartStore } from "@/store/cart-store";
import { cartProductProp, ProductType } from "@/types/types";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { toast, ToastContainer } from "react-toastify";

const SingleProduct = ({ params }: cartProductProp) => {
    const items = useCartStore((state) => state.items);
    const addToCart = useCartStore((state) => state.addToCart);
    const addedTocartNotice = () => toast("product added to cart successfully");

    const { data: productData, isLoading, error } = useProducts();
    if (isLoading) return <p>Loading...</p>;
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
        <div className="flex py-8 w-[80%] mx-auto gap-6">
            <ToastContainer />
            <div className="flex-1 relative">
                <Image
                    priority
                    src={product.image}
                    width={425}
                    height={500}
                    alt="product image"
                />
            </div>
            <div className="flex-1">
                <h1 className="font-bold text-2xl">{product.name}</h1>
                <p className="text-lg text-gray-600">{`$ ${product.price}`}</p>
                <p className="pt-4">
                    <span className="font-bold text-grey-500">
                        Description:
                    </span>{" "}
                    <br />
                    {product.description}
                </p>
                <span className="pt-4 flex flex-wrap gap-4">
                    <button
                        className="bg-gray-600 text-white font-semibold py-2 px-4 rounded hover:text-gray-600 hover:bg-gray-200"
                        onClick={handleAddToCart}
                    >
                        Add to cart
                    </button>

                    <Link href={"/cart"}>
                        <button className="bg-gray-200 text-gray-700 font-semibold py-2 px-4 rounded hover:bg-gray-800 hover:text-gray-100 transition-all duration-300 ease-in-out">
                            Go to cart
                        </button>
                    </Link>
                </span>
            </div>
        </div>
    );
};

export default SingleProduct;
