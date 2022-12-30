import Head from 'next/head';
import { Box, Container } from '@chakra-ui/react';
import Navbar from '../navigation/navbar';

const Main = ({ children }) => {
    return (
        <Box as="main" pb={8}>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="author" content="co-authored by Axel MAISSA, Djade KHALDI, Aryamaan KUNWAR and Paul BUREL" />
                <link rel="apple-touch-icon" href="apple-touch-icon.png" />
                <meta property="og:site_name" content="Liquifi" />
                <meta name="og:title" content="Liquifi" />
                <meta property="og:type" content="website" />
                <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
                <title>Liquifi</title>
            </Head>

            <Navbar />

            <Container maxW="container.lg" pt={14}>
                {children}
            </Container>
        </Box>
    );
};

export default Main;
