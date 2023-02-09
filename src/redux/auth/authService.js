import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

export const BACKEND_URL =
  process.env.BACKEND_URL || 'http://localhost:3001/v1';

export const validateEmail = (email) => {
  return email.match(
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
};

export const registerUser = async (userRegisterData) => {
  try {
    const response = await axios.post(
      `http://localhost:3001/v1/api/auth/register`,
      userRegisterData
    );
    //  if (response.status === 201) {
    toast.success('User Registered successfully, Proceed to login');
    console.log(response);
    console.log(response.data);
    return response.data;
    //  }
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    toast.error(message);
  }
};

export const loginUser = async (userLoginData) => {
  try {
    console.log('Did we reach here');
    const response = await axios.post(
      `http://localhost:3001/v1/api/auth/login`,
      userLoginData
    );
    toast.success('User Login successfully');

    return response.data;
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    toast.error(message);
  }
};

export const logoutUser = async () => {
  try {
    const logout = await axios.get(`http://localhost:3001/v1/api/auth/logout`);
    toast.success('Logout Successfully');
    return logout;
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    toast.error(message);
  }
};

export const getLoggedInUser = createAsyncThunk('auth/user', async (token) => {
  try {
    const { data } = await axios.get(`http://localhost:3001/v1/api/auth`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return data.data;
  } catch (error) {
    console.log(error.response.data.error_msg);
    throw error.response.data.error_msg
      ? error.response.data.error_msg
      : 'No user';
  }
});
