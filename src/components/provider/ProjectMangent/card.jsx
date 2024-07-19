import React from "react";
import { Draggable } from "react-beautiful-dnd";
import ProgressBar from "../atoms/commonatoms/Progressbar";
import { PiDotsThreeBold } from "react-icons/pi";

const Card = ({ id, title, draggableId, index, precentage, decribtion, priority, priorityID }) => {
  const getPriorityStyles = (priority) => {
    switch (priority) {
      case 'High':
        return { color: '#52CD8F', backgroundColor: '#52cd9014' };
      case 'low ':
        return { color: '#D84949', backgroundColor: '#d8494951' };
      case 'MEDIUM':
        return { color: '#6161FF', backgroundColor: '#6161ff5b' };
      default:
        return { color: 'black', backgroundColor: 'white' };
    }
  };

  const priorityStyles = getPriorityStyles(priority);

  return (
    <Draggable draggableId={draggableId} index={index}>
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className={`${
            snapshot.isDragging ? "bg-gray-100" : "bg-white"
          } px-5 py-4  font-medium w-full min-h-40 shadow-custom rounded-xl`}
        >
          <div className="flex">
            <div className="flex-grow  font-bold font-poppins">
              <span style={priorityStyles} className=" px-3 rounded-2xl py-1 text-xs">{priority}</span>
            </div>
            <div className="flex items-center"><PiDotsThreeBold /></div>
          </div>
        <div className=" pt-5">

        <h3 className=" text-sm font-poppins font-bold">{title}</h3>
        <p className=" text-sm font-poppins "> {decribtion}</p>
        </div>
          <span className="w-full text-gray-400 flex justify-end text-xs py-1 gap-2">{precentage} %</span>
          <ProgressBar progress={precentage} bgColor="#6161FF" height={2} />
        </div>
      )}
    </Draggable>
  );
};

export default Card;
