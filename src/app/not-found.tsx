import Link from "next/link";

const NotFound = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
            <div className="text-center">
                <h1 className="text-6xl font-bold text-custom-color2 mb-4">
                    404
                </h1>
                <p className="text-xl text-gray-700 mb-6">
                    Oops! The page you’re looking for doesn’t exist.
                </p>
                <Link
                    href="/"
                    className="inline-block bg-custom-color2 text-white px-6 py-3 rounded-xl shadow hover:bg-custom-color2 transition"
                >
                    Go Home
                </Link>
            </div>
        </div>
    );
};

export default NotFound;
