import React, { useMemo } from "react";
import { Formik, Form } from "formik";
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
import { PendingModal } from "./FormsSteps/PendingModal";
import { useSubmitFormMutation } from '../../../services/Ssp_Services'; // Adjust the import path as needed

const DataWelcomeModal = ({ isOpen }) => {
  const accountType = useSelector(selectAccountType);
  const [submitForm, { isLoading, isError, data, error,isSuccess }] = useSubmitFormMutation();

  // Define validation schemas for different account types
  const validationSchemaStepThreeBussiness = Yup.object({
    service_icon: Yup.mixed().required("Business Logo is required"),
    about: Yup.string().required("About/Bio is required"),
    commercial_registration: Yup.mixed().required("Commercial registration is required"),
    Tax_Card: Yup.mixed().required("Tax Card is required"),
  });

  const validationSchemaStepThreeFreelance = Yup.object({
    service_icon: Yup.mixed().required("Business Logo is required"),
    about: Yup.string().required("About/Bio is required"),
    National_ID: Yup.mixed().required("National ID is required"),
  });

  // Use useMemo to select the validation schema based on the accountType
  const validationSchemaStepThree = useMemo(() => {
    return accountType === "Bussiness" ? validationSchemaStepThreeBussiness : validationSchemaStepThreeFreelance;
  }, [accountType]);

  const uuid = localStorage.getItem('uuid');
  const initialValues = {
    service_Owner_uuid: uuid,
    Provider_Type: "",
    Business_name: "",
    category_names: "",
    phone_number: "",
    email: "",
    address: "",
    website: "",
    social_media_links: {
      facebook: "",
      instagram: "",
      linkedin: "",
      behance: ""
    },
    step: 1,
    service_icon: null,
    commercial_registration: null,
    Tax_Card: null,
    service_photos: null,
    Company_Profile: null,
    Pricelist: null,
    about: "",
    National_ID: null,
  };

  const handleSubmit = async (values) => {
    try {
      // Log the values to be sent
      console.log(values);

      // Create a FormData object
      const formData = new FormData();

      // Append values to FormData (assuming values is an object)
      for (const key in values) {
        if (values.hasOwnProperty(key)) {
          // Check if the value is not null
          if (values[key] !== null) {
            // If the key is 'social_media_links', stringify it
            if (key === 'social_media_links') {
              formData.append(key, JSON.stringify(values[key]));
            } else {
              formData.append(key, values[key]);
            }
          }
        }
      }

      // Call the submitForm mutation
      const result = await submitForm(formData).unwrap(); // Unwrap the result to get the actual response
      console.log('Response:', result);
    } catch (error) {
      // Handle any errors
      console.error('Error:', error);
    }
  };

  
  

  return (
  <>
     {!isSuccess ?   <Modal isOpen={isOpen} className="lg:w-[920px] mx-5 overflow-y-auto max-h-[90vh] bg-white"><div className="h-full text-[#333333] font-poppins">
       
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
             {({ values, setFieldValue }) => (
               <Form encType="multipart/form-data" >
                 <h1 className="text-center text-xl">Step {values.step} From {accountType === "Freelancer" ? "5" : "3"}</h1>
                 {values.step === 1 && <StepOne setFieldValue={setFieldValue} />}
                 {values.step === 2 && <StepTwo setFieldValue={setFieldValue} />}
                 {values.step === 3 && <StepThree setFieldValue={setFieldValue} />}
                 {values.step === 3 && accountType === "Bussiness" && (
                   <button type="submit" className="bg-[#6161FF] w-full my-3 text-white p-2 rounded-lg" >
                     {isLoading?'Submit...':  'Submit'}
                   </button>
                 )}
                 {values.step === 4 && accountType === "Freelancer" && <StepFour setFieldValue={setFieldValue} />}
               </Form>
             )}
           </Formik>
         </div>
       </div>

     
     </div></Modal> :<Modal isOpen={isOpen}  className="lg:w-[620px] h-[200px] mx-5 overflow-y-auto rounded-[60px]  relative bg-white"><PendingModal/></Modal>}
     
    
  </>
   
  );
};

export default DataWelcomeModal;
