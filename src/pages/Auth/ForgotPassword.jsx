// ForgetPassword.js
import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import HeaderAuth from '../../components/auth/HeaderAuth';
import CustomInput from '../../components/auth/Atoms/CusomInput';
import CustomTitle from '../../components/auth/Atoms/CustomTitle';
import CustomSubmitBtn from '../../components/auth/Atoms/CustomSubmitBtn';
import CustomTextNav from '../../components/auth/Atoms/CustomTextNav';

import { toast,ToastContainer  } from 'react-toastify';
import { useForgotPasswordMutation } from '../../services/userApi';

const validationSchema = Yup.object({
  email: Yup.string().email('Invalid email format').required('Email is required'),
});

const initialValues = {
  email: '',
};

const ForgetPassword = () => {
  const [forgotPassword ,{data,isLoading,error}] = useForgotPasswordMutation();

  const onSubmit = async (values) => {
    try {
      await forgotPassword(values.email).unwrap();
      toast.success('Password reset link sent to your email');
    } catch (error) {
     
      toast.error(error.data.detail||'Failed to send password reset link');

    }
  };

  return (
    <div className='pb-3 mt-24'>
      <ToastContainer />
      <header>
        <CustomTitle title={'Forgot your password?'} />
      </header>
      <main className='flex flex-row gap-12 mt-12 justify-center items-center'>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {formik => (
            <Form className='lg:w-[450px] w-full mx-12 flex flex-col gap-3'>
              <CustomInput
                type='email'
                label='Email'
                placeholder='Enter your Email to reset password ...'
                name='email'
              />
              <CustomSubmitBtn nameBtn={isLoading?"Loading....":"Send me the link"} />
            </Form>
          )}
        </Formik>
      </main>
      <CustomTextNav title={"Need an account?"} linkName={" Sign up"} linkNav={"/signup"} />
    </div>
  );
};

export default ForgetPassword;
