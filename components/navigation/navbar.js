import NextLink from 'next/link';
import {
    Container,
    Box,
    Button,
    Link,
    Stack,
    Heading,
    Flex,
    Menu,
    MenuItem,
    MenuList,
    MenuButton,
    IconButton,
    useColorModeValue,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure
} from '@chakra-ui/react';
// import Logo from './logo';

const Navbar = props => {
    const { path } = props;

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
                maxW="container.md"
                wrap="wrap"
                align="center"
                justify="space-between"
            >
                <Flex align="center" mr={5}>
                    <Heading as="h1" size="lg" letterSpacing={'tighter'}>
                        {/* <Logo /> */}
                        Liquifi
                    </Heading>
                </Flex>
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
