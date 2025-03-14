import React from 'react'
import { HiOutlineArrowRight } from "react-icons/hi2";
import {Link} from 'react-router-dom'
import Counter from '../../common/Counter';

const Works = () => {

    
  return (
    <div className="min-h-screen flex flex-col md:flex-row items-center justify-center md:justify-between max-w-[95%] md:max-w-[80%] mx-auto border-b-[1px] border-gray-700">
        
        <div id="left-s" className="top-0 flex flex-col md:max-h-[16rem] w-[95%] md:w-[50%] ">
            <div id="title-proyectos" className="">
                <h2 data-aos="fade-up" data-aos-duration="700" className="h2-titles">Works</h2>
            </div>
           
            <div  data-aos="fade-up" data-aos-duration="700" id="frase-skill" className=" md:w-[60%] flex items-center justify-center">
                <p className=" font-light text-[1rem] md:text-[1.2rem] text-gray-300 mt-[2rem] font-montserrat">
                    Más de 150 trabajos realizados que cumplieron con la expectativa
                    de los clientes, contribuyendo a el alcance del éxito en su rubro.
                </p>
            </div>
            <div className="flex items-center justify-center w-[100%] md:w-[60%] my-[2rem] md:my-0">
                  <div className="`inline-flex items-center justify-center mt-[1rem]
                        h-16 w-16  cursor-pointer border rounded-full p-2 border-white
                        overflow-hidden">
                          <Link to='/portfolio'>
                            <div className="animate-slide-right">
                              <HiOutlineArrowRight 
                                size={40}
                                className="text-white opacity-60"
                              />
                            </div>
                          </Link>
                        
                  </div>
              </div>
            </div>
            
            
        <div id='right-s' className='top-0 flex md:w-[50%] items-start'>
            <div data-aos="fade-up" data-aos-duration="700">
                {/* <p  className='text-gray-300 font-bold text-[8rem] md:text-[14rem] '>+150</p> */}
                <Counter />
            </div>
        </div>

    </div>
  )
}

export default Works