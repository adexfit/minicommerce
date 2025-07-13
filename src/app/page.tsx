import Image, { StaticImageData } from "next/image";
import products from "./data/products";

type ProductType = {
  image: StaticImageData;
  name: string;
  price: number;
};

const Home = ({ image, name, price }: ProductType) => {
  return (
    <div>
      <main>
        <div> Catalogue</div>
        <div>
          {products.map((product) => {
            return (
              <div key={product.name}>
                <Image
                  priority
                  src={product.image}
                  alt={product.name}
                  className="w-auto"
                />
                <li>{product.name}</li>
                <p>{product.price}</p>
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
};

export default Home;
