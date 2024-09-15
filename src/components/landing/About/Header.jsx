import React from 'react';
import { useTranslation } from 'react-i18next';

function Header({currentLanguage}) {
  const { t } = useTranslation(); // Access the t function for translations

  return (
    <div>
      <h2 className={`text-center text-4xl text-dark font-bold  ${currentLanguage === "ar" ? 'font-cairo' : 'font-poppins'}`} dir={currentLanguage === "ar" ? 'rtl' : 'ltr'}>
        {t("aboutUsTitle")} 
      </h2>
    </div>
  );
}

export default Header;
