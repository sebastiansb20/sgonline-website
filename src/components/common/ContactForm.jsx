import React,{useState} from 'react'
import { HiOutlineArrowRight } from "react-icons/hi2";

export const ContactForm = () => {

    const [formData,setFormData] = useState({
        nameClient:'',
        company:'',
        telNumber:'',
        email:'',
        description:''
    })

    const handleChange = (e) =>{
        const {name, value} = e.target;
        setFormData({...formData, [name]:value})
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log('form enviado')
    }

  return (
    <div id="formContainer" className='flex items-center justify-center mt-20'>
        <form
            onSubmit={handleSubmit}
            className='w-full p-6 rounded-lg max-w-lg mx-auto '
        >

            <div className='mb-4 border-b-[2px] border-gray-700 hover:border-r-[2px]  hover:border-gray-700'>
                {/* <label className='block text-gray-300 text-sm font-medium mb-6' htmlFor='name'>
                    Nombre y Apellido
                </label> */}
                <input
                    type='text'
                    id='name'
                    name='name'
                    value={FormData.nameClient}
                    onChange={handleChange}
                    placeholder='Nombre completo *'
                    className='form-input'
                    required
                    />
            </div>
            <div className='mb-4 border-b-[2px] border-gray-700 hover:border-r-[2px]  hover:border-gray-700'>
                {/* <label className='block text-gray-300 text-sm font-medium mb-20' htmlFor='name'>
                    Marca o Empresa
                </label> */}
                <input
                    type='text'
                    id='company'
                    name='company'
                    value={FormData.company}
                    onChange={handleChange}
                    placeholder='Marca, empresa o idea!'
                    className='form-input '
                    />
            </div>
            <div className='mb-4 border-b-[2px] border-gray-700 hover:border-r-[2px]  hover:border-gray-700'>
                {/* <label className='block text-gray-300 text-sm font-medium mb-20' htmlFor='name'>
                    Teléfono
                </label> */}
                <input
                    type='tel'
                    id='telNumber'
                    name='telNumber'
                    value={FormData.telNumber}
                    onChange={handleChange}
                    placeholder='Número de teléfono'
                    className='form-input '
                    />
            </div>
            <div className='mb-4 border-b-[2px] border-gray-700 hover:border-r-[2px]  hover:border-gray-700'>
                {/* <label className='block text-gray-300 text-sm font-medium mb-20' htmlFor='name'>
                    Email
                </label> */}
                <input
                    type='email'
                    id='email'
                    name='email'
                    value={FormData.email}
                    onChange={handleChange}
                    placeholder='Email *'
                    className='form-input '
                    required
                    />
            </div>
            <div className="mb-4 border-b-[2px] border-gray-700 hover:border-[2px]hover:border-gray-700">
                {/* <label className="block text-gray-300 text-sm font-medium mb-2" htmlFor="descripcion">
                    Descripción Breve
                </label> */}
                <textarea
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    placeholder="Describe brevemente lo que necesitas *"
                    className="form-input w-[100%]"
                    rows="4"
                    required
                ></textarea>
            </div>

            <div>
          <button
                type="submit"
                className="`
                    w-[30%] bg-gray-300 hover:bg-gray-700 text-gray-600 font-bold py-2 px-4 rounded-lg 
                    border border-gray-700 transition duration-300
                    hover:text-gray-300
                    "
                >
                    Enviar
                </button>
            </div>
        </form>
        
    </div>
  )
}


// import React,{useState} from 'react'
// import { HiOutlineArrowRight } from "react-icons/hi2";

// export const ContactForm = () => {

//     const [formData,setFormData] = useState({
//         nameClient:'',
//         company:'',
//         telNumber:'',
//         email:'',
//         description:''
//     })

//     const handleChange = (e) =>{
//         const {name, value} = e.target;
//         setFormData({...formData, [name]:value})
//     }

//     const handleSubmit = (e) =>{
//         e.preventDefault();
//         console.log('form enviado')
//     }

//   return (
//     <div id="formContainer" className='flex items-center justify-center mt-20'>
//         <form
//             onSubmit={handleSubmit}
//             className='w-full p-6 rounded-lg max-w-lg mx-auto '
//         >

//             <div className='mb-4 border-b-[2px] border-gray-700 hover:border-r-[2px]  hover:border-gray-700'>
//                 {/* <label className='block text-gray-300 text-sm font-medium mb-6' htmlFor='name'>
//                     Nombre y Apellido
//                 </label> */}
//                 <input
//                     type='text'
//                     id='name'
//                     name='name'
//                     value={FormData.nameClient}
//                     onChange={handleChange}
//                     placeholder='Nombre completo *'
//                     className='form-input '
//                     required
//                     />
//             </div>
//             <div className='mb-4 border-b-[2px] border-gray-700 hover:border-r-[2px]  hover:border-gray-700'>
//                 {/* <label className='block text-gray-300 text-sm font-medium mb-20' htmlFor='name'>
//                     Marca o Empresa
//                 </label> */}
//                 <input
//                     type='text'
//                     id='company'
//                     name='company'
//                     value={FormData.company}
//                     onChange={handleChange}
//                     placeholder='Marca, empresa o idea!'
//                     className='form-input '
//                     />
//             </div>
//             <div className='mb-4 border-b-[2px] border-gray-700 hover:border-r-[2px]  hover:border-gray-700'>
//                 {/* <label className='block text-gray-300 text-sm font-medium mb-20' htmlFor='name'>
//                     Teléfono
//                 </label> */}
//                 <input
//                     type='tel'
//                     id='telNumber'
//                     name='telNumber'
//                     value={FormData.telNumber}
//                     onChange={handleChange}
//                     placeholder='Número de teléfono'
//                     className='form-input '
//                     />
//             </div>
//             <div className='mb-4 border-b-[2px] border-gray-700 hover:border-r-[2px]  hover:border-gray-700'>
//                 {/* <label className='block text-gray-300 text-sm font-medium mb-20' htmlFor='name'>
//                     Email
//                 </label> */}
//                 <input
//                     type='email'
//                     id='email'
//                     name='email'
//                     value={FormData.email}
//                     onChange={handleChange}
//                     placeholder='Email *'
//                     className='form-input '
//                     required
//                     />
//             </div>
//             <div className="mb-4 border-b-[2px] border-gray-700 hover:border-[2px]hover:border-gray-700">
//                 {/* <label className="block text-gray-300 text-sm font-medium mb-2" htmlFor="descripcion">
//                     Descripción Breve
//                 </label> */}
//                 <textarea
//                     id="description"
//                     name="description"
//                     value={formData.description}
//                     onChange={handleChange}
//                     placeholder="Describe brevemente lo que necesitas *"
//                     className="form-input w-[100%]"
//                     rows="4"
//                     required
//                 ></textarea>
//             </div>

//             <div>
//           <button
//                 type="submit"
//                 className="`
//                     w-[30%] bg-gray-300 hover:bg-gray-700 text-gray-600 font-bold py-2 px-4 rounded-lg 
//                     border border-gray-700 transition duration-300
//                     hover:text-gray-300
//                     "
//                 >
//                     Enviar
//                 </button>
//             </div>
//         </form>
        
//     </div>
//   )
// }
