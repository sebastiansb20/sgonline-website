

import React from "react";
import { HiOutlineArrowDown } from "react-icons/hi2";

const Hero = () => {
 
  const handleScroll = () => {
    const nextSection = document.getElementById("next-section");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" }); 
    }
  };

  return (
    <div className="min-h-screen">
      
      <div className="flex flex-col items-center justify-center h-screen mt-[-96px]">
        <div className="flex flex-col items-center justify-center">
          <h1 className="w-full font-bold text-8xl text-white py-5">SGonline</h1>
          <h3 className="w-full font-light text-3xl text-white opacity-60">
            IMPULSAMOS TU MARCA
          </h3>
        </div>

        {/* flecha animada */}
        <div
          className="relative flex flex-col items-center justify-center mt-[150px] h-16 overflow-hidden cursor-pointer border rounded-full p-2 box-border border-white"
          onClick={handleScroll}
        >
          <div className="animate-slide-down">
            <HiOutlineArrowDown
              size={40}
              className="text-white opacity-60"
            />
          </div>
        </div>
      </div>

      {/* Siguiente sección */}
      <div
        className="h-screen flex items-center justify-center bg-gray-800"
      >
        <h2 className="text-5xl font-bold text-white">Bienvenido a la siguiente sección</h2>
      </div>
    </div>
  );
};
// Creemos en tu marca tanto como en el poder de transformarla.
export default Hero;

