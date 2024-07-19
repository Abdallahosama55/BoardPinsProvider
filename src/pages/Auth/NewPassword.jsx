import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import CustomInput from '../../components/auth/Atoms/CusomInput';
import CustomTitle from '../../components/auth/Atoms/CustomTitle';
import CustomSubmitBtn from '../../components/auth/Atoms/CustomSubmitBtn';

const validationSchema = Yup.object({

  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Confirm Password is required'),
  terms: Yup.bool().oneOf([true], 'You must accept the terms and conditions')
});

const initialValues = {

  password: '',
  confirmPassword: '',

};

// This function will print form data to the console when the form is submitted
const onSubmit = values => {
  console.log('Form data', values);
};

function NewPassword() {
  return (
    <div className='pb-3 mt-24 flex flex-col gap-5'>
 
      <header>
        <CustomTitle title={'Create a new password!'} />
      </header>
      <main className='flex justify-center items-center pb-6'>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {formik => (
            <Form className='lg:w-[450px] w-full mx-12  flex flex-col gap-4'>
            
      
      
              <CustomInput
                type='password'
                label='Choose new password'
                placeholder='Enter  password'
                name='password'
              />
              <CustomInput
                type='password'
                label='Confirm password'
                placeholder='Confirm password'
                name='confirmPassword'
              />

              <CustomSubmitBtn nameBtn='Create Password' />
            </Form>
      
          )}
       
        </Formik>
      </main>

     
    </div>
  );
}

export default NewPassword;
