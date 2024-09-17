import React from "react";
import { Field, useFormikContext } from "formik";
import { useDispatch } from "react-redux";
import { setAccountType } from "../../../../redux/features/accountSlice";
import CategorySelector from "../../atoms/atomsDateWelcomeModal/CategorySelector";


function StepFour() {
  const { values, setFieldValue } = useFormikContext();
  return (
    <>
      <h2 className="text-3xl mb-1 text-center font-bold">
        {" "}
        Freelancer Services
      </h2>
      <p className="mb-3 text-center">Add your Services below</p>

      <div className="min-h-[300px]">
      <CategorySelector
        setFieldValue={setFieldValue}
        categories={{
          "Logo Design": false,
          "inter Design": false,
          "UX Design": false,
          "Social media Design":false,
          "Frontend developement": false,
          "AI developement": false,
        }}

        title={"Services you provided it  "}
      />


      </div>
 <div className="flex  gap-5 w-full">
 <button
        type="button"
        className={`bg-[#6161FF] text-white lg:w-[75%] p-2 rounded-xl  `}
        onClick={() => setFieldValue("step", 5)} // Move to Step 2 only if account type is selected
      >
        Next Step
      </button>

      <button
        type="button"
        className={`text-[#6161FF80] text-white lg:w-[25%] underline p-2 rounded-xl  `}
        onClick={() => setFieldValue("step", 5)} // Move to Step 2 only if account type is selected
      >
       Skip Step
      </button>



 </div>
    </>
  );
}

export default StepFour;
