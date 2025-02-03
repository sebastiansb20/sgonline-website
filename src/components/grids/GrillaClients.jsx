import React from 'react';

const Grid = () => {
  const logos = [
    "/assets/images/logos-clientes/logo-ahiva.png",
    "/assets/images/logos-clientes/logo-casacalma.png",
    "/assets/images/logos-clientes/logo-citef.png",
    "/assets/images/logos-clientes/logo-eatfull.png",
    "/assets/images/logos-clientes/logo-elrincon.png",
    "/assets/images/logos-clientes/logo-fitzone.png",
    "/assets/images/logos-clientes/logo-juntadepartamental.png",
    "/assets/images/logos-clientes/logo-lauraestilista.png",
    "/assets/images/logos-clientes/logo-PaseoTrinidad.png",
    "/assets/images/logos-clientes/logo-podologamelina.png",
  ];

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-1 p-4 max-w-screen-xl">
        {logos.map((logo, index) => (
          <div
            key={index}
            className="w-full h-60 flex items-center justify-center rounded-md overflow-hidden animate-fadeInColor "
            style={{
              animationDelay: `${index * 0.3}s`,
            }}
          >
            <img
              src={logo}
              alt={`logo-${index}`}
              className="object-contain w-[90%] h-[90%] transition duration-300 filter grayscale hover:grayscale-0 "
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Grid;

//