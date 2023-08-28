import { HamburgerIcon } from '@chakra-ui/icons'
import { IconButton, Menu, MenuButton, MenuList } from '@chakra-ui/react'
import { FC, useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './BurgerMenu.module.scss'

interface BurgerMenuProps {
  onClose: () => void
}

const BurgerMenu: FC<BurgerMenuProps> = ({ onClose }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Menu isOpen={isOpen}>
      <MenuButton
        as={IconButton}
        aria-label='Options'
        icon={<HamburgerIcon />}
        variant='outline'
        color={'teal.600'}
        size={'lg'}
        fontSize={'3xl'}
        onClick={() => setIsOpen((prev) => !prev)}
      />
      <MenuList w={'100vw'} h={'100vh'}>
        <ul className={styles.burgerMenu}>
          <li>
            <Link to={'/'} onClick={() => setIsOpen(false)}>
              Main page
            </Link>
          </li>
          <li>
            <Link to={'users'} onClick={() => setIsOpen(false)}>
              Users
            </Link>
          </li>
        </ul>
      </MenuList>
    </Menu>
  )
}

export default BurgerMenu
