import React, { useState } from 'react';
import Filter from '../../assets/icons/vertical-slider-square--adjustment-adjust-controls-fader-vertical-settings-slider-square.svg';
import list from '../../assets/icons/listleft.svg';
import { useTranslation } from 'react-i18next'; // Import useTranslation

function HeaderConnectedMerchants() {
  const { t } = useTranslation(); // Initialize useTranslation
  const [selected, setSelected] = useState('ALL');

  const getButtonClasses = (buttonName) => {
    return selected === buttonName
      ? 'px-5 rounded-3xl bg-[#6161FF] text-white py-2'
      : 'px-5 rounded-3xl text-[#6161FF] bg-white py-2';
  };

  return (
    <div className='lg:flex'>
      <div className='  gap-3 flex flex-wrap lg:justify-start justify-center'>
        <button
          className={getButtonClasses('ALL')}
          onClick={() => setSelected('ALL')}
        >
          {t('header_connect.all')} {/* Translated 'All' */}
        </button>
        <button
          className={getButtonClasses('Pending')}
          onClick={() => setSelected('Pending')}
        >
          {t('header_connect.pending')} {/* Translated 'Pending' */}
        </button>
        <button
          className={getButtonClasses('Declined')}
          onClick={() => setSelected('Declined')}
        >
          {t('header_connect.declined')} {/* Translated 'Declined' */}
        </button>
      </div>

      <div className='flex gap-5 justify-center lg:mt-auto mt-6'>
        <button className='flex items-center gap-2'>
          <img src={Filter} alt="Filter icon" />
          {t('header_connect.filter')} {/* Translated 'Filter' */}
        </button>
        <button className='flex items-center gap-2'>
          <img src={list} alt="Sort icon" />
          {t('header_connect.sort')} {/* Translated 'Sort' */}
        </button>
      </div>
    </div>
  );
}

export default HeaderConnectedMerchants;
