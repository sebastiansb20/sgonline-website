import React from 'react'
import '../../src/styles/portfolio.css'
import GrillaPorfolio from '../components/grids/GrillaPortfolio'
import {portfolioImages} from '../components/common/portfolioImages'
import {Footer}  from '../components/common/Footer';

export const Portfolio = () => {
  return (
    <div className="div">
      <div className=' flex items-center justify-center flex-col '>
        <h2 className='font-bold text-[5rem] text-gray-400 font-montserrat mb-10'>Portfolio</h2>

        <div className='flex items-center justify-center flex-col w-full'>
          <div className='w-full overflow-x-auto whitespace-nowrap scrollbar-hide bg-gray-300 h-20 flex items-center justify-start px-4 gap-5 md:justify-center'>
              <p className='p-nav'>DISEÑO GRÁFICO</p>
              <p className='p-nav'>FOTOGRAFÍA</p>
              <p className='p-nav  font-bold italic '>MARKETING DIGITAL</p>
              <p className='p-nav'>COBERTURAS</p>
              <p className='p-nav'>AUDIOVISUAL</p>
              <p className='p-nav'>COBERTURA AÉREA</p>
          </div>
        </div>
      </div>

      {/* EL FONDITO GOURMET */}
      <div className="flex flex-col bg-gray-300 md:py-10 border border-b-[1px] border-gray-400">
        <div id='cliente-servicio' className='flex items-center justify-between'>
          <h3 className='h3-empresa'>El Fondito Gourmet</h3>
          <p className='p-servicio-empresa'>Diseño Gráfico - Coberturas - Audiovisual</p>
        </div>
        
        <div className='flex items-center justify-center flex-col '>
          <GrillaPorfolio images={portfolioImages.fondito}/>
        </div>
      </div>

      {/* EAT FULL */}
      <div className="flex flex-col bg-gray-300  py-10 border border-b-[1px] border-gray-400">
        <div id='cliente-servicio' className='flex items-center justify-between'>
          <h3 className='h3-empresa'>Eat Full</h3>
          <p className='p-servicio-empresa'>Community Management - Coberturas - Diseño Gráfico - Audiovisual</p>
        </div>
        
        <div className='flex items-center justify-center flex-col '>
          <GrillaPorfolio images={portfolioImages.eatfull}/>
        </div>
      </div>


      {/* AHIVA */}
      <div className="flex flex-col bg-gray-300  py-10 border border-b-[1px] border-gray-400">
        <div id='cliente-servicio' className='flex items-center justify-between'>
          <h3 className='h3-empresa'>Ahí Va</h3>
          <p className='p-servicio-empresa'>Community Management - Coberturas - Diseño Gráfico</p>
        </div>
        
        <div className='flex items-center justify-center flex-col '>
          <GrillaPorfolio images={portfolioImages.ahiva}/>
        </div>
      </div>

      
      
    <div className='footer'>
      <Footer />
    </div>
    </div>
    
  )
}
