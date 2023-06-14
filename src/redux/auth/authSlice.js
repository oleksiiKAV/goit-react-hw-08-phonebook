import { createSlice } from '@reduxjs/toolkit';
import {
  getCurrentUser,
  loginUser,
  logoutUser,
  registerUser,
} from './authOperations';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isAuth: false,
    name: null,
    email: null,
    token: null,
    isLoading: false,
    error: null,
    isRefreshing: false,
  },
  reducers:{resetError: state => {
    state.error = null;
  }},
  extraReducers: builder => {
    builder
      .addCase(registerUser.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, { payload }) => {
        console.log('payload', payload);
        state.isAuth = true;
        state.name = payload.user.name;
        state.email = payload.user.email;
        state.isLoading = false;
        state.token = payload.token;
        state.error = null;
      })
      .addCase(registerUser.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(loginUser.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, { payload }) => {
        state.isAuth = true;
        state.name = payload.user.name;
        state.email = payload.user.email;
        state.isLoading = false;
        state.token = payload.token;
        state.error = null;
      })
      .addCase(loginUser.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(logoutUser.pending, state => {
        state.isLoading = true;
      })
      .addCase(logoutUser.fulfilled, (state, { payload }) => {
        state.isAuth = false;
        state.name = '';
        state.email = '';
        state.isLoading = false;
        state.token = null;
        state.error = null;
      })
      .addCase(logoutUser.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(getCurrentUser.pending, state => {
        state.isLoading = true;
      })
      .addCase(getCurrentUser.fulfilled, (state, { payload }) => {
        state.isAuth = true;
        state.name = payload.name;
        state.email = payload.email;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getCurrentUser.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
      // .addCase(resetError, state => {
      //   state.error = null;
      // });
      
  },
});
export const { resetError } = authSlice.actions;
export default authSlice.reducer;