import React from 'react';
import brain from '../../../assets/icons/brainheader.svg';
import { useTranslation } from 'react-i18next'; // Import the translation hook

function HeaderKnowledgeBase() {
  const { t } = useTranslation(); // Use the translation hook

  return (
    <div>
      <div className='flex items-center gap-3'>
        <img src={brain} className='w-[35px] rounded-lg bg-[#E5E5FF] p-2' />
        <div>
          <h3 className='font-bold text-2xl text-dark'>{t('knowledgeBase')}</h3> {/* Use translation for header */}
          <p className='text-gray-500 text-sm font-light'>{t('knowledgeBaseDescription')}</p> {/* Use translation for description */}
        </div>
      </div>
    </div>
  );
}

export default HeaderKnowledgeBase;
