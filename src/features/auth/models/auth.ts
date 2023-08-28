import { object, string, TypeOf } from 'zod'

export interface IGenericResponse {
  status: string
  message: string
}

export interface IUserAuth {
  id: string
  name: string
  email: string
  role: string
  password: string
  createdAt: Date
  updatedAt: Date
  __v: number
}

export const loginSchema = object({
  username: string().min(5),
  password: string()
    .min(1, 'Password is required')
    .min(6, 'Password mus be more than 8 characters')
    .max(32, 'Password must be less than 32 characters'),
})

export interface AuthData {
  id: number
  username: string
  email: string
  firstName: string
  lastName: string
  gender: string
  image: string
  token: string
}

export type LoginInput = TypeOf<typeof loginSchema>
