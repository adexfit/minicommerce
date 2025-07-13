import Image, { StaticImageData } from "next/image";
import products from "../db/data/products";

type ProductType = {
    id: number;
    image: StaticImageData;
    name: string;
    price: number;
};

const Home = ({ id, image, name, price }: ProductType) => {
    return (
        <div>
            <main className="container mx-auto p-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {products.map((product) => {
                        return (
                            <div
                                className="mx-auto shadow-lg cursor-pointer scale-90 hover:scale-100 transition-all duration-300 ease-in-out"
                                key={product.id}
                            >
                                <Image
                                    priority
                                    src={product.image}
                                    alt={product.name}
                                    className="w-auto "
                                />
                                <div className="bg-gray-50 p-4 ">
                                    <p className="text-bold text-lg">
                                        {product.name}
                                    </p>
                                    <p className="text-gray-500">{`$ ${product.price}`}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </main>
        </div>
    );
};

export default Home;
