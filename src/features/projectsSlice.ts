import { createSlice, Dispatch } from '@reduxjs/toolkit';
import axios from 'axios';
import { IProjectsState, IStore } from '../interfaces/store';
import apiUrls from '../api';

export const keyStore = 'wwvr-front-v1';

const initialState: IProjectsState = {
  list: [],
  loading: false
}

export const projectSlice = createSlice({
  name: 'projects',
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setProjects: (state, action) => {
      state.list = [...action.payload];
    },
    clearProjects: (state, action) => {
      state.list = [];
    },
  },
});

export const { setProjects, clearProjects, setLoading } = projectSlice.actions;

export const fetch = (query: any = {}) => (dispatch: Dispatch) => {
  dispatch(setLoading(true));
  axios.get(apiUrls.projects.all, {params: {...query}})
  .then((response) => setProjects(response.data))
  .catch((error) => console.log(error))
  .finally(() => dispatch(setLoading(false)));
};

export const getProjects = (state: IStore) => state.projects.list;

export default projectSlice.reducer;
