import { Input } from '@chakra-ui/react'
import { FC, memo, useEffect, useState } from 'react'
import LoaderSpinner from '../../components/Loader/LoaderSpinner'
import { Pagination } from '../../components/Pagination/Pagination'
import User from '../../components/User/User'
import { useAppDispatch, useAppSelector } from '../../hooks'
import { paginate } from '../../utils/paginate'
import styles from './Users.module.scss'
import { fetchUsers } from './api/usersAction'

interface UsersProps {}

const Users: FC<UsersProps> = memo(
  () => {
    const [searchQuery, setSearchQuery] = useState<string>('')
    const [currentPage, setCurrentPage] = useState<number>(1)

    const { data, isLoading, error } = useAppSelector(
      (state) => state.usersReducer
    )

    const dispatch = useAppDispatch()

    useEffect(() => {
      dispatch(fetchUsers())
    }, [dispatch])

    useEffect(() => {
      setCurrentPage(1)
    }, [searchQuery])

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setSearchQuery(event.target.value)
    }

    const filteredUsers =
      data &&
      data.users.filter(
        (user) =>
          user.firstName.toLowerCase().includes(searchQuery.toLowerCase()) ||
          user.lastName.toLowerCase().includes(searchQuery.toLowerCase())
      )

    const handlePageChange = (pageIndex: number) => {
      setCurrentPage(pageIndex)
      setTimeout(() => {
        window.scrollTo(0, 0)
      }, 20)
    }

    const paginatedData = paginate(filteredUsers, currentPage, 10)

    return (
      <>
        {error && <h1>{error}</h1>}
        <div className={styles.usersContainer}>
          <Input
            type='text'
            onChange={handleChange}
            className='mb-4 max-w-5xl placeholder:text-white focus:placeholder:hidden'
            focusBorderColor={'teal.100'}
            placeholder='Search users...'
          />
          {isLoading && <LoaderSpinner />}
          <ul className={styles.userList}>
            {paginatedData &&
              paginatedData.map((user) => (
                <li key={user.id} className={styles.userListItem}>
                  <User
                    id={user.id}
                    firstName={user.firstName}
                    lastName={user.lastName}
                    image={user.image}
                    city={user.address.city}
                  />
                </li>
              ))}
            <Pagination
              currentPage={currentPage}
              pageSize={10}
              itemsCount={filteredUsers ? filteredUsers.length : 0}
              onPageChange={handlePageChange}
            />
          </ul>
        </div>
      </>
    )
  },
  (prevProps, nextProps) => {
    if (prevProps !== nextProps) {
      return false
    }
    return true
  }
)

export default Users
