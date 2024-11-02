import { useState } from 'react';
import { useTranslation } from 'react-i18next'; // Import useTranslation
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

function MyBoardPins() {
  const { t } = useTranslation(); // Initialize translation hook
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const user = useSelector(selectUser);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className='bg-white rounded-[30px] px-3 shadow'>
      <div className='py-3 lg:flex justify-center items-center gap-2'>
        <ManageCardSideBar isOpenMangeCard={isSidebarOpen} toggleSidebar={toggleSidebar} />
        <TaskModal isOpen={modalIsOpen} onClose={() => setModalIsOpen(false)} />
        
        <div className='flex-grow px-6 lg:px-12'>
          <h5 className='text-[#1E1E1E] font-[600] text-[30px]'>{t('welcome', { name: user.first_name })}</h5>
          <p className='text-[#1E1E1E] font-[500]  text-[20px] '>{t('create_prompt')}</p>
        </div>

        <div className='flex gap-4 lg:mt-5 lg:mx-12 mt-6 justify-center col-span-12'>
          <button
            className="bg-[#6161FF] my-2 mt-1 text-[#FDFDFD] md:py-3 py-2 rounded-xl px-5"
            onClick={() => setModalIsOpen(true)}
          >
            {t('add_task')}
          </button>
          <button
            className='bg-[#6161FF] my-2 mt-1 text-[#FDFDFD] md:py-3 py-2 rounded-xl px-5'
            onClick={toggleSidebar}
          >
            {t('manage_cards')}
          </button>
        </div>
      </div>

      <div className='py-5 md:mx-5 grid grid-cols-12 gap-5'>
        <div className='relative rounded-xl md:col-span-6 col-span-12 lg:px-5'>
          <InprogressProject />
        </div>

        <div className='rounded-xl shadow-custom md:col-span-6 col-span-12 lg:px-5'>
          <div className="relative   overflow-x-auto sm:rounded-lg">
            <Table />
          </div>
        </div>

        <div className='w-full rounded-xl col-span-12 lg:px-5'>
          <ProjectTsks />
        </div>

        <div className='h-full rounded-xl md:col-span-6 col-span-12 lg:px-5'>
          <div className='h-full relative'>
            <Recents />
          </div>
        </div>

        <div className='h-full relative rounded-xl md:col-span-6 col-span-12 lg:px-5'>
          <Reminder />
        </div>

        <div className='w-full rounded-xl col-span-12 lg:px-5'>
          <MerchantsConnect />
        </div>

        <div className='w-full rounded-xl col-span-12 lg:px-5'>
          <ProductionGroups />
        </div>
      </div>
    </div>
  );
}

export default MyBoardPins;
