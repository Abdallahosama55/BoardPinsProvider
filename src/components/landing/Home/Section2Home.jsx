import React from 'react';
import { useTranslation } from 'react-i18next';

function Section2Home() {
  const { i18n } = useTranslation(); // Access the i18n instance
  const currentLanguage = i18n.language ||'en'; // Get the current language from i18n

  // Define the text content based on the current language
  const textContent = currentLanguage === 'ar'
    ? "بناء فريق أحلامك. ابحث عن أفضل مزودي الخدمة على <span class='text-[#6161FF]'>Board Pins</span> لتعزيز نمو عملك"
    : "Build your dream team. Find the best service providers on <span class='text-[#6161FF]'>Board Pins</span> to elevate your business growth";

  return (
    <div 
      className={`bg-[#E6ECF9] ${currentLanguage === 'ar' ? 'font-cairo' : 'font-poppins'}`} 
      dir={currentLanguage === 'ar' ? 'rtl' : 'ltr'}
    >
      <p 
        className='text-[#333333] text-[36px] font-[700] text-center lg:mx-24 mx-6 py-12'
        dangerouslySetInnerHTML={{ __html: textContent }}
      />
    </div>
  );
}

export default Section2Home;
