import React, { useMemo } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import Modal from "../../provider/atoms/commonatoms/Modal";
import welcome_img from "../../../assets/images/provider/illustration_welcome.png";
import HeaderDateWelcomeModal from "./HeaderDateWelcomeModal";
import { StepOne } from "./FormsSteps/StepOne";
import { StepTwo } from "./FormsSteps/StepTwo";
import StepThree from "./FormsSteps/StepThree";
import { useSelector } from "react-redux";
import { selectAccountType } from "../../../redux/features/accountSlice";
import StepFour from "./FormsSteps/StepFour";

const DataWelcomeModal = ({ isOpen }) => {
  const accountType = useSelector(selectAccountType);

  // Define validation schemas for different account types
  const validationSchemaStepThreeBussiness = Yup.object({
    businessLogo: Yup.mixed().required("Business Logo is required"),
    about: Yup.string().required("About/Bio is required"),
    commercialRegistration: Yup.mixed().required("Commercial registration is required"),
    taxCard: Yup.mixed().required("Tax Card is required"),
  });

  const validationSchemaStepThreeFreelance = Yup.object({
    businessLogo: Yup.mixed().required("Business Logo is required"),
    about: Yup.string().required("About/Bio is required"),
    nationalId: Yup.mixed().required("National ID is required"),
  });

  // Use useMemo to select the validation schema based on the accountType
  const validationSchemaStepThree = useMemo(() => {
    if (accountType === "business") {
      return validationSchemaStepThreeBussiness;
    } else if (accountType === "freelancer") {
      return validationSchemaStepThreeFreelance;
    }
    return null; // Or provide a default schema if needed
  }, [accountType]);

  const initialValues = {
    accountType: "",
    businessName: "",
    categories: {
      factory: false,
      marketingAgency: false,
    },

    phoneNumber: "",
    businessEmail: "",
    businessLocation: "",
    websiteUrl: "",
    socialMediaFacebook: "",
    socialMediaInstagram: "",
    step: 1,
    businessLogo: null,
    commercialRegistration: null,
    taxCard: null,
    serviceImages: null,
    companyProfile: null,
    pricelist: null,
    about: "",
    nationalId: null,
  };

  const handleSubmit = (values) => {
    console.log("All form values:", values);
    // Handle final submission logic here
  };

  return (
    <Modal isOpen={isOpen} className="lg:w-[920px] mx-5 overflow-y-auto max-h-[90vh] bg-white">
      <div className="h-full text-[#333333] font-poppins">
        <HeaderDateWelcomeModal />
        <div className="grid lg:grid-cols-3 grid-cols-1 h-full">
          <div className="flex justify-center">
            <img src={welcome_img} alt="welcome" className="lg:w-full mt-12 lg:h-[400px] h-[140px] w-[120px]" />
          </div>
          <div className="col-span-2 lg:mt-0 mt-8 px-4 lg:px-16">
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchemaStepThree} // Use dynamic schema
              onSubmit={handleSubmit}
            >
              {({ values, setFieldValue, errors, touched }) => (
                <Form>
                  <h1 className="text-center text-xl">Step {values.step} From 
                    {accountType=== "freelancer" ? " 5 " :" 3 "}
                   
                    
                    </h1>
                  {values.step === 1 && <StepOne setFieldValue={setFieldValue} />}
                  {values.step === 2 && <StepTwo setFieldValue={setFieldValue} />}
                  {values.step === 3 && <StepThree setFieldValue={setFieldValue} />}
                  {(values.step === 3 && accountType==="business")&& (
                    <button type="submit" className="bg-[#6161FF] w-full my-3 text-white p-2 rounded-lg">
                      Submit
                    </button>
                  )}

{(values.step === 4 && accountType==="freelancer")&& (
                    <StepFour setFieldValue={setFieldValue} />
                  )}

                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default DataWelcomeModal;
