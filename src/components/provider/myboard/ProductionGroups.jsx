import React from 'react';
import { useTranslation } from 'react-i18next';
import { IoPersonRemove } from "react-icons/io5";
import { GrGroup } from "react-icons/gr";
import { FaWhatsapp, FaStar } from "react-icons/fa";
import iconEdit from '../../../assets/icons/pepicons-pop_expand.png';
import iconSetting from '../../../assets/icons/Group (1).png';
import imgIcon from '../../../assets/icons/Ellipse 232.png';

const ProductionGroupsData = [
  {
    name: "Mohamed Adel",
    rating: 4,
    role: "Software Engineer",
    timeAgo: "2 hours ago",
  },
  {
    name: "Mohamed Farg",
    rating: 4,
    role: "Software Engineer",
    timeAgo: "2 hours ago",
  },
  {
    name: "Mohamed Kareem",
    rating: 4,
    role: "Test Engineer",
    timeAgo: "2 hours ago",
  },
];

const Header = () => {
  const { t } = useTranslation();

  return (
    <header className="py-5 items-center gap-2 flex flex-row relative">
      <div className="p-3 bg-[#D9D9D9] rounded-xl">
        <GrGroup size={22} />
      </div>
      <div className="mt-3 md:mt-0">
        <h3 className="font-[400] text-[22px]">{t("Production Groups")}</h3>
      </div>
      <div className="flex md:absolute end-0 mt-3 md:mt-0">
        <button className="w-[25px]">
          <img src={iconEdit} alt={t("Edit Icon")} />
        </button>
        <button className="w-[25px] ml-2">
          <img src={iconSetting} alt={t("Setting Icon")} />
        </button>
      </div>
    </header>
  );
};

const MerchantInfo = ({ name, rating, role, timeAgo }) => {
  const { t } = useTranslation();

  return (
    <div className="col-span-12 md:col-span-5">
      <div className="flex gap-4 items-center">
        <img src={imgIcon} className="rounded-full w-[45px] h-[45px]" alt="Merchant Icon" />
        <div className="text-[#404040]">
          <div className="p-2">
            <div className="flex gap-4 items-center">
              <h2 className="text-md font-[500]">{name}</h2>
              <div className="flex rating">
                {[...Array(5)]?.map((_, i) => (
                  <FaStar key={i} color={i < rating ? "#FFC229" : "#D9D9D9"} />
                ))}
              </div>
              <span>{rating.toFixed(1)}</span>
            </div>
            <div className="gap-5 flex">
              <div className="text-sm text-[#919191]">{t("Role")}: {role}</div>
              <div className="text-sm text-[#919191]">{t("Time Ago")}: {timeAgo}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Actions = () => {
  const { t } = useTranslation();

  return (
    <div className="col-span-12 md:col-span-3 flex items-center gap-5 mt-3 md:mt-0">
      <div className="flex gap-3">
        <button className="rounded-2xl text-white px-5 md:px-9 py-1 bg-[#52CD8F]">
          <FaWhatsapp />
        </button>
        <button className="rounded-2xl font-bold text-[#000000] md:px-9 px-3 py-1 bg-[#D9D9D9]">
          500
        </button>
      </div>
    </div>
  );
};

const ProjectActions = () => {
  const { t } = useTranslation();

  return (
    <div className="col-span-12 md:col-span-4 flex items-center gap-3 mt-3 md:mt-0">
      <div className="font-medium text-sm text-[#6161FF]">
        {t("Create project with this merchant")}
      </div>
      <button className="font-medium flex items-center gap-2 text-[#FF111199]">
        <IoPersonRemove />
        {t("Remove")}
      </button>
    </div>
  );
};

function ProductionGroups() {
  return (
    <div className="h-full  shadow-custom rounded-xl p-5 py-1">
      <Header />
      <main>
        <div className="">
          {ProductionGroupsData?.map((merchant, index) => (
            <div className="py-2 grid grid-cols-12 gap-4 max-w-full overflow-x-auto" key={index}>
              <MerchantInfo {...merchant} />
              <Actions />
              <ProjectActions />
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default ProductionGroups;
