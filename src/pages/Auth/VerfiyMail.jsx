import { useState, useEffect, useRef } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import CustomSubmitBtn from "../../components/auth/Atoms/CustomSubmitBtn";
import CustomTextNav from "../../components/auth/Atoms/CustomTextNav";

const validationSchema = Yup.object().shape({
   email: Yup.string().email("Invalid email address").required("Email is required"),
   otp1: Yup.string().matches(/^\d{1}$/, "").required(),
   otp2: Yup.string().matches(/^\d{1}$/, "").required(),
   otp3: Yup.string().matches(/^\d{1}$/, "").required(),
   otp4: Yup.string().matches(/^\d{1}$/, "").required(),
});

export default function VerifyMail() {
   const [timeLeft, setTimeLeft] = useState(59);
   const inputRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];

   useEffect(() => {
      if (timeLeft > 0) {
         const timer = setInterval(() => {
            setTimeLeft((prevTime) => prevTime - 1);
         }, 1000);

         return () => clearInterval(timer);
      }
   }, [timeLeft]);

   const focusNextInput = (index) => {
      if (index < inputRefs.length - 1) {
         inputRefs[index + 1].current.focus();
      }
   };

   const handleInput = (e, index) => {
      const { value } = e.target;
      if (value.length === 1) {
         focusNextInput(index);
      }
   };

   const handleResendCode = () => {
      // Logic to resend the code goes here
      // For now, just reset the timer
      setTimeLeft(59);
   };

   return (
      <section className="Auth mb-5">
         <div className="mx-14">
            <Formik
               initialValues={{ email: "", password: "", otp1: "", otp2: "", otp3: "", otp4: "" }}
               validationSchema={validationSchema}
            >
               {({ isSubmitting }) => (
                  <Form className="mt-3 xl:w-3/6 lg:w-4/6 md:w-1/6 m-auto xl:px-7">
                     <div className="py-5 text-center font-poppins text-5xl md:text-4xl font-bold md:leading-7 text-gray-800">
                        Verify Email
                     </div>
                     <div className="w-full flex flex-col pt-1 gap-2 text-center">
                        <span className="text-2xl font-poppins font-normal text-gray-800">
                           Code has been sent to <span className="text-[#6161FF]">johndoe@gmail.com</span>
                        </span>
                        <span className="text-2xl font-poppins font-normal text-gray-800">
                           Enter the code to verify your account.
                        </span>
                     </div>
                     <div className="text-center mt-12">Enter Your Code</div>
                     <div className="flex justify-center py-5 space-x-4">
                        {inputRefs.map((inputRef, index) => (
                           <input
                              key={index}
                              ref={inputRef}
                              type="text"
                              name={`otp${index + 1}`}
                              maxLength="1"
                              placeholder={`${index + 1}`}
                              className="form-input block w-12 px-4 py-3 leading-tight bg-gray-200 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:bg-white focus:border-gray-500 text-center"
                              onChange={(e) => handleInput(e, index)}
                           />
                        ))}
                     </div>
                     <ErrorMessage name="otp4" component="div" className="text-red-500 mt-1" />
                     <div className="text-center">
                        <span className="text-[##1E1E1E]">Didn’t Receive Code?</span>
                        <button
                           className={`px-3 text-[#0685FA] underline font-poppins ${timeLeft > 0 ? 'cursor-not-allowed' : ''}`}
                           onClick={handleResendCode}
                           disabled={timeLeft > 0}
                        >
                           Resend Code
                        </button>
                     </div>
                     <div className="text-center text-[#6161FF] py-2">
                        <span>Resend code in {`00:${timeLeft < 10 ? `0${timeLeft}` : timeLeft}`}</span>
                     </div>
                     <div className="py-5 lg:px-24">
                        <CustomSubmitBtn nameBtn={"Send The Link"} />
                     </div>
                  
                  </Form>
               )}
            </Formik>
         </div>
      </section>
   );
}
