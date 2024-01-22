import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';

import { phonebookReducer } from './slice';
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

const persistConfig = {
  key: 'contacts',
  storage,
  whitelist: ['contacts'],
};

const persistedReducer = persistReducer(persistConfig, phonebookReducer);

const reducer = {
  phonebook: persistedReducer,
};

export const store = configureStore({
  reducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
