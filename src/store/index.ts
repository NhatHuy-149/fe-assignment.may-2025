import { configureStore } from '@reduxjs/toolkit'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import tableReducer from './features/tableSlice'
import formReducer from './features/formSlice'

// Separate persist configs for each reducer
const tablePersistConfig = {
  key: 'table',
  storage,
  whitelist: ['pagination', 'columnFilters', 'sorting']
}

const formPersistConfig = {
  key: 'form',
  storage,
  whitelist: ['data','schemaText', 'schema']
}

// Create persisted reducers
const persistedTableReducer = persistReducer(tablePersistConfig, tableReducer)
const persistedFormReducer = persistReducer(formPersistConfig, formReducer)

export const store = configureStore({
  reducer: {
    table: persistedTableReducer,
    form: persistedFormReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    })
})

export const persistor = persistStore(store)
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch