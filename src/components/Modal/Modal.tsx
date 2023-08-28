import {
  ModalBody,
  ModalCloseButton,
  ModalContent,
  Modal as ModalElement,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/react'
import { FC, useRef } from 'react'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  children: React.ReactNode
  header: string
  footer: React.ReactNode
}

const Modal: FC<ModalProps> = ({
  isOpen,
  onClose,
  children,
  header,
  footer,
}) => {
  const initialRef = useRef(null)
  const finalRef = useRef(null)

  return (
    <>
      <ModalElement
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
        colorScheme='red'
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{header}</ModalHeader>
          <ModalCloseButton />
          {children ? <ModalBody pb={6}>{children}</ModalBody> : null}
          {footer ? <ModalFooter>{footer}</ModalFooter> : null}
        </ModalContent>
      </ModalElement>
    </>
  )
}

export default Modal
