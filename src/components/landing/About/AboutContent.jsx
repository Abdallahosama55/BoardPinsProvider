import React from 'react';

function AboutContent({ currentLanguage }) {
  // Define content based on the current language
  const content = {
    en: {
      title: "“Showcasing Your Expertise, Building Your Legacy”",
      paragraph: `
        Do you possess exceptional skills in design, marketing, or another service area, but struggle to find consistent, high-value projects? We get it. At Board Pins, we believe your talent deserves recognition and reward.

        That's why we built a platform specifically designed for service providers like you. We connect you with a network of thriving e-commerce businesses actively seeking your expertise.

        Here's what sets us apart:
        - Effortless project discovery: Browse current projects and submit proposals with ease.
        - Seamless communication: Collaborate effectively with merchants directly through our platform.
        - Secure, on-time payments: Focus on delivering exceptional service, knowing you'll be fairly compensated.
        - Building your reputation: Showcase your skills and experience, garnering positive reviews to solidify your standing.

        Board Pins is your launchpad to success. Join a community that values your expertise and empowers you to build lasting partnerships. Together, let's rewrite the ecommerce landscape, one exceptional service at a time.
      `,
    },
    ar: {
      title: "“عرض خبراتك، وبناء إرثك”",
      paragraph: `
        هل تمتلك مهارات استثنائية في التصميم، أو التسويق، أو في مجال خدمة آخر، ولكن تجد صعوبة في العثور على مشاريع ذات قيمة عالية باستمرار؟ نحن نفهم ذلك. في Board Pins، نعتقد أن موهبتك تستحق التقدير والمكافأة.

        لهذا السبب أنشأنا منصة مصممة خصيصًا لمقدمي الخدمات مثلك. نحن نربطك بشبكة من الأعمال التجارية الإلكترونية الناجحة التي تبحث بنشاط عن خبراتك.

        إليك ما يميزنا:
        - اكتشاف المشاريع بسهولة: تصفح المشاريع الحالية وقدم العروض بكل سهولة.
        - التواصل السلس: تعاون بفعالية مع التجار مباشرة من خلال منصتنا.
        - مدفوعات آمنة وفي الوقت المحدد: ركز على تقديم خدمة استثنائية، مع العلم أنك ستحصل على تعويض عادل.
        - بناء سمعتك: اعرض مهاراتك وخبراتك، واحصل على تقييمات إيجابية لتعزيز مكانتك.

        Board Pins هي نقطة انطلاقك نحو النجاح. انضم إلى مجتمع يقدّر خبراتك ويتيح لك بناء شراكات دائمة. معًا، دعونا نعيد كتابة مشهد التجارة الإلكترونية، خدمة استثنائية في كل مرة.
      `,
    },
  };

  const { title, paragraph } = content[currentLanguage];

  return (
    <div className={`flex items-center justify-center  ${currentLanguage === "ar" ? 'font-cairo' : 'font-poppins'}`} dir= {currentLanguage === "ar" ? 'rtl' : 'ltr'}>
      <div className='pb-24'>
        <h2 className='font-bold text-3xl text-dark py-12'>{title}</h2>
        <p className='text-lg'>
          {paragraph.split('\n')?.map((line, index) => (
            <React.Fragment key={index}>
              {line}
              <br />
            </React.Fragment>
          ))}
        </p>
      </div>
    </div>
  );
}

export default AboutContent;
