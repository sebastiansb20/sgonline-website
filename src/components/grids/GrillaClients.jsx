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
    "/assets/images/logos-clientes/logo-5050-armando-castaingdebat.png",
    "/assets/images/logos-clientes/logo-impacto.png",
    "/assets/images/logos-clientes/logo-kas.png",
    "/assets/images/logos-clientes/logo-newerproducciones.png",
    "/assets/images/logos-clientes/logo-95609.png",
  ];

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 p-4 max-w-screen-xl justify-items-center grid-auto-flow-dense">
        {logos.map((logo, index) => (
          <div
            key={index}
            className="w-full h-60 flex items-center justify-center rounded-md overflow-hidden  "
            style={{
              animationDelay: `${index * 0.3}s`,
            }}
          >
            <img
              src={logo}
              alt={`logo-${index}`}
              className="object-contain w-[80%]  filter transition-transform duration-500 hover:scale-110 "
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Grid;

//