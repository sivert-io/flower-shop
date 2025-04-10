import { FaLeaf, FaHeart } from "react-icons/fa";

export const metadata = {
  title: "About Us | Bloom & Petal Flower Shop",
  description:
    "Learn about our flower shop, our story, and our commitment to providing fresh, beautiful flowers for all occasions.",
};

export default function AboutPage() {
  return (
    <div className="bg-white">
      <div className="relative bg-green-700 text-white py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            About Bloom & Petal
          </h1>
          <p className="text-xl text-green-100 max-w-3xl mx-auto">
            Our story, our passion, and our commitment to bringing beauty into
            your life
          </p>
        </div>
      </div>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <div className="relative h-[400px] w-full rounded-lg overflow-hidden bg-gray-200">
                {/* In a real implementation, this would be an actual image */}
                <div className="h-full w-full bg-gray-300 flex items-center justify-center text-gray-500 text-2xl">
                  Flower Shop Image
                </div>
              </div>
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-green-800 mb-6">
                Our Story
              </h2>
              <p className="text-gray-700 mb-4">
                Bloom & Petal was founded in 2010 by Jane Smith, a passionate
                florist with over 15 years of experience in the floral industry.
                What started as a small corner shop has blossomed into a beloved
                local business serving the Bloomington community and beyond.
              </p>
              <p className="text-gray-700 mb-4">
                With a team of talented floral designers, we create beautiful
                arrangements for all occasions - from everyday bouquets to
                elaborate wedding displays. Our mission is to share the joy and
                beauty of fresh flowers with everyone.
              </p>
              <p className="text-gray-700">
                We source our flowers from local growers whenever possible and
                take pride in providing arrangements that are as fresh as they
                are beautiful.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-green-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-green-800 mb-16">
            Our Values
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="flex flex-col items-center text-center">
              <div className="bg-white p-6 rounded-full mb-6 shadow-md">
                <FaLeaf className="h-12 w-12 text-green-600" />
              </div>
              <h3 className="text-2xl font-semibold text-green-800 mb-4">
                Sustainability
              </h3>
              <p className="text-gray-700">
                We&apos;re committed to sustainable practices in our business.
                From sourcing locally whenever possible to using eco-friendly
                packaging, we strive to reduce our environmental footprint while
                bringing beauty to your life.
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="bg-white p-6 rounded-full mb-6 shadow-md">
                <FaHeart className="h-12 w-12 text-green-600" />
              </div>
              <h3 className="text-2xl font-semibold text-green-800 mb-4">
                Community
              </h3>
              <p className="text-gray-700">
                We believe in giving back to the community that has supported
                us. We regularly donate arrangements to local hospitals and
                nursing homes, and participate in community events throughout
                the year.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-green-800 mb-12">
            Meet Our Team
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "Jane Smith", role: "Founder & Lead Florist" },
              { name: "Michael Johnson", role: "Senior Floral Designer" },
              { name: "Sarah Williams", role: "Events Specialist" },
              { name: "David Brown", role: "Shop Manager" },
              { name: "Lisa Chen", role: "Customer Service" },
              { name: "Robert Davis", role: "Delivery Specialist" },
            ].map((member, idx) => (
              <div
                key={idx}
                className="bg-white rounded-lg overflow-hidden shadow-md p-6 text-center"
              >
                <div className="w-32 h-32 rounded-full bg-gray-200 mx-auto mb-4 flex items-center justify-center text-gray-500">
                  {member.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <h3 className="text-xl font-semibold text-green-800">
                  {member.name}
                </h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
