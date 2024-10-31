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
            id="service_icon"
            name="service_icon"
            className="hidden"
            onChange={(event) =>
              setFieldValue("service_icon", event.currentTarget.files[0])
            }
          />
          <label
            htmlFor="service_icon"
            className="text-[#6161FF] cursor-pointer"
          >
            Drag and drop or <span className="underline">Browse files</span>
          </label>
        </div>
        {/* Display error message for service_icon */}
        <ErrorMessage
          name="service_icon"
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
      {accountType === "Bussiness" ? (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4    ">
          <div>
            <label className="block text-gray-700 text-sm mt-2">
              Commercial Registration *
            </label>
            <div className="flex justify-center bg-[#F5F5F5] items-center w-full py-2 border-2 border-dashed border-[#6161ff7d] rounded-md">
              <input
                type="file"
                id="commercial_registration"
                name="commercial_registration"
                className="hidden"
                onChange={(event) =>
                  setFieldValue(
                    "commercial_registration",
                    event.currentTarget.files[0]
                  )
                }
              />
              <label
                htmlFor="commercial_registration"
                className="text-[#6161FF] cursor-pointer text-xs font-semibold px-2"
              >
                Drag and drop or <span className="underline">Browse files</span>
              </label>
            </div>
            {/* Display error message for commercial_registration */}
            <ErrorMessage
              name="commercial_registration"
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
                id="Tax_Card"
                name="Tax_Card"
                className="hidden"
                onChange={(event) =>
                  setFieldValue("Tax_Card", event.currentTarget.files[0])
                }
              />
              <label htmlFor="Tax_Card" className="text-[#6161FF] cursor-pointer">
                Drag and drop or <span className="underline">Browse files</span>
              </label>
            </div>
            {/* Display error message for Tax_Card */}
            <ErrorMessage
              name="Tax_Card"
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
            id="service_photos"
            name="service_photos"
            className="hidden"
            onChange={(event) =>
              setFieldValue("service_photos", event.currentTarget.files[0])
            }
          />
          <label
            htmlFor="service_photos"
            className="text-[#6161FF] cursor-pointer"
          >
            Drag and drop or <span className="underline">Browse files</span>
          </label>
        </div>
        {/* Display error message for service_photos */}
        <ErrorMessage
          name="service_photos"
          component="div"
          className="text-red-500 text-sm mt-1"
        />
      </div>

      {/* Company Profile & Pricelist  or    National id */}
      {accountType === "Bussiness" ? (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4    ">
          <div>
            <label className="block text-gray-700 text-sm mt-2">
              Company Profile
            </label>
            <div className="flex justify-center bg-[#F5F5F5] items-center w-full py-2 border-2 border-dashed border-[#6161ff7d] rounded-md">
              <input
                type="file"
                id="Company_Profile"
                name="Company_Profile"
                className="hidden"
                onChange={(event) =>
                  setFieldValue("Company_Profile", event.currentTarget.files[0])
                }
              />
              <label
                htmlFor="Company_Profile"
                className="text-[#6161FF] cursor-pointer"
              >
                Drag and drop or <span className="underline">Browse files</span>
              </label>
            </div>
            {/* Display error message for Company_Profile */}
            <ErrorMessage
              name="Company_Profile"
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
                id="Pricelist"
                name="Pricelist"
                className="hidden"
                onChange={(event) =>
                  setFieldValue("Pricelist", event.currentTarget.files[0])
                }
              />
              <label
                htmlFor="Pricelist"
                className="text-[#6161FF] cursor-pointer"
              >
                Drag and drop or <span className="underline">Browse files</span>
              </label>
            </div>
            {/* Display error message for Pricelist */}
            <ErrorMessage
              name="Pricelist"
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
              id="National_ID"
              name="National_ID"
              className="hidden"
              onChange={(event) =>
                setFieldValue("National_ID", event.currentTarget.files[0])
              }
            />
            <label
              htmlFor="National_ID"
              className="text-[#6161FF] cursor-pointer"
            >
              Drag and drop or <span className="underline">Browse files</span>
            </label>
          </div>
          {/* Display error message for National_ID */}
          <ErrorMessage
            name="National_ID"
            component="div"
            className="text-red-500 text-sm mt-1"
          />
        </div>
      )}

      {accountType === "Freelancer" ? (
        <button
          type="button"
          className={`bg-[#6161FF] mt-5 text-white w-full p-2 rounded-xl  cursor-pointer`}
          onClick={() => setFieldValue("step", 4)} // Move to Step 3 only if form is valid
        >
          Next Step
        </button>
      ) : (
        ""
      )}
    </div>
  );
}

export default StepThree;
