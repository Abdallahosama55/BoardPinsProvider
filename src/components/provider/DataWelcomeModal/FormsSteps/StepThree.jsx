import React from "react";
import { Field, ErrorMessage } from "formik";
import { useSelector } from "react-redux";
import { selectAccountType } from "../../../../redux/features/accountSlice";

function StepThree({ setFieldValue }) {
  const accountType = useSelector(selectAccountType);
  return (
    <div className="text-sm">
      <h1 className="text-3xl font-bold text-center text-gray-900">
        Business Details
      </h1>
      <p className="text-[#333333] text-center text-lg font-medium mb-5">
        Add your business details below
      </p>

      {/* Business Logo/Profile */}
      <div className="   ">
        <label className="block text-gray-700 text-sm mt-2">
          Business Logo/Profile Picture (for Freelancer) *
        </label>
        <div className="flex justify-center bg-[#F5F5F5] items-center w-full py-2 border-2 border-dashed border-[#6161ff7d] rounded-md">
          <input
            type="file"
            id="businessLogo"
            name="businessLogo"
            className="hidden"
            onChange={(event) =>
              setFieldValue("businessLogo", event.currentTarget.files[0])
            }
          />
          <label
            htmlFor="businessLogo"
            className="text-blue-500 cursor-pointer"
          >
            Drag and drop or <span className="underline">Browse files</span>
          </label>
        </div>
        {/* Display error message for businessLogo */}
        <ErrorMessage
          name="businessLogo"
          component="div"
          className="text-red-500 text-sm mt-1"
        />
      </div>

      {/* About/Bio */}
      <div className="   ">
        <label className="block text-gray-700 text-sm mt-2">About/Bio *</label>
        <Field
          as="textarea"
          name="about"
          rows="4"
          className="w-full border-2 resize-none overflow-y-auto outline-0 border-gray-300 p-3 rounded-lg focus:outline-none"
          placeholder="Write a brief about your business..."
        />
        {/* Display error message for about */}
        <ErrorMessage
          name="about"
          component="div"
          className="text-red-500 text-sm mt-1"
        />
      </div>
      {/* Commercial Registration & Tax Card */}
      {accountType === "business" ? (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4    ">
          <div>
            <label className="block text-gray-700 text-sm mt-2">
              Commercial Registration *
            </label>
            <div className="flex justify-center bg-[#F5F5F5] items-center w-full py-2 border-2 border-dashed border-[#6161ff7d] rounded-md">
              <input
                type="file"
                id="commercialRegistration"
                name="commercialRegistration"
                className="hidden"
                onChange={(event) =>
                  setFieldValue(
                    "commercialRegistration",
                    event.currentTarget.files[0]
                  )
                }
              />
              <label
                htmlFor="commercialRegistration"
                className="text-blue-500 cursor-pointer text-xs font-semibold px-2"
              >
                Drag and drop or <span className="underline">Browse files</span>
              </label>
            </div>
            {/* Display error message for commercialRegistration */}
            <ErrorMessage
              name="commercialRegistration"
              component="div"
              className="text-red-500 text-sm mt-1"
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm mt-2">
              Tax Card *
            </label>
            <div className="flex justify-center bg-[#F5F5F5] items-center w-full py-2 border-2 border-dashed border-[#6161ff7d] rounded-md">
              <input
                type="file"
                id="taxCard"
                name="taxCard"
                className="hidden"
                onChange={(event) =>
                  setFieldValue("taxCard", event.currentTarget.files[0])
                }
              />
              <label htmlFor="taxCard" className="text-blue-500 cursor-pointer">
                Drag and drop or <span className="underline">Browse files</span>
              </label>
            </div>
            {/* Display error message for taxCard */}
            <ErrorMessage
              name="taxCard"
              component="div"
              className="text-red-500 text-sm mt-1"
            />
          </div>
        </div>
      ) : (
        ""
      )}

      {/* Service Images */}
      <div className="   ">
        <label className="block text-gray-700 text-sm mt-2">
          Upload Your Service Images
        </label>
        <div className="flex justify-center bg-[#F5F5F5] items-center w-full py-2 border-2 border-dashed border-[#6161ff7d] rounded-md">
          <input
            type="file"
            id="serviceImages"
            name="serviceImages"
            className="hidden"
            onChange={(event) =>
              setFieldValue("serviceImages", event.currentTarget.files[0])
            }
          />
          <label
            htmlFor="serviceImages"
            className="text-blue-500 cursor-pointer"
          >
            Drag and drop or <span className="underline">Browse files</span>
          </label>
        </div>
        {/* Display error message for serviceImages */}
        <ErrorMessage
          name="serviceImages"
          component="div"
          className="text-red-500 text-sm mt-1"
        />
      </div>

      {/* Company Profile & Pricelist  or    National id */}
      {accountType === "business" ? (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4    ">
          <div>
            <label className="block text-gray-700 text-sm mt-2">
              Company Profile
            </label>
            <div className="flex justify-center bg-[#F5F5F5] items-center w-full py-2 border-2 border-dashed border-[#6161ff7d] rounded-md">
              <input
                type="file"
                id="companyProfile"
                name="companyProfile"
                className="hidden"
                onChange={(event) =>
                  setFieldValue("companyProfile", event.currentTarget.files[0])
                }
              />
              <label
                htmlFor="companyProfile"
                className="text-blue-500 cursor-pointer"
              >
                Drag and drop or <span className="underline">Browse files</span>
              </label>
            </div>
            {/* Display error message for companyProfile */}
            <ErrorMessage
              name="companyProfile"
              component="div"
              className="text-red-500 text-sm mt-1"
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm mt-2">
              Pricelist
            </label>
            <div className="flex justify-center bg-[#F5F5F5] items-center w-full py-2 border-2 border-dashed border-[#6161ff7d] rounded-md">
              <input
                type="file"
                id="pricelist"
                name="pricelist"
                className="hidden"
                onChange={(event) =>
                  setFieldValue("pricelist", event.currentTarget.files[0])
                }
              />
              <label
                htmlFor="pricelist"
                className="text-blue-500 cursor-pointer"
              >
                Drag and drop or <span className="underline">Browse files</span>
              </label>
            </div>
            {/* Display error message for pricelist */}
            <ErrorMessage
              name="pricelist"
              component="div"
              className="text-red-500 text-sm mt-1"
            />
          </div>
        </div>
      ) : (
        <div className="   ">
        <label className="block text-gray-700 text-sm mt-2">
          Upload Your National Id
        </label>
        <div className="flex justify-center bg-[#F5F5F5] items-center w-full py-2 border-2 border-dashed border-[#6161ff7d] rounded-md">
          <input
            type="file"
            id="nationalId"
            name="nationalId"
            className="hidden"
            onChange={(event) =>
              setFieldValue("nationalId", event.currentTarget.files[0])
            }
          />
          <label
            htmlFor="nationalId"
            className="text-blue-500 cursor-pointer"
          >
            Drag and drop or <span className="underline">Browse files</span>
          </label>
        </div>
        {/* Display error message for nationalId */}
        <ErrorMessage
          name="nationalId"
          component="div"
          className="text-red-500 text-sm mt-1"
        />
      </div>
      )}
    </div>
  );
}

export default StepThree;
