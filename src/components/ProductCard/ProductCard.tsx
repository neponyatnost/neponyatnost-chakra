import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Heading,
  Image,
  Stack,
  Text,
} from '@chakra-ui/react'
import { FC } from 'react'
import { Link } from 'react-router-dom'

interface ProductCardProps {
  id: number
  title: string
  description: string
  price: number
  thumbnail: string
}

const ProductCard: FC<ProductCardProps> = ({
  title,
  description,
  price,
  thumbnail,
  id,
}) => {
  return (
    <Card maxW='sm'>
      <CardBody>
        <Image
          src={thumbnail}
          alt={title}
          borderRadius='lg'
          h={'178px'}
          w={'100%'}
          objectFit={'cover'}
          transition={'transform .2s ease'}
          _hover={{
            opacity: 0.9,
            transform: 'scale(1.05)',
          }}
        />
        <Stack mt='6' spacing='3'>
          <Link to={`/products/${id}`}>
            <Heading
              size='md'
              _hover={{
                textDecoration: 'underline',
              }}
            >
              {title.length > 15 ? title.slice(0, 20) + ' ...' : title}
            </Heading>
          </Link>
          <Text fontSize={'md'}>
            {description.length > 45
              ? description.slice(0, 45) + ' ...'
              : description}
          </Text>
          <Text color='blue.600' fontSize='2xl'>
            ${price}
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup spacing='2'>
          <Button variant='solid' colorScheme='blue'>
            Buy now
          </Button>
          <Button variant='ghost' colorScheme='blue'>
            Add to cart
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  )
}

export default ProductCard
