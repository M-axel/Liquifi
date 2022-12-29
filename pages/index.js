import { Container, Heading } from '@chakra-ui/react';

import TokenSelectionModal from '../components/tokenSelection';

import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function Home() {
  const router = useRouter();
  const [token1, setToken1] = useState(router?.query?.token1)
  const [token2, setToken2] = useState(router?.query?.token2)

  useEffect(() => {
      setToken1(router.query.token1)
      setToken2(router.query.token2)
  }, [router.query])

  return (
    <Container>
      <TokenSelectionModal />

      <Heading as='h3' size='lg'>
        {`${token1} / ${token2}`}
      </Heading>

    </Container>
  )
}
