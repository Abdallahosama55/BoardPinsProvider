import React from "react";
import { IoClose } from "react-icons/io5";

const Modal = ({ isOpen, onClose, title, children,smallModal ,className }) => {
console.log(smallModal)
    if (!isOpen) return null;

  return (
    <div className={`fixed top-0 left-0 w-full h-full flex items-center  justify-center bg-gray-800 bg-opacity-50 z-50`}>
      <div
        className={`bg-white p-8 rounded-lg shadow-lg   ${smallModal ? 'min-h-[40%] overflow-y-hidden' :'min-h-[95%] overflow-y-auto'} ${className?className:""} `}
        style={{
      
    
          scrollbarWidth: 'thin',
          scrollbarColor: ' #6161FF #D9D9D969'
        }}
      >
        <div className="flex">
          <div className="flex-grow">
            <h1 className="text-2xl text-blue-500 font-bold">{title}</h1>
          </div>
          {onClose?       <button
            className="text-gray-500 hover:text-gray-700"
            onClick={onClose}
          >
            <IoClose size={22} />
          </button>:""}
   
        </div>
        <div className=" h-full">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
