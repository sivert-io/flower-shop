import { FaSearch, FaFilter } from "react-icons/fa";

export const metadata = {
  title: "Products | Bloom & Petal Flower Shop",
  description:
    "Shop our selection of fresh flowers, bouquets, and arrangements for all occasions.",
};

// This would normally come from a database or API
const products = [
  {
    id: 1,
    name: "Sunshine Bouquet",
    price: 49.99,
    category: "Bouquets",
    description:
      "Bright sunflowers, yellow roses, and white daisies in a cheerful arrangement.",
  },
  {
    id: 2,
    name: "Rose Romance",
    price: 59.99,
    category: "Roses",
    description: "Classic red roses with baby's breath in an elegant vase.",
  },
  {
    id: 3,
    name: "Spring Medley",
    price: 44.99,
    category: "Seasonal",
    description:
      "Colorful tulips, daffodils, and hyacinths celebrating the season.",
  },
  {
    id: 4,
    name: "Orchid Delight",
    price: 69.99,
    category: "Plants",
    description: "Exotic purple orchids arranged in a modern decorative pot.",
  },
  {
    id: 5,
    name: "Birthday Celebration",
    price: 54.99,
    category: "Occasions",
    description:
      "Festive mix of colorful gerbera daisies, carnations, and lilies.",
  },
  {
    id: 6,
    name: "Peaceful Lily",
    price: 52.99,
    category: "Sympathy",
    description: "Elegant white lilies and roses arranged with greenery.",
  },
  {
    id: 7,
    name: "Succulent Garden",
    price: 39.99,
    category: "Plants",
    description: "Assorted succulents in a rustic wooden planter.",
  },
  {
    id: 8,
    name: "Wildflower Meadow",
    price: 47.99,
    category: "Seasonal",
    description: "Natural arrangement of seasonal wildflowers in a mason jar.",
  },
  {
    id: 9,
    name: "Elegant Anniversary",
    price: 79.99,
    category: "Occasions",
    description:
      "Premium long-stemmed roses with eucalyptus and delicate accents.",
  },
  {
    id: 10,
    name: "Tropical Paradise",
    price: 65.99,
    category: "Exotic",
    description:
      "Vibrant arrangement with bird of paradise, anthurium, and tropical foliage.",
  },
  {
    id: 11,
    name: "Lavender Dreams",
    price: 49.99,
    category: "Bouquets",
    description:
      "Fragrant lavender and purple blooms in a charming arrangement.",
  },
  {
    id: 12,
    name: "Forever Roses",
    price: 149.99,
    category: "Roses",
    description: "Preserved roses that last up to a year with no water needed.",
  },
];

const categories = [
  "All",
  "Bouquets",
  "Roses",
  "Seasonal",
  "Plants",
  "Occasions",
  "Sympathy",
  "Exotic",
];

export default function ProductsPage() {
  return (
    <div className="bg-white">
      <div className="relative bg-green-700 text-white py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Shop Our Flowers
          </h1>
          <p className="text-xl text-green-100 max-w-3xl mx-auto">
            Beautiful arrangements for every occasion, delivered with care
          </p>
        </div>
      </div>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Sidebar/Filter */}
            <div className="md:w-1/4">
              <div className="bg-green-50 p-6 rounded-lg sticky top-8">
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-green-800 mb-4 flex items-center">
                    <FaFilter className="mr-2" /> Categories
                  </h3>
                  <ul className="space-y-2">
                    {categories.map((category) => (
                      <li key={category}>
                        <label className="flex items-center text-gray-700 hover:text-green-700 cursor-pointer">
                          <input
                            type="checkbox"
                            className="mr-2 h-4 w-4 rounded border-gray-300 text-green-600 focus:ring-green-500"
                          />
                          {category}
                        </label>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-green-800 mb-4">
                    Price Range
                  </h3>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-700">$0</span>
                      <span className="text-gray-700">$200</span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="200"
                      className="w-full h-2 rounded-lg appearance-none cursor-pointer bg-green-200"
                    />
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-green-800 mb-4">
                    Occasion
                  </h3>
                  <ul className="space-y-2">
                    {[
                      "Birthday",
                      "Anniversary",
                      "Wedding",
                      "Sympathy",
                      "Just Because",
                    ].map((occasion) => (
                      <li key={occasion}>
                        <label className="flex items-center text-gray-700 hover:text-green-700 cursor-pointer">
                          <input
                            type="checkbox"
                            className="mr-2 h-4 w-4 rounded border-gray-300 text-green-600 focus:ring-green-500"
                          />
                          {occasion}
                        </label>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Products */}
            <div className="md:w-3/4">
              <div className="flex flex-col sm:flex-row justify-between items-center mb-8">
                <div className="relative w-full sm:w-auto mb-4 sm:mb-0">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaSearch className="text-gray-400" />
                  </div>
                  <input
                    type="text"
                    placeholder="Search products..."
                    className="pl-10 pr-4 py-2 border border-gray-300 rounded-md w-full sm:w-64 focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>

                <div className="w-full sm:w-auto">
                  <select className="w-full sm:w-auto px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500">
                    <option>Sort by: Featured</option>
                    <option>Price: Low to High</option>
                    <option>Price: High to Low</option>
                    <option>Newest</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map((product) => (
                  <div
                    key={product.id}
                    className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                  >
                    <div className="relative h-64 w-full bg-gray-200">
                      {/* In a real implementation, you would have actual images here */}
                      <div className="h-full w-full bg-gray-300 flex items-center justify-center text-gray-500">
                        {product.name[0]}
                      </div>
                    </div>

                    <div className="p-4">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-xl font-semibold text-green-800">
                          {product.name}
                        </h3>
                        <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                          {product.category}
                        </span>
                      </div>
                      <p className="text-gray-600 mb-3 text-sm line-clamp-2">
                        {product.description}
                      </p>
                      <div className="flex justify-between items-center">
                        <span className="text-lg font-bold text-green-700">
                          ${product.price.toFixed(2)}
                        </span>
                        <button className="bg-green-700 hover:bg-green-800 text-white py-2 px-4 rounded-md text-sm transition-colors">
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12 flex justify-center">
                <nav className="flex items-center space-x-2">
                  <a
                    href="#"
                    className="px-3 py-1 rounded-md bg-green-50 text-green-700"
                  >
                    Previous
                  </a>
                  <a
                    href="#"
                    className="px-3 py-1 rounded-md bg-green-700 text-white"
                  >
                    1
                  </a>
                  <a
                    href="#"
                    className="px-3 py-1 rounded-md bg-green-50 text-green-700"
                  >
                    2
                  </a>
                  <a
                    href="#"
                    className="px-3 py-1 rounded-md bg-green-50 text-green-700"
                  >
                    3
                  </a>
                  <span className="px-3 py-1">...</span>
                  <a
                    href="#"
                    className="px-3 py-1 rounded-md bg-green-50 text-green-700"
                  >
                    Next
                  </a>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
