import { Button } from '@chakra-ui/react'
import { zodResolver } from '@hookform/resolvers/zod'
import { FC, useEffect } from 'react'
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import FormInput from '../components/FormInput/FormInput'
import { useLoginMutation } from '../features/auth/authApiSlice'
import { LoginInput, loginSchema } from '../features/auth/models/auth'

interface AuthProps {}

const Auth: FC<AuthProps> = () => {
  const methods = useForm<LoginInput>({
    resolver: zodResolver(loginSchema),
  })

  const [loginUser, { isLoading, isSuccess, data }] = useLoginMutation()

  const navigate = useNavigate()

  const {
    reset,
    handleSubmit,
    formState: { isSubmitSuccessful },
  } = methods

  useEffect(() => {
    if (isSuccess) {
      if (data) {
        localStorage.setItem('accessToken', JSON.stringify(data.token))
      }
      toast.success('You successfully logged in!')
      navigate('/posts')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading])

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSubmitSuccessful])

  const onSubmitHandler: SubmitHandler<LoginInput> = (values) => {
    loginUser(values)
  }

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmitHandler)}>
        <FormInput name='username' label='Username' type='text' />
        <FormInput name='password' label='Password' type='password' />
        <Button type='submit'>Submit</Button>
      </form>
    </FormProvider>
  )
}

export default Auth
