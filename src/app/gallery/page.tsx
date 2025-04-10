export const metadata = {
  title: "Gallery | Bloom & Petal Flower Shop",
  description:
    "View our beautiful floral arrangements, wedding showcases, and design inspiration in our gallery.",
};

const categories = [
  "All",
  "Weddings",
  "Events",
  "Seasonal",
  "Arrangements",
  "Plants",
];

// This would normally come from a database or API
const galleryImages = Array.from({ length: 12 }, (_, i) => ({
  id: i + 1,
  title: `Floral Image ${i + 1}`,
  category: categories[Math.floor(Math.random() * (categories.length - 1)) + 1],
}));

export default function GalleryPage() {
  return (
    <div className="bg-white">
      <div className="relative bg-green-700 text-white py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Gallery</h1>
          <p className="text-xl text-green-100 max-w-3xl mx-auto">
            Beautiful arrangements for every occasion - browse through our past
            work
          </p>
        </div>
      </div>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-10 flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                className="px-4 py-2 rounded-full bg-green-50 text-green-700 hover:bg-green-100 transition-colors"
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {galleryImages.map((image) => (
              <div
                key={image.id}
                className="group overflow-hidden rounded-lg shadow-md bg-white"
              >
                {/* Placeholder for image - in a real implementation, would use Image component with actual images */}
                <div className="aspect-[4/3] bg-gray-200 relative overflow-hidden">
                  <div className="h-full w-full bg-gray-300 flex items-center justify-center text-gray-500">
                    Gallery Image {image.id}
                  </div>
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100">
                    <button className="bg-white text-green-700 px-4 py-2 rounded-md font-medium transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      View Larger
                    </button>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-green-800">
                    {image.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{image.category}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-green-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-green-800 mb-6">
            Want Something Custom?
          </h2>
          <p className="text-gray-700 mb-8 max-w-3xl mx-auto">
            We specialize in creating unique floral arrangements for any
            occasion. Contact us to discuss your vision and let our expert
            florists bring it to life.
          </p>
          <a
            href="/contact"
            className="inline-block bg-green-700 hover:bg-green-800 text-white font-medium py-3 px-8 rounded-md transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  );
}
