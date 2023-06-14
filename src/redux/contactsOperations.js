import { createAsyncThunk } from '@reduxjs/toolkit';

import {
  addContactApi,
  getContactApi,
  removeContactApi,
} from 'services/contactApi';

export const addContact = createAsyncThunk(
  'contact/add',
  async (form, thunkApi) => {
    try {
      const contact = await addContactApi(form);
      return contact;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const getContact = createAsyncThunk(
  'contact/get',
  async (_, { rejectWithValue }) => {
    try {
      const data = await getContactApi();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const removeContact = createAsyncThunk(
  'contact/remove',
  async (id, { rejectWithValue }) => {
    try {
      await removeContactApi(id);
      return id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
