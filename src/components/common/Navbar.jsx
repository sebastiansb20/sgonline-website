import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";
import "../../styles/common/menu.css";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex items-center justify-between h-24 text-white max-w-auto mx-auto px-2 md:px-12">
      
      <div className="flex items-center w-auto md:w-auto justify-between">
        
        <div className="" onClick={handleNav}>
          <AiOutlineMenu size={30} className="opacity-70" />
        </div>
        
      </div>

      <div className="flex-grow flex justify-center ml-8">
          <Link to="/">
            <img
              src="/assets/images/logo-sgonline.png"
              alt="Logo SGonline"
              className="size-20 md:size-30"
            />
          </Link>
        </div>

        <div className="md:hidden">
          <a
            href="#contactUs"
            className="border-[1px] rounded-lg p-2 text-[.75rem] border-gray-300 hover:bg-white hover:text-black font-montserrat"
          >
            CONTÁCTANOS
          </a>
        </div>

      <div className="hidden md:block">
        <a
          href="#contactUs"
          className="border-[1px] rounded-lg p-2 border-gray-300 hover:bg-white hover:text-black font-montserrat"
        >
          CONTÁCTANOS
        </a>
      </div>

      <div
        className={`fixed left-0 top-0 w-full h-full bg-black transition-transform duration-500 ${
          nav ? "translate-x-0 z-40" : "-translate-x-full"
        }`}
      >
        <div className="absolute top-5 right-5 z-50 cursor-pointer" onClick={handleNav}>
          <AiOutlineClose size={40} className="opacity-70" />
        </div>

        <ul className="flex flex-col items-center justify-center h-full text-center space-y-6">
          <li className="nav-item font-montserrat" onClick={handleNav}>
            <Link to="/">Inicio</Link>
          </li>
          <li className="nav-item font-montserrat" onClick={handleNav}>
            <Link to="/portfolio">Proyectos</Link>
          </li>
          <li className="nav-item font-montserrat" onClick={handleNav}>
            <Link to="/nosotros">Nosotros</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
