import React from 'react';

const ModalImage = ({ image, closeModal }) => {
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
      onClick={closeModal}
    >
      <div
        className="relative bg-white p-4 rounded-md shadow-lg max-w-[90vw] max-h-[90vh] flex items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={closeModal}
          className="absolute top-2 right-2 bg-gray-800 text-white rounded-full w-8 h-8 flex items-center justify-center"
        >
          ✕
        </button>
        <img
          src={image}
          alt="Modal"
          className="w-auto h-auto max-w-[90vw] max-h-[90vh]"
        />
      </div>
    </div>
  );
};

export default ModalImage;
