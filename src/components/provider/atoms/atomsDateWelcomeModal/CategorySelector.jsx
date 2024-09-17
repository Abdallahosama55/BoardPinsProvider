import React, { useState } from "react";
import { Field } from "formik";
import { MdKeyboardArrowDown } from "react-icons/md";

const CategorySelector = ({ setFieldValue, categories  ,title}) => {
  const [showCategories, setShowCategories] = useState(false);

  return (
    <div className="mb-4 font-poppins">
      <label className="block mb-2">{title}</label>
      <div className="flex items-center bg-[#F5F5F5] rounded-xl p-3"    onClick={() => setShowCategories(!showCategories)}>
        <div className="flex-grow">
          <button
            type="button"
         
            className="w-full text-left"
          >
            Select categories
          </button>
        </div>
        <MdKeyboardArrowDown size={22} />
      </div>

      {showCategories && (
        <div className="bg-[#F5F5F5] p-4 rounded-xl mt-2 max-h-[200px] overflow-y-auto">
  
          {Object.keys(categories)?.map((category) => (
            <div key={category} className=" font-poppins text-sm py-1">
              <label>
                <Field
                  type="checkbox"
                  name={`categories.${category}`}
                  onChange={() =>
                    setFieldValue(`categories.${category}`, !categories[category])
                  }
                />
                <span className="px-2">{category.charAt(0).toUpperCase() + category.slice(1).replace(/([A-Z])/g, ' $1')}</span>
              </label>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CategorySelector;