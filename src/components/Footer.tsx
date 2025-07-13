const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-6">
            <div className="container mx-auto px-4 flex flex-col md:flex-row justify-center items-center">
                <p className="text-sm text-center md:text-left">
                    &copy; {new Date().getFullYear()} MiniCommerce. All rights
                    reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
