import { createSlice } from '@reduxjs/toolkit';
import { IAuthState } from '../reduxTypes';
import { RootState } from '../reduxStore';
import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  setStorageData,
  getStorageData,
  clearAll,
  StorageKey,
} from '../../common/storage';

export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async (data: Partial<IAuthState>) => {
    await setStorageData(StorageKey.userInfo, data);
    return data;
  },
);

export const logoutUser = createAsyncThunk('auth/logoutUser', async () => {
  await clearAll();
  return null;
});

export const loadAuthData = createAsyncThunk('auth/loadAuthData', async () => {
  return await getStorageData(StorageKey.userInfo);
});

const initialState: IAuthState = {
  isLoggedIn: false,
  authToken: '',
  isOnBoarding: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // builder
    //   .addCase(loginUser.fulfilled, (state, action) => {
    //     state = { ...state, ...action.payload };
    //   })
    //   .addCase(logoutUser.fulfilled, state => {
    //     state = initialState;
    //   })
    //   .addCase(loadAuthData.fulfilled, (state, action) => {
    //     if (action.payload) {
    //       state = action.payload;
    //     }
    //   });
    builder
      .addCase(loginUser.fulfilled, (state, action) => {
        state.authToken = action.payload?.authToken ?? '';
        state.isLoggedIn = true;
      })

      .addCase(logoutUser.fulfilled, () => {
        return initialState;
      })

      .addCase(loadAuthData.fulfilled, (state, action) => {
        if (action.payload) {
          state.authToken = action.payload.authToken ?? '';
          state.isLoggedIn = true;
        }
      });
  },
});

export const {} = authSlice;
export const authSelector = (state: RootState) => state.authReducer;
export default authSlice.reducer;
