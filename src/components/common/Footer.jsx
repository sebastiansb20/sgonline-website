import React from 'react';
import '../../styles/common/footer.css';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <div className="w-full flex flex-col">

      <div className='w-full flex flex-col md:flex-row items-center border-t-2 border-gray-500 px-8 py-16 md:px-20'>
          
          <div className='flex flex-col mt-8 text-center md:text-left w-[40%]'>
              <h2 className='font-bold text-white text-xl md:text-2xl font-montserrat'>Navegación</h2>
              <a href='#hero' to='/'><h3 className='h2-menu-footer'>Inicio</h3></a>
              <a href='#skills'><h3 className='h2-menu-footer'>Skills</h3></a>
              <a href='#works'><h3 className='h2-menu-footer'>Works</h3></a>
              <a href='#clients'><h3 className='h2-menu-footer'>Clients</h3></a>
          </div>

          <div className='flex flex-col mt-8 text-center md:text-left w-[60%]'>
              <h2 className='font-bold text-white text-xl md:text-2xl font-montserrat'>Nosotros</h2>
              <a> <h3 className='h2-menu-footer'>Montevideo, Uruguay</h3> </a>
              <a href="mailto:support@sgonline.uy" target='_blank'><h3 className='h2-menu-footer'>support@sgonline.uy</h3></a>
              <a><h3 className='h2-menu-footer'>+598 92 433 537</h3></a>
              <div className='flex flex-row justify-center md:justify-start gap-3 mt-2'>
                  <a href='https://instagram.com/santigon.psd' target='_blank'><img src='/assets/images/logo-instagram.webp' className='size-12 md:grayscale hover:grayscale-0'/></a>
                  <a href='http://wa.me/598924335377' target='_blank'><img src='/assets/images/logo-whatsapp.webp' className='size-12 md:grayscale hover:grayscale-0'/></a>
              </div>
          </div>
      </div>

      <div className='w-full flex justify-center items-center mt-4 py-4 border-t border-gray-700'>
        <p className='font-montserrat text-sm text-gray-500 text-center'>Website desarrollado por <span className='font-montserrat font-extrabold'>SGonline</span> </p> <img src='/assets/images/logo-sgonline.png' className='size-10'/>
      </div>
    </div>
  );
}
