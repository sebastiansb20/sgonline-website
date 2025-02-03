import React, {useState} from 'react';
import ModalImage from '../common/ModalImage';

const Grid = ({images}) => {

  const[isOpen,setIsOpen] = useState(false);
  const[selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image); 
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false); 
    setSelectedImage(null); 
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-1 max-w-screen-xl">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative w-full h-auto flex items-center justify-center rounded-md overflow-hidden group cursor-pointer "
            onClick={() => openModal(image)}
          >
            <img
              src={image}
              alt={`image-${index}`}
              className="object-contain w-[95%] h-[95%] transition-transform duration-500 group-hover:scale-110 "
            />
            {/* <div className='absolute inset-0 bg-gray-800 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
              <p className='text-white text-lg font-bold'>Ahi Va Diseño Grafico</p>
            </div> */}
          </div>
        ))}
      </div>
      {isOpen && (
        <ModalImage image={selectedImage} closeModal={closeModal} />
      )}
    </div>
  );
};

export default Grid;

//