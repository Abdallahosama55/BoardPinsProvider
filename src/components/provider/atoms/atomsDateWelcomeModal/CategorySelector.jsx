import React, { useState } from "react";
import { Field } from "formik";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useFetchCategoriesQuery } from "../../../../services/userSingleServicesProviderApi";
import { Skeleton } from "@mui/material";

const CategorySelector = ({ setFieldValue, title }) => {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [showCategories, setShowCategories] = useState(false);

  // Fetch categories using the hook
  const { data: categories, error, isLoading } = useFetchCategoriesQuery();

  if (isLoading)
    return (
      <p>
        <Skeleton animation="wave" />
        <Skeleton animation="wave" />
        <Skeleton animation="wave" />
      </p>
    );
  if (error) return <p>Error fetching categories</p>;

  const handleCategoryChange = (categoryName) => {
    const updatedCategories = selectedCategories.includes(categoryName)
      ? selectedCategories.filter((name) => name !== categoryName)
      : [...selectedCategories, categoryName];

    setSelectedCategories(updatedCategories);
    setFieldValue("category_names", updatedCategories); // Submit as category_names
  };

  return (
    <div className="mb-4 font-poppins">
      <label className="block mb-2">{title}</label>
      <div
        className="flex items-center bg-[#F5F5F5] rounded-xl p-3"
        onClick={() => setShowCategories(!showCategories)}
      >
        <div className="flex-grow">
          <button type="button" className="w-full text-left">
            {selectedCategories.length
              ? selectedCategories.join(", ")
              : "Select categories"}
          </button>
        </div>
        <MdKeyboardArrowDown size={22} />
      </div>

      {showCategories && (
        <div className="bg-[#F5F5F5] p-4 rounded-xl mt-2 max-h-[200px] overflow-y-auto">
          {categories?.map((category) => (
            <div key={category.id} className="font-poppins text-sm py-1">
              <label>
                <Field
                  type="checkbox"
                  name={`category_names`}
                  checked={selectedCategories.includes(category.Category_name)}
                  onChange={() => handleCategoryChange(category.Category_name)}
                />
                <span className="px-2">{category.Category_name}</span>
              </label>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CategorySelector;
