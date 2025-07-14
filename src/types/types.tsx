import { StaticImageData } from "next/image";

type ProductType = {
    id: number;
    image: StaticImageData;
    name: string;
    price: number;
    description: string;
};

type cartProductProp = {
    params: {
        slug: number;
    };
    id: string;
    name: string;
    price: number;
    image?: string;
};

export type { ProductType, cartProductProp };
