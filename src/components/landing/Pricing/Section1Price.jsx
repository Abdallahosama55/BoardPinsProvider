import React from "react";
import { useTranslation } from "react-i18next";
import { RiArrowRightLine } from "react-icons/ri";
import { Link } from "react-router-dom";

function Section1Price() {
  const { i18n, t } = useTranslation(); // Access the i18n instance
  const currentLanguage = i18n.language ||'en'; // Get the current language from i18n
  return (
    <div
      className={`flex items-center justify-center w-full pt-12 pb-3 px-12 lg:px-1 ${
        currentLanguage === "ar" ? "font-cairo" : "font-poppins"
      }`}
      dir= { currentLanguage === "ar" ? "rtl" : "ltr"}
    >
      <div>
        <h1 className={`text-[#333333] font-bold text-4xl text-center`}>
          {currentLanguage === "ar"
            ? "جرب Boardpins مجانًا مع فترة تجريبية مجانية لمدة 14 يومًا"
            : "Try Boardpins For Free with a 14 day free trial"}
        </h1>
        <p className={`text-dark font-light text-4xl text-center pb-12 pt-3`}>
          {currentLanguage === "ar"
            ? "وصول فوري | الإلغاء في أي وقت | لا حاجة لبطاقة ائتمان"
            : "Instant access | Cancel anytime | No Credit Card Needed"}
        </p>

        <div className="flex justify-center mb-5">
          <Link to={"/signup"} className="rounded-3xl bg-[#6161FF] text-[#FFFFFF] py-3 px-7 text-md block flex items-center gap-2" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} >
            {t("getStarted")} <RiArrowRightLine />
          </Link>
        </div>
        <h2 className="text-center text-[#676879] mb-12">
          {currentLanguage === "ar"
            ? "لا حاجة لبطاقة ائتمان ✦ وقت غير محدود على الخطة المجانية"
            : "No credit card needed ✦ Unlimited time on Free plan"}
        </h2>
      </div>
    </div>
  );
}

export default Section1Price;
