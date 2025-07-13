"use client";

import Footer from "@/components/Footer";
import { useProducts } from "@/hooks/useProducts";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import Link from "next/link";

const Home = () => {
    const { data, isLoading, error } = useProducts();
    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error loading Products</p>;

    return (
        <div>
            <main className="container mx-auto p-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {data?.map((product) => {
                        return (
                            <Link
                                href={`/product/${product.name.toLowerCase().replace(/\s+/g, "-")}`}
                                key={product.id}
                            >
                                <div
                                    className="mx-auto shadow-lg cursor-pointer scale-90 hover:scale-100 transition-all duration-300 ease-in-out"
                                    key={product.id}
                                >
                                    <Image
                                        priority
                                        src={product.image}
                                        alt={product.name}
                                        width={285}
                                        height={301}
                                    />
                                    <div className="bg-gray-50 p-4 ">
                                        <p className="text-bold text-lg">
                                            {product.name}
                                        </p>
                                        <p className="text-gray-500">{`$ ${product.price}`}</p>
                                    </div>
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Home;
