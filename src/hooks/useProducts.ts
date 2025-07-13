import { ProductType } from "@/types/types";
import { useQuery } from "@tanstack/react-query";

const fetchProducts = async (): Promise<ProductType[]> => {
    try {
        const res = await fetch("/products.json");
        const data = await res.json();
        if (!res.ok) {
            throw new Error("Unable to fetch products");
        }
        return data;
    } catch (error) {
        console.error("Error fetching products:", error);
        throw error;
    }
};

export const useProducts = () => {
    return useQuery<ProductType[]>({
        queryKey: ["products"],
        queryFn: fetchProducts,
    });
};
