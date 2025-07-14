import { StaticImageData } from "next/image";

type ProductType = {
    id: number;
    image: StaticImageData;
    name: string;
    price: number;
    description: string;
};

type ParamProp = {
    params: {
        slug: string;
    };
};

type cartProductProp = {
    id: string;
    name: string;
    price: number;
    quantity: number;
    image: string | StaticImageData;
} & ParamProp;

export type { ProductType, cartProductProp, ParamProp };
