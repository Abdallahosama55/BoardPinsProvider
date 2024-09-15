import React, { useState } from "react";
import { Field, useFormikContext } from "formik";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css"; // Import default styles
import FacebookIcon from "../../../../assets/CustomIcon/Facebook";
import Instagram from "../../../../assets/CustomIcon/Instagram";
import LinkedInIcon from "../../../../assets/CustomIcon/LinkedInIcon";
import BehanceIcon from "../../../../assets/CustomIcon/BehanceIcon";
import { useSelector } from "react-redux";
import { selectAccountType } from "../../../../redux/features/accountSlice";

export const StepTwo = () => {
  const { values, setFieldValue } = useFormikContext();
  const [isShowAll, setIsShowAll] = useState(false); // State to toggle additional social media inputs

  // Check if both phone number and business email are provided
  const isFormValid = values.phoneNumber && values.businessEmail;
  const accountType = useSelector(selectAccountType);

  return (
    <div className="max-h-[800px] overflow-y-auto font-poppins">
      <header className="text-center">

        <h1>{accountType}</h1>
        <h2 className="text-3xl font-[800]">Business Contacts</h2>
        <p className="mb-2 text-xl">Add your business contacts below</p>
      </header>

      <div className="mb-2">
        <label className="block text-sm mb-2">Phone Number *</label>
        <Field name="phoneNumber">
          {({ field, form }) => (
          <PhoneInput
          {...field}
          country={"eg"} // Default country code (Egypt)
          onChange={(value) => form.setFieldValue(field.name, value)}
          inputStyle={{
            width: "100%",
            border: "1px solid #ccc",
            borderRadius: "8px",
            padding: "16px",
            paddingLeft: "60px",
            borderColor:"#6161FF"
          }}
          inputProps={{ name: field.name }} // Pass name attribute here
        />
          )}
        </Field>
      </div>

      <div className="mb-2">
        <label className="block text-sm mb-1">Business Email *</label>
        <Field
          name="businessEmail"
          type="email"
          placeholder="info@gmail.com"
          className="w-full border-[0.71px] outline-0 text-sm border-[#6161FF] p-2 rounded-lg"
        />
      </div>

      <div className="flex items-center w-full justify-between gap-2">
     
        {   accountType==="business" ?    <div className="mb-2 w-full">
          <label className="block text-sm mb-1"> Business Location </label>
          <Field
            name="businessLocation"
            placeholder="Location"
            className="w-full border-[0.71px] outline-0 text-sm border-[#6161FF] p-2 rounded-lg"
          />
        </div>  :""


        }

        <div className="mb-2 min-w-1/2 w-full">
          <label className="block text-sm mb-1">Website URL</label>
          <Field
            name="websiteUrl"
            placeholder="www.example.com"
            className="w-full border-[0.71px] outline-0 text-sm border-[#6161FF] p-2 rounded-lg"
          />
        </div>
      </div>

      <div className="mb-2">
        <label className="block text-sm mb-1">Social Media URLs</label>
        <div className="flex flex-col">
          <div className="flex items-center mb-2">
            <span className="mr-2"><FacebookIcon /></span>
            <Field
              name="socialMediaFacebook"
              placeholder="facebook.com"
              className="flex-1 border-[0.71px] outline-0 text-sm border-[#6161FF] p-2 rounded-lg"
            />
          </div>
          <div className="flex items-center mb-2">
            <span className="mr-2"><Instagram /></span>
            <Field
              name="socialMediaInstagram"
              placeholder="instagram.com"
              className="flex-1 border-[0.71px] outline-0 text-sm border-[#6161FF] p-2 rounded-lg"
            />
          </div>

          {isShowAll && (
            <>
              <div className="flex items-center mb-2">
                <span className="mr-2"><LinkedInIcon /></span>
                <Field
                  name="socialMedialinked"
                  placeholder="linked.com"
                  className="flex-1 border-[0.71px] outline-0 text-sm border-[#6161FF] p-2 rounded-lg"
                />
              </div>
              <div className="flex items-center mb-2">
                <span className="mr-2"><BehanceIcon /></span>
                <Field
                  name="socialMediaBehance"
                  placeholder="Behance.com"
                  className="flex-1 border-[0.71px] outline-0 text-sm border-[#6161FF] p-2 rounded-lg"
                />
              </div>
            </>
          )}
          <span
            className="text-[#6161FF] w-full text-center font-poppins font-medium text-sm cursor-pointer"
            onClick={() => setIsShowAll(!isShowAll)} // Toggle additional inputs
          >
            {isShowAll ? "- Hide Extra Fields" : "+ Add another Social"}
          </span>
        </div>
      </div>

      <button
        type="button"
        className={`bg-[#6161FF] mt-5 text-white w-full p-2 rounded-xl ${isFormValid ? '' : 'opacity-50 cursor-not-allowed'}`}
        onClick={() => isFormValid && setFieldValue("step", 3)} // Move to Step 3 only if form is valid
        disabled={!isFormValid} // Disable button if phone number or email is not provided
      >
        Next Step
      </button>
    </div>
  );
};
