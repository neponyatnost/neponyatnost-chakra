import { Grid, GridItem } from '@chakra-ui/react'
import { FC, useEffect } from 'react'
import LoaderSpinner from '../../components/Loader/LoaderSpinner'
import ProductCard from '../../components/ProductCard/ProductCard'
import { useAppDispatch, useAppSelector } from '../../hooks'
import styles from './Products.module.scss'
import { fetchProducts } from './api/productsAction'

interface ProductsProps {}

const Products: FC<ProductsProps> = () => {
  const { data, isLoading, error } = useAppSelector(
    (state) => state.productsReducer
  )
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchProducts())
  }, [dispatch])

  return (
    <>
      {isLoading && <LoaderSpinner />}
      {error && <h1>{error}</h1>}
      <Grid
        templateColumns='repeat(3, 1fr)'
        gap={4}
        className={styles.productsList}
      >
        {data &&
          data.products.map((p) => (
            <GridItem
              key={p.id}
              h={'100%'}
              w={'100%'}
              className={styles.productsItem}
            >
              <ProductCard
                id={p.id}
                description={p.description}
                price={p.price}
                thumbnail={p.thumbnail}
                title={p.title}
              />
            </GridItem>
          ))}
      </Grid>
    </>
  )
}

export default Products
