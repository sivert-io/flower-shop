import Link from "next/link";
import { FaShoppingCart } from "react-icons/fa";

const Header = () => {
  return (
    <header className="bg-green-100 shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link
          href="/"
          className="text-3xl font-bold text-green-700 hover:text-green-800 transition-colors"
        >
          Bloom & Petal
        </Link>

        <nav className="hidden md:flex space-x-8">
          <Link
            href="/"
            className="text-green-700 hover:text-green-900 font-medium transition-colors"
          >
            Home
          </Link>
          <Link
            href="/products"
            className="text-green-700 hover:text-green-900 font-medium transition-colors"
          >
            Products
          </Link>
          <Link
            href="/gallery"
            className="text-green-700 hover:text-green-900 font-medium transition-colors"
          >
            Gallery
          </Link>
          <Link
            href="/about"
            className="text-green-700 hover:text-green-900 font-medium transition-colors"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="text-green-700 hover:text-green-900 font-medium transition-colors"
          >
            Contact
          </Link>
        </nav>

        <div className="flex items-center space-x-4">
          <button className="relative p-2 text-green-700 hover:text-green-900 transition-colors">
            <FaShoppingCart className="h-6 w-6" />
            <span className="absolute -top-1 -right-1 bg-pink-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
              0
            </span>
          </button>

          <button className="md:hidden p-2 rounded-md text-green-700 hover:text-green-900 focus:outline-none">
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
