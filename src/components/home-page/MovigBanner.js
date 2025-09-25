import React from "react";
import { GiCargoCrane } from "react-icons/gi";
const BannerCard = () => {
  return (
    <div className="flex items-center gap-5 text-white">
      <GiCargoCrane className=" text-3xl tablet:text-4xl" />
      <h2 className=" text-3xl tablet:text-4xl font-semibold">
        Transport & Logistics
      </h2>
    </div>
  );
};
const MovigBanner = () => {
  return (
    <div className="bg-surface-primary w-full p-6 relative overflow-hidden">
      <div className="flex items-center gap-16 whitespace-nowrap animate-move">
        {Array.from({ length: 14 }, (_, index) => (
          <BannerCard key={`banner-${index}`} />
        ))}
      </div>
    </div>
  );
};

export default MovigBanner;
