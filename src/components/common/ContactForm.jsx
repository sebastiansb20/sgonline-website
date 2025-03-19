import React,{useState} from 'react'
import { HiOutlineArrowRight } from "react-icons/hi2";
import '../../styles/common/formContact.css'
import emailjs from '@emailjs/browser';

export const ContactForm = () => {

    const serviceID = 'service_fszq9hd'; // Reemplaza con tu Service ID
    const templateID = 'template_6gbf96l'; // Reemplaza con tu Template ID
    const userID = 'mLtVN-AVLXJnxB9o_'; // Reemplaza con tu User ID

    const [formData,setFormData] = useState({
        nameC:'',
        company:'',
        telNumber:'',
        email:'',
        message:''
    })

    const handleChange = (e) =>{
        const {name, value} = e.target;
        setFormData({...formData, [name]:value})
    }

    const handleSubmit = (e) =>{
        e.preventDefault();


    
        emailjs.send(serviceID, templateID, {
            nameClient: formData.nameC,
            company: formData.company || 'Empresa no especificada',
            telephone: formData.telNumber || 'Teléfono no especificado',
            email: formData.email,
            message: formData.message
        }, userID)
        .then((response) => {
            console.log('Correo enviado con éxito!', response.status, response.text);
            alert('Tu mensaje ha sido enviado correctamente');
            setFormData({
                nameClient: '',
                company: '',
                telNumber: '',
                email: '',
                description: ''
            });
        })
        .catch((error) => {
            console.log('Error al enviar el correo:', error);
            alert('Hubo un error al enviar el mensaje, intenta nuevamente.');
        });
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
                    name='nameC'
                    value={FormData.nameC}
                    onChange={handleChange}
                    placeholder='Nombre completo *'
                    className='form-input font-montserrat'
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
                    className='form-input font-montserrat'
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
                    className='form-input font-montserrat'
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
                    className='form-input font-montserrat'
                    required
                    />
            </div>
            <div className="mb-4 border-b-[2px] border-gray-700 hover:border-[2px]hover:border-gray-700">
                {/* <label className="block text-gray-300 text-sm font-medium mb-2" htmlFor="descripcion">
                    Descripción Breve
                </label> */}
                <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Describe brevemente lo que necesitas *"
                    className="form-input w-[100%] font-montserrat"
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
                    hover:text-gray-300 font-montserrat
                    "
                >
                    Enviar
                </button>
            </div>
        </form>
        
    </div>
  )
}