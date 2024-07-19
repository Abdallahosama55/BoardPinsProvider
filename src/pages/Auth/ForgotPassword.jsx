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

  email: Yup.string().email('Invalid email format').required('Email is required'),

});

const initialValues = {

  email: '',


};

// This function will print form data to the console when the form is submitted
const onSubmit = values => {
  console.log('Form data', values);
};

function ForgetPassword() {
  return (
    <div className='pb-3 mt-24 '>

      <header>
        <CustomTitle title={'Forgot your password?'}  />
      </header>
      <main className='flex flex-row gap-12 mt-12 justify-center  items-center '>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        
        >
          {formik => (
            <Form className='lg:w-[450px] w-full mx-12  flex flex-col gap-3'>

            
              <CustomInput
                type='email'
                label='Email'
                placeholder='Enter your Email to reset password ...'
                name='email'
              />
     
            
           <CustomSubmitBtn nameBtn='Send me the link' />
      
            </Form>
      
          )}
       
        </Formik>
      </main>
      <CustomTextNav title={"Need an account?"} linkName={" Sign up"} linkNav={"/signup"}/>
     
    </div>
  );
}

export default ForgetPassword;
