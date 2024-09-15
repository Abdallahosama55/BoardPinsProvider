import { useState, useEffect, useRef } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import CustomSubmitBtn from "../../components/auth/Atoms/CustomSubmitBtn";
import { useGetUserInfoQuery, useVerifyEmailMutation, useResendOtpMutation } from "../../services/userApi";

const validationSchema = Yup.object().shape({
  otp1: Yup.string().matches(/^\d{1}$/, "Invalid OTP").required("Required"),
  otp2: Yup.string().matches(/^\d{1}$/, "Invalid OTP").required("Required"),
  otp3: Yup.string().matches(/^\d{1}$/, "Invalid OTP").required("Required"),
  otp4: Yup.string().matches(/^\d{1}$/, "Invalid OTP").required("Required"),
});

export default function VerifyMail() {
  const [timeLeft, setTimeLeft] = useState(59);
  const inputRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];
  const [verifyEmail, { isLoading: isVerifying, isError, isSuccess }] = useVerifyEmailMutation();
  const [resendOtp, { isLoading: isResending, isError: resendError, isSuccess: resendSuccess }] = useResendOtpMutation();
  const { data: userInfo, refetch: refetchUserInfo, error: userInfoError, isLoading: isUserInfoLoading } = useGetUserInfoQuery(undefined, {
   skip: !localStorage.getItem('accessToken'), // Skip query if no token
 });
 
 
  const navigate = useNavigate();

  useEffect(() => {
   if (isSuccess) {
     toast.success('Email verified successfully!');
     refetchUserInfo(); // Ensure the user info is up-to-date
     setTimeout(() => {
       navigate(`/myboard`);
     }, 2000); // Adjust the timeout duration as needed
   }
 }, [isSuccess, refetchUserInfo, navigate]);
 
 useEffect(() => {
   if (resendSuccess) {
     toast.success('Code resent successfully!');
     setTimeLeft(59); // Reset timer on success
   } else if (resendError) {
     toast.error('Failed to resend code. Please try again.');
   }
 }, [resendSuccess, resendError]);
 
 // Optional: Add a useEffect to refetch user info on component mount or when relevant dependencies change
 useEffect(() => {
   if (localStorage.getItem('accessToken')) {
     refetchUserInfo(); // Fetch user info when component mounts or when token changes
   }
 }, [refetchUserInfo]);
 
  const focusNextInput = (index) => {
    if (index < inputRefs.length - 1) {
      inputRefs[index + 1].current.focus();
    }
  };
  useEffect(() => {
   if (timeLeft > 0) {
     const timer = setInterval(() => {
       setTimeLeft((prevTime) => prevTime - 1);
     }, 1000);

     return () => clearInterval(timer);
   }
 }, [timeLeft]);

  const handleInput = (e, index, setFieldValue) => {
    const { value } = e.target;
    if (value.length === 1) {
      // When a character is entered, set the value and focus next input
      setFieldValue(`otp${index + 1}`, value);
      focusNextInput(index);
    } else if (value === '') {
      // Handle backspace or deletion
      setFieldValue(`otp${index + 1}`, '');
      if (index > 0) {
        inputRefs[index - 1].current.focus();
      }
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === 'Backspace' && !e.target.value) {
      if (index > 0) {
        inputRefs[index - 1].current.focus();
      }
    }
  };

  const handleResendCode = async (resetForm) => {
    if (userInfo?.email) {
      try {
        await resendOtp(userInfo.email).unwrap();
        resetForm(); // Reset form values
      } catch (error) {
        // Handle error
        toast.error('Error resending code.');
      }
    } else {
      toast.error('No email found.');
    }
  };

  const handleSubmit = async (values) => {
    const otp = values.otp1 + values.otp2 + values.otp3 + values.otp4;
    const user_uuid = localStorage.getItem('uuid');
    
    try {
      await verifyEmail({ user_uuid, otp }).unwrap();
    } catch (error) {
      // Extract the error message from the response
      const errorMessage = error?.data?.detail || 'Verification failed. Please try again.';
      toast.error(errorMessage);
    }
  };

  if (isUserInfoLoading) return <div>Loading user info...</div>;
  if (userInfoError) return <div>Error: {userInfoError.message}</div>;

  return (
    <section className="Auth mb-5 mt-12">
      <div className="mx-14">
        <Formik
          initialValues={{ otp1: "", otp2: "", otp3: "", otp4: "" }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting, setFieldValue, resetForm }) => (
            <Form className="mt-3 xl:w-3/6 lg:w-4/6 md:w-1/6 m-auto xl:px-7">
              <div className="py-5 text-center font-poppins text-5xl md:text-4xl font-bold md:leading-7 text-gray-800">
                Verify Email
              </div>
              <div className="w-full flex flex-col pt-1 gap-2 text-center">
                <span className="text-2xl font-poppins font-normal text-gray-800">
                  Code has been sent to <span className="text-[#6161FF]">{userInfo?.email}</span>
                </span>
                <span className="text-2xl font-poppins font-normal text-gray-800">
                  Enter the code to verify your account.
                </span>
              </div>
              <div className="text-center mt-12">Enter Your Code</div>
              <div className="flex justify-center py-5 space-x-4">
                {inputRefs?.map((inputRef, index) => (
                  <Field
                    key={index}
                    innerRef={inputRef}
                    type="text"
                    name={`otp${index + 1}`}
                    maxLength="1"
                    placeholder={`${index + 1}`}
                    className="form-input block w-12 px-4 py-3 leading-tight bg-gray-200 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:bg-white focus:border-gray-500 text-center"
                    onChange={(e) => handleInput(e, index, setFieldValue)}
                    onKeyDown={(e) => handleKeyDown(e, index)}
                  />
                ))}
              </div>
              <ErrorMessage name="otp4" component="div" className="text-red-500 mt-1" />
              <div className="text-center">
                <span className="text-[##1E1E1E]">Didn’t Receive Code?</span>
                <button
                  className={`px-3 text-[#0685FA] underline font-poppins ${timeLeft > 0 ? 'cursor-not-allowed' : ''}`}
                  onClick={() => handleResendCode(resetForm)}
                  disabled={timeLeft > 0 || isResending}
                >
                  Resend Code
                </button>
              </div>
              <div className="text-center text-[#6161FF] py-2">
                <span>Resend code in {`00:${timeLeft < 10 ? `0${timeLeft}` : timeLeft}`}</span>
              </div>
              <div className="py-5 lg:px-24">
                <CustomSubmitBtn
                  nameBtn={isVerifying ? 'Loading...' : 'Send The Link'}
                  disabled={isVerifying}
                />
              </div>
            </Form>
          )}
        </Formik>
        <ToastContainer />
      </div>
    </section>
  );
}
