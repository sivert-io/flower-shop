import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Bride",
    content:
      "Bloom & Petal created the most beautiful arrangements for my wedding day. Everything was exactly as I envisioned and arrived fresh and on time. I couldn't be happier!",
    rating: 5,
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Business Owner",
    content:
      "We order weekly arrangements for our office reception area, and Bloom & Petal always delivers exceptional quality. Their subscription service is convenient and a great value.",
    rating: 5,
  },
  {
    id: 3,
    name: "Jennifer Lopez",
    role: "Regular Customer",
    content:
      "I've been ordering from Bloom & Petal for over 3 years now. Their flowers last longer than any other shop I've tried, and their designs are always stunning.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-green-800 mb-12">
          What Our Customers Say
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-green-50 p-6 rounded-lg shadow-md"
            >
              <div className="flex text-yellow-400 mb-4">
                {[...Array(5)].map((_, i) => (
                  <FaStar
                    key={i}
                    className={`h-5 w-5 ${
                      i < testimonial.rating
                        ? "text-yellow-400"
                        : "text-gray-300"
                    }`}
                  />
                ))}
              </div>

              <p className="text-gray-700 italic mb-6">
                <span>&ldquo;</span>
                {testimonial.content}
                <span>&rdquo;</span>
              </p>

              <div>
                <p className="font-semibold text-green-800">
                  {testimonial.name}
                </p>
                <p className="text-gray-600 text-sm">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
