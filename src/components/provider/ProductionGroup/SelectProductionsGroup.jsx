import React, { useState } from 'react';
import  Filter  from '../../../assets/icons/vertical-slider-square--adjustment-adjust-controls-fader-vertical-settings-slider-square.svg';
import list from '../../../assets/icons/listleft.svg'
import { useTranslation } from 'react-i18next';
function SelectProductionsGroup() {
  const [selected, setSelected] = useState('ALL');
const{t}=useTranslation()
  const getButtonClasses = (buttonName) => {
    return selected === buttonName
      ? 'px-5 rounded-3xl bg-[#6161FF] text-white py-2'
      : 'px-5 rounded-3xl text-[#6161FF] bg-white py-2';
  };

  return (
    <div className=' lg:flex mx-1 py-6 '>
      <div className='flex-grow gap-3 lg:justify-start justify-center  '>
        <button
          className={getButtonClasses('ALL')}
          onClick={() => setSelected('ALL')}
        >
          {t('all')}
        </button>
        <button
          className={getButtonClasses('Pending')}
          onClick={() => setSelected('Pending')}
        >
         {t("header_connect.pending")}
        </button>
        <button
          className={getButtonClasses('Declined')}
          onClick={() => setSelected('Declined')}
        >
          {t('declined')}
        </button>
      </div>


      <div className=' flex gap-5 justify-end lg:mt-auto mt-6'>
      <button
 className=' flex items-center gap-2'
    >
    <img src={Filter}/>
    {t('filter')}
    </button>
    <button
  className=' flex items-center gap-2'
    >
    <img src={list}/>
    {t('sort')}
    </button>
      
      </div>
    </div>
  );
}

export default SelectProductionsGroup;
