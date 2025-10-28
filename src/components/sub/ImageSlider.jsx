import React, { useState, useEffect } from 'react';
import GradientText from './GradientText';

export default function ImageSlider({ data }) {
  const [current, setCurrent] = useState(0);
  const images = data.URLs.map((url) => url.split(' ').join('\\'));

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  // Auto slide every 3 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="flex flex-col justify-center items-center mx-auto w-full px-4">
      <GradientText>
        <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl mb-4">
          {data.Name}
        </h1>
      </GradientText>

      <div className="relative w-full max-w-xl overflow-hidden rounded-lg shadow-lg">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`${data.Name} slide ${index + 1}`}
              className="w-full flex-shrink-0 object-cover"
            />
          ))}
        </div>

        {/* Prev Button */}
        <button
          onClick={prevSlide}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-red-600/50 text-white px-3 py-2 rounded-full hover:bg-red-700 md:px-4 md:py-3"
        >
          ❮
        </button>

        {/* Next Button */}
        <button
          onClick={nextSlide}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-red-600/50 text-white px-3 py-2 rounded-full hover:bg-red-700 md:px-4 md:py-3"
        >
          ❯
        </button>
      </div>

      <p className="text-base sm:text-lg md:text-xl mt-5 max-w-screen-md text-center">
        {data.Description}
      </p>
    </div>
  );
}
