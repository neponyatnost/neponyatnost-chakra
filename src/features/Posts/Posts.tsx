import { Button } from '@chakra-ui/react'
import { FC, useEffect, useState } from 'react'
import LoaderSpinner from '../../components/Loader/LoaderSpinner'
import { Pagination } from '../../components/Pagination/Pagination'
import Tags from '../../components/Tags/Tags'
import { useAppDispatch, useAppSelector } from '../../hooks'
import { paginate } from '../../utils/paginate'
import { fetchPosts } from './api/postsAction'

interface PostsProps {}

const Posts: FC<PostsProps> = () => {
  const { data, error, isLoading } = useAppSelector(
    (state) => state.postsReducer
  )
  const [selectedTag, setSelectedTag] = useState<string | null>('')
  const [currentPage, setCurrentPage] = useState<number>(1)

  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchPosts())
  }, [dispatch])

  useEffect(() => {
    setCurrentPage(1)
  }, [])

  const handleSelectTag = (event: React.MouseEvent) => {
    setSelectedTag(event.currentTarget.textContent)
    setCurrentPage(1)
  }

  const filteredItems =
    data && selectedTag
      ? data.posts.filter((item) =>
          item.tags.some((tag) => tag === selectedTag)
        )
      : data && data.posts

  const handlePageChange = (pageIndex: number) => {
    setCurrentPage(pageIndex)
    setTimeout(() => {
      window.scrollTo(0, 0)
    }, 20)
  }

  const paginatedData = paginate(filteredItems, currentPage, 10)

  return (
    <>
      {isLoading && <LoaderSpinner />}
      {error && <h1>{error}</h1>}
      <ul style={{ width: '100%' }}>
        {selectedTag ? (
          <Button
            variant={'outline'}
            colorScheme='teal'
            mb={2}
            onClick={() => setSelectedTag('')}
          >
            Reset filters
          </Button>
        ) : null}
        {paginatedData &&
          paginatedData.map((p) => (
            <li key={p.id} style={{ marginBottom: '1rem' }}>
              {p.title}
              <Tags
                onSelect={handleSelectTag}
                tags={p.tags}
                selectedTag={selectedTag}
              />
            </li>
          ))}
        <Pagination
          currentPage={currentPage}
          itemsCount={filteredItems ? filteredItems.length : 0}
          pageSize={10}
          onPageChange={handlePageChange}
        />
      </ul>
    </>
  )
}

export default Posts
