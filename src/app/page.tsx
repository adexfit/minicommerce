"use client";

import Footer from "@/components/Footer";
import Spinner from "@/components/Spinner";
import { useDebounce } from "@/hooks/useDebounce";
import { useProducts } from "@/hooks/useProducts";
import { ProductType } from "@/types/types";
import { X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearch = useDebounce(searchTerm, 300); // 300ms delay
  const { data, isLoading, error } = useProducts();
  const [displayedProducts, setDisplayedProducts] = useState<ProductType[]>([]);

  useEffect(() => {
    if (isLoading) return;
    if (debouncedSearch.trim() === "" && !isLoading) {
      setDisplayedProducts(data ? data : []);
      console.log(data);
    } else {
      const filtered = data?.filter((product) =>
        product.name.toLowerCase().includes(debouncedSearch.toLowerCase()),
      );
      setDisplayedProducts(filtered ?? []);
    }
  }, [debouncedSearch, data, isLoading]);

  if (data) console.log(data);

  // setDisplayedProducts,

  if (isLoading) return <Spinner />;
  if (error) return <p>Error loading Products</p>;

  return (
    <div>
      <header className="flex hidden h-64 flex-col items-center justify-center bg-[url('/assets/header.png')] bg-cover bg-center text-black md:flex">
        <h1 className="text-2xl font-extrabold text-gray-600">MiniCommerce</h1>
        <p className="text-sm text-gray-600">Buy your dream furniture...</p>
      </header>

      <div className="relative mx-auto mb-6 w-4/5 px-4 pt-4">
        <input
          type="text"
          id="search2"
          name="search2"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search..."
          className="w-full rounded-md border border-gray-300 px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-custom-color2"
        />
        {searchTerm && (
          <button
            onClick={() => setSearchTerm("")}
            className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
            aria-label="Clear search"
          >
            <X size={18} />
          </button>
        )}
      </div>

      <div className="mt-8 flex justify-center md:hidden">
        <p className="text-lg font-extrabold text-gray-600">Products</p>
      </div>
      <main className="container mx-auto p-4">
        {displayedProducts.length === 0 && !isLoading ? (
          <p className="text-center text-gray-500">No products found.</p>
        ) : (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {displayedProducts?.map((product) => {
              return (
                <Link href={`/product/${product.id}`} key={product.id}>
                  <div
                    className="mx-auto scale-90 cursor-pointer shadow-lg transition-all duration-300 ease-in-out hover:scale-100"
                    key={product.id}
                  >
                    <Image
                      priority
                      src={product.image}
                      alt={product.name}
                      width={285}
                      height={301}
                      className="w-full object-cover"
                    />
                    <div className="bg-gray-50 p-4">
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
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Home;

// {product.name.toLowerCase().replace(/\s+/g, "-")}
