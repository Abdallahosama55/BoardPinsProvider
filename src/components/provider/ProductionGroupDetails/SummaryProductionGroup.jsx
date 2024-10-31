import React from "react";
import { FaLongArrowAltRight, FaRegPauseCircle } from "react-icons/fa";
import { IoPersonSharp } from "react-icons/io5";
import { TbTargetArrow } from "react-icons/tb";
import { useTranslation } from 'react-i18next'; // Import useTranslation

function SummaryProductionGroup() {
  const { t } = useTranslation(); // Initialize the translation function

  const items = [
    {
      icon: (
        <TbTargetArrow size={40} className="text-dark p-2 rounded-full bg-[#9191912b]" />
      ),
      value: t('targetQuantity'), // Use translation key
      description: t('targetQuantityDescription'), // Use translation key
    },
    {
      icon: (
        <IoPersonSharp size={40} className="text-dark p-2 rounded-full bg-[#9191912b]" />
      ),
      value: t('merchantsApplied'), // Use translation key
      description: t('merchantNumberDescription'), // Use translation key
    },
    {
      icon: (
        <TbTargetArrow size={40} className="text-dark p-2 rounded-full bg-[#9191912b]" />
      ),
      value: t('categoryName'), // Use translation key
      description: t('categoryDescription'), // Use translation key
    },
  ];

  return (
    <div className="bg-[#F5F6FA] rounded-xl p-6 mx-4">
      <div className="lg:flex justify-center">
        <div className="grid lg:grid-cols-3 grid-cols-1 flex-grow gap-5">
          {items?.map((item, index) => (
            <div key={index} className="flex items-center gap-2">
              {item.icon}
              <div>
                <h1 className="text-dark text-sm">
                  <span className="text-lg font-bold">{item.value}</span>
                </h1>
                <p className="text-[#919191] text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex gap-5 items-center justify-end mt-5">
          <button className="flex text-[#898989] text-sm items-center gap-1">
            <FaRegPauseCircle /> {t('stopNow')} {/* Use translation key */}
          </button>
          <button className="py-3 bg-white rounded-lg gap-1 flex items-center text-sm px-5 text-[#6161FF]">
            <FaLongArrowAltRight /> {t('moveToInProgress')} {/* Use translation key */}
          </button>
        </div>
      </div>
    </div>
  );
}

export default SummaryProductionGroup;
