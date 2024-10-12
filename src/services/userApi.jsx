// userApi.js
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const baseUrl = `${import.meta.env.VITE_BASE_URL}:8080/api`;

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({
    baseUrl,
    prepareHeaders: (headers) => {
      const updatedAccessToken = localStorage.getItem('accessToken');
      if (updatedAccessToken) {
        headers.set('Authorization', `Bearer ${updatedAccessToken}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    signup: builder.mutation({
      query: (user) => ({
        url: '/users/',
        method: 'POST',
        body: user,
      }),
    }),
    verifyEmail: builder.mutation({
      query: ({ user_uuid, otp }) => ({
        url: '/user/confirm-email/',
        method: 'POST',
        body: { user_uuid, otp },
      }),
    }),
    getUserInfo: builder.query({
      query: () => '/userinfo/',
      method: 'GET',
    }),
    resendOtp: builder.mutation({
      query: (email) => ({
        url: '/user/resend-otp/',
        method: 'POST',
        body: { email },
      }),
    }),
    login: builder.mutation({
      query: (credentials) => ({
        url: '/user/login/',
        method: 'POST',
        body: credentials,
      }),
    }),
    forgotPassword: builder.mutation({
      query: (email) => ({
        url: '/forgot_password/',
        method: 'POST',
        body: { email },
      }),
    }),
    resetPassword: builder.mutation({
        query: ({ id, password, confirmPassword }) => ({
          url: `/reset_password/${id}/`,
          method: 'POST',
          body: { password, confirmPassword },
        }),
      }),
  }),
});

export const { useSignupMutation, useVerifyEmailMutation, useResetPasswordMutation ,useGetUserInfoQuery, useResendOtpMutation, useLoginMutation, useForgotPasswordMutation } = userApi;
