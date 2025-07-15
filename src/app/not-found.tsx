import Link from "next/link";

const NotFound = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 px-4">
      <div className="text-center">
        <h1 className="mb-4 text-6xl font-bold text-custom-color2">404</h1>
        <p className="mb-6 text-xl text-gray-700">
          Oops! The page you’re looking for doesn’t exist.
        </p>
        <Link
          href="/"
          className="inline-block rounded-xl bg-custom-color2 px-6 py-3 text-white shadow transition hover:bg-custom-color2"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
