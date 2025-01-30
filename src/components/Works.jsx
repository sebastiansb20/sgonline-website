import React from 'react'
import { HiOutlineArrowRight } from "react-icons/hi2";

const Works = () => {

    
  return (
    <div className="min-h-screen flex items-center justify-between max-w-[80%] mx-auto border-b-[1px] border-gray-700">
        
        <div id="left-s" className="top-0 flex max-h-[16rem] w-[50%]  flex-col">
            <div id="title-proyectos" className="">
                <h2 className="font-bold text-[8rem] text-gray-400">Works</h2>
            </div>
            <div id="frase-skill" className="w-[60%] flex items-center justify-center">
                <p className=" font-light text-[1.2rem] text-gray-300 mt-[2rem]">
                    Más de 150 trabajos realizados que cumplieron con la expectativa
                    de los clientes, contribuyendo a el alcance del éxito en su rubro.
                </p>
            </div>
            <div className="flex items-center justify-center w-[60%]">
                <div className="`inline-flex items-center justify-center mt-[1rem]
                      h-16 w-16  cursor-pointer border rounded-full p-2 border-white
                      overflow-hidden">
                      <div className="animate-slide-right">
                        <HiOutlineArrowRight 
                          size={40}
                          className="text-white opacity-60"
                        />
                      </div>
                </div>
            </div>
        </div>
        <div id='right-s' className='top-0 flex max-h-[16rem] w-[50%]'>
            <div>
                <p className='text-gray-300 font-bold text-[14rem] '>+150</p>
            </div>
        </div>

    </div>
  )
}

export default Works