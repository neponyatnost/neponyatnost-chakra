import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import postsReducer from '../features/Posts/api/postsSlice'
import productsReducer from '../features/Products/api/productsSlice'
import { userApi } from '../features/UserPage/api/userApi'
import usersReducer from '../features/Users/api/usersSlice'
import authReducer from '../features/auth/authSlice'
import { userAuthApi } from '../features/auth/userAuthApi'
import { authApi } from './../features/auth/authApiSlice'

const rootReducer = combineReducers({
  usersReducer,
  productsReducer,
  postsReducer,
  authReducer,
  [userApi.reducerPath]: userApi.reducer,
  [userAuthApi.reducerPath]: userAuthApi.reducer,
  [authApi.reducerPath]: authApi.reducer,
})

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      userApi.middleware,
      userAuthApi.middleware,
      authApi.middleware
    ),
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof rootReducer>

export default store
