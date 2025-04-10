import Link from "next/link";

const Hero = () => {
  return (
    <div className="relative bg-green-50 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-green-100 to-transparent opacity-90"></div>
        {/* Background image would be here in a real implementation */}
        <div className="absolute inset-0 bg-[url('/hero-flowers.jpg')] bg-cover bg-center"></div>
      </div>

      <div className="container mx-auto px-4 py-24 md:py-32 relative z-10">
        <div className="max-w-lg">
          <h1 className="text-4xl md:text-5xl font-bold text-green-900 mb-4">
            Beautiful Flowers for Every Occasion
          </h1>
          <p className="text-xl text-green-800 mb-8">
            From birthdays to weddings, express your feelings with our fresh,
            hand-crafted floral arrangements.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <Link
              href="/products"
              className="inline-block bg-green-700 hover:bg-green-800 text-white font-medium py-3 px-6 rounded-md transition-colors"
            >
              Shop Now
            </Link>
            <Link
              href="/contact"
              className="inline-block bg-white text-green-700 font-medium py-3 px-6 rounded-md border border-green-700 hover:bg-green-50 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
