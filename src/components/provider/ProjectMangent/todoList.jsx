import React, { useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import ItemsColumn from "./itemsColumn";
import StrictModeDroppable from "./droppable";
import { reorder } from "../../../utils/helpers/helpers";
import { initialColumnData } from "../../../utils/helpers/constants";
import toast, { Toaster } from "react-hot-toast";

const TodoList = () => {
  const [columnData, setColumnData] = useState(initialColumnData);
  const [dragInfo, setDragInfo] = useState({ index: null, status: "", title: "" });

  const onDragEnd = (result) => {
    const { source, destination } = result;

    // dropped outside the list
    if (!destination) {
      return;
    }

    const sInd = source.droppableId;
    const dInd = destination.droppableId;

    // Log index and status
    const itemTitle = columnData[sInd].items[source.index].title;
    const newIndex = destination.index;
    const newStatus = dInd;

    console.log(`Item: ${itemTitle}, New Index: ${newIndex}, New Status: ${newStatus}`);

    setDragInfo({ index: newIndex, status: newStatus, title: itemTitle });

    toast.success(`Item: ${itemTitle}, New Index: ${newIndex}, New Status: ${newStatus}`);

    // REORDER: if source and destination droppable ids are same
    if (sInd === dInd) {
      const column = columnData[sInd];
      const reorderedItems = reorder(column.items, source.index, destination.index);

      setColumnData({
        ...columnData,
        [sInd]: {
          ...column,
          items: reorderedItems,
        },
      });
    } else {
      const sourceColumn = columnData[sInd];
      const desColumn = columnData[dInd];

      const itemToDrop = sourceColumn.items.find(
        (item) => item.id.toString() === result.draggableId
      );

      // INSERT: dragged item to another column
      if (itemToDrop) {
        const sourceColumnItems = Array.from(sourceColumn.items);
        const destColumnItems = Array.from(desColumn.items);

        sourceColumnItems.splice(result.source.index, 1);
        destColumnItems.splice(result.destination.index, 0, itemToDrop);

        setColumnData({
          ...columnData,
          [sInd]: {
            ...sourceColumn,
            items: sourceColumnItems,
          },
          [dInd]: {
            ...desColumn,
            items: destColumnItems,
          },
        });
      }
    }
  };

  return (
    <div className="">
      <Toaster
        toastOptions={{
          style: {
            marginLeft: '10px'
          }
        }}
        position="top-right"
      />
      <div className="grid grid-cols-3 gap-x-4 justify-between">
        <DragDropContext onDragEnd={onDragEnd}>
          {Object.entries(columnData).map(([id, column]) => (
            <StrictModeDroppable droppableId={id} key={id}>
              {(provided) => (
                <div {...provided.droppableProps} ref={provided.innerRef}>
                  <ItemsColumn columnTitle={column.title} items={column.items} />
                  {provided.placeholder}
                </div>
              )}
            </StrictModeDroppable>
          ))}
        </DragDropContext>
      </div>
    </div>
  );
};

export default TodoList;
