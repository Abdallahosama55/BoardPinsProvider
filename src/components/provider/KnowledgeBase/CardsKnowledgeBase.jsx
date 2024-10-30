import React, { useState } from 'react';
import { MdOutlineDeleteOutline, MdOutlineModeEditOutline } from 'react-icons/md';
import { PiDotsThreeOutlineFill } from 'react-icons/pi';
import csv from '../../../assets/icons/csv.svg';
import pdf from '../../../assets/icons/pdf.svg';
import doc from '../../../assets/icons/doc.svg';
import { RiUploadCloud2Line } from 'react-icons/ri';
import { useTranslation } from 'react-i18next'; // Import the translation hook

const items = [
  {
    src: csv,
    title: "cards.documents.csv", // Use translation key
  },
  {
    src: pdf,
    title: "cards.documents.pdf", // Use translation key
  },
  {
    src: doc,
    title: "cards.documents.doc", // Use translation key
  },
  {
    src: doc,
    title: "cards.documents.untitled", // Use translation key
  },
];

function CardsKnowledgeBase() {
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const { t } = useTranslation(); // Use the translation hook

  const toggleDropdown = (index) => {
    setDropdownOpen(dropdownOpen === index ? null : index);
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      console.log(file);
    }
  };

  return (
    <div>
      <div className="grid h-full overflow-y-auto py-6 mt-6 lg:mx-16 mx-4 xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6 justify-center">
        {items.map((item, index) => (
          <div key={index} className="pt-4 pb-0 rounded-xl bg-[#E7E7E7] relative">
            <div className="flex px-5 justify-end text-gray-500 text-md gap-2">
              <button className="hover:text-blue-500 transition duration-300">
                <MdOutlineModeEditOutline />
              </button>
              <button className="hover:text-red-500 transition duration-300">
                <MdOutlineDeleteOutline />
              </button>
              <button
                className="hover:text-blue-500 transition duration-300 relative"
                onClick={() => toggleDropdown(index)}
              >
                <PiDotsThreeOutlineFill />
              </button>
              {dropdownOpen === index && (
                <div className="absolute right-0 mt-5 w-32 bg-white rounded-md shadow-custom z-10">
                  <ul className="py-1">
                    <li className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer">
                      {t('cards.action1')} {/* Use translation for action 1 */}
                    </li>
                    <li className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer">
                      {t('cards.action2')} {/* Use translation for action 2 */}
                    </li>
                    <li className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer">
                      {t('cards.action3')} {/* Use translation for action 3 */}
                    </li>
                  </ul>
                </div>
              )}
            </div>

            <div className="py-6 flex justify-center items-center">
              <img src={item.src} className="w-[80px]" alt={item.title} />
            </div>

            <div className="text-dark text-md  font-[600] p-3 py-4 rounded-b-xl bg-[#F5F5F5]">
              {t(item.title)} {/* Use translation for document title */}
            </div>
          </div>
        ))}

        <div className="py-6 rounded-xl bg-[#F5F5F5] border-[#6161ff6c] border-[3px] border-dashed">
          <div className="py-5 flex justify-center items-center">
            <RiUploadCloud2Line size={25} color="#6161FF" />
          </div>

          <div className="flex flex-col gap-3 text-dark text-sm text-center  p-3 py-4 rounded-b-xl">
            <h3>
              {t('cards.dragAndDrop')} {' '} {/* Use translation for drag and drop */}
              <label className="underline text-primary cursor-pointer">
                {t('cards.browseFiles')} {/* Use translation for browse files */}
                <input
                  type="file"
                  className="hidden"
                  onChange={handleFileUpload}
                />
              </label>
            </h3>
            <h3 className="font-bold">{t('cards.addNewDocument')}</h3> {/* Use translation for add new document */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardsKnowledgeBase;
