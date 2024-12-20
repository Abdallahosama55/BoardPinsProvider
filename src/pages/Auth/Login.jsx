import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { useTranslation } from 'react-i18next';
import HeaderAuth from '../../components/auth/HeaderAuth';
import CustomInput from '../../components/auth/Atoms/CusomInput';
import CustomTitle from '../../components/auth/Atoms/CustomTitle';
import CustomSubmitBtn from '../../components/auth/Atoms/CustomSubmitBtn';
import CustomGoagleBtn from '../../components/auth/Atoms/CustomGoagleBtn';
import { Link, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { baseUrl, useLoginMutation, useResendOtpMutation } from '../../services/userApi';
import CustomTextNav from '../../components/auth/Atoms/CustomTextNav';

const Login = () => {
  const { t } = useTranslation();
  
  const validationSchema = Yup.object({
    email: Yup.string().email(t('login.invalidEmail')).required(t('login.emailRequired')),
    password: Yup.string().required(t('login.passwordRequired')),
  });

  const initialValues = {
    email: '',
    password: '',
  };

  const [login, { isLoading, error, isSuccess }] = useLoginMutation();
  const navigate = useNavigate();
  const [resendOtp] = useResendOtpMutation();

  const onSubmit = async (values) => {
    try {
      const response = await login(values).unwrap();
      toast.success(t('login.loginSuccess'));

      localStorage.setItem('accessToken', response.tokens.access);
      localStorage.setItem('refreshToken', response.tokens.refresh);

      navigate("/myboard");
    } catch (error) {
      if (error.status === 403 && error.data.message === 'Please activate email') {
        const userEmail = values.email;
        toast.info(t('login.resendOtp'));

        try {
          await resendOtp(userEmail).unwrap();
          toast.success(t('login.otpResent'));

          navigate(`/verifymail/${error.data.user_id}/${userEmail}`);
        } catch (resendError) {
          toast.error(t('login.resendFailed'));
        }
      } else {
        toast.error(error.data.message || t('login.loginFailed'));
      }
    }
  };

  return (
    <div className='mt-12'>
      <ToastContainer />
      <header>
        <CustomTitle title={t('login.title')} />
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
                <CustomGoagleBtn nameBtn={t('login.continueWithGoogle')} path={`${baseUrl}/google-login/`} />
                <div className='relative mt-6 border-t-[1px] border-[#B0B0B0] w-full flex justify-center items-center'>
                  <span className='absolute bg-white px-5 text-md text-[#B0B0B0]'>{t('login.or')}</span>
                </div>
              </div>

              <CustomInput
                type='email'
                label={t('login.emailLabel')}
                placeholder={t('login.emailPlaceholder')}
                name='email'
              />
              <CustomInput
                type='password'
                label={t('login.passwordLabel')}
                placeholder={t('login.passwordPlaceholder')}
                name='password'
              />

              <div className='py-6 text-center flex flex-col gap-6'>
                <CustomSubmitBtn nameBtn={isLoading ? t('login.loading') : t('login.loginButton')} />
                <Link to='/forgetpassword' className='underline text-[#00000080] text-center'>{t('login.forgotPassword')}</Link>
              </div>

              <CustomTextNav title={t('login.needAccount')} linkName={t('login.signUp')} linkNav="/signup" />
            </Form>
          )}
        </Formik>
      </main>
    </div>
  );
};

export default Login;
