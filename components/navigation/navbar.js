import {
    Container,
    Box,
    Button,
    Heading,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Spacer
} from '@chakra-ui/react';

const Navbar = props => {

    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <Box
            position="fixed"
            as="nav"
            w="100%"
            // bg={useColorModeValue('#ffffff40', '#20202380')}
            css={{ backdropFilter: 'blur(10px)' }}
            zIndex={2}
            {...props}
        >
            <Container
                display="flex"
                p={2}
                maxW="container.lg"
                wrap="wrap"
                align="center"
            >
                <Heading as="h1" size="lg" letterSpacing={'tighter'}>
                    Liquifi
                </Heading>
                <Spacer />
                <Button onClick={onOpen}>
                    Se connecter
                </Button>
            </Container>

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Connexion wallet</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        Test
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='blue' mr={3} onClick={onClose}>
                            Close
                        </Button>
                        <Button variant='ghost'>Se connecter</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </Box>
    );
};

export default Navbar;
