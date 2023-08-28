import { createSlice } from '@reduxjs/toolkit'
import { IUsersRoot } from '../models/user'
import { PayloadAction } from './../../../../node_modules/@reduxjs/toolkit/src/createAction'

interface Users {
  data: IUsersRoot | null
  isLoading: boolean
  error: string
}

const initialState: Users = {
  data: null,
  isLoading: false,
  error: '',
}

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    getUsersRequest(state) {
      state.isLoading = true
      state.data = null
      state.error = ''
    },
    getUsersSuccess(state, action: PayloadAction<IUsersRoot>) {
      state.data = action.payload
      state.isLoading = false
      state.error = ''
    },
    getUsersError(state, action: PayloadAction<string>) {
      state.error = action.payload
      state.isLoading = false
      state.data = null
    },
  },
})

export const { getUsersRequest, getUsersSuccess, getUsersError } =
  usersSlice.actions
export default usersSlice.reducer
