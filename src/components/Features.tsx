import { FaTruck, FaLeaf, FaGift, FaCalendarAlt } from "react-icons/fa";

const Features = () => {
  const features = [
    {
      icon: <FaTruck className="h-10 w-10 text-green-600" />,
      title: "Same Day Delivery",
      description: "Order by 1 PM for same-day delivery within the city area.",
    },
    {
      icon: <FaLeaf className="h-10 w-10 text-green-600" />,
      title: "Fresh Guarantee",
      description:
        "All our flowers are sourced fresh daily from local growers.",
    },
    {
      icon: <FaGift className="h-10 w-10 text-green-600" />,
      title: "Custom Arrangements",
      description:
        "Let our expert florists create a unique arrangement for your special occasion.",
    },
    {
      icon: <FaCalendarAlt className="h-10 w-10 text-green-600" />,
      title: "Subscription Service",
      description:
        "Subscribe for weekly or monthly fresh flower deliveries to your home or office.",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-green-800 mb-12">
          Why Choose Us
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6 bg-green-50 rounded-lg hover:shadow-md transition-shadow"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-green-800 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
