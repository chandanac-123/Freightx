'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image'; // Make sure you have Next.js installed
import { images } from '@/utility/images';

const Coursole = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const image = [
    { img: images.banner_1, id: 1 },
    { img: images.banner_2, id: 2 },
    { img: images.banner_3, id: 3 },
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
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image
            src={item.img}
            alt={`Banner ${item.id}`}
            layout="fill"
            objectFit="cover"
            className="w-full h-full"
            loading="lazy"
          />
        </div>
      ))}

      <div className="absolute bottom-4 left-1/2 tablet:left-24 transform -translate-x-1/2 flex space-x-5">
        {image.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2.5 h-2.5 rounded-full ${
              index === currentIndex ? 'bg-white' : 'border border-white'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Coursole;
