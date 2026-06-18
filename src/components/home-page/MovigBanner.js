import React from "react";
import { RiShip2Line } from "react-icons/ri";
import { MdOutlineFactCheck } from "react-icons/md"; // example icon
import { IoAirplaneOutline } from "react-icons/io5";
import { FiTruck } from "react-icons/fi";

const services = [
  {
    icon: IoAirplaneOutline ,
    title: "Air Freight",
  },
  {
    icon: RiShip2Line,
    title: "Ocean Freight",
  },
  {
    icon: FiTruck,
    title: "Land Transportation",
  },
  {
    icon: MdOutlineFactCheck,
    title: "Customs Clearance",
  },
];

const BannerCard = ({ title, Icon }) => {
  return (
    <div className="flex items-center gap-5 text-white">
      <Icon className="text-xl" />
      <h2 className="text-xl font-semibold">
        {title}
      </h2>
    </div>
  );
};

const MovigBanner = () => {
  return (
    <div className="bg-text-primary/95 w-full p-4  relative overflow-hidden">
      <div className="flex items-center gap-8 whitespace-nowrap animate-move">
        {Array.from({ length: 14 }, (_, index) => {
          const service = services[index % services.length];

          return (
            <BannerCard
              key={`banner-${index}`}
              title={service.title}
              Icon={service.icon}
            />
          );
        })}
      </div>
    </div>
  );
};

export default MovigBanner;