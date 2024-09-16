
import { RiArrowRightLine } from 'react-icons/ri';
import imgicon1 from '../../../assets/images/Landing/cardicon1.svg';
import imgicon2 from '../../../assets/images/Landing/cardicon2.svg';
import imgicon3 from '../../../assets/images/Landing/cardicon3.svg';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

function Section6Home() {
  const items = {
    en: [
      {
        title: 'Increased Visibility',
        description: 'Get discovered by e-commerce SMEs actively seeking your services.',
        src: imgicon1,
      },
      {
        title: 'Simplified Project Management',
        description: 'Manage projects efficiently with built-in collaboration tools.',
        src: imgicon2,
      },
      {
        title: 'Secure Communication',
        description: 'Communicate with clients securely within the platform.',
        src: imgicon3,
      },
    ],
    ar: [
      {
        title: 'زيادة الظهور',
        description: 'اجعل الشركات الصغيرة والمتوسطة التجارية الإلكترونية تكتشف خدماتك بسهولة.',
        src: imgicon1,
      },
      {
        title: 'إدارة المشاريع المبسطة',
        description: 'إدارة المشاريع بكفاءة باستخدام أدوات التعاون المدمجة.',
        src: imgicon2,
      },
      {
        title: 'اتصال آمن',
        description: 'تواصل بأمان مع العملاء من خلال المنصة.',
        src: imgicon3,
      },
    ],
  };


  const { i18n,t } = useTranslation();
  const currentLanguage = i18n.language ||'en';
const currentItems=items[currentLanguage] || items.en


  return (
    <div className={`bg-[#E6ECF9] py-12  ${currentLanguage === 'ar' ? 'font-cairo' : 'font-poppins'}`}  dir={currentLanguage === 'ar' ? 'rtl' : 'ltr'} id='benefits'>
      <div className='grid lg:grid-cols-3 grid-cols-1 gap-5 lg:mx-64 mx-6 '>
        {currentItems?.map((item, key) => (
          <div key={key}>
            <div className='p-6 h-full bg-white shadow-custom rounded-lg'>
              <img src={item.src} alt={item.title}  className=' w-[60px]' />
              <h3 className=' text-3xl text-primary  font-bold  lg:pb-6 pt-2'>{item.title}</h3>
              <p className=' leading-[2] text-lg'>{item.description}</p>
          
              <Link to={"/signup"} className='inline-flex border-[#6161FF] my-5 border-b-[1px] text-primary  items-center gap-2' onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
           
              {t('learnMore')}
              <RiArrowRightLine/>
              </Link>
              </div>
   
          </div>
        ))}
      </div>
    </div>
  );
}

export default Section6Home;
