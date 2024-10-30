import React from 'react';
import { useTranslation } from 'react-i18next';

function HeaderDashboard() {
  const { t } = useTranslation();

  return (
    <div className='flex'>
      <h3 className='font-bold text-[#1E1E1E] text-2xl flex-grow'>
        {t('dashboard_header.title')} {/* Translated Dashboard title */}
      </h3>
      <button className='border-[1px] border-[#6161FF] text-[#6161FF] rounded-lg p-1 lg:p-3'>
        {t('dashboard_header.downloadReport')} {/* Translated Download Report button text */}
      </button>
    </div>
  );
}

export default HeaderDashboard;
