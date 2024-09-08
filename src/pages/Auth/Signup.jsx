import React, { useState, useEffect } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { Link, useNavigate } from 'react-router-dom';
import HeaderAuth from '../../components/auth/HeaderAuth';
import CustomInput from '../../components/auth/Atoms/CusomInput';
import CustomTitle from '../../components/auth/Atoms/CustomTitle';
import CustomSubmitBtn from '../../components/auth/Atoms/CustomSubmitBtn';
import CustomGoagleBtn from '../../components/auth/Atoms/CustomGoagleBtn';
import CustomTextNav from '../../components/auth/Atoms/CustomTextNav';
import { baseUrl, useSignupMutation } from '../../services/userApi';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from 'react-redux';

const validationSchema = Yup.object({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email format').required('Email is required'),
  password: Yup.string()
    .required('Password is required')
    .matches(/[A-Za-z]/, 'Password must contain at least one letter')
    .matches(/[0-9]/, 'Password must contain at least one number'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Confirm Password is required'),
  terms: Yup.bool().oneOf([true], 'You must accept the terms and conditions'),
});

const initialValues = {
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
  terms: false,
};

function Signup() {
  const [signup, { isLoading, error, isSuccess }] = useSignupMutation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [response, setResponse] = useState(null);

  const onSubmit = async (values, { setSubmitting }) => {
    const payload = {
      first_name: values.name,
      email: values.email,
      password: values.password,
      confirm_password: values.confirmPassword,
      accept_terms: values.terms,
    };

    try {
      const response = await signup(payload).unwrap();
      toast.success('Signup successful!', {
        position: 'top-right',
      });

      setResponse(response); // Set response to state

      setTimeout(() => {
        navigate(`/verifymail/${response.user.uuid}`);
      }, 2000);
    } catch (err) {
      const errorMessage = Array.isArray(err.data.email) ? err.data.email.join(', ') : err.data.email || 'Failed to signup. Please try again!';
      toast.error(errorMessage, {
        position: 'top-right',
      });
    } finally {
      setSubmitting(false);
    }
  };

  useEffect(() => {
    if (response) {
      localStorage.setItem('uuid', response.user.uuid);
      localStorage.setItem('accessToken', response.tokens.access);
      localStorage.setItem('refreshToken', response.tokens.refresh);
  
      // Trigger a refetch or update state as needed
      console.log('Tokens saved, refetch if needed');
    }
  }, [response]);
  return (
    <div className='pb-3 lg:mt-0 py-8 lg:py-0'>
      <ToastContainer />
      <header>
        <CustomTitle title={'Welcome to board pins'} subTitle={"Get started - it's free!"} />
      </header>
      <main className='flex justify-center items-center pb-6'>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {({ isSubmitting }) => (
            <Form className='lg:w-[450px] w-full mx-12'>
              <div className='py-8'>
               
                <CustomGoagleBtn path={`${baseUrl}/google-login/`} />
                
             
                <div className='relative mt-6 border-t-[1px] border-[#B0B0B0] w-full flex justify-center items-center'>
                  <span className='absolute bg-white px-5 text-md text-[#B0B0B0]'>or</span>
                </div>
              </div>
              <CustomInput
                type='text'
                label='Business / Full Name (freelance)'
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
              <CustomSubmitBtn nameBtn={isSubmitting ? 'Loading...' : 'Create Account'} />
            </Form>
          )}
        </Formik>
      </main>
      <CustomTextNav title={"Already have an account?"} linkName={"Login"} linkNav={"/login"} />
    </div>
  );
}

export default Signup;
