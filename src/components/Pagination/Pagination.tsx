import { range } from 'lodash'
import { FC } from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Pagination.module.scss'

export interface IPaginationProps {
  itemsCount: number
  pageSize: number
  onPageChange: (pageIndex: number) => void
  currentPage: number
}

export const Pagination: FC<IPaginationProps> = ({
  itemsCount,
  pageSize,
  onPageChange,
  currentPage,
}) => {
  const pageCount = Math.ceil(itemsCount / pageSize)

  if (pageCount === 1) return null

  const pages = range(1, pageCount + 1)

  return (
    <ul className={styles.pagination}>
      {pages.map((page) => (
        <li className={styles.pageItem} key={`page_${page}`}>
          <NavLink
            onClick={() => onPageChange(page)}
            className={
              page === currentPage ? styles.pageLinkActive : styles.pageLink
            }
            to=''
          >
            {page}
          </NavLink>
        </li>
      ))}
    </ul>
  )
}
