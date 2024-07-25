import React from "react";
import { IoClose } from "react-icons/io5";

const TaskModal = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg w-[85%] h-[95%] overflow-y-auto" style={{ scrollbarWidth: 'thin', scrollbarColor: '#4B5563 ##1E1E1EBF' }}>
        <div className="flex">
          <div className="flex-grow">
            <h1 className="text-2xl text-blue-500 font-bold">{title}</h1>
          </div>
          <button
            className="text-gray-500 hover:text-gray-700"
            onClick={onClose}
          >
            <IoClose size={22} />
          </button>
        </div>
        <div>
          {children}
        </div>
      </div>
    </div>
  );
};

export default TaskModal;
