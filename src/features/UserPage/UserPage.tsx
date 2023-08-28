import { FC } from 'react'
import { useParams } from 'react-router-dom'
import LoaderSpinner from '../../components/Loader/LoaderSpinner'
import { useGetUserByIdQuery } from './api/userApi'

interface UserPageProps {}

const UserPage: FC<UserPageProps> = () => {
  const { id } = useParams()

  const { data: user, isLoading, error } = useGetUserByIdQuery(id || '')

  return (
    <>
      {error && <p>Unexpected error</p>}
      {isLoading && <LoaderSpinner />}
      {user && <p>user: {user.id}</p>}
    </>
  )
}

export default UserPage
