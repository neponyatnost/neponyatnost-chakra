import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { IPostsRoot } from '../models/post'

interface Posts {
  data: IPostsRoot | null
  isLoading: boolean
  error: string
}

const initialState: Posts = {
  data: null,
  isLoading: false,
  error: '',
}

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    getPostsRequest(state) {
      state.isLoading = true
      state.data = null
      state.error = ''
    },
    getPostsSuccess(state, action: PayloadAction<IPostsRoot>) {
      state.isLoading = false
      state.data = action.payload
      state.error = ''
    },
    getPostsError(state, action: PayloadAction<string>) {
      state.isLoading = false
      state.error = action.payload
      state.data = null
    },
  },
})

export const { getPostsRequest, getPostsSuccess, getPostsError } =
  postsSlice.actions
export default postsSlice.reducer
