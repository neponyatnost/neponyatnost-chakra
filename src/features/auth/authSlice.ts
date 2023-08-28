import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { IUserAuth } from './models/auth'

interface IUserState {
  user: IUserAuth | null
}

const initialState: IUserState = {
  user: null,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<IUserAuth>) {
      state.user = action.payload
    },
    logOut(state) {
      state.user = null
    },
  },
})

export const { setUser, logOut } = authSlice.actions
export default authSlice.reducer
