import React from 'react';
import '../../styles/common/footer.css';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <div className="w-full flex flex-col">

      <div className='w-full flex flex-col md:flex-row justify-center md:gap-[12rem] border-t-2 border-gray-500 px-8 md:px-20'>
          
          <div className='flex flex-col mt-8 text-center md:text-left'>
              <h2 className='font-bold text-white text-xl md:text-2xl font-montserrat'>Navegación</h2>
              <Link to='/'><h3 className='h2-menu-footer'>Inicio</h3></Link>
              <Link to='/portfolio'><h3 className='h2-menu-footer'>Works</h3></Link>
              <Link to='/'><h3 className='h2-menu-footer'>Skills</h3></Link>
              <Link to='/'><h3 className='h2-menu-footer'>Clients</h3></Link>
          </div>

          <div className='flex flex-col mt-8 text-center md:text-left'>
              <h2 className='font-bold text-white text-xl md:text-2xl font-montserrat'>Nosotros</h2>
              <h3 className='h2-menu-footer'>Montevideo, Uruguay</h3>
              <h3 className='h2-menu-footer'>support@sgonline.uy</h3>
              <h3 className='h2-menu-footer'>+598 92 433 537</h3>
              <div className='flex flex-row justify-center md:justify-start gap-3 mt-2'>
                  <a href='https://instagram.com/santigon.psd' target='_blank'><img src='/assets/images/logo-instagram.webp' className='size-12 md:grayscale hover:grayscale-0'/></a>
                  <a href='http://wa.me/598924335377' target='_blank'><img src='/assets/images/logo-whatsapp.webp' className='size-12 md:grayscale hover:grayscale-0'/></a>
              </div>
          </div>
      </div>

      <div className='w-full flex justify-center items-center mt-4 py-4 border-t border-gray-700'>
        <p className='font-montserrat text-sm text-gray-500 text-center'>Website desarrollado por SGonline</p>
      </div>
    </div>
  );
}
