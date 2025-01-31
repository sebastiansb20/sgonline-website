import React from 'react'
import { ContactForm } from '../../common/ContactForm'

const ContactUs = () => {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row items-center border-b-[1px] border-gray-700 w-full px-6 md:px-12">
        
    {/* Sección Izquierda */}
    <div id="left-s" className="flex flex-col w-full md:w-[40%] text-center md:text-left mt-10 md:mt-0">
        <h2 className="font-bold text-[4rem] md:text-[5rem] text-gray-700 leading-none">
            TRABAJEMOS <br/>JUNTOS
        </h2>
        <p className="text-[1.2rem] text-gray-800 mt-5">
            Agenda una meet y cuéntanos sobre tu proyecto.
        </p>
    </div>

    {/* Formulario */}
    <div id="right-s" className="w-full md:w-[60%] mt-10 md:mt-0">
        <ContactForm />
    </div>

</div>
  )
}

export default ContactUs