import React, { useState } from 'react';
import { useTranslation } from 'react-i18next'; // Import useTranslation
import pin from '../../../assets/icons/pin-1 1.png';
import icon_edit from '../../../assets/icons/pepicons-pop_expand.png';
import icon_setting from '../../../assets/icons/Group (1).png';
import img_merchant from "../../../assets/icons/Rectangle 541 (1).png";

function InprogressProject() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { t } = useTranslation(); // Initialize translation hook

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className='shadow-custom rounded-xl p-5 py-1'>
      <div className='my-5 flex items-center relative'>
        <img src={pin} className='bg-[#D9D9D9] p-2 rounded-[10%] m-2' />
        <div>
          <h5>{t('in_progress_project')}</h5>
          <p>{t('lorem_ipsum')}</p>
        </div>
        <div className='absolute md:start-[85%] start-[80%] flex items-center justify-center gap-2'>
          <button>
            <img src={icon_edit} className='w-[20px]' />
          </button>
          <div className='relative'>
            <button onClick={toggleDropdown}>
              <img src={icon_setting} className='w-[20px]' />
            </button>
            {dropdownOpen && (
              <div className='absolute end-0 mt-1 w-32 bg-white rounded-md shadow-custom z-10'>
                <ul className='py-1'>
                  <li className='px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer'>
                    {t('action_1')}
                  </li>
                  <li className='px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer'>
                    {t('action_2')}
                  </li>
                  <li className='px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer'>
                    {t('action_3')}
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>

      {['Merchant Name 1', 'Merchant Name 2', 'Merchant Name 3', 'Merchant Name 4', 'Merchant Name 5']?.map((merchant, index) => (
        <div key={index} className='mb-3 pb-5 md:pb-0 px-3 bg-[#F5F6FA] rounded-lg grid grid-cols-12 gap-2'>
          <div className='col-span-3 flex items-center justify-center'>
            <img src={img_merchant} className='md:w-[100px] md:h-auto md:p-3 h-[70px]' />
          </div>
          <div className='col-span-9'>
            <h5 className='text-[18px] text-[#26222B] font-[400] py-3'>{t('merchant_name')}: {merchant}</h5>
            <div className="w-full bg-gray-200 rounded-full dark:bg-gray-200">
              <div className="bg-[#6161FF] text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full w-[45%]">
                {t('percentage', { value: '45' })} {/* Use interpolation for percentage */}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default InprogressProject;
