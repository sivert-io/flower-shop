import Link from "next/link";

const products = [
  {
    id: 1,
    name: "Sunshine Bouquet",
    price: 49.99,
    imagePath: "/products/bouquet1.jpg",
    description:
      "Bright sunflowers, yellow roses, and white daisies in a cheerful arrangement.",
  },
  {
    id: 2,
    name: "Rose Romance",
    price: 59.99,
    imagePath: "/products/bouquet2.jpg",
    description: "Classic red roses with baby's breath in an elegant vase.",
  },
  {
    id: 3,
    name: "Spring Medley",
    price: 44.99,
    imagePath: "/products/bouquet3.jpg",
    description:
      "Colorful tulips, daffodils, and hyacinths celebrating the season.",
  },
  {
    id: 4,
    name: "Orchid Delight",
    price: 69.99,
    imagePath: "/products/bouquet4.jpg",
    description: "Exotic purple orchids arranged in a modern decorative pot.",
  },
];

const FeaturedProducts = () => {
  return (
    <section className="py-16 bg-green-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl font-bold text-green-800">
            Featured Arrangements
          </h2>
          <Link
            href="/products"
            className="text-green-700 hover:text-green-900 font-medium"
          >
            View All Products →
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="relative h-64 w-full bg-gray-200">
                {/* In a real implementation, you would have actual images here */}
                <div className="h-full w-full bg-gray-300 flex items-center justify-center text-gray-500">
                  {product.name[0]}
                  {/* <Image 
                    src={product.imagePath} 
                    alt={product.name} 
                    fill 
                    className="object-cover"
                  /> */}
                </div>
              </div>

              <div className="p-4">
                <h3 className="text-xl font-semibold text-green-800 mb-2">
                  {product.name}
                </h3>
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
      </div>
    </section>
  );
};

export default FeaturedProducts;
