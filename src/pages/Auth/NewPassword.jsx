// NewPassword.js
import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { useParams } from 'react-router-dom';
import { useResetPasswordMutation } from '../../services/userApi';
import { toast,ToastContainer } from 'react-toastify';
import CustomInput from '../../components/auth/Atoms/CusomInput';
import CustomTitle from '../../components/auth/Atoms/CustomTitle';
import CustomSubmitBtn from '../../components/auth/Atoms/CustomSubmitBtn';

const validationSchema = Yup.object({
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Confirm Password is required'),
});

const initialValues = {
  password: '',
  confirmPassword: '',
};

const NewPassword = () => {
  const { id } = useParams(); // Get the ID from URL
  const [resetPassword,{isLoading}] = useResetPasswordMutation();

  const onSubmit = async (values) => {
    try {
      await resetPassword({ id, ...values }).unwrap();
      toast.success('Password has been reset successfully!');
    } catch (error) {
      toast.error('Failed to reset password. Please try again.');
    }
  };

  return (
    <div className='pb-3 mt-24 flex flex-col gap-5'>
      <ToastContainer />
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
            <Form className='lg:w-[450px] w-full mx-12 flex flex-col gap-4'>
              <CustomInput
                type='password'
                label='Choose new password'
                placeholder='Enter password'
                name='password'
              />
              <CustomInput
                type='password'
                label='Confirm password'
                placeholder='Confirm password'
                name='confirmPassword'
              />
              <CustomSubmitBtn nameBtn={isLoading?"Loading...":'Create Password'} />
            </Form>
          )}
        </Formik>
      </main>
    </div>
  );
};

export default NewPassword;
