import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import illustration from '../../../assets/images/Landing/Group 26874.png';
import search from '../../../assets/images/Landing/Icon  Bank.svg';
import right from '../../../assets/images/Landing/div.CuHomeTabs_svgContainer__TQmy5.svg';
import { RiArrowRightLine } from "react-icons/ri";
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";
import { Link } from 'react-router-dom';

function Section1Home() {
  const { i18n } = useTranslation();
  const [showCardsCount, setShowCardsCount] = useState(4);
  const [totalCardsCount] = useState(4);

  const serviceFeatures = {
    en: [
      { title: 'Quality Client Leads', description: 'Gain access to a network of e-commerce merchants in need of your services.', src: right },
      { title: 'Robust Project Management Tools', description: 'Simplify your workflow with our comprehensive project management features.', src: right },
      { title: 'Exclusive discounts and offer', description: 'Take advantage of special discounts and offers available only through our platform.', src: right },
      { title: 'Enhanced Visibility', description: 'Build a strong profile showcasing your skills, experience, and portfolio.', src: right },
      { title: 'Empower Your Service Business', description: 'Board Pins connects you with a network of established and growing e-commerce SMEs seeking your expertise.', src: right },
      { title: 'Showcase Your Skills', description: 'List your services, highlight your experience, and showcase your portfolio to attract the right clients.', src: right },
      { title: "Real-Time Communication", description: "Built-in chat functionality allows you to have clear and instant communication with your clients.", src: right },
      { title: "Grow with Confidence", description: "Find recurring projects, build strong client relationships, and scale your service business to new heights with Board Pins.", src: right }
    ],
    ar: [
      { title: 'جودة العملاء المحتملين', description: 'احصل على وصول إلى شبكة من التجار الإلكترونيين الذين يحتاجون إلى خدماتك.', src: right },
      { title: 'أدوات إدارة المشاريع المتكاملة', description: 'قم بتبسيط سير العمل الخاص بك باستخدام ميزات إدارة المشاريع الشاملة لدينا.', src: right },
      { title: 'خصومات وعروض حصرية', description: 'استفد من الخصومات والعروض الخاصة المتاحة فقط من خلال منصتنا.', src: right },
      { title: 'تعزيز الرؤية', description: 'ابنِ ملفًا قويًا يعرض مهاراتك وخبرتك ومحفظة أعمالك.', src: right },
      { title: 'تمكين عملك في مجال الخدمات', description: 'توصلك "Board Pins" بشبكة من الشركات الصغيرة والمتوسطة التي تتطلب خبرتك.', src: right },
      { title: 'عرض مهاراتك', description: 'اعرض خدماتك، أبرز خبراتك، وعرض محفظة أعمالك لجذب العملاء المناسبين.', src: right },
      { title: "الاتصال في الوقت الحقيقي", description: "تتيح لك وظيفة الدردشة المدمجة الاتصال الفوري والواضح مع عملائك.", src: right },
      { title: "تنمية عملك بثقة", description: "اعثر على مشاريع متكررة، وابن علاقات قوية مع العملاء، وقم بتوسيع عملك إلى مستويات جديدة مع 'Board Pins'.", src: right }
    ]
  };

  const currentLanguage = i18n.language || 'en';
  const featuresToShow = serviceFeatures[currentLanguage] || serviceFeatures.en ;

  // Function to toggle between showing 4 and 8 cards
  const toggleShowAllCards = () => {
    setShowCardsCount(showCardsCount === 4 ? 8 : 4);
  };

  return (
    <div className={`mx-6 lg:mx-24 ${currentLanguage === "ar" ? 'font-cairo' : 'font-poppins'}`} dir={currentLanguage === "ar" ? "rtl" : "ltr"}>
      {/* Section 1 */}
      <div className={`flex lg:flex-row flex-col bg w-full py-12 gap-2`}>
        <div className={` ${currentLanguage === "ar" ? "lg:me-56" : "lg:ms-56"} flex-grow bg py-5 md:order-2 order-2`}>
          <h1 className="lg:font-[800] font-[700] text-center lg:leading-[3.5rem] md:text-[38px]  text-[32px]  text-[#333333]">
            {currentLanguage === "ar" ? "نمو عملك في الخدمة مع منصتنا الشاملة" : "Grow Your Service Business with Our All-in-One Platform"}
          </h1>
          <p className="text-md text-center py-3 mt-5">
            {currentLanguage === "ar" ? "تواصل مع التجار الإلكترونيين وتعاون بسهولة في مشاريع مثيرة" : "Connect with E-Commerce Merchants and Collaborate Effortlessly on Exciting Projects"}
          </p>
          <div className="bg-white rounded py-3 px-5 m-5 flex">
            <input placeholder={currentLanguage === "ar" ? "ماذا تبحث عنه؟" : "What are you looking for?"} className="w-full h-100 outline-0" />
            <img src={search} alt="Search Icon" />
          </div>
        </div>

        <div className={`lg:flex hidden justify-center  lg:max-w-[300px] items-center w-full  order-1 ${currentLanguage === "ar" ? "md:order-1" : "md:order-3"}`}>
          <img src={illustration} alt="Illustration" className={currentLanguage === "ar" ? `md:w-auto w-[200px] ` : `md:w-auto w-[200px]`} />
        </div>
      </div>

      {/* Section 2 - Service Features */}
      <div className={`grid lg:grid-cols-4 grid-cols-1 gap-6 justify-center transition-max-height duration-500 ease-in-out`} style={{ maxHeight: showCardsCount === 4 ? '500px' : '1000px', overflow: 'hidden' }}>
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

      {/* Toggle Show more/Show less button */}
      <div className='text-center flex justify-center w-full'>
        <div className='w-full'>
          <div className='flex justify-center'>
            <button onClick={toggleShowAllCards} className='text-[#6161FF]  px-7 my-6 text-lg flex gap-2 items-center'>
              {showCardsCount === 4 ? (currentLanguage === "ar" ? "عرض المزيد" : "Show more") : (currentLanguage === "ar" ? "عرض أقل" : "Show less")}
              {showCardsCount === 4 ? <FaChevronDown /> : <FaChevronUp />}
            </button>
          </div>
          <div className='flex justify-center mb-12'>
            <Link
              to="/signup"
              className="rounded-3xl bg-[#6161FF] text-[#FFFFFF] py-2 px-7 text-md  flex items-center gap-2"
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
