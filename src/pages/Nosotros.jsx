import React from 'react'

const Nosotros = () => {

    
  return (
    <div className="min-h-screen flex justify-between max-w-[80%] mx-auto mt-10">
        
        <div id="left-s" className="top-0 flex w-[50%]  flex-col ">
            
            <h2 className="font-bold font-montserrat text-[8rem] text-gray-400">SGonline</h2>
            
            <div id="frase-skill" className="w-full flex flex-col items-center justify-center">
                <p className=" font-light font-montserrat text-[1.2rem] text-gray-300 mt-[2rem]">
                    <span className='font-bold'>Desde 2016 </span> comenzando como freelancer hasta la actualidad con <span className='font-bold'>más de 15 empresas confiando en nuestro trabajo</span>,
                    creemos en un futuro digital donde la presencia de las empresas no debe ser una opción.<br/>
                    Por eso nos hemos capacitado para dar un servicio acorde al momento tecnológico en cuál nos encontramos,
                    cumpliendo con excelencia las solicitudes de los profesionales y empresas que han trabajado con nosotros estos
                    años. 
                </p>
                <p className=" font-light font-montserrat text-[1.2rem] text-gray-300 mt-[2rem]">
                    Contamos con un equipo multidisciplinario capacitado para hacer realidad lo que cada cliente necesita, <span className='font-bold'>pero también confiamos
                    en la capacidad e imaginación de cada uno de ellos</span>, que sin ningún lugar a dudas es una parte fundamental de que nuestro trabajo sea el esperado.
                    Teniendo en cuenta esto, trabajemos juntos y sé parte del proceso!
                </p>
            </div>
            
        </div>
        <div>
          <img src='/assets/images/nosotros.jpg' alt='sgonline' className='size-[75%] ml-20 mt-10 transition-transform duration-500 hover:scale-110'/>
        </div>
        

    </div>
  )
}

export default Nosotros