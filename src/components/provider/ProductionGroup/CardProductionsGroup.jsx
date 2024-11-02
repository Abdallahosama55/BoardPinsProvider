import React from "react";
import { AiFillAppstore, AiOutlineAppstore } from "react-icons/ai";
import { FaCheck } from "react-icons/fa";
import { IoPersonSharp } from "react-icons/io5";
import { GoDotFill } from "react-icons/go";
import { MdDelete, MdEdit } from "react-icons/md";
import { cardDataGroupProduction } from "../../../utils/helpers/constants";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next"; // Importing useTranslation

function CardProductionsGroup() {
  const { t } = useTranslation(); // Initializing translation function

  return (
    <div className="grid lg:grid-cols-3 grid-cols-1 lg:gap-6 md:gap-6 gap-12 p-0">
      {cardDataGroupProduction?.map((card, index) => (
        <Link
          to={`/production-group/${index}`}
          key={index}
          className="lg:grid  lg:grid-cols-2  gap-4 lg:gap-0"
        >
          <div className="py-5 px-3 bg-[#F5F6FA] rounded-xl  flex-wrap lg:flex-col lg:flex hidden">
            <div className="flex gap-1 ">
              <div className="flex justify-center items-center rounded-full w-[40px] h-[40px] bg-[#6161FF1F] text-primary">
                <FaCheck />
              </div>
              <div>
                <h1 className="text-[#6161FF] text-sm">
                  <strong className="font-extrabold text-lg">
                    {card.target.current}
                  </strong>{" "}
                  {t('from')} {card.target.total}
                </h1>
                <p className="text-[#919191] text-xs">{t('targetNumber')}</p>
              </div>
            </div>
            <div className="flex gap-1 ">
              <div className="flex justify-center items-center rounded-full w-[40px] h-[40px] bg-[#6161FF1F] text-primary">
                <IoPersonSharp />
              </div>
              <div>
                <h1 className="text-[#6161FF] text-xs">
                  <strong className="font-extrabold text-lg">
                    {card.merchantsApply}
                  </strong>{" "}
                  {t('merchantsApply')}
                </h1>
                <p className="text-[#919191] text-xs">{t('merchantNumber')}</p>
              </div>
            </div>
            <div className="flex gap-1 ">
              <div className="flex justify-center items-center rounded-full w-[40px] h-[40px] bg-[#6161FF1F] text-primary">
                <AiFillAppstore />
              </div>
              <div>
                <h1 className="text-[#6161FF] text-sm">
                  <strong className="font-bold text-lg">{card.category}</strong>
                </h1>
                <p className="text-[#919191] text-xs">{t('category')}</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2 mx-3">
            {card.merchants?.map((merchant, idx) => (
              <div
                key={idx}
                className="px-2 bg-[#F5F6FA] rounded-lg flex justify-center items-center"
              >
                <div>
                  <img
                    src={merchant.imgSrc}
                    className="rounded-lg w-[70px] h-[40px] my-1"
                    alt={merchant.name}
                  />
                  <h1 className="text-[8px] py-1 font-bold">{merchant.name}</h1>
                  <p className="text-[9px] text-[#919191]">
                    {t('applyFor')} {merchant.applyFor}
                  </p>
                </div>
              </div>
            ))}
            <div className="px-2 bg-[#F5F6FA] rounded-lg flex justify-center items-center">
              <div>
                <div className="grid grid-cols-2 gap-1">
                  {[...Array(3)]?.map((_, idx) => (
                    <div
                      key={idx}
                      className="rounded bg-gray-300 w-[30px] h-[25px]"
                    ></div>
                  ))}
                </div>
                <p className="text-[10px] text-[#919191]">
                  {card.showMoreText}
                </p>
              </div>
            </div>
          </div>
          <div className="w-full flex col-span-2 mt-4  ">
            <div className="flex-grow">
              <h2 className="flex gap-2 items-center text-sm ">
                {card.groupName}{" "}
                <span className="text-dark font-semibold bg-[#40404012] rounded-xl px-2 flex items-center gap-1 py-1 text-[10px]">
                  <GoDotFill />
                  {card.Status}
                </span>
              </h2>
              <p className="text-xs text-[#BBBBBB]">{card.updatedInfo}</p>
            </div>

            <div className="flex gap-2 px-5">
              <button className="flex items-center gap-1 text-[#404040]">
                <MdEdit />
                {t('edit')}
              </button>{" "}
              <button className="flex items-center gap-1 text-[#FF111199]">
                <MdDelete /> {t('delete')}
              </button>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default CardProductionsGroup;
