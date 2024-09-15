import React from 'react';
import AccordionList from '../../provider/atoms/commonatoms/AccordionList';
import { useTranslation } from 'react-i18next';

function Section3Price() {
  const { i18n } = useTranslation(); // Access the i18n instance
  const currentLanguage = i18n.language ||'en'; // Get the current language from i18n

  // Define sections with both English and Arabic content
  const sections = {
    en: [
      {
        title: 'What is Board Pins?',
        content: 'Content for section 1',
      },
      {
        title: 'Is it free to sign up for Board Pins?',
        content: 'Content for section 2',
      },
      {
        title: 'What types of service providers can I find on Board Pins?',
        content: 'Can I contact service providers directly?',
      },
      {
        title: 'Can I contact service providers directly?',
        content: 'Can I contact service providers directly?',
      },
      {
        title: 'How do I collaborate with service providers on Board Pins?',
        content: 'Can I contact service providers directly?',
      },
      {
        title: 'Is communication with service providers secure?',
        content: 'Can I contact service providers directly?',
      },
      {
        title: 'Is my business information secure on Board Pins?',
        content: 'Can I contact service providers directly?',
      },
      {
        title: 'How do I pay service providers?',
        content: 'Can I contact service providers directly?',
      },
      {
        title: 'Is my business information secure on Board Pins?',
        content: 'Can I contact service providers directly?',
      },
      {
        title: 'Can I see reviews of service providers?',
        content: 'Can I contact service providers directly?',
      },
      {
        title: 'What happens after a project is completed?',
        content: 'Can I contact service providers directly?',
      },
    ],
    ar: [
      {
        title: 'ما هو Board Pins؟',
        content: 'محتوى للقسم 1',
      },
      {
        title: 'هل التسجيل في Board Pins مجاني؟',
        content: 'محتوى للقسم 2',
      },
      {
        title: 'ما أنواع مزودي الخدمات الذين يمكنني العثور عليهم في Board Pins؟',
        content: 'هل يمكنني الاتصال بمزودي الخدمة مباشرة؟',
      },
      {
        title: 'هل يمكنني الاتصال بمزودي الخدمة مباشرة؟',
        content: 'هل يمكنني الاتصال بمزودي الخدمة مباشرة؟',
      },
      {
        title: 'كيف أتعامل مع مزودي الخدمة على Board Pins؟',
        content: 'هل يمكنني الاتصال بمزودي الخدمة مباشرة؟',
      },
      {
        title: 'هل التواصل مع مزودي الخدمة آمن؟',
        content: 'هل يمكنني الاتصال بمزودي الخدمة مباشرة؟',
      },
      {
        title: 'هل معلومات أعمالي آمنة على Board Pins؟',
        content: 'هل يمكنني الاتصال بمزودي الخدمة مباشرة؟',
      },
      {
        title: 'كيف أدفع لمزودي الخدمة؟',
        content: 'هل يمكنني الاتصال بمزودي الخدمة مباشرة؟',
      },
      {
        title: 'هل معلومات أعمالي آمنة على Board Pins؟',
        content: 'هل يمكنني الاتصال بمزودي الخدمة مباشرة؟',
      },
      {
        title: 'هل يمكنني رؤية مراجعات مزودي الخدمة؟',
        content: 'هل يمكنني الاتصال بمزودي الخدمة مباشرة؟',
      },
      {
        title: 'ماذا يحدث بعد انتهاء المشروع؟',
        content: 'هل يمكنني الاتصال بمزودي الخدمة مباشرة؟',
      },
    ],
  };

  // Get the sections based on the current language
  const currentSections = sections[currentLanguage] || sections.en;

  return (
    <div>
      <section className={`py-12 lg:mx-24 mx-6 ${currentLanguage === 'ar' ? 'font-cairo' : 'font-poppins'}`} dir={currentLanguage === 'ar' ? 'rtl' : 'ltr'}>
        <h2 className="text-[2.6rem] text-[#1E1E1E] text-center opacity-[90] py-5 font-[500]">
          {currentLanguage === 'ar' ? 'الأسئلة الشائعة' : 'Frequently Asked Questions'}
        </h2>
        <AccordionList sections={currentSections} />
      </section>
    </div>
  );
}

export default Section3Price;
