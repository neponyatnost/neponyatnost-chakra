import axios from 'axios'
import { AppDispatch } from '../../../store'
import {
  getProductsError,
  getProductsRequest,
  getProductsSuccess,
} from './productsSlice'

export const fetchProducts = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(getProductsRequest())
    const { data } = await axios.get('https://dummyjson.com/products', {
      params: {
        limit: 100,
      },
    })
    dispatch(getProductsSuccess(data))
  } catch (error) {
    if (error instanceof Error) {
      dispatch(getProductsError(error.message))
    }
    return error
  }
}
