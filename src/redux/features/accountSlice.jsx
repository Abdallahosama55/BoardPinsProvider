// redux/accountSlice.js
import { createSlice } from '@reduxjs/toolkit';

const accountSlice = createSlice({
  name: 'account',
  initialState: {
    accountType: '',
  },
  reducers: {
    setAccountType(state, action) {
      state.accountType = action.payload;
    },
  },
});

// Export the action and reducer
export const { setAccountType } = accountSlice.actions;
export default accountSlice.reducer;

// Create a selector to access the account type value
export const selectAccountType = (state) => state.account.accountType;
