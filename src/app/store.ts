import { configureStore, combineReducers, getDefaultMiddleware } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import appReducer from '../features/counter/appSlice';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'wwr-v1.0',
  storage,
  whitelist: ['app', 'auth'],
  blacklist: []
};

const rootReducer = combineReducers({
  app: appReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV === 'production' ? false : {
    name: 'WixarVR-Front'
  },
  middleware: getDefaultMiddleware({
    serializableCheck: {
        ignoredActions: ['persist/PERSIST']
    }
  }),
});

export const persistor = persistStore(store);

export default store;