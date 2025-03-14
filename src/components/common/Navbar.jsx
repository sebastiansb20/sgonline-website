 import React, {useState} from 'react'
 import {AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
 import { MdOutlineCameraAlt } from "react-icons/md";
 import '../../styles/common/menu.css';
 import { Link } from 'react-router-dom';
 const Navbar = () => {

    const[nav, setNav] = useState(false);

    const handleNav = () =>{
        setNav(!nav);
    }



   return (
    
     <div className=' flex justify-between items-center h-24  text-white max-w-auto mx-auto px-12'>
        <div>
            {/* <h1 className='w-full text-3xl font-bold text-[#00df9a]'>
                SGONLINE
            </h1> */}
            <img src='/assets/images/logo-sgonline.png' alt='Logo SGonline' className='size-20'/>
        </div>
        

        <div onClick={handleNav} className='z-50'>
            {nav ? 
            <div className="">
                <AiOutlineClose size={50} className=' opacity-70'/>
            </div>
             : <AiOutlineMenu  className='opacity-70' size={50}/> }
            
        </div>

        {/* menu */}
        <div  id='menus' className={nav ? ' fixed left-0 z-40 top-0 w-full h-full bg-black  ease-in-out duration-500 flex items-center justify-center' : 'fixed left-[-100%]'}>
            
            <ul className='  text-center'>
                <div className="flex items-center justify-between p-2 cursor-pointer">
                    <Link to='/'><li className='nav-item font-montserrat'>Inicio</li> </Link>
                    {/* <MdOutlineCameraAlt size={25}/> */}
                </div>
                <div className="flex items-center justify-between p-2 cursor-pointer">
                    <Link to='/portfolio'><li className='nav-item font-montserrat'>Proyectos</li></Link>
                    {/* <MdOutlineCameraAlt size={25}/> */}
                </div>
                <div className="flex items-center justify-between p-2 cursor-pointer">
                    <Link to='/nosotros'><li className='nav-item font-montserrat'>Nosotros</li></Link>
                    {/* <MdOutlineCameraAlt size={25}/> */}
                </div>
                <div className="flex items-center justify-between p-2 cursor-pointer">
                <li className='nav-item font-montserrat'>Contacto</li>
                    {/* <MdOutlineCameraAlt size={25}/> */}
                </div>
            </ul>
        </div>
     </div>
   )
 }
 
 export default Navbar

//  import React, { useState } from "react";
// import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

// const Navbar = () => {
//   const [nav, setNav] = useState(false);

//   const handleNav = () => {
//     setNav(!nav);
//   };

//   return (
//     <div className="flex justify-between items-center h-24 text-white max-w-auto mx-auto px-12">
//       {/* Logo */}
//       <div>
//         <h1 className="w-full text-3xl font-bold text-[#00df9a]">SGONLINE</h1>
//       </div>

//       {/* Botón de menú */}
//       <div onClick={handleNav} className="cursor-pointer z-50">
//         {nav ? (
//           <AiOutlineClose size={50} className="mr-4 opacity-70" />
//         ) : (
//           <AiOutlineMenu size={50} className="opacity-70" />
//         )}
//       </div>

//       {/* Menú */}
//       <div
//         className={`${
//           nav
//             ? "fixed top-0 left-0 w-full h-full bg-black z-40 flex items-center justify-center ease-in-out duration-500"
//             : "fixed left-[-100%]"
//         }`}
//       >
//         <ul className="uppercase p-4 text-center space-y-6">
//           <li className="p-4 text-5xl font-sans cursor-pointer hover:text-gray-400">
//             Inicio
//           </li>
//           <li className="p-4 text-5xl font-sans cursor-pointer hover:text-gray-400">
//             Proyectos
//           </li>
//           <li className="p-4 text-5xl font-sans cursor-pointer hover:text-gray-400">
//             Nosotros
//           </li>
//           <li className="p-4 text-5xl font-sans cursor-pointer hover:text-gray-400">
//             Contacto
//           </li>
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Navbar;
