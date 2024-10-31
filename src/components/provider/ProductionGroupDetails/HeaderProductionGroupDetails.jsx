import React from 'react';
import { AiFillDelete } from 'react-icons/ai';
import { MdEdit } from 'react-icons/md';
import { useTranslation } from 'react-i18next';

function HeaderProductionGroupDetails() {
  const { t } = useTranslation(); // Initialize the translation function

  return (
    <div>
      <header className='lg:flex p-5'>
        <h1 className='font-bold text-3xl text-dark flex-grow'>
          {t('groupName')} {/* Use translation key */}
        </h1>
        <div className='flex gap-5 items-center justify-end lg:mt-auto mt-12'>
          <button className='flex items-center gap-1'>
            <MdEdit />
            {t('edit')} {/* Use translation key */}
          </button>
          <button className='text-[#FF111199] flex gap-2 items-center'>
            <AiFillDelete />
            {t('removeGroup')} {/* Use translation key */}
          </button>
        </div>
      </header>
    </div>
  );
}

export default HeaderProductionGroupDetails;
