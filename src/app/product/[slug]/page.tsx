"use client";

import { useProducts } from "@/hooks/useProducts";
import { ProductType } from "@/types/types";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { useState } from "react";

type ProductProps = {
    params: {
        slug: number;
    };
};

const SingleProduct = ({ params }: ProductProps) => {
    // const [product, setProduct] = useState<ProductType[]>([]);

    const { data: productData, isLoading, error } = useProducts();
    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error loading Products</p>;

    const { slug } = params;
    const productId: number = Number(slug);

    const product = productData?.find((u) => u.id === productId);
    // const product = productData?.find(
    //     (u: ProductType) => console.log(typeof u.id),
    //     console.log(typeof slug)
    // );
    // console.log(productData?.[slug]);
    // console.log(productData?.[slug].id);
    // console.log(product);

    if (!product) return <p>No product found</p>;

    return (
        <div className="flex py-8 w-[80%] mx-auto gap-6">
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
                    <button className="bg-blue-600 text-white font-semibold py-2 px-4 rounded hover:bg-blue-700">
                        Add to cart
                    </button>

                    <Link href={"/cart"}>
                        <button className="bg-gray-200 text-gray-800 font-semibold py-2 px-4 rounded hover:bg-gray-300">
                            View cart
                        </button>
                    </Link>
                </span>
            </div>
        </div>
    );
};

export default SingleProduct;
