import React from 'react';
import { MdPlayArrow } from "react-icons/md";
import { useTranslation } from 'react-i18next';

function DeatailsUpgrade() {
  const { t } = useTranslation();

  return (
    <div>
      <div>
        <h2 className='pt-6 pb-1 flex gap-2 items-center'>
          <MdPlayArrow color='#E8E8E8' size={22} />
          <span className='font-[700] text-[#292D32] text-lg'>{t('free_trial')}</span>
        </h2>
        <p className='ms-7'>{t('experience_power')}</p>
      </div>

      <div>
        <h2 className='pt-6 pb-1 flex gap-2 items-center'>
          <MdPlayArrow color='#E8E8E8' size={22} />
          <span className='font-[700] text-[#292D32] text-lg'>{t('flexible_billing')}</span>
        </h2>
        <p className='ms-7'>{t('choose_plans')}</p>
      </div>
    </div>
  );
}

export default DeatailsUpgrade;
