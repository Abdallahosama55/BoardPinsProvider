import React from "react";
import { useTranslation } from "react-i18next";

function PriorityButtons({ priority, setPriority }) {
  const{t}=useTranslation()
  return (
    <div>
      <div>
        <h1 className=" text-gray-500 font-bold">| {t('priority')}</h1>

        <div className="flex items-center py-5 gap-3">
          <button
            type="button"
            className={`rounded-3xl text-sm border border-[#00000059] px-7 py-1 ${
              priority === "low"
                ? "bg-[#d8494936] text-[#D84949]"
                : "bg-gray-200 text-gray-500"
            }`}
            onClick={() => setPriority("low")}
          >
           {t('priorityLow')}
          </button>
          <button
            type="button"
            className={`rounded-3xl text-sm border border-[#00000059] px-3 py-1 ${
              priority === "medium"
                ? "bg-blue-200 text-blue-500"
                : "bg-gray-200 text-gray-500"
            }`}
            onClick={() => setPriority("medium")}
          >
            {t('priorityMedium')}
          </button>
          <button
            type="button"
            className={`rounded-3xl text-sm border border-[#00000059] px-7 py-1 ${
              priority === "high"
                ? "bg-[#3F8B3559] text-[#3F8B35]"
                : "bg-gray-200 text-gray-500"
            }`}
            onClick={() => setPriority("high")}
          >
          {t('priorityHigh')}
          </button>
        </div>
      </div>
    </div>
  );
}

export default PriorityButtons;
