import axios from 'axios'
import { AppDispatch } from '../../../store'
import { IUsersRoot } from '../models/user'
import { getUsersError, getUsersRequest, getUsersSuccess } from './usersSlice'

export const fetchUsers = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(getUsersRequest())
    const { data } = await axios.get<IUsersRoot>(
      'https://dummyjson.com/users',
      {
        params: {
          limit: 100,
        },
      }
    )
    dispatch(getUsersSuccess(data))
  } catch (error) {
    if (error instanceof Error) {
      dispatch(getUsersError(error.message))
    }
    return error
  }
}
