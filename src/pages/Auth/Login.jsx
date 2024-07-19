import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import HeaderAuth from '../../components/auth/HeaderAuth';
import CustomInput from '../../components/auth/Atoms/CusomInput';
import CustomTitle from '../../components/auth/Atoms/CustomTitle';
import CustomSubmitBtn from '../../components/auth/Atoms/CustomSubmitBtn';
import CustomGoagleBtn from '../../components/auth/Atoms/CustomGoagleBtn';
import { Link } from 'react-router-dom';
import CustomTextNav from '../../components/auth/Atoms/CustomTextNav';

const validationSchema = Yup.object({

  email: Yup.string().email('Invalid email format').required('Email is required'),
  password: Yup.string().required('Password is required'),

});

const initialValues = {
  name: '',
  email: '',


};

// This function will print form data to the console when the form is submitted
const onSubmit = values => {
  console.log('Form data', values);
};

function Login() {
  return (
    <div className=' mt-12'>
  
      <header>
        <CustomTitle title={'Log in'}/>
      </header>
      <main className='flex justify-center items-center'>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {formik => (
            <Form className='lg:w-[450px] w-full mx-12'>
              <div className='py-8'>
                <CustomGoagleBtn  nameBtn={"Continue with Google"}/>
                <div className='relative mt-6 border-t-[1px] border-[#B0B0B0] w-full flex justify-center items-center'>
                  <span className='absolute bg-white px-5 text-md text-[#B0B0B0]'>or</span>
                </div>
              </div>
       
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


<div className=' py-6 text-center  flex flex-col gap-6 '>

<CustomSubmitBtn nameBtn='Log in'  />
<Link to='/forgetpassword' className=' underline text-[#00000080] text-center  ' >Forgot password?</Link>
</div>


<CustomTextNav title={"Need an account ?"} linkName={"Sign up"} linkNav={"/signup"}/>
             
            </Form>
          )}
        </Formik>
      </main>
    </div>
  );
}

export default Login;
