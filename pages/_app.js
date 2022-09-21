import '../styles/globals.css'
import Layout from '../components/layout/main';
import { ChakraProvider } from '@chakra-ui/react'

import theme from '../lib/theme';

function MyApp({ Component, pageProps, router }) {
  return (
    <ChakraProvider theme={theme}>
      <Layout router={router}>
        <Component {...pageProps} key={router.route} />
      </Layout>
    </ChakraProvider>
  )
}

export default MyApp
