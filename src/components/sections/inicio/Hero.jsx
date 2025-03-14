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
      <div className="w-full h-auto block md:hidden">
        <video autoPlay loop muted playsInline className="">
            <source src='/assets/videos/sgonline-mobile.mp4' type="video/mp4" />
            Tu navegador no soporta el video.
          </video>
      </div>
      <div className="flex hidden md:block ">
        <video autoPlay loop muted playsInline className="w-full h-auto">
            <source src='/assets/videos/sgonline-desktop.mp4' type="video/mp4" />
            Tu navegador no soporta el video.
          </video>
      </div>


    
    </div>
  );
};
// Creemos en tu marca tanto como en el poder de transformarla.
export default Hero;

