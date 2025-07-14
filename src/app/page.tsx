"use client";

import Footer from "@/components/Footer";
import Spinner from "@/components/Spinner";
import { useProducts } from "@/hooks/useProducts";
import Image from "next/image";
import Link from "next/link";

const Home = () => {
    const { data, isLoading, error } = useProducts();
    if (isLoading) return <Spinner />;
    if (error) return <p>Error loading Products</p>;

    return (
        <div>
            <header className=" hidden md:flex bg-[url('/assets/header.png')] bg-cover bg-center h-64 flex flex-col items-center justify-center text-black">
                <h1 className="text-2xl font-extrabold text-gray-600">
                    MiniCommerce
                </h1>
                <p className="text-sm text-gray-600">
                    Buy your dream furniture...
                </p>
            </header>
            <header className="flex justify-center md:hidden mt-8">
                <p className="text-lg font-extrabold text-gray-600">Products</p>
            </header>
            <main className="container mx-auto p-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {data?.map((product) => {
                        return (
                            <Link
                                href={`/product/${product.id}`}
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
                                        className="object-cover w-full"
                                    />
                                    <div className="bg-gray-50 p-4 ">
                                        <p className="text-bold text-lg text-primary-text-color">
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

// {product.name.toLowerCase().replace(/\s+/g, "-")}
