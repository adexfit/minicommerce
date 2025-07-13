type ProductProps = {
    params: {
        slug: string;
    };
};

const SingleProduct = ({ params }: ProductProps) => {
    const { slug } = params;

    return (
        <div>
            <h1>SingleProduct: {slug}</h1>
            <p>This is the dynamic page for "{slug}".</p>
        </div>
    );
};

export default SingleProduct;
