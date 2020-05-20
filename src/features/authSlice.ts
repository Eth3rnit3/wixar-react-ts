import { createSlice, Dispatch } from '@reduxjs/toolkit';
import axios from 'axios';
import { IStore, IAuthState } from '../interfaces/store';
import apiUrls from '../api';

export const keyStore = 'wwvr-front-v1';

const initialState: IAuthState = {
  jwt: null,
  creator: {
    id: 0,
    user_name: '',
    created_at: '',
    updated_at: '',
    email: '',
    user_id: 0,
    right: {
      id: 0,
      role_name: '',
      created_at: '',
      updated_at: '',
    },
    organization: {
      id: 0,
      name: '',
      created_at: '',
      updated_at: '',
      legal_name: '',
      address_locality: '',
      address_region: '',
      address_country: '',
      phone: '',
      postal_code: '',
      email: '',
      siret: '',
      street_address: ''
    }
  },
  isConnected: false,
  keepSession: true
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      axios.defaults.headers.common.Authorization = `Bearer ${action.payload.jwt}`;

      state.jwt = action.payload.jwt;
      state.creator = { ...action.payload.creator };
      state.isConnected = true;
      state.keepSession = action.payload.keepSession;
    },
    logout: (state, action) => {
      axios.defaults.headers.common.Authorization = null;
      localStorage.removeItem(keyStore);

      state.jwt = null;
      state.creator = { ...initialState.creator };
      state.isConnected = false;
      state.keepSession = initialState.keepSession;
    },
  },
});

export const { login, logout } = authSlice.actions;

export const signIn = (identifier: string, password: string, keepSession: boolean) => (dispatch: Dispatch) => {
  axios.post(apiUrls.auth.signIn, { identifier, password })
  .then((response) => dispatch(login({ ...response.data, keepSession })))
  .catch((error) => { console.log(error); })
};

export const getJwt = (state: IStore) => state.auth.jwt;
export const getCurrentUser = (state: IStore) => state.auth.creator;
export const getIsConnected = (state: IStore) => state.auth.isConnected;
export const getIsKeepSession = (state: IStore) => state.auth.keepSession;

export default authSlice.reducer;
