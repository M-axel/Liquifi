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
    useColorModeValue
} from '@chakra-ui/react';
// import Logo from './logo';

const Navbar = props => {
    const { path } = props;

    return (
        <Box
            position="fixed"
            as="nav"
            w="100%"
            bg={useColorModeValue('#ffffff40', '#20202380')}
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
                    </Heading>
                </Flex>
                <Button>
                    Se connecter
                </Button>
            </Container>
        </Box>
    );
};

export default Navbar;
