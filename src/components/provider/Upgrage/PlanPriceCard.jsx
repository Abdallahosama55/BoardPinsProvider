import React from 'react';
import star from '../../../assets/icons/Star 15.svg';
import { Link } from 'react-router-dom';

const PlanCard = ({ title, price, buttonText, currentLanguage,listItems, borderColor, buttonBgColor, buttonTextColor, viewBadge }) => {
  return (
    <div className={`w-full min-h-[580px] max-w-[400px] rounded-3xl border-[1px] h-full`} style={{ borderColor }}>
      <div className={`text-center bg-[#6161FF] rounded-t-3xl text-[#F5F6FA] p-3 text-2xl text-[400] ${viewBadge ? 'block' : 'hidden'}`}>
       
        {currentLanguage==="ar" ? <h1 className=' font-cairo'>الأكثر شيوعا</h1> : <h1>Most Popular</h1>}
      </div>

      <div className='p-4'>
        <header className="flex justify-center">
          <div className="font-bold text-3xl text-[#404040]">
            <h3 className="font-bold text-center my-3">{title}</h3>
            <h4>
              {price} <span className="text-[#A3A3A3]">/ month</span>
            </h4>
          <div className="w-full flex justify-center">
          <Link to={"/signup"} className={  ` w-full text-center border-[#6161FF] bg-[${buttonBgColor}]  border-[1px] px-6 py-1 rounded-3xl text-[${buttonTextColor}] text-[16px] font-[500] my-12 w-full}`} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            {buttonText}
          </Link>

          </div>
          </div>
        </header>
        <ul>
          {listItems?.map((item, index) => (
            <li key={index} className='flex items-start gap-2 my-3'>
              <img src={star} className='w-[25px]' alt="star icon" />
              <span className='font-[400]'>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PlanCard;
