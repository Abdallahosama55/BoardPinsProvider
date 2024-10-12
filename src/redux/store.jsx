// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import accountReducer from '../redux/features/accountSlice';
import { userApi } from '../services/userApi';
import { chatbotApi } from '../services/ChatServices';
import messageReducer from '../redux/features/ChatSlice';
import userReducer from '../redux/features/userSliceDate'; // Import the user slice
import { userSingleServicesProviderApi } from '../services/userSingleServicesProviderApi';

export const store = configureStore({
  reducer: {
    account: accountReducer,
    [userApi.reducerPath]: userApi.reducer, // Add the userApi reducer
    [chatbotApi.reducerPath]: chatbotApi.reducer, // Add the chatbotApi reducer
    [userSingleServicesProviderApi.reducerPath]: userSingleServicesProviderApi.reducer, // Add the userSingleServicesProviderApi reducer
    message: messageReducer,
    user: userReducer, // Add the user slice to store user info globally

    
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(userApi.middleware) // Add userApi middleware
      .concat(chatbotApi.middleware) // Add chatbotApi middleware
      .concat(userSingleServicesProviderApi.middleware), // Add the categoryApi middleware
});
