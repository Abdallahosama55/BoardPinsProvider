// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import accountReducer from '../redux/features/accountSlice';

import { userApi } from '../services/userApi';

export const store = configureStore({
  reducer: {
    account: accountReducer,
    [userApi.reducerPath]: userApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userApi.middleware),
});
