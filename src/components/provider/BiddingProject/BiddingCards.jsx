import { AiTwotoneClockCircle } from "react-icons/ai";
import { BsPersonCircle } from "react-icons/bs";
import { GoDotFill } from "react-icons/go";
import { IoBookmarkOutline } from "react-icons/io5";
import { MdWorkOutline } from "react-icons/md";
import { RiMoneyEuroCircleLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

export const Card = ({ title, person, applied, timeAgo, price, isbuttonApply, status, id }) => {
  const navigate = useNavigate();
  const { t } = useTranslation(); // Initialize translation hook

  return (
    <div className="rounded-xl bg-[#F8F8F8] w-full">
      <header className="flex flex-col lg:flex-row">
        <div className="flex flex-grow gap-2 flex-col p-5 pb-1 lg:order-1 order-2">
          <h1 className="text-xl text-primary font-bold">{title}</h1>
          <div className="flex gap-2 flex-row lg:text-xs text-[10px] items-center font-medium">
            <span className="flex items-center gap-1">
              <BsPersonCircle color="#292D32" />
              {person}
            </span>
            <span className="flex items-center gap-1">
              <MdWorkOutline color="#292D32" />
              {applied} {t('applied')}
            </span>
            <span className="flex items-center gap-1">
              <AiTwotoneClockCircle />
              {timeAgo}
            </span>
            <span className="flex items-center gap-1">
              <RiMoneyEuroCircleLine />
              {price}
            </span>
          </div>
        </div>
        {isbuttonApply ? (
          <div className="flex justify-end mt-5 lg:mt-1 items-center gap-2 px-5 lg:order-2 order-1">
            <button
              className="bg-[#6161FF] rounded-xl text-center text-white font-cairo px-6 py-2"
              onClick={() => navigate(`/bidding-project/${id}`)}
            >
              {t('apply')}
            </button>
            <button className="rounded-xl text-center bg-white text-[#6161FF] px-2 py-2">
              <IoBookmarkOutline />
            </button>
          </div>
        ) : (
          <div className="flex justify-end mt-5 lg:mt-1 items-center gap-2 px-5 lg:order-2 order-1">
            <button
              className={`${
                status === 'Approved' ? 'bg-[#45DD4B12] text-[#52CD8F]' : ''
              } ${
                status === 'Rejected' ? 'bg-[#FF141412] text-[#FF1414]' : ''
              } ${
                status === 'Pending' ? 'bg-[#40404012] text-[#404040]' : ''
              } flex items-center gap-1 rounded-2xl text-center px-4 py-2`}
            >
              <GoDotFill /> {t(`status_bids.${status.toLowerCase()}`)}
            </button>
          </div>
        )}
      </header>
      <main className="px-5 py-2 font-cairo text-sm text-gray-500">
        <p>{t('content')}</p>
      </main>
    </div>
  );
};
