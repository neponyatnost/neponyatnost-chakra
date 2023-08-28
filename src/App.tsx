import { Box, ChakraProvider, theme } from '@chakra-ui/react'
import { Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Header from './components/Header/Header'
import MainPage from './components/MainPage/MainPage'
import Posts from './features/Posts/Posts'
import UserPage from './features/UserPage/UserPage'
import Users from './features/Users/Users'
import Auth from './pages/Auth'

export const App = () => (
  <ChakraProvider theme={theme}>
    <div>
      <h1 className='mt-20 mb-0 text-center'>
        Application under development. Gradually, new features will be added
        here.
      </h1>
    </div>
    <Header />
    <Box
      fontSize='xl'
      display={'flex'}
      justifyContent={'center'}
      mt={20}
      maxWidth={'5xl'}
      mx={'auto'}
      pb={4}
    >
      <ToastContainer position='bottom-right' />
      <Routes>
        <Route path='' element={<MainPage />} />
        <Route path='/auth' element={<Auth />} />
        <Route path='/posts' element={<Posts />} />
        <Route path='/users' element={<Users />} />
        <Route path='/users/:id' element={<UserPage />} />
      </Routes>
    </Box>
  </ChakraProvider>
)
