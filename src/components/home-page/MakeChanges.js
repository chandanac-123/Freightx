import { images } from "@/utility/images";
import Image from "next/image";
import React from "react";

const MakeChanges = () => {
  return (
    <div className="w-full bg-paralax h-[400px] md:h-[600px] py-6 tablet-lg:p-20">
      <div className="container  h-full flex items-end">
        <div className=" flex-col tablet:flex-row flex  tablet:gap-4">
          <Image
            src={images.hover_icon}
            width={0}
            height={0}
            className=" w-24 "
            alt="icon"
          />
          <div
            className=" desktop:text-4xl laptop:text-5xl text-3xl
         4k:text-5xl font-semibold text-white "
          >
            <p>Transform The</p>
            <p>Transport Experience</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MakeChanges;
