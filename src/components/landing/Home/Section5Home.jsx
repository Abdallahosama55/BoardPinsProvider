import React, { useState } from "react";
import upload from "../../../assets/images/Landing/download 9.svg";
import search from "../../../assets/images/Landing/download 21.svg";
import searchgroup from "../../../assets/images/Landing/search-visual.svg";
import icon22 from "../../../assets/images/Landing/download 22.svg";
import icon33 from "../../../assets/images/Landing/download 23.svg";
import icon44 from "../../../assets/images/Landing/discount-percent-coupon--shop-shops-stores-discount-coupon-voucher.svg";
import icon55 from "../../../assets/images/Landing/graph-bar-increase--up-product-performance-increase-arrow-graph-business-chart.svg";
import step1Icon from "../../../assets/images/Landing/Picture → board_icon.svg.svg";
import step1Img from "../../../assets/images/Landing/div.jsx-856369523 (1).png";
import step2Icon from "../../../assets/images/Landing/step2icon.svg";
import step2Img from "../../../assets/images/Landing/div.jsx-856369523 (3).png";
import step3Img from "../../../assets/images/Landing/step3.png";
import step4Img from "../../../assets/images/Landing/step4.png";

import step5Img from "../../../assets/images/Landing/step5.png";
import step6Img from "../../../assets/images/Landing/step6.png";
import step7Img from "../../../assets/images/Landing/step7.png";
import { RiArrowRightLine } from "react-icons/ri";
import { useTranslation } from "react-i18next";

function Section5Home() {
  const [selectedStep, setSelectedStep] = useState(1);

  const handleStepClick = (stepNumber) => {
    setSelectedStep(stepNumber);
  };

  const stepperItems = [
    { title: 1, src: upload },
    { title: 2, src: searchgroup },
    { title: 3, src: search },
    { title: 4, src: icon22 },
    { title: 5, src: icon33 },
  
  ];

  const stepContents = {
    en: [
      {
        step: 1,
        imgSrc: step1Img,
        iconSrc: step1Icon,
        title: "Get Started – Sign Up & Sign In",
        description:
          "Join our community with a quick sign-up! Already a member? Just sign in to access your dashboard.",
      },
      {
        step: 2,
        imgSrc: step2Img,
        iconSrc: step2Icon,
        title: "Build Your Profile – Showcase Your Business",
        description:
          "Tell us about your business! Fill out your profile with details about your services, expertise, upload your legal documents, and what makes you stand out. This profile is your digital storefront, so make it shine!",
      },
      {
        step: 3,
        imgSrc: step3Img,
        iconSrc: search,
        title: "Submit for Review – Quality First!",
        description:
          "Hit submit, and our team will take it from there. Every profile goes through a fast 24-hour review to ensure we’re keeping standards high and consistent across the platform.",
      },
      {
        step: 4,
        imgSrc: step4Img,
        iconSrc:icon44,
        title: "Go Live – List Your Services",
        description:
          "Once approved, you’re in! Add your services with descriptions, pricing, and any extras to attract merchants looking for exactly what you offer.",
      },
      {
        step: 5,
        imgSrc: step5Img,
        iconSrc: icon55,
        title: "Get Connected – Let Merchants Find You",
        description:
          "Your profile is now searchable! Merchants can discover and reach out to you directly, giving you new opportunities for growth and partnerships.",
      },
    ],
    ar: [
      {
        step: 1,
        imgSrc: step1Img,
        iconSrc: step1Icon,
        title: "ابدأ – التسجيل وتسجيل الدخول",
        description:
          "انضم إلى مجتمعنا بتسجيل سريع! هل أنت عضو بالفعل؟ فقط قم بتسجيل الدخول للوصول إلى لوحة التحكم الخاصة بك.",
      },
      {
        step: 2,
        imgSrc: step2Img,
        iconSrc: step2Icon,
        title: "أنشئ ملفك الشخصي – اعرض عملك",
        description:
          "أخبرنا عن عملك! قم بملء ملفك الشخصي بتفاصيل حول خدماتك وخبراتك، وارفع مستنداتك القانونية وميز نفسك. هذا الملف هو واجهتك الرقمية، لذا اجعلها لامعة!",
      },
      {
        step: 3,
        imgSrc: step3Img,
        iconSrc: search,
        title: "أرسل للمراجعة – الجودة أولاً!",
        description:
          "اضغط على 'إرسال'، وفريقنا سيتولى الأمر. يمر كل ملف شخصي بمراجعة سريعة تستغرق 24 ساعة لضمان الحفاظ على معايير عالية ومتسقة عبر المنصة.",
      },
      {
        step: 4,
        imgSrc: step4Img,
        iconSrc: icon44,
        title: "الانطلاق – أضف خدماتك",
        description:
          "بمجرد الموافقة، أصبحت في النظام! أضف خدماتك مع وصف، تسعير، وأي إضافات لجذب التجار الذين يبحثون عن ما تقدمه بالضبط.",
      },
      {
        step: 5,
        imgSrc: step5Img,
        iconSrc: icon55,
        title: "احصل على التواصل – دع التجار يجدونك",
        description:
          "ملفك الشخصي الآن قابل للبحث! يمكن للتجار اكتشافك والتواصل معك مباشرةً، مما يتيح لك فرصاً جديدة للنمو والشراكات.",
      },
    ],
  };
  
  const { i18n, t } = useTranslation(); // Access the i18n instance
  // Example of using the data based on the current language
  const currentLanguage = i18n.language ||'en'; // Get the current language from i18n
  const stepContentsItem = stepContents[currentLanguage] || stepContents.en ;

  return (
    <div
      className={`lg:mx-64 mx-6  ${
        currentLanguage === "ar" ? "font-cairo" : "font-poppins"
      }`}
      dir={currentLanguage === "ar" ? "rtl" : "ltr"}
    >
      <h3 className="text-dark text-center font-bold text-4xl mt-12 mb-3" id="howUsage">
        {currentLanguage === "ar" ? "كيف يعمل" : "How it works"}
      </h3>
      <p className="text-center text-dark mb-6">
        {currentLanguage === "ar"
          ? "قم ببناء سير العمل المثالي الخاص بك بسهولة باستخدام مكونات Boardpins.com."
          : "Easily build your ideal workflow with Boardpins.com building blocks."}
      </p>

      <div className="w-full flex justify-center">
        <div className="grid lg:grid-cols-5 grid-cols-4 mt-2 lg:gap-6 shadow-custom pt-3 text-[#0F1048] bg-[#FFFFFF01]">
          {stepperItems?.map((step) => (
            <div
              key={step.title}
              className={`px-6 flex lg:my-0  my-4 flex-col items-center cursor-pointer ${
                step.title === selectedStep
                  ? "border-b-[5px] border-[#5034FF] rounded-md text-[#5034FF]"
                  : ""
              }`}
              onClick={() => handleStepClick(step.title)}
            >
              <img
                src={step.src}
                alt={`Step ${step.title} Icon`}
                className="mb-2"
              />
              <h3 className="lg:text-[14px]  text-[12px]">
                {t("step")} {step.title}
              </h3>
            </div>
          ))}
        </div>
      </div>

      <div>
        {stepContentsItem?.map(
          (content) =>
            selectedStep === content.step && (
              <div
                key={content.step}
                className={` ${
                  content.step === selectedStep ? "block" : "hidden"
                } grid lg:grid-cols-2 grid-cols-1 items-center justify-center gap-4`}
              >
                <div>
                  <img
                    src={content.imgSrc}
                    alt={content.title}
                    className="w-full"
                  />
                </div>
                <div className="mx-6">
                  <h2 className="flex items-center  gap-3 text-primary text-lg my-5">
                    <img
                      src={content.iconSrc}
                      alt={`${content.title} Icon`}
                      className="w-[30px]"
                    />{" "}
                    {content.title}
                  </h2>
                  <p className="text-dark text-lg mb-12">
                    {content.description}
                  </p>
                </div>
              </div>
            )
        )}
      </div>
    </div>
  );
}

export default Section5Home;
