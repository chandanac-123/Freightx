import Image from "next/image";
import React from "react";
import { GiCargoCrane } from "react-icons/gi";
import Coursole from "./components/Coursole";

const Banner = () => {
  return (
    <section className="">
      <div className="  ">
        {/* <div className=" text-3xl mobile-lg:text-4xl tablet:text-5xl laptop:text-6xl laptop-lg:text-7xl 4k:text-6xl  flex items-center gap-6 font-semibold text-dark">
          <div className=" bg-surface-primary px-8 py-4 mobile-lg:px-10 mobile-lg:py-6 tablet:px-12 tablet:py-7  laptop:px-14 laptop:py-8 laptop-lg:px-16 laptop-lg:py-9 4k:py-10 4k:px-20">
            <GiCargoCrane className=" text-6xl tablet:text-7xl laptop-lg:text-8xl  text-white" />
          </div>

          <h1>Transport & Logistics</h1>
        </div> */}
      </div>
      <Coursole />
    </section>
  );
};

export default Banner;
