import React, { useState } from 'react';
import pic from '../../../assets/icons/Frame 26944.png';
import ChartDashbard from './chartDahboard';
import { Rating } from '@mui/material';
import ProgressBar from '../atoms/commonatoms/Progressbar';
import ChartDahboard2 from './chartDahboard2';
import { useTranslation } from 'react-i18next';

const OverviewCard = ({ title, items }) => (
  <div className="OverviewCard shadow-custom rounded-lg p-6 mb-3">
    <h3 className="font-bold text-lg py-3">{title}</h3>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 py-6">
      {items?.map((item, index) => (
        <div key={index} className="flex gap-2">
          <img src={item.image} className="w-[60px] h-[60px]" alt="icon" />
          <div>
            <h3 className="font-[800] text-[#292D32] text-lg">{item.value}</h3>
            <p className="text-xs text-[#292D32] font-[400]">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const PerformanceOverview = ({ title, dataPerformanceOverview }) => (
  <div className="mt-5 shadow-custom rounded-lg p-4 mb-3">
    <h3 className="font-bold text-lg">{title}</h3>
    <div className="grid grid-cols-12 justify-center items-center   sm:grid-cols-12 lg:grid-cols-12  py-5 gap-4">
      <div className='lg:col-span-3 col-span-12 h-full flex items-center  justify-center bg-gray-100 rounded-xl'>
        <div className=''>
          <h2 className='font-bold text-2xl text-center'>4.5</h2>
          <div>
            <Rating name="half-rating-read" sx={{ fontSize: 14 }} defaultValue={4.5} precision={0.5} readOnly />
          </div>
        </div>
      </div>

      <div className='lg:col-span-7 col-span-12 items-center justify-center rounded-xl'>
        {dataPerformanceOverview?.map((item, index) => (
          <div key={index} className='flex gap-2 items-center'>
            <span className='text-gray-500 text-sm'>{item.rating}</span>
            <ProgressBar progress={item.progress} bgColor={item.color} />
          </div>
        ))}
      </div>
    </div>
  </div>
);

const ProjectCard = ({ items,title }) => (
  <div className="OverviewCard shadow-custom rounded-lg p-6 mb-3">
    <h3 className="font-bold text-lg py-3">{title}</h3>
    <div className="grid grid-cols-2 sm:grid-cols-2 gap-2 py-6">
      {items?.map((item, index) => (
        <div key={index} className="flex gap-2 my-3">
          <img src={item.image} className="lg:w-[90px] lg:h-[90px] w-[50px] h-[50px]" alt="icon" />
          <div>
            <h3 className="font-[800] text-[#292D32] text-lg">{item.value}</h3>
            <p className="text-xs text-[#292D32] font-[400]">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const ProductionGroups = ({ items ,title }) => (
  <div className=" shadow-custom rounded-lg p-4 mb-3">
    <h3 className="font-bold text-lg">{title}</h3>
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 py-6">
      {items?.map((item, index) => (
        <div key={index} className="flex gap-2">
          <img src={item.image} className="lg:w-[80px] lg:h-[70px] w-[50px] h-[50px]" alt="icon" />
          <div>
            <h3 className="font-[800] text-[#292D32] text-lg">{item.value}</h3>
            <p className="text-xs text-[#292D32] font-[400]">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const AnalyticsChart = ({Merchants,Projects}) => {
  const [selectedButton, setSelectedButton] = useState('merchants'); // State to manage selected button

  const handleButtonClick = (buttonType) => {
    setSelectedButton(buttonType);
    console.log(buttonType)
  };

  return (
    <div className="shadow-custom lg:p-4 p-2 rounded-lg">
      <div className="flex items-center gap-4 py-3">
        {/* Merchants Button */}
        <button
          className={` rounded-2xl px-5 py-2  mb-2 sm:mb-0 sm:ml-4 ${selectedButton === 'merchants' ? 'bg-[#6161FF] text-white' : '#6161F'}`}
          onClick={() => handleButtonClick('merchants')}
        >
          {Merchants}
        </button>
        {/* Projects Button */}
        <button
          className={` rounded-2xl px-5 py-2  mb-2 sm:mb-0 sm:ml-4 ${selectedButton === 'projects' ? 'bg-[#6161FF] text-white' : 'text-[#6161FF]'}`}
          onClick={() => handleButtonClick('projects')}
        >
          {Projects}
        </button>
      </div>
      <div>
        {selectedButton === 'projects' ?     <ChartDahboard2/>   :  <ChartDashbard />  }

      </div>
    </div>
  );
};

const MonthlyTargetandRevenues = ({ header, start_value, end_value ,value_MonthlyTargetandRevenues }) => {
  // Calculate progress percentage based on start_value and end_value
  const progress = ((50 / 100) * 100).toFixed(2);
const {t}=useTranslation()
  return (
    <div className="shadow-custom rounded-lg p-4 mb-3">
      <div className="lg:flex gap-4 sm:items-center">
        <h3 className="font-bold flex-grow py-3 text-md text-lg ">{header}</h3>
        <button className="text-[#6161FF] mb-2 sm:mb-0 sm:ml-4 lg:w-auto w-full">{t('edit')}</button>
        <div className=' justify-center lg:flex-row flex gap-1'>
          <button className="bg-[#6161FF] font-[500] lg:text-sm  px-2 text-[10px] rounded-lg lg:px-3 py-2 text-white mb-2 sm:mb-0 sm:ml-4">
           {t('+_add_annual_target')}
          </button>
          <button className="bg-[#6161FF] font-[500] lg:text-sm  px-2 text-[10px] rounded-lg lg:px-3 py-2 text-white mb-2 sm:mb-0 sm:ml-4">
          {t('+_add_monthly_target')}
          </button>
        </div>
      </div>

      {/* Progress Bar Section */}
      <div className="flex lg:justify-start  justify-center items-center gap-4 py-3">
        {/* Monthly Target Button */}
        <button className="bg-[#6161FF] rounded-2xl px-7 py-2 text-white mb-2 sm:mb-0 sm:ml-4">
          {t("monthly")}
        </button>
        {/* Annual Target Button */}
        <button className="text-[#6161FF] rounded-lg px-7 py-2">
          
          {t('annual')}
        </button>
      </div>
      <div className=' mx-5 mt-5  progressbar'>
        <div className="label flex">
          <span className="flex-grow font-bold text-lg">0</span>
          <span className="font-bold text-lg">100</span>
        </div>
        {/* Progress Bar */}
        <ProgressBar progress={value_MonthlyTargetandRevenues} bgColor={"#6161FF"} />
      </div>
    </div>
  );
};

function AnalyticsDashboard() {
  const merchantItems = [
    { image: pic, value: '200', description: 'connected merchants' },
    { image: pic, value: '200', description: 'pending acceptance connect' },
    { image: pic, value: '200', description: 'connected merchants' },
  ];

  const projectItems = [
    { image: pic, value: '200', description: 'In-progress projects' },
    { image: pic, value: '200', description: 'In-progress projects' },
    { image: pic, value: '200', description: 'In-progress projects' },
    { image: pic, value: '200', description: 'In-progress projects' },
  ];

  const projectItemsGroups = [
    { image: pic, value: '200', description: 'In-progress projects' },
    { image: pic, value: '200', description: 'In-progress projects' },
    { image: pic, value: '200', description: 'In-progress projects' },
  ];
  
  const dataPerformanceOverview = [
    { rating: 5, progress: 75, color: '#FBBC04' },
    { rating: 4, progress: 60, color: '#FBBC04' },
    { rating: 3, progress: 45, color: '#FBBC04' },
    { rating: 2, progress: 30, color: '#FBBC04' },
    { rating: 1, progress: 15, color: '#FBBC04' },
  ];
const value_MonthlyTargetandRevenues=45
const {t}=useTranslation()
  return (
    <div className="p-0">
      <div className="grid  grid-cols-1 lg:grid-cols-12 gap-4">
        <div className="lg:col-span-6 col-span-12">
          <OverviewCard title={t('merchants_overview')} items={merchantItems} />
          <ProjectCard items={projectItems} title={t('projects_overview')}/>
        </div>
        <div className="lg:col-span-6 col-span-12">
          <AnalyticsChart  Projects={t('projects')} Merchants={t('merchants.name')}/>
          <PerformanceOverview title={t('performance_overview')} dataPerformanceOverview={dataPerformanceOverview} />

        </div>
      </div>
      <ProductionGroups items={projectItemsGroups} title={t('production_groups_overview')} />
      <MonthlyTargetandRevenues header={t('monthly_target_and_revenues')} start_value={0} end_value={100}  value_MonthlyTargetandRevenues={value_MonthlyTargetandRevenues}/>
    </div>
  );
}

export default AnalyticsDashboard;
