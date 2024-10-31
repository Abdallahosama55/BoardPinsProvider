import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function HeaderBiddingProjectDetails() {
  const { t } = useTranslation();

  return (
    <div className='pb-5'>
      <h1 className='font-bold text-2xl pb-4 pt-2 text-dark'>
        {t('webDevelopmentProject')}
      </h1>
      <div className='flex items-center justify-start gap-4 text-sm'>
        <Link to="/myboard" className='hover:text-primary text-gray-400 gap-2 flex'>
          <span className='hover:underline'>{t('home')}</span> /
        </Link>
        <Link to="/bidding-project" className='hover:text-primary text-gray-400 gap-2 flex'>
          <span className='hover:underline'>{t('bidding')}</span> /
        </Link>
        <Link to='/bidding-project/1' className='hover:text-primary text-gray-400 gap-2 flex'>
          <span className='hover:underline'>{t('discoverProjects')}</span> /
        </Link>
      </div>
    </div>
  );
}

export default HeaderBiddingProjectDetails;
