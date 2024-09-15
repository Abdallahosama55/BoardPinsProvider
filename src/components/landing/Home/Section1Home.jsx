import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import illustration from '../../../assets/images/Landing/Group 26874.png';
import search from '../../../assets/images/Landing/Icon  Bank.svg';
import right from '../../../assets/images/Landing/div.CuHomeTabs_svgContainer__TQmy5.svg';
import { RiArrowRightLine } from "react-icons/ri";
import { FaChevronDown } from "react-icons/fa6";
import { Link } from 'react-router-dom';

// Assuming this flag determines whether the content is in Arabic

function Section1Home() {
  const { i18n } = useTranslation(); // Access the i18n instance
  const [showCardsCount, setShowCardsCount] = useState(4);
  const [totalCardsCount] = useState(4); // Number of cards to show each time

  // Data for the service features with language support
  const serviceFeatures = {
    en: [
      {
        title: 'Quality Client Leads',
        description: 'Gain access to a network of e-commerce merchants in need of your services.',
        src: right
      },
      {
        title: 'Robust Project Management Tools',
        description: 'Simplify your workflow with our comprehensive project management features.',
        src: right
      },
      {
        title: 'Exclusive discounts and offer',
        description: 'Take advantage of special discounts and offers available only through our platform, helping you save costs on essential services.',
        src: right
      },
      {
        title: 'Enhanced Visibility',
        description: 'Build a strong profile showcasing your skills, experience, and portfolio',
        src: right
      },
      {
        title: 'Access to Verified Service Providers',
        description: 'Find a comprehensive list of verified service providers in one centralized platform, saving you time and effort in searching for reliable partners.',
        src: right
      },
      {
        title: 'Streamlined Collaboration',
        description: 'Work with clients in a unified workspace, ensuring smooth communication and project execution.',
        src: right
      },
      
      // Add more features as needed
    ],
    ar: [
      {
        title: 'الوصول إلى مقدمي الخدمات المعتمدين',
        description: 'اعثر على قائمة شاملة لمقدمي الخدمات المعتمدين في منصة مركزية واحدة، مما يوفر لك الوقت والجهد في البحث عن شركاء موثوقين.',
        src: right
      },
      {
        title: 'تبسيط عملية اختيار الموردين',
        description: 'قارن بسهولة بين مقدمي الخدمات المختلفين وعروضهم، مما يتيح لك اتخاذ قرارات مدروسة لعملك في التجارة الإلكترونية.',
        src: right
      },
      {
        title: 'خصومات وعروض حصرية',
        description: 'استفد من الخصومات والعروض الخاصة المتاحة فقط من خلال منصتنا، مما يساعدك على توفير التكاليف على الخدمات الأساسية.',
        src: right
      },
      {
        title: 'ضمان الجودة',
        description: 'تضمن عملية التحقق لدينا أن جميع مقدمي الخدمات المدرجين يلبون معايير الجودة المحددة، مما يوفر لك راحة البال.',
        src: right
      },
      // Add more features as needed
    ]
  };

  // Example of using the data based on the current language
  
  const currentLanguage = i18n.language ||'en'; // Get the current language from i18n
  const featuresToShow = serviceFeatures[currentLanguage];

  // Function to show more cards
  const showMoreCards = () => {
    setShowCardsCount(prevCount => prevCount + totalCardsCount);
  };

  // Function to toggle showing all cards
  const toggleShowAllCards = () => {
    setShowCardsCount(showCardsCount === 4 ? 8 : 4); // Toggle between showing 4 and 8 cards
  };

  return (
    <div className={`mx-6 lg:mx-24 ${currentLanguage === "ar" ? 'font-cairo' : 'font-poppins'}`}  dir={currentLanguage === "ar" ?"rtl" :"ltr"}>
      {/* Section 1 */}

      <div className="flex lg:flex-row flex-col   bg  w-full py-12 gap-2">
   
        <div className=" lg:ms-56 flex-grow bg  py-5 md:order-2 order-2">
          <h1 className="font-[700] text-center leading-[4rem] text-[48px] text-[#333333] ">
            {currentLanguage === "ar" ? "نمو عملك في الخدمة مع منصتنا الشاملة" : "Grow Your Service Business with Our All-in-One Platform"}
          </h1>
          <p className="text-md text-center py-3 mt-5">
            {currentLanguage === "ar" ? "تواصل مع التجار الإلكترونيين وتعاون بسهولة في مشاريع مثيرة" : "Connect with E-Commerce Merchants and Collaborate Effortlessly on Exciting Projects"}
          </p>

          <div className="bg-white rounded py-3 px-5 m-5 flex">
            <input placeholder={currentLanguage === "ar" ? "ماذا تبحث عنه؟" : "What are you looking for?"} className="w-full h-100 outline-0" />
            <img src={search} alt="Search Icon"  />
          </div>
        </div>
        
        <div className="flex justify-center  lg:max-w-[300px] items-center w-full md:order-3 order-1">
          <img src={illustration} alt="Illustration" className={ currentLanguage === "ar" ?`md:w-auto w-[200px] rotate-180` :`md:w-auto w-[200px] `} />
        </div>
        
      </div>

      {/* Section 2 - Service Features */}
      <div className="grid lg:grid-cols-4 grid-cols-1 py-4 gap-6 justify-center">
        {featuresToShow?.slice(0, showCardsCount)?.map((feature, index) => (
          <div key={index} className="flex rounded-3xl bg-white p-3 gap-3">
            <div className='flex items-start gap-3'>
              <img src={feature.src} alt="Right Icon" className='w-[100px]' />
            </div>
            <div>
              <h3 className="font-bold">{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Show more button */}
      <div className='text-center flex justify-center w-full'>
        <div className='w-full'>
          <div className='flex justify-center'>
            <button onClick={showMoreCards} className='text-[#6161FF] block px-7 my-6 text-lg flex gap-2 items-center'>
              {currentLanguage === "ar" ? "عرض المزيد" : "Show more"}
              <FaChevronDown />
            </button>
          </div>
          <div className='flex justify-center mb-12'>
          <Link
    to="/signup"
    className="rounded-3xl bg-[#6161FF] text-[#FFFFFF] py-2 px-7 text-md block flex items-center gap-2"
    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
  >
    {currentLanguage === "ar" ? "ابدأ الآن" : "Get Started"} <RiArrowRightLine />
  </Link>
          </div>
          <h2 className='text-center text-[#676879] mb-12'>
            {currentLanguage === "ar" ? "لا تحتاج إلى بطاقة ائتمان ✦ وقت غير محدود في الخطة المجانية" : "No credit card needed ✦ Unlimited time on Free plan"}
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Section1Home;
