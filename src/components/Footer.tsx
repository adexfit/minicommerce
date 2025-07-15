const Footer = () => {
  return (
    <footer className="bg-gray-800 py-6 text-center text-white">
      <div className="container mx-auto flex flex-col items-center justify-center px-4 md:flex-row">
        <p className="text-sm md:text-left">
          &copy; {new Date().getFullYear()} MiniCommerce. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
