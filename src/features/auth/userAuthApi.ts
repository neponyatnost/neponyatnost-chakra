import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'
import { setUser } from './authSlice'
import { IUserAuth } from './models/auth'

export const userAuthApi = createApi({
  reducerPath: 'userAuthApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3000',
  }),
  endpoints: (builder) => ({
    getMe: builder.query<IUserAuth, null>({
      query() {
        return {
          url: 'me',
          credentials: 'include',
        }
      },
      transformResponse: (result: { data: { user: IUserAuth } }) =>
        result.data.user,
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled
          dispatch(setUser(data))
        } catch (error) {}
      },
    }),
  }),
})
