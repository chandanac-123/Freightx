"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image"; // Make sure you have Next.js installed
import { images } from "@/utility/images";

const AboutCoursole = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const image = [
    {
      id: 1,
      component: (
        <div className="w-full flex items-end h-full p-12 tablet-lg:p-36 relative container">
          <Image
            src={images.banner_1}
            layout="fill"
            objectFit="cover"
            className="w-full h-full absolute top-0 right-0"
            loading="lazy"
          />
          <p className="text-4xl tablet:text-6xl max-w-[700px] font-medium relative z-10 text-white">
            Lorem ipsum dolor sit amet, consectetur
          </p>
        </div>
      ),
      btn:'Air Frieght'
    },
    {
      id: 2,
      component: (
        <div className="w-full flex items-end h-full p-12 tablet-lg:p-36    relative container">
          <Image
            src={images.banner_2}
            layout="fill"
            objectFit="cover"
            className="w-full h-full absolute top-0 right-0"
            loading="lazy"
          />
          <p className=" text-4xl tablet:text-6xl max-w-[700px] font-medium relative z-10 text-white">
            Lorem ipsum dolor sit amet, consectetur
          </p>
        </div>
      ),
      btn:'Ocean Frieght'

    },
    {
      id: 3,
      component: (
        <div className="w-full flex items-end h-full p-12 tablet-lg:p-36  relative container">
          <Image
            src={images.banner_3}
            layout="fill"
            objectFit="cover"
            className="w-full h-full absolute top-0 right-0"
            loading="lazy"
          />
          <p className="text-4xl tablet:text-6xlmax-w-[700px] font-medium relative z-10 text-white">
            Lorem ipsum dolor sit amet, consectetur
          </p>
        </div>
      ),
      btn:'Road Transport'

    },
   
  ];

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const autoSlide = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === image.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(autoSlide);
  }, [image.length]);

  return (
    <div className="relative w-full h-[70vh] overflow-hidden">
      {image.map((item, index) => (
        <div
          key={item.id}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-700 ease-in-out ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          {item.component}
        </div>
      ))}

      <div className="absolute bottom-4 right-52 hidden  transform  tablet-lg:flex space-x-5">
        {image.map((item, index) => (

          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-[100px] h-[100px] border flex p-3 items-end   ${
              index === currentIndex ? "backdrop-blur-lg" : " backdrop-blur-0"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          >
               <p className=" text-white text-left font-medium">
                {item?.btn}
               </p>
          </button>
        ))}
      </div>
    </div>
  );
};

export default AboutCoursole;
