import React, { useState } from 'react';
import avater from "../../../assets/icons/Ellipse 232.png";
import icon_edit from '../../../assets/icons/pepicons-pop_expand.png';
import icon_setting from '../../../assets/icons/Group (1).png';
import rounded from "../../../assets/icons/rounded.png";
import CustomSelectButton from '../atoms/commonatoms/CustomSelectButton';
import { useTranslation } from 'react-i18next'; // Import useTranslation

const options = ['Option 1', 'Option 2', 'Option 3'];

const handleSelect = (option) => {
  console.log('Selected option:', option);
};

const data_Personal_list = [
  {
    taskName: "Task One",
    assignee: avater,
    dueDate: "05/01/2023",
    status: "Silver"
  },
  {
    taskName: "Task Two",
    assignee: avater,
    dueDate: "05/02/2023",
    status: "Gold"
  },
  {
    taskName: "Task Two",
    assignee: avater,
    dueDate: "05/02/2023",
    status: "Gold"
  },
  {
    taskName: "Task Two",
    assignee: avater,
    dueDate: "05/02/2023",
    status: "Gold"
  },
  // Add more tasks as needed
];

function Table() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { t } = useTranslation(); // Initialize translation hook

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className=' rounded-xl p-5 py-1'>
      <div className='my-5 flex  items-center relative'>
    <div className=' flex items-start'>
    <img src={rounded} className='bg-[#D9D9D9] w-[40px] p-2 rounded-[10%] m-2' />
        <div>
          <h5>{t('personal_list')}</h5> {/* Use translation key */}
          <p>{t('lorem_ipsum')}</p> {/* Use translation key */}
        </div>

    </div>
        <div className=' md:gap-4 start-[85%] flex items-center justify-center gap-2'>
          <button>
            <img src={rounded} className='w-[20px]' />
          </button>
          <button>
            <img src={icon_edit} className='w-[30px]' />
          </button>
          <div className='relative'>
            <button onClick={toggleDropdown}>
              <img src={icon_setting} className='w-[30px]' />
            </button>
            {dropdownOpen && (
              <div className='absolute end-0 mt-2 w-32 bg-white rounded-md shadow-custom z-10'>
                <ul className='py-1'>
                  <li className='px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer'>
                    {t('action_1')} {/* Use translation key */}
                  </li>
                  <li className='px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer'>
                    {t('action_2')} {/* Use translation key */}
                  </li>
                  <li className='px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer'>
                    {t('action_3')} {/* Use translation key */}
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className='flex flex-wrap w-full justify-end gap-3 mb-5'>
        <CustomSelectButton options={options} onSelect={handleSelect} defaultText={t('assigned_to_me')} />
        <CustomSelectButton options={options} onSelect={handleSelect} defaultText={t('sort')} />
      </div>

      <table className=" text-sm overflow-x-auto relative w-full text-left rtl:text-right text-gray-500">
        <thead className="text-xs text-[#6A6A65] bg-[#F5F6FA] dark:text-gray-400">
          <tr>
            <th scope="col" className="p-4">
              <div className="flex items-center">
                <input 
                  id="checkbox-all-search" 
                  type="checkbox" 
                  className="w-4 h-4 text-[#6161FF] rounded" 
                />
                <label htmlFor="checkbox-all-search" className="sr-only">checkbox</label>
              </div>
            </th>
            <th scope="col" className="px-6 py-3">{t('task_name')}</th> {/* Use translation key */}
            <th scope="col" className="px-6 py-3">{t('assignee')}</th> {/* Use translation key */}
            <th scope="col" className="px-6 py-3">{t('due_date')}</th> {/* Use translation key */}
            <th scope="col" className="px-6 py-3">{t('status')}</th> {/* Use translation key */}
          </tr>
        </thead>
        <tbody>
          {data_Personal_list?.map((item, index) => (
            <tr key={index} className="bg-white border-b-[1px] border-blue hover:bg-gray-50">
              <td className="w-4 p-4">
                <div className="flex items-center">
                  <input 
                    id={`checkbox-table-search-${index}`} 
                    type="checkbox" 
                    className="w-4 h-4 text-[#6161FF] bg-gray-100 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700" 
                  />
                  <label htmlFor={`checkbox-table-search-${index}`} className="sr-only">checkbox</label>
                </div>
              </td>
              <th scope="row" className="px-6 py-4 font-medium text-[#6A6A65] whitespace-nowrap">
                {item.taskName}
              </th>
              <td className="px-6 py-2">
                <img src={item.assignee} alt="Assignee Avatar" className='rounded-[50%] w-[50px] height-[50px]' />
              </td>
              <td className="px-6 py-4">
                {item.dueDate}
              </td>
              <td className="flex items-center px-6 py-4">
                {item.status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Table;
