import { combineReducers, configureStore } from '@reduxjs/toolkit'
import tariffReducer from './tariffsSlice'

const rootReducer = combineReducers({
  tariffs: tariffReducer,
})

export default configureStore({
  reducer: {
    tariffs: tariffReducer,
  },
});

export type RootState = ReturnType<typeof rootReducer>