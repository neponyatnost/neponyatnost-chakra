import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { IProductsRoot } from '../models/product'

interface Products {
  data: IProductsRoot | null
  isLoading: boolean
  error: string
}

const initialState: Products = {
  data: null,
  isLoading: false,
  error: '',
}

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    getProductsRequest(state) {
      state.isLoading = true
      state.data = null
      state.error = ''
    },
    getProductsSuccess(state, action: PayloadAction<IProductsRoot>) {
      state.isLoading = false
      state.data = action.payload
      state.error = ''
    },
    getProductsError(state, action: PayloadAction<string>) {
      state.isLoading = false
      state.error = action.payload
      state.data = null
    },
  },
})

export const { getProductsRequest, getProductsSuccess, getProductsError } =
  productsSlice.actions
export default productsSlice.reducer
