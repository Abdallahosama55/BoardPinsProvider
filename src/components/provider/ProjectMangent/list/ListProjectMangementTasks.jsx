import React from 'react';
import { IoPersonAddOutline } from "react-icons/io5";
import { MdDragHandle } from 'react-icons/md';
import { RiArrowRightSFill, RiDeleteBin5Line, RiDraggable } from "react-icons/ri";
import { TiArrowSortedDown } from "react-icons/ti";
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';

// Import the data
import { data as initialData } from '../../../../utils/helpers/constants';
import { useTranslation } from 'react-i18next';

const handleSelect = (option) => {
  console.log('Selected option:', option);
};

// Function to reorder items
const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);
  return result;
};

function ListProjectMangementTable() {
  const [items, setItems] = React.useState(initialData);
const {t}=useTranslation()
  // Handles the end of a drag event
  const onDragEnd = (result) => {
    if (!result.destination) {
      return;
    }

    const reorderedItems = reorder(
      items,
      result.source.index,
      result.destination.index
    );

    setItems(reorderedItems);
  };

  // Function to determine styles based on some condition
  const getStyles = (value) => {
    if (value === 'To Do' || value === 'low') {
      return {
        color: '#FB5607',
        backgroundColor: 'rgba(251, 86, 7, 0.3)',
      };
    } else if (value === 'Doing' || value === 'MEDIUM') {
      return {
        color: '#6161FF',
        backgroundColor: 'rgba(97, 97, 255, 0.3)',
      };
    } else if (value === 'Done' || value === 'HIGH') {
      return {
        color: '#3F8B35',
        backgroundColor: 'rgba(63, 139, 53, 0.3)',
      };
    }
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="droppable">
        {(provided) => (
          <div
            className="w-full border-[1px] border-[#1E1E1E85] rounded-xl px-3 lg:max-w-full md:max-w-full max-w-[350px] overflow-x-auto"
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
                    <header className="lg:flex block m-3">
<div className=" gap-5 items-center py-2 flex flex-grow  p-4">
<span className=" gap-2 flex items-center text-sm "> <TiArrowSortedDown />{t('Section_Name')}</span>
<span className=" text-[#A4A4A4]"> {t('newTask')}</span>
</div>
<div className=" items-center  gap-3 flex">
<span className=" text-sm text-[#505050]">{t('assignList')}</span>
<IoPersonAddOutline className=" p-2 bg-[#F5F6FA]  rounded-full"  size={30}/>

</div>

        </header>
            <table className="w-full text-sm text-left rtl:text-right text-gray-500">
              <thead className="text-xs w-full text-[#6A6A65] bg-[#F5F6FA] dark:text-gray-400">
                <tr>
                  <th scope="col" className="p-2"></th>
                  <th scope="col" className="p-4">
                    <div className="flex items-center">
                      <input 
                        id="checkbox-all-search" 
                        type="checkbox" 
                        className="w-4 h-4 text-[#6161FF] rounded" 
                      />
                      <label htmlFor="checkbox-all-search" className="sr-only">checkbox</label>
                    </div>
                  </th>
                  <th scope="col" className="px-6 py-3">{t('Task Name')}</th>
                  <th scope="col" className="px-6 py-3">{t('Assignee')}</th>
                  <th scope="col" className="px-6 py-3">{t('Status')}</th>
                  <th scope="col" className="px-6 py-3">{t('Priority')}</th>
                  <th scope="col" className="px-6 py-3">{t('Start date')}</th>
                  <th scope="col" className="px-6 py-3">{t('Due date')}</th>
                  <th scope="col" className="px-6 py-3">{t('Actions')}</th>
                </tr>
              </thead>
              <tbody>
                {items?.map((item, index) => (
                  <Draggable key={item.id} draggableId={item.id} index={index}>
                    {(provided) => (
                      <tr
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        className="bg-white border-b-[1px] border-blue hover:bg-gray-50"
                      >
                        <td className="flex items-center ">
                          <span className="flex items-center text-[12px]  rounded-2xl  py-1">
                          <RiDraggable />
                          </span>
                        </td>
                        <td className="w-4 p-4">
                          <div className="flex items-center">
                            <input 
                              id={`checkbox-table-search-${index}`} 
                              type="checkbox" 
                              className="w-4 h-4 text-[#6161FF] bg-gray-100 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700" 
                            />
                            <label htmlFor={`checkbox-table-search-${index}`} className="sr-only">checkbox</label>
                          </div>
                        </td>
                        <th scope="row" className="px-6 py-4 font-medium text-[#6A6A65] whitespace-nowrap">
                          {item.taskName}
                        </th>
                        <td className="px-6 py-2">
                          <img src={item.assignee} alt="Assignee Avatar" className='rounded-[50%] w-[50px] h-[50px]' />
                        </td>
                        <td className="flex items-center px-6 py-4">
                          <span className="flex items-center text-[12px] pe-3 rounded-2xl px-2 py-1" style={getStyles(item.status)}>
                            <RiArrowRightSFill /> {item.status}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <span className="rounded-2xl px-2 py-1 text-center flex items-center text-[12px] pe-3" style={getStyles(item.Priority)}>
                            <RiArrowRightSFill />
                            {item.Priority}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          {item.StartDate}
                        </td>
                        <td className="px-6 py-4">
                          {item.dueDate}
                        </td>
                        <td className="px-6 py-4">
                          <RiDeleteBin5Line className="hover:text-red-500" />
                        </td>
                      </tr>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </tbody>
            </table>
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
}

export default ListProjectMangementTable;
