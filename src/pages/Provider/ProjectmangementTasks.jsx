import React, { useState } from 'react';
import DatePicker from '../../components/provider/ProjectMangent/kanban/DatePicker';
import HeaderProjectmangementTasks from '../../components/provider/ProjectMangent/HeaderProjectmangementTasks';
import KanbanTodoList from '../../components/provider/ProjectMangent/KanbanTodoList';
import NavigationItem from '../../components/provider/ProjectMangent/NavigationItem';
import kanbanIcon from '../../assets/icons/kanban.svg';
import tableIcon from '../../assets/icons/table.svg';
import listIcon from '../../assets/icons/list.svg';
import calendarIcon from '../../assets/icons/clender.svg';
import filterIcon from '../../assets/icons/vertical-slider-square--adjustment-adjust-controls-fader-vertical-settings-slider-square.svg';
import listBtnIcon from '../../assets/icons/listleft.svg';

import MenuButton from '../../components/provider/atoms/atomsProjectMangemant/MenuButton';
import ProgressBar from '../../components/provider/atoms/commonatoms/Progressbar';
import ProgressChart from '../../components/provider/atoms/atomsProjectMangemant/ProgressChart';
import SidebarProjectManagement from '../../components/provider/ProjectMangent/SidebarProjectManagement';

const views = [
  { key: 'kanban', label: 'Kanban', icon: kanbanIcon },
  { key: 'list', label: 'List', icon: listIcon },
  { key: 'table', label: 'Table', icon: tableIcon },
  { key: 'calendar', label: 'Calendar', icon: calendarIcon },
];

const ProjectMangementTasks = () => {
  const [selectedView, setSelectedView] = useState('kanban');

  const handleItemSelect = (item) => {
    setSelectedView(item.key);
  };

  const renderView = () => {
    switch (selectedView) {
      case 'kanban':
        return <KanbanTodoList />;
      case 'list':
        return <div className="list">List</div>;
      case 'table':
        return <div className="table">Table</div>;
      case 'calendar':
        return <div className="calendar">Calendar</div>;
      default:
        return null;
    }
  };

  return (
    <div className="h-full gap-4 grid lg:grid-cols-4  justify-center">
      <div className="md:px-8 py-6 flex flex-col gap-3 lg:col-span-3 col-span-4 p-2 rounded-2xl h-full bg-white">
        <HeaderProjectmangementTasks />
        <DatePicker />
        <div className="grid lg:grid-cols-2 items-center justify-center bg-[#F5F6FA] rounded-xl py-3">
          <ul className="items-center flex gap-6 px-5 font-poppins">
            {views.map(view => (
              <NavigationItem
                key={view.key}
                label={view.label}
                icon={view.icon}
                isSelected={selectedView === view.key}
                onClick={() => setSelectedView(view.key)}
              />
            ))}
          </ul>
          <div className="flex  lg:justify-end justify-center items-center lg:py-0 md:py-0 pt-4 px-3 gap-4">
            <MenuButton
              icon={filterIcon}
              menuItems={views}
              onItemSelect={handleItemSelect}
              title='Filter'
            />
                 <MenuButton
              icon={listBtnIcon}
              menuItems={views}
              onItemSelect={handleItemSelect}
              title='List'
            />
       
            <button className="bg-[#6161FF] px-4 py-2 rounded-xl text-sm text-white font-extralight">
              New Task
            </button>
          </div>
        </div>
        {renderView()}
      </div>

      <div className=' p-3 rounded-lg lg:col-span-1 col-span-4'>

      <SidebarProjectManagement/>



        
      </div>
    </div>
  );
};

export default ProjectMangementTasks;
