import { createSlice, Dispatch } from '@reduxjs/toolkit';
import axios from 'axios';
import { IMediaState, IStore } from '../interfaces/store';
import apiUrls from '../api';

export const keyStore = 'wwvr-front-v1';

const initialState: IMediaState = {
  list: [],
  loading: false
}

export const mediaSlice = createSlice({
  name: 'medias',
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setMedias: (state, action) => {
      state.list = [...action.payload];
    },
    clearMedias: (state, action) => {
      state.list = [];
    },
  },
});

export const { setLoading, setMedias, clearMedias } = mediaSlice.actions;

export const fetch = (query: any = {}) => (dispatch: Dispatch) => {
  dispatch(setLoading(true));
  axios.get(apiUrls.medias.all, {params: {...query}})
  .then((response) => setMedias(response.data))
  .catch((error) => console.log(error))
  .finally(() => dispatch(setLoading(false)));
};

export const getMedias = (state: IStore) => state.medias.list;

export default mediaSlice.reducer;
