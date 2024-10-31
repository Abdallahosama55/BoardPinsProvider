import React from "react";
import Filter from "../../../assets/icons/vertical-slider-square--adjustment-adjust-controls-fader-vertical-settings-slider-square.svg";
import list from "../../../assets/icons/listleft.svg";
import { useTranslation } from 'react-i18next'; // Import useTranslation

function HeaderAppliedMerchants() {
  const { t } = useTranslation(); // Initialize the translation function

  return (
    <div className="flex lg:flex-row flex-col items-center gap-2 m-4 pt-5 ">
      <div className="flex-grow">
        <h1 className="font-bold text-dark text-2xl">{t('appliedMerchants')}</h1> {/* Use translation key */}
      </div>

      <div className="flex gap-5 justify-end w-full lg:w-auto lg:mt-auto mt-6">
        <button className="flex items-center gap-2">
          <img src={Filter} alt={t('filter')} />
          {t('filter')} {/* Use translation key */}
        </button>
        <button className="flex items-center gap-2">
          <img src={list} alt={t('sort')} />
          {t('sort')} {/* Use translation key */}
        </button>
      </div>
    </div>
  );
}

export default HeaderAppliedMerchants;
