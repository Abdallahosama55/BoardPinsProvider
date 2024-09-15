import React from 'react';
import right from '../../../assets/images/Landing/div.CuHomeTabs_svgContainer__TQmy5.svg';
import services from '../../../assets/images/Landing/Frame 1171276002.png';
import dashboard from '../../../assets/images/Landing/Frame 1171276001.png';
import Project from '../../../assets/images/Landing/image 65.png';
import Project_icon from '../../../assets/images/Landing/Group 26876.png';
import analytics from '../../../assets/images/Landing/Button.png';
import { FaCheck } from "react-icons/fa6";
import { RiArrowRightLine } from "react-icons/ri";
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const featuresList1 = {
  en: [
    'Searching for verified service providers',
    'Task management',
    'Requests & approvals',
    'Custom workflows'
  ],
  ar: [
    "البحث عن مقدمي خدمات موثوقين",
    "إدارة المهام",
    "الطلبات والموافقات",
    "سير العمل المخصص"
  ]
};

const featuresList2 = {
  en: [
    'Boost sales and conversions with your AI e-commerce consultant',
    'Gain data-driven advice to optimize your ecommerce strategy',
    'Unlock your ecommerce potential with the power of AI'
  ],
  ar: [
    "زيادة المبيعات والتحويلات مع مستشار التجارة الإلكترونية الخاص بك",
    "احصل على نصائح قائمة على البيانات لتحسين استراتيجيتك",
    "افتح إمكانات التجارة الإلكترونية الخاصة بك باستخدام الذكاء الاصطناعي"
  ]
};

const featuresList3 = {
  en: [
    'Collaborate effortlessly: Your one-stop shop for managing e-commerce projects.',
    'Seamless teamwork for your business success',
    'Shared tools, simplified work management'
  ],
  ar: [
    "تعاون بدون مجهود: مركز إدارة مشاريع التجارة الإلكترونية الخاص بك",
    "عمل جماعي سلس لنجاح أعمالك",
    "أدوات مشتركة، إدارة العمل بشكل مبسط"
  ]
};

const SectionCard = ({ icon, title, subtitle, features, buttonColor, imgSrc, imgAlt  ,currentLanguage}) => (
  <div className={`p-12 bg-white shadow-custom rounded ${currentLanguage === 'ar' ? 'font-cairo' : 'font-poppins'}`}  dir={currentLanguage === 'ar' ? 'rtl' : 'ltr'}>
    <h1 className='flex font-bold text-primary text-xl gap-1 items-center'>
      <img src={icon} alt="icon" className='w-[40px]' />
      <span className='text-[#486868] font-[600]'>{title}</span>
    </h1>
    <h2 className='text-[#333333] font-[600] my-3'>{subtitle}</h2>
    <hr className='bg-grey-500 my-5' />
    <ul>
      {features?.map((feature, index) => (
        <li key={index} className='flex items-center gap-2 p-1 text-dark'>
          <FaCheck className='rounded-full bg-[#1F1F20] text-white' />
          {feature}
        </li>
      ))}
    </ul>
    <div className="flex ">
    <Link to={"/signup"}     onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className={`flex ${buttonColor} rounded-3xl  px-6 py-2 items-center text-white text-sm gap-2 my-5`}>
     {currentLanguage==="ar"?"إبدء الأن" :"Get start"}
      <RiArrowRightLine />
    </Link>

    </div>
    <img src={imgSrc} alt={imgAlt} />
  </div>
);

function Section3Home() {
  const { i18n, t } = useTranslation(); // Access the i18n instance
  const currentLanguage = i18n.language ||'en'; // Get the current language from i18n
  
  const features1ToShow = featuresList1[currentLanguage];
  const features2ToShow = featuresList2[currentLanguage];
  const features3ToShow = featuresList3[currentLanguage];

  return (
    <>
      <div className={`shadow-custom bg-white rounded lg:mx-24 mx-8 my-12 ${currentLanguage === "ar" ? 'font-cairo' : 'font-poppins'}`} dir={currentLanguage === "ar" ? "rtl" : "ltr"}>
        <div className='grid lg:grid-cols-2 grid-col-1 py-6 px-3'>
          <div className='p-4'>
            <h1 className='flex font-bold text-primary text-xl gap-1 items-center'>
              <img src={right} alt="right_icon" />
              <span className='text-primary font-[600]'>
                {currentLanguage === 'ar' ? "عن طريق Board Pins. البحث عن مقدمي خدمات موثوقين" : "Board Pins. Searching for verified Service providers"}
              </span>
            </h1>
            <h2 className='text-dark font-[600] my-3'>
              {currentLanguage === 'ar' ? "البحث عن مقدمي خدمات موثوقين" : "Access to Verified Service Providers"}
            </h2>
            <hr className='bg-grey-500 my-5' />
            <h3 className='text-dark text-lg p-4'>{currentLanguage === 'ar' ? 'أهم الميزات' : 'Top features'}</h3>
            <ul>
              {features1ToShow?.map((feature, index) => (
                <li key={index} className='flex items-center gap-2 p-1 text-dark'>
                  <FaCheck className='rounded-full bg-[#6161FF] text-white' />
                  {feature}
                </li>
              ))}
            </ul>
            <Link to={"/signup"} className=' bg-[#6161FF]  inline-flex rounded-3xl px-6 py-3 items-center text-white text-sm gap-2 my-5'     onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              {t('getStarted')}
             
              <RiArrowRightLine />
            </Link>
          </div>
          <div>
            <img src={services} alt="Access to Verified Service Providers" />
          </div>
        </div>
      </div>

      <div className='lg:mx-20 my-12 mx-6'>
        <div className='grid lg:grid-cols-2 grid-col-1 px-3 gap-12'>
          <SectionCard
            icon={analytics}
            title={currentLanguage === 'ar' ? 'Board Pins. مساعد الذكاء الاصطناعي' : 'Board Pins. AI Assistant'}
            subtitle={currentLanguage === 'ar' ? 'مستشار الأعمال بالذكاء الاصطناعي الخاص بك' : 'Your AI business consultant, ready to help you grow your e-commerce business.'}
            features={features2ToShow}
            buttonColor="bg-[#52CD8F]"
            imgSrc={dashboard}
            imgAlt="dashboard boardpins"
            currentLanguage={currentLanguage}
            
          />
          <SectionCard
            icon={Project_icon}
            title={currentLanguage === 'ar' ? 'Board Pins. أداة إدارة المشاريع المشتركة' : 'Board Pins. Shared Project management tool'}
            subtitle={currentLanguage === 'ar' ? 'أتمتة دورات المبيعات الخاصة بك' : 'Automate your sales cycles to close more deals'}
            features={features3ToShow}
            buttonColor="bg-[#52CD8F]"
            imgSrc={Project}
            imgAlt="Project management"
            currentLanguage={currentLanguage}

          />
        </div>
      </div>
    </>
  );
}

export default Section3Home;
