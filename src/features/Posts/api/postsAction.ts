import axios from 'axios'
import { AppDispatch } from '../../../store'
import { getPostsError, getPostsRequest, getPostsSuccess } from './postsSlice'

export const fetchPosts = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(getPostsRequest())
    const { data } = await axios.get('https://dummyjson.com/posts', {
      params: {
        limit: 150,
      },
    })
    dispatch(getPostsSuccess(data))
  } catch (error) {
    if (error instanceof Error) {
      dispatch(getPostsError(error.message))
    }
    return error
  }
}
