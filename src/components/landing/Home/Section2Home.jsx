import React from 'react';
import { useTranslation } from 'react-i18next';

function Section2Home() {
  const { i18n } = useTranslation(); // Access the i18n instance
  const currentLanguage = i18n.language ||'en'; // Get the current language from i18n

  // Define the text content based on the current language
  const textContent = currentLanguage === 'ar'
  ? "انضم الآن وابدأ في توسيع قاعدة عملائك على <span class='text-[#6161FF]'>Board Pins</span>!"
  : "Join Now and Start Growing Your Client Base on <span class='text-[#6161FF]'>Board Pins</span>!";

  return (
    <div 
      className={`bg-[#E6ECF9] ${currentLanguage === 'ar' ? 'font-cairo' : 'font-poppins'}`} 
      dir={currentLanguage === 'ar' ? 'rtl' : 'ltr'}
    >
      <p 
        className='text-[#333333] text-[36px] font-[700] text-center  lg:mx-32 mx-6 lg:px-48 py-16'
        dangerouslySetInnerHTML={{ __html: textContent }}
      />
    </div>
  );
}

export default Section2Home;
