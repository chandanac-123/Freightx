import React from "react";

const coreValues = [
  {
    title: "Neutrality",
    description: "100% protection of freight forwarder interests",
    icon: "🛡️",
    color: "from-indigo-50 to-white",
  },
  {
    title: "Global Reach",
    description: "Strong international partnerships",
    icon: "🌍",
    color: "from-green-50 to-white",
  },
  {
    title: "Exceptional Rates",
    description: "Competitive pricing through carrier relationships",
    icon: "💰",
    color: "from-yellow-50 to-white",
  },
  {
    title: "Customized Services",
    description: "Tailored logistics solutions for every need",
    icon: "⚙️",
    color: "from-blue-50 to-white",
  },
  {
    title: "Local Insight",
    description: "U.S.-based expertise for global operations",
    icon: "📍",
    color: "from-red-50 to-white",
  },
  {
    title: "Managing Time Zones",
    description: "24/7 availability across regions",
    icon: "⏰",
    color: "from-purple-50 to-white",
  },
];

const CoreValuesSection = () => {
  return (
    <section className="container max-w-screen-4k px-6 py-16 md:px-12 xl:px-12">
      {/* Section Heading */}
      <div className="text-left mb-8">
        <h1 className="text-text-primary font-sora font-semibold text-4xl leading-[52px] md:leading-[48px] xl:text-5xl font-inter whitespace-pre-line">
          Competencies
        </h1>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {coreValues.map((item, index) => (
          <div
            key={index}
            className={`bg-gradient-to-br ${item.color} border border-gray-200 rounded-2xl shadow-md hover:shadow-xl transition duration-300 p-6 flex flex-col items-start hover:-translate-y-1`}
          >
            {/* Icon */}
            <div className="bg-white p-4 rounded-xl shadow-md mb-4 text-3xl">
              {item.icon}
            </div>

            {/* Title */}
            <h3 className="text-lg font-semibold text-gray-900 mb-2 font-inter">
              {item.title}
            </h3>

            {/* Description */}
            <p className="text-gray-600 text-sm leading-relaxed font-inter">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CoreValuesSection;
