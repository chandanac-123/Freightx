'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image'; // Make sure you have Next.js installed
import { images } from '@/utility/images';

const Coursole = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    {
      id: 1,
      img: images.banner_2,
      title: 'Freight X Shipping ',
      description:
        'Reliable freight forwarding and transportation services worldwide.',
    },
    {
      id: 2,
      img: images.banner_1,
      title: 'Ocean Freight Experts',
      description:
        'Efficient and secure ocean transportation across international markets.',
    },
    {
      id: 3,
      img: images.banner_4,
      title: 'Air Freight Services',
      description:
        'Fast, dependable, and cost-effective air cargo solutions for urgent shipments.',
    },
  ];

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const autoSlide = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === slides.length - 1 ? 0 : prev + 1
      );
    }, 15000); // 15 seconds

    return () => clearInterval(autoSlide);
  }, [slides.length]);

  return (
    <div className="relative w-full h-[70vh] overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1500 ease-in-out ${
            index === currentIndex
              ? 'opacity-100 z-10'
              : 'opacity-0 z-0'
          }`}
        >
          {/* Background Image */}
          <Image
            src={slide.img}
            alt={slide.title}
            fill
            sizes="80vw"
            priority={index === 0}
            className={`object-cover  transition-transform ease-linear ${
              index === currentIndex
                ? 'scale-110 duration-[20000ms]'
                : 'scale-100 duration-0'
            }`}
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/70 z-10" />
        </div>
      ))}

      {/* Content */}
      <div
        key={currentIndex}
        className="absolute z-20 top-1/2 left-6 md:left-16 -translate-y-1/2 text-white max-w-3xl animate-fadeIn"
      >
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
          {slides[currentIndex].title}
        </h1>

        <p className="mt-4 text-base sm:text-lg md:text-xl max-w-2xl text-white">
          {slides[currentIndex].description}
        </p>
      </div>

      {/* Dots */}
      <div className="absolute z-30 bottom-6 left-1/2 md:left-16 transform -translate-x-1/2 md:translate-x-0 flex gap-4">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? 'bg-white scale-125'
                : 'border border-white hover:bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Coursole;
