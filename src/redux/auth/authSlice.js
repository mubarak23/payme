import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoggedIn: false,
  token: null,
  user: {
    firstName: '',
    lastName: '',
    emailAddress: '',
  },
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    SET_LOGIN(state, action) {
      console.log('Login Status before update', action);
      state.isLoggedIn = action.payload;
    },

    SET_TOKEN(state, action) {
      console.log('Login Status before update', action);
      localStorage.setItem('token', JSON.stringify(action.payload));
      state.token = action.payload;
    },

    SET_USER(state, action) {
      const userProfile = action.payload;
      console.log('user details before state', userProfile);
      state.user.firstName = userProfile.firstName;
      state.user.lastName = userProfile.lastName;
      state.user.emailAddress = userProfile.emailAddress;
    },
  },
});

export const { SET_NAME, SET_LOGIN, SET_USER, SET_TOKEN } = authSlice.actions;

export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;
export const selectName = (state) => state.auth.firstName;
export const selectUser = (state) => state.auth.user;
export const selectToken = (state) => state.auth.token;

console.log(initialState);

export default authSlice.reducer;
