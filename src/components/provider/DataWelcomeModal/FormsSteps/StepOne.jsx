import React from 'react';
import { Field, useFormikContext } from 'formik';
import { useDispatch } from 'react-redux';
import { setAccountType } from '../../../../redux/features/accountSlice';
import CategorySelector from "../../atoms/atomsDateWelcomeModal/CategorySelector";

export const StepOne = () => {
  const { values, setFieldValue } = useFormikContext();
  const dispatch = useDispatch();
  const isAccountTypeSelected = values.accountType !== '';

  const handleAccountTypeChange = (event) => {
    const accountType = event.target.value;
    setFieldValue('accountType', accountType);
    dispatch(setAccountType(accountType)); // Dispatch action to Redux store
  };

  return (
    <>
      <h2 className="text-3xl mb-1 text-center font-bold">Welcome to Board pins</h2>
      <p className="mb-3 text-center">Start building your Business Profile</p>

      <div className="my-4">
        <label className="block">Create an account as *</label>
        <div className="flex items-center">
          <label className="mr-4">
            <Field
              type="radio"
              name="accountType"
              value="business"
              className="mr-1"
              onChange={handleAccountTypeChange}
            />
            Business
          </label>
          <label>
            <Field
              type="radio"
              name="accountType"
              value="freelancer"
              className="mr-1"
              onChange={handleAccountTypeChange}
            />
            Freelancer
          </label>
        </div>
      </div>

      <div className="mb-4">
        <label className="block mb-2">Business name</label>
        <Field
          name="businessName"
          placeholder="Business name"
          className="w-full p-2 rounded-lg border-[0.71px] outline-0 text-sm border-[#6161FF]"
        />
      </div>

      <CategorySelector setFieldValue={setFieldValue} title={"Business category"}  />

      <button
        type="button"
        className={`bg-[#6161FF] text-white w-full p-2 rounded-xl ${isAccountTypeSelected ? '' : 'opacity-50 cursor-not-allowed'}`}
        onClick={() => isAccountTypeSelected && setFieldValue('step', 2)} // Move to Step 2 only if account type is selected
        disabled={!isAccountTypeSelected} // Disable button if no account type is selected
      >
        Next Step
      </button>
    </>
  );
};
