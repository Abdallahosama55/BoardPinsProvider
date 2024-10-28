import { useState } from 'react';
import InprogressProject from '../../components/provider/myboard/InprogressProject';
import MerchantsConnect from '../../components/provider/myboard/MerchantsConnect';
import ProductionGroups from '../../components/provider/myboard/ProductionGroups';
import ProjectTsks from '../../components/provider/myboard/ProjectTsks';
import Recents from '../../components/provider/myboard/Recents';
import Reminder from '../../components/provider/myboard/Reminder';
import Table from '../../components/provider/myboard/table';
import TaskModal from '../../components/provider/myboard/TaskModal';
import ManageCardSideBar from '../../components/provider/myboard/MangeCardSideBar';
import { useSelector } from 'react-redux';
import { selectUser } from '../../redux/features/userSliceDate';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const initialItems = {
  col1: [{ id: '1', content: <InprogressProject /> }],
  col2: [{ id: '2', content: <Table /> }],
  col3: [{ id: '3', content: <ProjectTsks /> }],
  col4: [{ id: '4', content: <Recents /> }],
  col5: [{ id: '5', content: <Reminder /> }],
  col6: [{ id: '6', content: <MerchantsConnect /> }],
  col7: [{ id: '7', content: <ProductionGroups /> }],
};

function Myboard2() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const user = useSelector(selectUser);
  const [items, setItems] = useState(initialItems);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const onDragEnd = (result) => {
    const { source, destination } = result;

    // Dropped outside any column
    if (!destination) return;

    const sourceCol = source.droppableId;
    const destCol = destination.droppableId;

    // Dropping in the same column
    if (sourceCol === destCol) {
      const reorderedItems = reorder(items[sourceCol], source.index, destination.index);
      setItems((prev) => ({
        ...prev,
        [sourceCol]: reorderedItems,
      }));
    } else {
      // Moving to a different column
      const movedResult = move(items[sourceCol], items[destCol], source.index, destination.index);
      setItems((prev) => ({
        ...prev,
        [sourceCol]: movedResult.source,
        [destCol]: movedResult.destination,
      }));
    }
  };

  const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    return result;
  };

  const move = (source, destination, sourceIndex, destIndex) => {
    const sourceClone = Array.from(source);
    const destClone = Array.from(destination);
    const [removed] = sourceClone.splice(sourceIndex, 1);
    destClone.splice(destIndex, 0, removed);

    return {
      source: sourceClone,
      destination: destClone,
    };
  };

  const getColClassName = (colId) => {
    // Check if the column exists and has items
    if (items[colId] && items[colId].length > 0) {
      const contentType = items[colId][0].content.type; // Get the component type
      if (
        contentType === ProjectTsks ||
        contentType === ProductionGroups ||
        contentType === MerchantsConnect
      ) {
        return 'col-span-12'; // Full width for specified components
      }
    }
    return 'md:col-span-6 col-span-12'; // Default classes
  };
  
  return (
    <div className='bg-white rounded-[30px] px-3 font-poppins shadow'>
      <div className='py-3 lg:flex justify-center items-center gap-2'>
        <ManageCardSideBar isOpenMangeCard={isSidebarOpen} toggleSidebar={toggleSidebar} />
        <TaskModal isOpen={modalIsOpen} onClose={() => setModalIsOpen(false)} />
        <div className='flex-grow px-5'>
          <h5 className='text-[#1E1E1E] font-[500] text-[30px]'>Hey, {user.first_name} 👋</h5>
          <p className='text-[#1E1E1E] font-[400] text-[15px]'>What would you like to create today?</p>
        </div>

        <div className='flex gap-4 lg:mt-5 lg:mx-12 mt-6 justify-center col-span-12'>
          <button className="bg-[#6161FF] my-2 mt-1 text-[#FDFDFD] md:py-3 py-2 rounded-xl px-5" onClick={() => setModalIsOpen(true)}>
            Add Task
          </button>
          <button className='bg-[#6161FF] my-2 mt-1 text-[#FDFDFD] md:py-3 py-2 rounded-xl px-5' onClick={toggleSidebar}>
            Manage Cards
          </button>
        </div>
      </div>

      <DragDropContext onDragEnd={onDragEnd}>
        <div className='py-5 md:mx-5 grid grid-cols-12 h-full gap-5'>
          {Object.keys(items).map((colId) => (
            <Droppable key={colId} droppableId={colId}>
              {(provided) => (
                <div
                  className={`  h-100 ${getColClassName(colId)} `}
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                >
                  {items[colId].map((item, index) => (
                    <Draggable key={item.id} draggableId={item.id} index={index}>
                      {(provided) => (
                        <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                          {item.content}
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          ))}
        </div>
      </DragDropContext>
    </div>
  );
}

export default Myboard2;
