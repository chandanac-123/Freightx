'use client'
import { images } from "@/utility/images";
import Image from "next/image";
import { useRouter } from "next/navigation";

const ServiceCard = ({ service }) => {
  const router = useRouter();
  return (
    <div className="relative h-80 rounded-xl overflow-hidden group" onClick={() => router.push(`/services`)}>
      {/* Background Image */}
      <Image
        src={service.picture}
        alt={service.head}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-110"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />
      {/* Title - Top Left */}
      <div className="absolute top-6 left-6 z-10">
        <h3 className="text-xl font-semibold text-white font-sora">
          {service.head}
        </h3>
      </div>
      {/* Description - Center */}
      <div className="absolute inset-0 flex items-end p-6 z-10">
        <p className="text-white text-md leading-relaxed max-w-sm font-inter">
          {service.content}
        </p>
      </div>
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
          <div className="grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-4 gap-6 tablet:gap-8 ">
            {serviceContent?.map((item, index) => (
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
    picture: images.ocean_transport,
    content:
      "With the U.S. ranked as the second-largest exporter, ocean freight is a vital part of global trade.",
  },
  {
    head: "Land Transportation",
    picture: images.road_transport,
    content: "Nationwide trucking solutions with flexibility and safety.",
  },
  {
    head: "Customs Clearance",
    picture: images.custome_clear,
    content: "Hassle-free customs brokerage to keep your supply chain moving.",
  }
];
