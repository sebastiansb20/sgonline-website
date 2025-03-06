import React from 'react';
import '../../styles/common/footer.css';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <div className='w-full flex flex-col md:flex-row #000300 justify-between'>
        <div className='flex flex-col m-8 md:m-20'>
            <h2 className='font-bold text-white text-xl md:text-2xl font-montserrat'>Navegación</h2>
            <Link to='/'><h3 className='h2-menu-footer'>Inicio</h3></Link>
            <Link to='/portfolio'><h3 className='h2-menu-footer'>Works</h3></Link>
            <Link to='/'><h3 className='h2-menu-footer'>Skills</h3></Link>
            <Link to='/'><h3 className='h2-menu-footer'>Clients</h3></Link>
        </div>
        <div className='flex flex-col m-8 md:m-20'>
            <h2 className='font-bold text-white text-xl md:text-2xl font-montserrat'>Nosotros</h2>
            <h3 className='h2-menu-footer'>Montevideo, Uruguay</h3>
            <h3 className='h2-menu-footer'>planner@sgonline.com.uy</h3>
            <h3 className='h2-menu-footer'>+598 92 433 537</h3>
            <div className='flex flex-row ml-4 gap-3'>
                <a href='https://instagram.com/' target='_blank'><img src='/assets/images/logo-instagram.webp' className='size-12 md:grayscale hover:grayscale-0'/></a>
                <a href='https://web-whatsapp.com/' target='_blank'><img src='/assets/images/logo-whatsapp.webp' className='size-12 md:grayscale hover:grayscale-0'/></a>
        </div>
        </div>
        <div className='flex flex-row md:m-20 gap-3'>
        </div>
    </div>
  )
}
