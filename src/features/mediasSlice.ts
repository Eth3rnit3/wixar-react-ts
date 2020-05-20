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
    addMedia: (state, action) => {
      state.list.push(action.payload);
    },
    clearMedias: (state, action) => {
      state.list = [];
    },
  },
});

export const { setLoading, setMedias, clearMedias, addMedia } = mediaSlice.actions;

export const fetch = (query: any = {}) => (dispatch: Dispatch) => {
  dispatch(setLoading(true));
  axios.get(apiUrls.medias.all, {params: {...query}})
  .then((response) => dispatch(setMedias(response.data)))
  .catch((error) => console.log(error))
  .finally(() => dispatch(setLoading(false)));
};

export const upload = (file: File) => (dispatch: Dispatch, getState: () => IStore) => {
  dispatch(setLoading(true));
  const formdata = new FormData();
  formdata.append('files', file);
  formdata.append('is_used', 'true');
  formdata.append('organization', getState().auth.creator.organization.id.toString());
  formdata.append('name', file.name);
  axios.post(apiUrls.medias.create, formdata)
  .then((response) => dispatch(addMedia(response.data)))
  .catch((error) => console.log(error))
  .finally(() => dispatch(setLoading(false)));
};

export const getMedias = (state: IStore) => state.medias.list;
export const getIsLoading = (state: IStore) => state.medias.loading;

export default mediaSlice.reducer;
