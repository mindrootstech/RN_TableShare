import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import authReducer from './slices/authSlice';

const rootReducer = combineReducers({
  authReducer: authReducer,
});

const reduxStore = configureStore({
  reducer: rootReducer,
});

export type AppDispatch = typeof reduxStore.dispatch;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export type RootState = ReturnType<typeof rootReducer>;
export default reduxStore;
