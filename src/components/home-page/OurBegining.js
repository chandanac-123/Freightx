import { images } from "@/utility/images";
import Image from "next/image";
import React from "react";

const OurBegining = () => {
  return (
    <div className="w-full py-12">
      <div className="flex flex-col-reverse tablet-lg:flex-row items-center gap-12 laptop:gap-24">
        <div className="flex-1 px-6 tablet-lg:pl-24 laptop-lg:pl-56 h-full">

          <h1 className="text-2xl font-medium text-dark py-3 border-b">
            Our Beginigs
          </h1>
          <div className="flex flex-wrap items-center table-lg:justify-between py-6 gap-6">
            <p className="text-7xl font-medium text-dark">2006</p>
            <Image src={images.hover_icon} width={40} height={40} alt="ship" />

            <p className=" font-light max-w-[400px] text-dark">
              Lorem ipsum dolor sit amet, id has nihil discere vocibus novum cu
              lab
            </p>
          </div>
          <h1 className="text-2xl font-medium text-dark py-3 border-b">
          Achievement

          </h1>
          <div className="flex flex-wrap items-center table-lg:justify-between py-6 gap-6">
            <p className="text-7xl font-medium text-dark">2014</p>
            <Image src={images.hover_icon} width={40} height={40} alt="ship" />

            <p className=" font-light max-w-[400px] text-dark">
              Lorem ipsum dolor sit amet, id has nihil discere vocibus novum cu
              lab
            </p>
          </div>  <h1 className="text-2xl font-medium text-dark py-3 border-b">
          Our Ideas

          </h1>
          <div className="flex flex-wrap items-center table-lg:justify-between py-6 gap-6">
            <p className="text-7xl font-medium text-dark">2022</p>
            <Image src={images.hover_icon} width={40} height={40} alt="ship" />

            <p className=" font-light max-w-[400px] text-dark">
              Lorem ipsum dolor sit amet, id has nihil discere vocibus novum cu
              lab
            </p>
          </div>
          
        </div>
        <div className="flex-1 h-full">
          <Image
            className="w-full h-[400px] md:h-[600px] object-cover"
            src={images.ship}
            width={0}
            height={0}
            alt="ship"
          />
        </div>
      </div>
    </div>
  );
};

export default OurBegining;
