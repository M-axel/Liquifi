import React, { useEffect, useState } from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalFooter,
  ModalBody,
  Button
} from '@chakra-ui/react';

const FeedbackModal = ({ code }) => {
        const finalRef = React.useRef(null)

        const [isOpen, setIsOpen] = useState(false);

        useEffect(() => {
          if(code) setIsOpen(true);
        }, [code]);

        const onClose = () => {
          setIsOpen(false);
        }
      
        return (
            <Modal finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>Pool Creation Feedback</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  {
                    code == 200
                    ?
                    'Your pool has been successfully created! You can check it out on your \'Profile\' section'
                    :
                    `Something went wrong :( (code ${code})`
                  }
                </ModalBody>
      
                <ModalFooter>
                  <Button colorScheme='blue' mr={3} onClick={onClose}>
                    Close
                  </Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
        )
}

export default FeedbackModal;
