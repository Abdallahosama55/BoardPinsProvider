import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import HeaderAuth from '../../components/auth/HeaderAuth';
import CustomInput from '../../components/auth/Atoms/CusomInput';
import CustomTitle from '../../components/auth/Atoms/CustomTitle';
import CustomSubmitBtn from '../../components/auth/Atoms/CustomSubmitBtn';
import CustomGoagleBtn from '../../components/auth/Atoms/CustomGoagleBtn';
import CustomTextNav from '../../components/auth/Atoms/CustomTextNav';

const validationSchema = Yup.object({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email format').required('Email is required'),
  password: Yup.string().required('Password is required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Confirm Password is required'),
  terms: Yup.bool().oneOf([true], 'You must accept the terms and conditions')
});

const initialValues = {
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
  terms: false
};

// This function will print form data to the console when the form is submitted
const onSubmit = values => {
  console.log('Form data', values);
};

function Signup() {
  return (
    <div className='pb-3'>
 
      <header>
        <CustomTitle title={'Welcome to board pins'} subTitle={"Get started - it's free!"} />
      </header>
      <main className='flex justify-center items-center pb-6'>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {formik => (
            <Form className='lg:w-[450px] w-full mx-12'>
              <div className='py-8'>
                <CustomGoagleBtn />
                <div className='relative mt-6 border-t-[1px] border-[#B0B0B0] w-full flex justify-center items-center'>
                  <span className='absolute bg-white px-5 text-md text-[#B0B0B0]'>or</span>
                </div>
              </div>
              <CustomInput
                type='text'
                label='Bussiness / Full Name (freelance)'
                placeholder='Enter your name...'
                name='name'
              />
              <CustomInput
                type='email'
                label='Email'
                placeholder='Enter your email...'
                name='email'
              />
              <CustomInput
                type='password'
                label='Password'
                placeholder='Enter your password'
                name='password'
              />
              <CustomInput
                type='password'
                label='Confirm password'
                placeholder='Confirm password'
                name='confirmPassword'
              />
              <CustomInput
                type='checkbox'
                label='By proceeding, you agree to the Terms of Service and Privacy Policy'
                name='terms'
              />
              <CustomSubmitBtn nameBtn='Create Account' />
            </Form>
      
          )}
       
        </Formik>
      </main>
      <CustomTextNav title={"Already have an account?"} linkName={"Login"} linkNav={"/login"}/>
     
    </div>
  );
}

export default Signup;
