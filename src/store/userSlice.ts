import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from './store';

// Define a type for the slice state
interface UserState {
  value: [User]
}

// Define the initial state using that type
const initialState: UserState = {
  value: [{name: 'admin@admin.com', pass: 'admin'}]
}

export const userSlice = createSlice({
  name: 'user',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    register: (state, action: PayloadAction<any>) => {
        state.value.push(action.payload);
      },
  },
})

export const { register } = userSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectUser = (state: RootState) => state.user.value

export default userSlice.reducer