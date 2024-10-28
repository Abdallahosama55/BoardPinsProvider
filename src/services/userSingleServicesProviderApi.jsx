// userSingleServicesProviderApi.js
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


export const baseUrl = `${import.meta.env.VITE_SSP_SERVICES_URL}:9003`;

export const userSingleServicesProviderApi = createApi({
  reducerPath: 'userSingleServicesProviderApi',
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
    fetchCategories: builder.query({
      query: () => '/SingleServiceProvider/add-category/',
      method: 'GET',
    }),
  }),
});

export const { useFetchCategoriesQuery } = userSingleServicesProviderApi;
