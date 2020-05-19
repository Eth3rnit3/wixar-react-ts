import { createSlice } from '@reduxjs/toolkit';
import { IStore, IAppState } from '../../interfaces/store';

const initialState: IAppState = {
  locale: 'fr'
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setLocale: (state, action) => {
      state.locale = action.payload;
    },
  },
});

export const { setLocale } = appSlice.actions;

export const getCurrentLocale = (state: IStore) => state.app.locale;

export default appSlice.reducer;
