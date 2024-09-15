import { images } from "@/utility/images";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Info = () => {
  return (
    <div className=" py-16  tablet:py-16 flex  flex-col-reverse tablet-lg:flex-row items-center gap-6">
      <div className="tablet-lg:w-1/2 px-6  tablet-lg:pl-20 laptop-lg:pl-32 desktop:pl-40 4k:pl-56">
        <h1 className=" text-4xl laptop:text-5xl font-semibold mb-6 text-dark max-w-[500px] ">
          Fast Delivery And Secure Packages
        </h1>
        <div className="flex gap-6">
          <p className="text-dark tablet-lg:max-w-[500px]">
            Lorem ipsum dolor sit amet, id has nihil discere vocibus. No novum
            cu laborpro batus cum, te utamur scripta .
          </p>
        </div>
        <Link
          className="px-7 py-2.5 text-sm bg-text-primary text-white rounded-full inline-block mt-4"
          href={"#"}
        >
          See More
        </Link>
      </div>

      <div className="  tablet-lg:w-1/2 ">
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
