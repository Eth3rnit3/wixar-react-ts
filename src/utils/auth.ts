import axios from 'axios';
import store from '../app/store';
export const setAuthHeader = () => {
  const { jwt } = store.getState().auth
  axios.defaults.headers.common.Authorization = `Bearer ${jwt}`;
};