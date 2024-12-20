import React, { useState } from 'react';
import  Filter  from '../../../assets/icons/vertical-slider-square--adjustment-adjust-controls-fader-vertical-settings-slider-square.svg';
import list from '../../../assets/icons/listleft.svg'
import { useTranslation } from 'react-i18next';
function HeaderSharedProjects({handleOpenModal}) {
  const [selected, setSelected] = useState('ALL');
const {t}=useTranslation()
  const getButtonClasses = (buttonName) => {
    return selected === buttonName
      ? 'px-5 rounded-3xl bg-[#6161FF] text-white py-2'
      : 'px-5 rounded-3xl text-[#6161FF] bg-white py-2';
  };

  return (
    <div className=' lg:flex '>
      <div className='flex-grow gap-3 lg:justify-start justify-center  '>
        <button
          className={getButtonClasses('ALL')}
          onClick={() => setSelected('ALL')}
        >
          {t('all')}
        </button>
        <button
          className={getButtonClasses('In Progress')}
          onClick={() => setSelected('In Progress')}
        >
   {t('In Progress ')}    
</button>
        <button
          className={getButtonClasses('Completed')}
          onClick={() => setSelected('Completed')}
        >
          {t('Completed')}
        </button>
      </div>


      <div className=' flex gap-5 justify-center lg:mt-auto mt-6'>
      <button
 className=' flex items-center gap-2'
    >
    <img src={Filter}/>
   {t('Fillter')}
    </button>
    <button
  className=' flex items-center gap-2'
    >
    <img src={list}/>
    {t('sort')}
    </button>

    <button
  className=' flex items-center gap-2 bg-blue-500 text-white rounded-xl py-2 px-3  text-md  font-medium'
  onClick={()=>handleOpenModal()}
    >
 
    + {t('New Project')}
    </button>
      
      </div>
    </div>
  );
}

export default HeaderSharedProjects;
