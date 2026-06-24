'use client'
import { images } from "@/utility/images";
import Image from "next/image";
import React, { useState } from "react";

const Info = () => {
  // State to track whether extra content is shown
  const [showMore, setShowMore] = useState(false);

  const handleToggle = () => {
    setShowMore((prev) => !prev);
  };

  return (
    <div className="py-16 tablet:py-16 flex flex-col-reverse tablet-lg:flex-row items-center gap-6">
      {/* Left Section - Text Content */}
      <div className="tablet-lg:w-1/2 px-6 tablet-lg:pl-20 laptop-lg:pl-32 desktop:pl-40 4k:pl-56">
        <h1 className="text-4xl laptop:text-5xl font-semibold mb-6 text-dark font-sora max-w-[500px]">
          Fast Delivery And Secure Packages
        </h1>

        {/* Intro Paragraphs */}
        <div className="flex-1 text-lg space-y-6 font-inter">
          <p>
            Welcome to FreightX Shipping Inc (Fx) - Neutral Logistic Solutions
            for freight forwarders and businesses worldwide. Headquartered in
            Franklin, Tennessee, we serve as the neutral logistics partner in
            the USA, offering air, sea, land, customs clearance, warehousing,
            and 3PL services. With 100% neutrality at our core, Fx acts as the
            own office for freight forwarders across the globe, handling
            shipments in and out of the United States with reliability and
            confidentiality.
          </p>

          <p>
            Headquartered in Franklin, Tennessee, we serve as the neutral
            logistics partner in the USA, offering air, sea, land, customs
            clearance, warehousing, and 3PL services. With 100% neutrality at
            our core, Fx acts as the own office for freight forwarders across
            the globe, handling shipments in and out of the United States with
            reliability and confidentiality.
          </p>

          {/* This paragraph only shows when 'showMore' is true */}
          {showMore && (
            <p className="text-dark tablet-lg:max-w-[500px] transition-opacity duration-300 ease-in-out">
              To make freight forwarding easy, efficient, and hassle-free. By
              focusing on smart training and continuous improvement, Fx ensures
              every shipment is managed with precision, transparency, and trust.
            </p>
          )}
        </div>

        {/* See More Button */}
        <button
          onClick={handleToggle}
          className="px-7 py-2.5 text-sm bg-text-primary text-white rounded-full inline-block mt-4 transition-colors duration-300 hover:bg-opacity-90"
        >
          {showMore ? "See Less" : "See More"}
        </button>
      </div>

      {/* Right Section - Image */}
      <div className="tablet-lg:w-1/2">
        <div className="tablet-lg:h-[400px] overflow-hidden">
          <Image
            src={images.info}
            alt="info"
            width={600}
            height={400}
            layout="responsive"
          />
        </div>
      </div>
    </div>
  );
};

export default Info;
