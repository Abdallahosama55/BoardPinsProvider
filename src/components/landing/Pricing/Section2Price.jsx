import React, { useState, useEffect, useRef } from "react";
import PlanCard from "../../provider/Upgrage/PlanPriceCard";
import { useTranslation } from "react-i18next";
import { IoIosArrowDown } from "react-icons/io";
import { plans } from "../../../utils/helpers/constants";

function Section2Price() {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language ||'en';

  const [selectedPlan, setSelectedPlan] = useState("Monthly");
  const [selectedPlanType, setSelectedPlanType] = useState("Business");
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(""); // Store selected radio value

  const formRef = useRef(null); // Ref for form
  const buttonRef = useRef(null); // Ref for button

  const toggleFormVisibility = () => {
    setIsFormVisible(!isFormVisible);
  };

  const categoriesBussinessplan = {
    en: [
      "Factories",
      "Payment gateways",
      "Bazzars",
      "Shipping Companies",
      "Marketing Agencies",
      "Legal Firms",
      "Legal Accounting firms",
      "Suppliers",
    ],
    ar: [
      "مصانع",
      "بوابات الدفع",
      "بازارات",
      "شركات الشحن",
      "وكالات التسويق",
      "شركات قانونية",
      "مكاتب المحاسبة القانونية",
      "الموردين",
    ],
  };

  // Detect clicks outside the form and button
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        formRef.current &&
        !formRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setIsFormVisible(false); // Hide the form
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [formRef, buttonRef]);

  const currentPlans =
  plans[currentLanguage] && plans[currentLanguage][selectedPlanType]
    ? plans[currentLanguage][selectedPlanType]
    : plans.en[selectedPlanType] || {};

  const getPrice = (plan) => {
    return selectedPlan === "Monthly" ? plan.monthlyPrice : plan.annualPrice;
  };

  // Handle radio button change and submit form
  const handleRadioChange = (e) => {
    setSelectedCategory(e.target.value);

    // Simulate form submission
    console.log("Selected category:", e.target.value);
  
  };

  return (
    <div
      className={`mt-12 lg:mx-24 mx-6 ${
        currentLanguage === "ar" ? "font-cairo" : "font-poppins"
      }`}
      dir={currentLanguage === "ar" ? "rtl" : "ltr"}
    >
      <header className="flex lg:flex-row flex-wrap w-full gap-3">
        <div className="flex-grow flex gap-3">
          <div className="relative">
            <button
              ref={buttonRef}
              className={`min-w-[165px] px-3 py-2 font-[500] flex items-center justify-between text-[#6161FF] shadow-custom bg-white rounded-lg ${
                currentLanguage === "ar" ? "font-cairo" : "font-poppins"
              }`}
              onClick={toggleFormVisibility}
            >
              {currentLanguage === "ar" ? "الأعمال" : "Business"}
              <IoIosArrowDown color="#6161FF" />
            </button>

            {isFormVisible && (
              <form
                ref={formRef}
                className="bg-white flex flex-col gap-1 font-semibold shadow-custom rounded-lg min-h-[160px] px-4 py-2 mt-1 text-[10px] absolute z-50 min-w-[150px]"
              >
                {categoriesBussinessplan[currentLanguage]?.map((label, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <input
                      type="radio"
                      id={label}
                      name="planType"
                      value={label}
                      onChange={handleRadioChange} // Trigger on radio change
                    />
                    <label htmlFor={label}>{label}</label>
                  </div>
                ))}
              </form>
            )}
          </div>

          <button
            className={`px-5 py-2 font-[500] rounded-sm ${
              selectedPlanType === "Influencer"
                ? "border-b-[#6161FF] border-b-[4px] text-[#6161FF]"
                : " text-dark"
            }`}
            onClick={() => setSelectedPlanType("Influencer")}
          >
            {currentLanguage === "ar"
              ? " مؤثر / اعمال حرة    "
              : "Freelancer/Influencer"}
          </button>
        </div>

        <button
          className={`px-5 py-2 font-[500] rounded-3xl ${
            selectedPlan === "Monthly"
              ? "bg-[#6161FF] text-[#FDFDFD]"
              : "bg-[#E8E8E8] text-[#1E1E1E]"
          }`}
          onClick={() => setSelectedPlan("Monthly")}
        >
          {currentLanguage === "ar" ? "شهري" : "Monthly"}
        </button>

        <button
          className={`px-5 py-2 font-[500] rounded-3xl ${
            selectedPlan === "Annual"
              ? "bg-[#6161FF] text-[#FDFDFD]"
              : "bg-[#E8E8E8] text-[#1E1E1E]"
          }`}
          onClick={() => setSelectedPlan("Annual")}
        >
          {currentLanguage === "ar" ? "سنوي" : "Annual"}
        </button>
      </header>

      <main>
        <div className="flex lg:flex-row flex-col items-end mt-16 gap-9 mx-4 lg:mx-16">
          {currentPlans?.Free?.map((plan, index) => (
            <PlanCard
              key={index}
              title={plan.title}
              price={getPrice(plan)}
              buttonText={plan.buttonText}
              listItems={plan.listItems}
              borderColor={plan.borderColor}
              buttonBgColor={plan.buttonBgColor}
              buttonTextColor={plan.buttonTextColor}
            />
          ))}
          {currentPlans?.Standard?.map((plan, index) => (
            <PlanCard
              key={index}
              title={plan.title}
              price={getPrice(plan)}
              buttonText={plan.buttonText}
              listItems={plan.listItems}
              borderColor={plan.borderColor}
              buttonBgColor={plan.buttonBgColor}
              buttonTextColor={plan.buttonTextColor}
              viewBadge={plan.viewBadge}
              currentLanguage={currentLanguage}
            />
          ))}
          {currentPlans?.Premium?.map((plan, index) => (
            <PlanCard
              key={index}
              title={plan.title}
              price={getPrice(plan)}
              buttonText={plan.buttonText}
              listItems={plan.listItems}
              borderColor={plan.borderColor}
              buttonBgColor={plan.buttonBgColor}
              buttonTextColor={plan.buttonTextColor}
            />
          ))}
        </div>
      </main>
    </div>
  );
}

export default Section2Price;
