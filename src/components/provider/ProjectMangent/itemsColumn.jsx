import React from "react";
import Card from "./card";
import { BiSolidRightArrow } from "react-icons/bi";

const ItemsColumn = ({ columnTitle, items }) => {
  return (
    <div
      className="h-[75vh] scrollbar-thin scrollbar-thumb-blue-700 
    scrollbar-track-blue-300 overflow-y-auto
      p-4 rounded-md  shadow-custom "

      style={{ scrollbarWidth: 'thin', scrollbarColor: '#4B5563 ##1E1E1EBF' }}
    >
      <p className=" flex gap-2 items-center py-1 px-2 text-lg font-semibold  rounded-md">
      <BiSolidRightArrow/>
        {columnTitle}
      </p>
      <div className=" pt-4 flex flex-col gap-y-3">
        {items &&
          items.length > 0 &&
          items.map((item, index) => (
            <Card
              key={item.id}
              draggableId={item.id.toString()}
              index={index}
              id={item.id}
              title={item.title}
              precentage={item.precentage}
              decribtion={item.decribtion}
              priority={item.priority}
            />
          ))}
      </div>
    </div>
  );
};

export default ItemsColumn;
