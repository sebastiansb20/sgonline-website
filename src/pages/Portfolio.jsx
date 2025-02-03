import React from 'react'
import '../../src/styles/portfolio.css'
import GrillaPorfolio from '../components/grids/GrillaPortfolio'
import {portfolioImages} from '../components/common/portfolioImages'

export const Portfolio = () => {
  return (
    <div className="div">
      <div className=' flex items-center justify-center flex-col '>
        <h2 className='font-bold text-[5rem] text-gray-400 font-montserrat'>Portfolio</h2>

        <div className='flex items-center justify-center flex-col w-full'>
          <div className='flex items-center justify-center bg-gray-300 w-full h-20 gap-5'>
              <p className='p-nav'>DISEÑO GRÁFICO</p>
              <p className='p-nav'>FOTOGRAFÍA</p>
              <p className='p-nav'>MARKETING DIGITAL</p>
              <p className='p-nav'>COBERTURAS</p>
              <p className='p-nav'>AUDIOVISUAL</p>
              <p className='p-nav'>VIDEO DRONE</p>
          </div>
        </div>
      </div>

      {/* EL FONDITO GOURMET */}
      <div className="flex flex-col bg-gray-300 py-10 border border-b-[1px] border-gray-400">
        <div id='cliente-servicio' className='flex items-center justify-between'>
          <h3 className='font-bold text-[2rem] text-gray-800 border-b-2 border-gray-800 w-auto py-3 m-10 font-montserrat'>El Fondito Gourmet</h3>
          <p className='text-gray-800 border-b-2 border-gray-800 py-3 m-10 text-xl font-montserrat'>Diseño Gráfico - Coberturas - Audiovisual</p>
        </div>
        
        <div className='flex items-center justify-center flex-col '>
          <GrillaPorfolio images={portfolioImages.fondito}/>
        </div>
      </div>

      {/* EAT FULL */}
      <div className="flex flex-col bg-gray-300  py-10 border border-b-[1px] border-gray-400">
        <div id='cliente-servicio' className='flex items-center justify-between'>
          <h3 className='font-bold text-[2rem] text-gray-800 border-b-2 border-gray-800 w-auto py-3 m-10 font-montserrat'>Eat Full</h3>
          <p className='text-gray-800 border-b-2 border-gray-800 py-3 m-10 text-xl font-montserrat'>Community Management - Coberturas - Diseño Gráfico - Audiovisual</p>
        </div>
        
        <div className='flex items-center justify-center flex-col '>
          <GrillaPorfolio images={portfolioImages.eatfull}/>
        </div>
      </div>


      {/* AHIVA */}
      <div className="flex flex-col bg-gray-300  py-10 border border-b-[1px] border-gray-400">
        <div id='cliente-servicio' className='flex items-center justify-between'>
          <h3 className='font-bold text-[2rem] text-gray-800 border-b-2 border-gray-800 w-auto py-3 m-10 font-montserrat'>Ahí Va</h3>
          <p className='text-gray-800 border-b-2 border-gray-800 py-3 m-10 text-xl font-montserrat'>Community Management - Coberturas - Diseño Gráfico</p>
        </div>
        
        <div className='flex items-center justify-center flex-col '>
          <GrillaPorfolio images={portfolioImages.ahiva}/>
        </div>
      </div>

      
      

    </div>
    
  )
}
