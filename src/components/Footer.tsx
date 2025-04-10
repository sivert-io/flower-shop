import Link from "next/link";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaPinterest,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-green-800 text-white">
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Bloom & Petal</h3>
            <p className="text-green-100 mb-4">
              Bringing beauty and freshness to your special moments since 2010.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-green-100 hover:text-white transition-colors"
              >
                <FaFacebook className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-green-100 hover:text-white transition-colors"
              >
                <FaInstagram className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-green-100 hover:text-white transition-colors"
              >
                <FaTwitter className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-green-100 hover:text-white transition-colors"
              >
                <FaPinterest className="h-6 w-6" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-green-100 hover:text-white transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="text-green-100 hover:text-white transition-colors"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  href="/gallery"
                  className="text-green-100 hover:text-white transition-colors"
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-green-100 hover:text-white transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-green-100 hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <address className="not-italic text-green-100">
              <p className="mb-2">123 Flower Street</p>
              <p className="mb-2">Bloomington, FL 12345</p>
              <p className="mb-2">Email: info@bloomandpetal.com</p>
              <p>Phone: (555) 123-4567</p>
            </address>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Hours</h3>
            <ul className="text-green-100">
              <li className="mb-2">Monday - Friday: 9am - 7pm</li>
              <li className="mb-2">Saturday: 9am - 5pm</li>
              <li>Sunday: 10am - 4pm</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-green-700 text-center text-green-100">
          <p>
            &copy; {new Date().getFullYear()} Bloom & Petal. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
