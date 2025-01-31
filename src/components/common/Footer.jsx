import React from 'react'

export const Footer = () => {
  return (
    <div className='w-full flex md:flex-row #000300 justify-between'>
        <div className='flex flex-col m-20'>
            <h2 className='font-bold text-white  text-2xl'>Navegación</h2>
            <h3 className='h2-menu-footer'>Inicio</h3>
            <h3 className='h2-menu-footer'>Works</h3>
            <h3 className='h2-menu-footer'>Skills</h3>
            <h3 className='h2-menu-footer'>Clients</h3>
        </div>
        <div className='flex flex-col m-20'>
            <h2 className='font-bold text-white  text-2xl'>Nosotros</h2>
            <h3 className='h2-menu-footer'>Montevideo, Uruguay</h3>
            <h3 className='h2-menu-footer'>planner@sgonline.com.uy</h3>
            <h3 className='h2-menu-footer'>+598 92 433 537</h3>
            <div className='flex flex-row ml-4 gap-3'>
                <img src='/assets/logo-instagram.webp' className='size-12 grayscale hover:grayscale-0'/>
                <img src='/assets/logo-whatsapp.webp' className='size-12 grayscale hover:grayscale-0'/>
        </div>
        </div>
        <div className='flex flex-row m-20 gap-3'>
        </div>
    </div>
  )
}
