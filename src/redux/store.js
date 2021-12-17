import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import logger from 'redux-logger';
import authReducer from './reducers/authReducer';
import reportsReducer from './reports/reportsSlice';

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  logger,
];

const contactsPersistConfig = {
  key: 'auth',
  storage,
  blacklist: ['filter'],
};

// const reportsPersistConfig = {
//   key: 'reports',
//   storage,
//   // blacklist: [''],
// };

const store = configureStore({
  reducer: {
    auth: persistReducer(contactsPersistConfig, authReducer),
    reports: reportsReducer,
  },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

const persistor = persistStore(store);

export { store, persistor };
