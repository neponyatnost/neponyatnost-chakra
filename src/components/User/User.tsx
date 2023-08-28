import {
  Avatar,
  Box,
  Button,
  Card,
  CardHeader,
  Flex,
  Heading,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from '@chakra-ui/react'
import { FC } from 'react'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import styles from './User.module.scss'

interface UserProps {
  id: number
  firstName: string
  lastName: string
  image: string
  city: string
}

const User: FC<UserProps> = ({ id, firstName, lastName, image, city }) => {
  return (
    <>
      <Card maxW='full' mb={5} mx='auto'>
        <CardHeader className={styles.userCard}>
          <Flex>
            <Flex flex='1' gap='5' alignItems='center' flexWrap='wrap'>
              <Avatar
                name={firstName + ' ' + lastName}
                src={image}
                className={styles.userAvatar}
              />
              <Box mr={10}>
                <Heading size='sm'>{firstName + ' ' + lastName}</Heading>
                <Text fontSize={'sm'} opacity={'0.5'}>
                  City: {city}
                </Text>
              </Box>
            </Flex>
            <Menu>
              {({ isOpen }) => (
                <>
                  <MenuButton
                    isActive={isOpen}
                    as={Button}
                    leftIcon={<BsThreeDotsVertical />}
                    pr={1}
                    width={5}
                    pl={3}
                  ></MenuButton>
                  <MenuList>
                    <MenuItem>
                      <Link to={`${id}`}>Visit {firstName}</Link>
                    </MenuItem>
                  </MenuList>
                </>
              )}
            </Menu>
          </Flex>
        </CardHeader>
      </Card>
    </>
  )
}

export default User
