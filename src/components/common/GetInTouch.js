import { images } from "@/utility/images";
import Image from "next/image";
import React from "react";

const GetInTouch = () => {
  return (
    <div className="w-full  my-6">
      <div className="items-center flex-col md:flex-row flex gap-12">
        <div className="flex-1 w-full">
          <Image
            className="w-full h-full object-cover"
            src={images.ship}
            width={0}
            height={0}
            alt="get in touch"
          />
        </div>

        <div className="flex-1 w-full px-4 md:px-24">
            <h1 className="text-4xl mb-6 ">
            Get in touch

            </h1>
          <form className="flex flex-col gap-6">
            <input
              type="text"
              placeholder="Name"
              className="border  p-3 w-full"
            />
            <input
              type="email"
              placeholder="Email"
              className="border  p-3 w-full"
            />
            <textarea
              placeholder="Message"
              className="border  p-3 resize-none w-full"
            ></textarea>
            <button className="text-white bg-surface-primary p-3 w-full">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
