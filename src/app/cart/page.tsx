import Link from "next/link";

const Cart = () => {
  return (
    <div>
      <Link
        href="/checkout"
        className="text-black hover:text-gray-600 transition-colors"
        aria-label="Checkout Cart"
      >
        Checkout Now
      </Link>
    </div>
  );
};

export default Cart;
