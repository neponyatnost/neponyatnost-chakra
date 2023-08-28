import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IUser } from '../../Users/models/user'

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com/users/' }),
  endpoints: (builder) => ({
    getUserById: builder.query<IUser, string>({
      query: (id) => `${id}`,
    }),
  }),
})

export const { useGetUserByIdQuery } = userApi
