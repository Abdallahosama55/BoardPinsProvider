import React from "react";
import { useTranslation } from "react-i18next";

function HeaderProductionsGroup({ setisOpen }) {
  const { t } = useTranslation(); // Hook to get the translation function

  return (
    <div>
      <header className="flex justify-center items-center rounded-xl bg-[#F8F8F8] py-12">
        <div className="text-center lg:w-[75%]">
          <h1 className="text-dark font-bold text-3xl">
            {t('welcome_production')}
          </h1>
          <p className="py-2 text-lg text-[#292D32] p-3">
            {t('description_production')}
          </p>
          <button 
            className="bg-primary text-white py-3 rounded-xl px-5 my-3" 
            onClick={() => { setisOpen(true); }}
          >
            {t('create_new')}
          </button>
        </div>
      </header>
    </div>
  );
}

export default HeaderProductionsGroup;
