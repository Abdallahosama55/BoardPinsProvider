import React from 'react';
import correct from '../../assets/icons/Group 165.png'; // Ensure the import path is correct
import HeaderConnectedMerchants from '../../components/provider/HeaderConnectedMerchants';
import MerchantCards from '../../components/provider/merchant/MerchantCards';
import StyledPagination from '../../components/provider/atoms/commonatoms/StyledPagination'; // Adjust the import path as necessary
import { useTranslation } from 'react-i18next'; // Import useTranslation

function Merchant() {
  const { t } = useTranslation(); // Initialize useTranslation

  return (
    <div className="bg-white rounded-lg py-6 px-8">
      <div className='flex items-center gap-2 mb-12'>
        <img src={correct} className='w-[35px]' alt="Correct icon" />
        <h3 className='font-bold text-lg'>{t('merchant_connect.connectedMerchants')}</h3> {/* Translated Connected Merchants */}
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

export default Merchant;
