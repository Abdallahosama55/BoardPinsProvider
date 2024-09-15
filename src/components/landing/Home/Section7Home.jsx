import React from 'react';
import { useTranslation } from 'react-i18next';
import { RiArrowRightLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';

function Section7Home() {
  const { i18n,t } = useTranslation();
const currentLanguage=i18n.language
  return (
    <div className={`bg-[#181B34] flex justify-center items-center ${currentLanguage === 'ar' ? 'font-cairo' : 'font-poppins'}`} dir={currentLanguage === 'ar' ? 'rtl' : 'ltr'}>
      <div className='text-white text-center my-12'>
        <p className='my-3 text-2xl lg:mx-56 leading-[1.8]'>
          {currentLanguage === 'ar' 
            ? 'اختبر البساطة والراحة في العثور على مزودي خدمات موثوقين لأعمالك التجارية الإلكترونية مع'
            : 'Experience the simplicity and convenience of finding verified service providers for your e-commerce business with'} 
          <span className='font-bold'> Board Pins</span>.
        </p>
        <p className='text-sm'>
          {currentLanguage === 'ar' 
            ? 'لا حاجة لبطاقة ائتمان   ✦   وقت غير محدود على الخطة المجانية'
            : 'No credit card needed   ✦   Unlimited time on Free plan'}
        </p>

        <div className='flex justify-center mt-8'>
          <Link to={"/signup"} className="rounded-3xl inline-flex bg-[#6161FF] text-[#FFFFFF] py-2 px-7 text-md items-center gap-2" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} >
            {currentLanguage === 'ar' 
              ? 'ابدأ الآن'
              : 'Get Started'}
            <RiArrowRightLine />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Section7Home;
