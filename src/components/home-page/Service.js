import { images } from "@/utility/images";
import Image from "next/image";

const ServiceCard = ({ service }) => {
  return (
    <div className="relative w-full h-80 tablet:h-60 border border-gray-300 rounded-xl overflow-hidden p-6 tablet:p-8 flex flex-col justify-end bg-white shadow-md hover:shadow-lg transition-shadow duration-300">
      {" "}
      {/* Background Icon */}{" "}
      <Image
        className="absolute top-6 right-6 w-16 h-16"
        src={images.ocean}
        alt={service.head}
      />{" "}
      {/* Content Section */}{" "}
      <div className="relative z-10">
        {" "}
        <h3 className="text-xl tablet:text-2xl font-semibold mb-3 text-gray-900">
          {" "}
          {service.head}{" "}
        </h3>{" "}
      </div>{" "}
    </div>
  );
};

const Service = () => {
  return (
    <section className="w-full px-4 tablet:px-8 laptop:px-16 py-10 tablet:py-14 laptop:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Pyramid Layout */}
        <div className="space-y-10">
          {/* First Row - 3 Cards */}
          <div className="grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 gap-6 tablet:gap-8 max-w-5xl mx-auto">
            {serviceContent.slice(0, 3).map((item, index) => (
              <ServiceCard key={index} service={item} />
            ))}
          </div>

          {/* Second Row - 4 Cards */}
          <div className="grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-4 gap-6 tablet:gap-8">
            {serviceContent.slice(3, 7).map((item, index) => (
              <ServiceCard key={index} service={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;

export const serviceContent = [
  {
    head: "Air Freight",
    picture: images.air_transport,
    content:
      "Time is everything in air freight. From enquiry to final delivery, our dedicated team ensures fast and compliant execution.",
  },
  {
    head: "Ocean Freight",
    picture: images.air_transport,
    content:
      "With the U.S. ranked as the second-largest exporter, ocean freight is a vital part of global trade. Fx delivers seamless ocean solutions under strict neutrality.",
  },
  {
    head: "Land Transportation",
    picture: images.air_transport,
    content: "Nationwide trucking solutions with flexibility and safety.",
  },
  {
    head: "Projects & Heavy Cargo",
    picture: images.air_transport,
    content: "Expert handling of large-scale industrial and project cargo.",
  },
  {
    head: "Warehousing & Storage",
    picture: images.air_transport,
    content: "Safe and flexible storage solutions for freight forwarders.",
  },
  {
    head: "Customs Clearance",
    picture: images.air_transport,
    content: "Hassle-free customs brokerage to keep your supply chain moving.",
  },
  {
    head: "3PL Logistics",
    picture: images.air_transport,
    content: "Integrated third-party logistics services across the U.S.",
  },
];
