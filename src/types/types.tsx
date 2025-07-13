import { StaticImageData } from "next/image";

type ProductType = {
    id: number;
    image: StaticImageData;
    name: string;
    price: number;
    description: string;
};

export type { ProductType };
