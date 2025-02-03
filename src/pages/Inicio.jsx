import React from 'react'
import Navbar from '../components/common/Navbar'
import Hero from '../components/sections/inicio/Hero';
import {Skills} from '../components/sections/inicio/Skills';
import Works from '../components/sections/inicio/Works';
import Clients from '../components/sections/inicio/Clients';
import ContactUs from '../components/sections/inicio/ContactUs';
import {Footer}  from '../components/common/Footer';
  

const Inicio = () => {
    return (
        <div className=''>
          <div className='hero'>
            <Hero className=''/>  
          </div>
          <div className='skills'>
            <Skills />
          </div>
          <div className='proyectos'>
            <Works />
          </div>
          <div className='clients'>
            <Clients />
          </div>
          <div className='contactUs bg-gray-300'>
            <ContactUs />
          </div>
          <div className='footer'>
            <Footer />
          </div>
        </div>
      );
}

export default Inicio;