import React from 'react'
import GrillaClients from '../../grids/GrillaClients'

const Clients = () => {
  return (
    <div className='mt-[10rem] min-h-screen flex items-center justify-center max-w-[100%] mx-auto border-b-[1px] border-gray-700 flex-col'>


        <div id="top" className="flex flex-col md:flex-row md:w-[80%] h-full justify-between items-center ">
            <div id="title-clients" className="flex">
                <h2 className="h2-titles">Clients</h2>
            </div>
            <div id="frase-clients" className="flex items-center justify-center md:w-[60%] p-4">
                <p className=" font-light text-[1rem] md:text-[1.2rem] text-gray-300 font-montserrat">
                Algunas empresas y personas que confiaron en nuestro trabajo.

                </p>
            </div>
            
        </div>

        <div id="bottom" className="flex items-center justify-center w-full h-full">
          <GrillaClients />
        </div>

        


    </div>
  )
}

export default Clients