import React from 'react';
import correct from '../../assets/icons/Group 165.svg';
import HeaderConnectedMerchants from '../../components/provider/HeaderConnectedMerchants';
import MerchantCards from '../../components/provider/merchant/MerchantCards';
import StyledPagination from '../../components/provider/atoms/commonatoms/StyledPagination'; // Adjust the import path as necessary
import { useTranslation } from 'react-i18next';

function MerchantPinned() {
  const { t } = useTranslation();

  return (
    <div className="bg-white rounded-lg py-6 px-8 z-0 relative overflow-hidden">
      <div className='z-50 absolute h-[75%] top-[32%] w-full flex justify-center bg-[linear-gradient(180deg, rgba(217, 217, 217, 0) 0%, rgba(234, 235, 237, 0.61661) 61.66%, #F5F6FA 100%)] bg-opacity-25 backdrop-blur-sm'>
        <div>
          <p className='text-[#1E1E1E] text-3xl font-[700]  pt-24 pb-6 leading-[3rem] lg:mx-24 mx-12 text-center'>
            {t('merchant_pinned.unlock_message')}
          </p>
          <div className='w-full flex justify-center'>
            <button className='mt-4 bg-[#6161FF] text-white rounded-3xl py-3 px-4 font-[500]'>
              {t('merchant_pinned.upgrade_button')}
            </button>
          </div>
        </div>
      </div>
      <div className='flex items-center gap-2 mb-12'>
        <img src={correct} className='w-[35px]' alt="Correct Icon" />
        <h3 className='font-bold text-lg'>{t('merchant_connect.connectedMerchants')}</h3>
      </div>
      <HeaderConnectedMerchants />
      <main className='py-8'>
        <MerchantCards />
        <div className='w-full flex justify-center py-8'>
          <StyledPagination count={10} shape="rounded" />
        </div>
      </main>
    </div>
  );
}

export default MerchantPinned;
