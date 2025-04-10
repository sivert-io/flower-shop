import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from "react-icons/fa";

export const metadata = {
  title: "Contact Us | Bloom & Petal Flower Shop",
  description:
    "Get in touch with Bloom & Petal. Visit our store, send us a message, or call us to order fresh flowers and arrangements.",
};

export default function ContactPage() {
  return (
    <div className="bg-white">
      <div className="relative bg-green-700 text-white py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-green-100 max-w-3xl mx-auto">
            We&apos;d love to hear from you. Reach out with any questions, or
            visit our store!
          </p>
        </div>
      </div>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold text-green-800 mb-8">
                Send Us a Message
              </h2>

              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-gray-700 font-medium mb-2"
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-gray-700 font-medium mb-2"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="How can we help you?"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="Tell us what you need..."
                  ></textarea>
                </div>

                <div>
                  <button
                    type="submit"
                    className="bg-green-700 hover:bg-green-800 text-white font-medium py-3 px-6 rounded-md transition-colors"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>

            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold text-green-800 mb-8">
                Our Information
              </h2>

              <div className="bg-green-50 p-8 rounded-lg">
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-green-100 rounded-full p-3 mr-4">
                      <FaMapMarkerAlt className="h-6 w-6 text-green-700" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-green-800 mb-2">
                        Visit Our Store
                      </h3>
                      <p className="text-gray-700">
                        123 Flower Street
                        <br />
                        Bloomington, FL 12345
                        <br />
                        United States
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-green-100 rounded-full p-3 mr-4">
                      <FaPhone className="h-6 w-6 text-green-700" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-green-800 mb-2">
                        Call Us
                      </h3>
                      <p className="text-gray-700">
                        (555) 123-4567
                        <br />
                        Mon-Fri: 9am - 7pm
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-green-100 rounded-full p-3 mr-4">
                      <FaEnvelope className="h-6 w-6 text-green-700" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-green-800 mb-2">
                        Email Us
                      </h3>
                      <p className="text-gray-700">
                        info@bloomandpetal.com
                        <br />
                        orders@bloomandpetal.com
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-green-100 rounded-full p-3 mr-4">
                      <FaClock className="h-6 w-6 text-green-700" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-green-800 mb-2">
                        Store Hours
                      </h3>
                      <p className="text-gray-700">
                        Monday - Friday: 9am - 7pm
                        <br />
                        Saturday: 9am - 5pm
                        <br />
                        Sunday: 10am - 4pm
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-green-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-green-800 mb-8">
            Our Location
          </h2>
          <div className="h-[400px] bg-gray-300 rounded-lg flex items-center justify-center text-gray-500 text-xl">
            Google Map Would Go Here
          </div>
        </div>
      </section>
    </div>
  );
}
