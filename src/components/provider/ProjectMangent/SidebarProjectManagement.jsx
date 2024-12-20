import React, { useState } from 'react';
import { useTranslation } from 'react-i18next'; // Import the translation hook
import ProgressChart from '../atoms/atomsProjectMangemant/ProgressChart';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';

const Dropdown = ({ isOpen, toggleDropdown }) => (
  <div className="relative">
    <button 
      onClick={toggleDropdown} 
      className="bg-[#F5F6FA] flex items-center text-dark text-[14px] w-full px-4 py-2 rounded-md focus:outline-none"
    >
      <div className="flex-grow">
        <h3 className="text-[#7E7B7B]">{useTranslation().t("Selected Project")}</h3>
        <h3 className="text-[#1E1E1E] font-semibold opacity-85">{useTranslation().t("Project Name")}</h3>
      </div>
      <MdOutlineKeyboardArrowDown />
    </button>
    {isOpen && (
      <div className="absolute mt-2 py-2 w-48 bg-white rounded-md shadow-xl z-50">
        {['Option 1', 'Option 2', 'Option 3']?.map((option, index) => (
          <a 
            key={index}
            href="#"
            className="block px-4 py-2 text-gray-800 hover:bg-blue-500 hover:text-white"
          >
            {useTranslation().t(option)}
          </a>
        ))}
      </div>
    )}
  </div>
);

const QuickOverview = () => {
  const { t } = useTranslation(); // Use the translation hook

  return (
    <>
      <div>
        <h1 className='pt-3 text-dark text-xl font-bold'>{t("Today Tasks")}</h1>
      </div>
      <div className='grid grid-cols-2 gap-3 py-3'>
        <OverviewCard 
          title={t("Total")} 
          value={5} 
          bgColor="#FFE5E8" 
          borderColor="#FFA6B0" 
        />
        <OverviewCard 
          title={t("Done")} 
          value={7} 
          bgColor="#52CD8F30" 
          borderColor="#38B000" 
        />
        <OverviewCard 
          title={t("In Progress")} 
          value={8} 
          bgColor="#FCE5DA" 
          borderColor="#FB5607" 
        />
        <OverviewCard 
          title={t("To Do")} 
          value={8} 
          bgColor="#E5E5FF" 
          borderColor="#9696FF" 
        />
      </div>
    </>
  );
};

const OverviewCard = ({ title, value, bgColor, borderColor }) => (
  <div className={`p-5 rounded-2xl`} style={{ backgroundColor: bgColor }}>
    <h2 className='text-[12px]'>{title}</h2>
    <strong className={`border-l-[5px] px-1`} style={{ borderColor: borderColor }}>{value}</strong>
  </div>
);

const SidebarProjectManagement = () => {
  const { t } = useTranslation(); // Use the translation hook
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(prevState => !prevState);
  };

  return (
    <div className='flex flex-col gap-3 bg-transparent'>
      <div className='bg-white rounded-xl p-4 py-8 '>
        <div className='flex items-center gap-4'>
          <Dropdown isOpen={isOpen} toggleDropdown={toggleDropdown} />
          <button className="px-3 h-100 py-1 text-center flex justify-center rounded-lg shadow-custom bg-white text-[#6161FF]">
            <div>
              <h3>+</h3>
              <h3>{t("New")}</h3>
            </div>
          </button>
        </div>
        <div className="flex justify-center items-center">
          <ProgressChart progressPrectage={15} widthcircle={150} heightcircle={150} textSize={'30px'} title={t("7 task to 15 Today")} colorCircle="#6161FF" ShadowCustom={true} radiusCircle={68} strokeWidthCircle={13} />
        </div>
        <QuickOverview />
      </div>

      <div className='px-5 pb-12 pt-8 rounded-xl bg-white'>
        <h1 className='font-bold text-dark '>{t("All Project Tasks")}</h1>
        <div className='grid lg:grid-cols-3 gap-3 grid-cols-1 justify-center'>
          {['To do', 'In Progress', 'Done'].map((title, index) => (
            <div key={index} className='flex  justify-center'>
              <div>
                <ProgressChart progressPrectage={15} widthcircle={80} heightcircle={80} colorCircle="#4361EE" radiusCircle={65} strokeWidthCircle={22} />
                <h1 className='text-center textdark font-bold pt-2'>{t(title)}</h1>
                <p className='text-center text-[10px] opacity-75'>{t("7 Task to 14")}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SidebarProjectManagement;
