import { createSlice } from '@reduxjs/toolkit'
import type { RootState } from './store'
import type { PayloadAction } from '@reduxjs/toolkit';


// Define a type for the slice state
interface AuthState {
  value: false | string;
}

// Define the initial state using that type
const initialState: AuthState = {
  value: false,
}

export const authSlice = createSlice({
  name: 'auth',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    login: (state, action: PayloadAction<string>) => {
        state.value = action.payload
    },
    logout: (state) => {
        state.value = false
    },
  },
})

export const { login, logout } = authSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectAuth = (state: RootState) => state.auth.value

export default authSlice.reducer