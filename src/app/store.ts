import { configureStore, combineReducers, getDefaultMiddleware } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import appReducer from '../features/appSlice';
import authReducer, { keyStore } from '../features/authSlice';

const persistConfig = {
  key: keyStore,
  storage,
  whitelist: ['app', 'auth'],
  blacklist: []
};

const rootReducer = combineReducers({
  app: appReducer,
  auth: authReducer
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