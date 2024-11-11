import React from "react";
import right from "../../../assets/images/Landing/div.CuHomeTabs_svgContainer__TQmy5.svg";
import services from "../../../assets/images/Landing/Frame 1171276002.png";
import dashboard from "../../../assets/images/Landing/Frame 1171276001.png";
import Project from "../../../assets/images/Landing/image 65.png";
import Project_icon from "../../../assets/images/Landing/Group 26876.png";
import analytics from "../../../assets/images/Landing/Button.png";
import { FaCheck } from "react-icons/fa6";
import { RiArrowRightLine } from "react-icons/ri";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { FaCheckSquare } from "react-icons/fa";
const featuresList1 = {
  en: [
    "In Progress-Projects",
    "Task management",
    "Requests & approvals",
    "Custom workflows",
  ],
  ar: [
    "مشاريع قيد التنفيذ",
    "إدارة المهام",
    "الطلبات والموافقات",
    "سير العمل المخصص",
  ],
};

const featuresList2 = {
  en: [
    "Analytics and Reporting:Insights on project performance",
    "Detailed reports on client interactions",
    "Track key metrics for business growth",
  ],
  ar: [
    "التحليلات والتقارير: رؤى حول أداء المشاريع",
    "تقارير مفصلة عن تفاعلات العملاء",
    "تتبع المؤشرات الرئيسية لنمو الأعمال",
  ],
};

const featuresList3 = {
  en: [
    "Create and organize projects",
    "Seamless teamwork for your business success",
    "Shared tools, simplified work management",
  ],
  ar: [
    "إنشاء وتنظيم المشاريع",
    "تعاون سلس لنجاح عملك",
    "أدوات مشتركة، إدارة عمل مبسطة",
  ],
};

const SectionCard = ({
  icon,
  title,
  subtitle,
  features,
  buttonColor,
  imgSrc,
  imgAlt,
  currentLanguage,
}) => (
  <div
    className={`p-12 bg-white shadow-custom rounded ${
      currentLanguage === "ar" ? "font-cairo" : "font-poppins"
    }`}
    dir={currentLanguage === "ar" ? "rtl" : "ltr"}
  >
    <h1 className="flex font-bold text-primary text-xl gap-1 items-center">
      <img src={icon} alt="icon" className="w-[40px]" />
      <span className="text-[#486868] font-[600]">{title}</span>
    </h1>
    <h2 className="text-[#333333] font-[600] my-3">{subtitle}</h2>
    <hr className="bg-grey-500 my-5" />
    <ul>
      {features?.map((feature, index) => (
        <li
          key={index}
          className="grid grid-cols-12  items-start gap-2 p-1 text-dark"
        >
          <FaCheck className="rounded-full col-span-1  mt-1  bg-[#1F1F20] text-white" />
          <span className=" col-span-11"> {feature}</span>
        </li>
      ))}
    </ul>
    <div className="flex ">
      <Link
        to={"/signup"}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={`flex ${buttonColor} rounded-3xl  px-6 py-2 items-center text-white text-sm gap-2 my-5`}
      >
        {currentLanguage === "ar" ? "إبدء الأن" : "Get start"}
        <RiArrowRightLine />
      </Link>
    </div>
    <img src={imgSrc} alt={imgAlt} />
  </div>
);

function Section3Home() {
  const { i18n, t } = useTranslation(); // Access the i18n instance
  const currentLanguage = i18n.language || "en"; // Get the current language from i18n

  const features1ToShow = featuresList1[currentLanguage] || featuresList1.en;
  const features2ToShow = featuresList2[currentLanguage] || featuresList2.en;
  const features3ToShow = featuresList3[currentLanguage] || featuresList3.en;

  return (
    <>
      <div
        className={`shadow-custom bg-white rounded lg:mx-24 mx-8 my-12 ${
          currentLanguage === "ar" ? "font-cairo" : "font-poppins"
        }`}
        dir={currentLanguage === "ar" ? "rtl" : "ltr"}
      >
        <div className="grid lg:grid-cols-2 grid-col-1 py-6 px-3">
          <div className="p-4">
            <h1 className="flex font-bold text-primary text-xl gap-1 items-start">
              <FaCheckSquare className="   w-[60px] " size={30} />
              <span className="text-primary font-[600]">
                {currentLanguage === "ar"
                  ? "Board Pins. صفحة رئيسة مخصصة"
                  : "Board Pins. Customized Home page"}
              </span>
            </h1>
            <h2 className="text-dark font-[600] my-3">
              {currentLanguage === "ar"
                ? "خصص صفحتك الرئيسية بناءً على اهتماماتك"
                : "Customize your Home page based on your intersts"}
            </h2>
            <hr className="bg-grey-500 my-5" />
            <h3 className="text-dark text-lg p-4">
              {currentLanguage === "ar" ? "أهم الميزات" : "Top features"}
            </h3>
            <ul>
              {features1ToShow?.map((feature, index) => (
                <li
                  key={index}
                  className="flex items-center gap-2 p-1 text-dark"
                >
                  <FaCheck className="rounded-full bg-[#6161FF] text-white" />
                  {feature}
                </li>
              ))}
            </ul>
            <Link
              to={"/signup"}
              className=" bg-[#6161FF]  inline-flex rounded-3xl px-6 py-3 items-center text-white text-sm gap-2 my-5"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              {t("getStarted")}

              <RiArrowRightLine />
            </Link>
          </div>
          <div>
            <img src={services} alt="Access to Verified Service Providers" />
          </div>
        </div>
      </div>

      <div className="lg:mx-20 my-12 mx-6">
        <div className="grid lg:grid-cols-2 grid-col-1 px-3 gap-12">
          <SectionCard
            icon={analytics}
            title={
              currentLanguage === "ar"
                ? "Board Pins.  لوحة تحكم  "
                : "Board Pins. Dashboard"
            }
            subtitle={
              currentLanguage === "ar"
                ? "احصل على لمحة سريعة عن جميع المشاريع الجارية، والفرص الجديدة، وآخر الاتصالات."
                : "Get a quick snapshot of all ongoing projects, new leads, and recent communications."
            }
            features={features2ToShow}
            buttonColor="bg-[#52CD8F]"
            imgSrc={dashboard}
            imgAlt="dashboard boardpins"
            currentLanguage={currentLanguage}
          />
          <SectionCard
            icon={Project_icon}
            title={
              currentLanguage === "ar"
                ? "Board Pins. أداة لإدارة المشاريع المشتركة"
                : "Board Pins. Shared Project management tool"
            }
            subtitle={
              currentLanguage === "ar"
                ? "تعاون بسلاسة مع العملاء باستخدام أدوات إدارة المشاريع لدينا."
                : "Collaborate seamlessly with clients using our project management tools."
            }
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
