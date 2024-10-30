import React, { useState } from 'react';
import { useTranslation } from 'react-i18next'; // Import the hook
import DatePicker from '../../components/provider/ProjectMangent/kanban/DatePicker';
import HeaderProjectmangementTasks from '../../components/provider/ProjectMangent/HeaderProjectmangementTasks';
import KanbanTodoList from '../../components/provider/ProjectMangent/KanbanTodoList';
import NavigationItem from '../../components/provider/ProjectMangent/NavigationItem';
import filterIcon from '../../assets/icons/vertical-slider-square--adjustment-adjust-controls-fader-vertical-settings-slider-square.svg';
import listBtnIcon from '../../assets/icons/listleft.svg';
import MenuButton from '../../components/provider/atoms/atomsProjectMangemant/MenuButton';
import SidebarProjectManagement from '../../components/provider/ProjectMangent/SidebarProjectManagement';
import ListProjectMangementTable from '../../components/provider/ProjectMangent/list/ListProjectMangementTasks';
import { data } from "../../utils/helpers/constants";
import { views } from "../../utils/helpers/constants";
import TableMangementTask from '../../components/provider/ProjectMangent/table/TableMangementTask';
import Calendar from '../../components/provider/ProjectMangent/celender/Calender';
import NewTaskModal from '../../components/provider/ProjectMangent/NewTask/NewTaskModal';

const ProjectMangementTasks = () => {
  const { t } = useTranslation(); // Use the translation hook
  const [selectedView, setSelectedView] = useState('kanban');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleItemSelect = (item) => {
    setSelectedView(item.key);
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const renderView = () => {
    switch (selectedView) {
      case 'kanban':
        return <KanbanTodoList />;
      case 'list':
        return <ListProjectMangementTable data={data} />;
      case 'table':
        return <TableMangementTask data={data} />;
      case 'calendar':
        return <Calendar />;
      default:
        return null;
    }
  };

  return (
    <div className="h-full gap-4 grid lg:grid-cols-4 justify-center items-start bg-[#F5F6FA]">
      <div className="md:px-8 py-6 flex flex-col gap-3 lg:col-span-3 col-span-4 p-2 rounded-2xl h-full bg-white">
        <HeaderProjectmangementTasks title={t('tasks')} />
        <DatePicker />
        <div className="grid lg:grid-cols-2 items-center justify-center bg-[#F5F6FA] rounded-xl py-3">
          <ul className="items-center flex gap-6 px-5">
            {views?.map(view => (
              <NavigationItem
                key={view.key}
                label={t(view.label)} // Translate label
                icon={view.icon}
                isSelected={selectedView === view.key}
                onClick={() => setSelectedView(view.key)}
              />
            ))}
          </ul>
          <div className="flex lg:justify-end justify-center items-center lg:py-0 md:py-0 pt-4 px-3 gap-4">
            <MenuButton
              icon={filterIcon}
              menuItems={views}
              onItemSelect={handleItemSelect}
              title={t('header_connect.filter')} // Translate title
            />
            <MenuButton
              icon={listBtnIcon}
              menuItems={views}
              onItemSelect={handleItemSelect}
              title={t('list')} // Translate title
            />
            <button
              onClick={handleOpenModal}
              className="bg-[#6161FF] px-4 py-2 rounded-xl text-sm text-white font-extralight"
            >
              {t('newTask')} {/* Translate button text */}
            </button>
          </div>
        </div>
        {renderView()}
      </div>
      <div className=' rounded-lg lg:col-span-1  col-span-4'>
        <SidebarProjectManagement />
      </div>
      <NewTaskModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
};

export default ProjectMangementTasks;
