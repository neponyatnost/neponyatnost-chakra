import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'
import { AuthData, LoginInput } from './models/auth'
import { userAuthApi } from './userAuthApi'

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://dummyjson.com/auth',
  }),
  endpoints: (builder) => ({
    login: builder.mutation<AuthData, LoginInput>({
      query(data) {
        console.log(data)
        return {
          headers: {
            'Content-Type': 'application/json',
          },
          method: 'POST',
          body: JSON.stringify({
            username: data.username,
            password: data.password,
          }),
          credentials: 'omit',
          url: 'login',
        }
      },
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        try {
          await queryFulfilled
          await dispatch(userAuthApi.endpoints.getMe.initiate(null))
        } catch (error) {}
      },
    }),
  }),
})

export const { useLoginMutation } = authApi
