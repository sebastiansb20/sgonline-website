import React, { useState, useEffect } from 'react';

export const Skills = () => {
  const skills = ['Diseño gráfico', 'Diseño web', 'Estrategias de marketing', 'Edición de video'];

  const skillDetails = {
    'Diseño gráfico': ['Flyers', 'Banners', 'Montajes', 'Publicidad'],
    'Diseño web': ['UI/UX', 'Sitios responsivos', 'Integraciones', 'Landing pages'],
    'Estrategias de marketing': ['SEO', 'Marketing de contenido', 'Redes sociales', 'Campañas pagadas'],
    'Edición de video': ['Animaciones', 'Corrección de color', 'Montaje', 'Postproducción'],
  };

  const [skillActiva, setSkillActiva] = useState(skills[0]);
  const [activeIndex, setActiveIndex] = useState(0);

  
  useEffect(() => {
    const interval = setInterval(() => {
      
      setActiveIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % skills.length; 
        setSkillActiva(skills[nextIndex]); 
        return nextIndex;
      });
    }, 4000); 

    return () => clearInterval(interval); 
  }, [skills]);

  return (
    <div className="min-h-screen flex items-center justify-center flex-col border-b-[1px] border-gray-700">

      {/* left-s */}
      <div id="left-s" className="top-0 flex max-h-[16rem] w-[80%] justify-between ">
        <div id="titleskill" className="">
          <h2 className="font-bold text-[8rem] text-gray-400">Skills</h2>
        </div>
        <div id="frase-skill" className="w-[60%] flex items-center justify-center">
          <p className=" font-light text-[1.2rem] text-gray-300">
            Ofrecemos un enfoque único y completo para impulsar todas <br />
            las capacidades que tu marca necesita para destacarse
          </p>
        </div>
      </div>

      {/* right-s */}
      <div id="right-s" className="top-0 flex max-h-[16rem] w-[80%] justify-between">
        <div id="skills-list" className="">
          <ul>
            {skills.map((skill, index) => (
              <li
                key={skill}
                className={`li-item-skills cursor-pointer hover:text-white relative ${
                  index === activeIndex ? 'text-white' : 'text-gray-300'
                }`}
                onMouseEnter={() => {
                  setSkillActiva(skill); 
                  setActiveIndex(index); 
                }}
              >
                {skill}
                {/* "barra de carga" */}
                {index === activeIndex && (
                  <div
                    className="absolute bottom-0 left-0 h-1 bg-white"
                    style={{
                      animation: 'load 4s linear forwards',
                    }}
                  ></div>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* skill detalles de activa */}
        <div className="flex flex-col items-start space-y-4 w-[50%] ">
          <ul>
            {skillDetails[skillActiva].map((detail, index) => (
              <li key={index} className="li-item-skills-det text-gray-300">
                {detail}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <style>
        {`
          @keyframes load {
            from {
              width: 0;
            }
            to {
              width: 100%;
            }
          }
        `}
      </style>
    </div>
  );
};
