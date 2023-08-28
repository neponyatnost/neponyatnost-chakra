import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Spacer,
  useDisclosure,
} from '@chakra-ui/react'
import { FC, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ColorModeSwitcher } from '../../ColorModeSwitcher'
import BurgerMenu from '../BurgerMenu/BurgerMenu'
import Modal from '../Modal/Modal'
import styles from './Header.module.scss'

interface HeaderProps {}

const Header: FC<HeaderProps> = () => {
  const [show, setShow] = useState(false)
  const { isOpen, onClose, onOpen } = useDisclosure()
  const initialRef = useRef(null)
  const navigate = useNavigate()

  const handleSignOut = () => {
    localStorage.removeItem('accessToken')
    navigate('/auth')
  }

  return (
    <Flex
      minWidth='max-content'
      alignItems='center'
      gap='2'
      p={2}
      boxShadow={'lg'}
      rounded='lg'
      position={'fixed'}
      top={0}
      right={0}
      left={0}
      zIndex={100}
      backdropFilter={'auto'}
      backdropBlur={'10px'}
    >
      <Box p='2' display={{ base: 'none', sm: 'block' }}>
        <Link to={''} className={styles.link}>
          Products
        </Link>
        <Link to={'/users'} className={styles.link}>
          Users
        </Link>
        <Link to={'/posts'} className={styles.link}>
          Posts
        </Link>
        {!localStorage.getItem('accessToken') ? (
          <Link to={'/auth'} className={styles.link}>
            Sign In
          </Link>
        ) : (
          <Link to={'/auth'} onClick={handleSignOut} className={styles.link}>
            Sign Out
          </Link>
        )}
      </Box>
      <Box display={{ base: 'block', sm: 'none' }}>
        <BurgerMenu onClose={onClose} />
      </Box>
      <Spacer />
      <ColorModeSwitcher />
      <ButtonGroup gap='2' display={{ base: 'none', sm: 'block' }}>
        <Button colorScheme='teal' onClick={onOpen}>
          Sign Up
        </Button>
        <Button colorScheme='teal' mr={2}>
          Log in
        </Button>
      </ButtonGroup>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        header='Create your account'
        footer={
          <Button onClick={onClose} colorScheme='teal'>
            Close
          </Button>
        }
        children={
          <>
            {' '}
            <FormControl>
              <FormLabel>Email</FormLabel>
              <InputGroup>
                <Input
                  autoFocus
                  ref={initialRef}
                  placeholder='Email'
                  type='email'
                />
              </InputGroup>
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input
                  pr='4.5rem'
                  type={show ? 'text' : 'password'}
                  placeholder='Enter password'
                />
                <InputRightElement width='4.5rem'>
                  <Button
                    h='1.75rem'
                    size='sm'
                    onClick={() => setShow((prev) => !prev)}
                  >
                    {show ? 'Hide' : 'Show'}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
          </>
        }
      />
    </Flex>
  )
}

export default Header
