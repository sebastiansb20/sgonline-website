import React, { useState, useEffect } from 'react';
import '../../../styles/inicio.css'

export const Skills = () => {
  const skills = ['Diseño gráfico', 'Diseño web', 'Estrategias de marketing', 'Edición de video','Eventos'];

  const skillDetails = {
    'Diseño gráfico': ['Flyers', 'Banners', 'Montajes', 'Publicidad'],
    'Diseño web': ['UI/UX', 'Sitios responsivos', 'Integraciones', 'Landing pages'],
    'Estrategias de marketing': ['SEO', 'Marketing de contenido', 'Redes sociales', 'Campañas pagadas'],
    'Edición de video': ['Animaciones', 'Corrección de color', 'Montaje', 'Postproducción'],
    'Eventos':['Fiestas','Eventos en vivo','Campañas de marketing','Videos con drone profesional']
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
    <div className="min-h-screen flex items-center  md:justify-center flex-col border-b-[1px] border-gray-700">

      {/* left-s */}
      <div id="left-s" className="top-0 my-[2rem] md:my-0 md:max-h-[16rem] w-[95%] md:w-[80%] justify-between flex flex-col md:flex-row ">
        <div id="titleskill" className="">
          <h2 className="h2-titles">Skills</h2>
        </div>
        <div id="frase-skill" className="w-[100%] flex items-center justify-center md:w-[60%]">
          <p className="font-light font-montserrat text-[1rem] md:text-[1.2rem] text-gray-300">
            Ofrecemos un enfoque único y completo para impulsar todas <br />
            las capacidades que tu marca necesita para destacarse
          </p>
        </div>
      </div>

      {/* right-s */}
      <div id="right-s" className="top-0 flex justify-between mt-[2rem] md:mt[0] md:max-h-[16rem] w-[95%] md:w-[80%] ">
        <div id="skills-list" className="">
          <ul>
            {skills.map((skill, index) => (
              <li
                key={skill}
                className={`li-item-skills cursor-pointer  hover:text-white relative ${
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
