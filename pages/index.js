import { Container, Heading, Card, Button } from '@chakra-ui/react';

import TokenSelectionModal from '../components/tokenSelection';
import Deposits from '../components/deposits';

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
    <Container maxW="container.lg">
      <TokenSelectionModal />

      <Heading as='h3' size='lg'>
        {`${token1} / ${token2}`}
      </Heading>

      <div className="container overflow-hidden">
        <div className="row g-5">
          <div className="col">
            <div className="row mb-2">
              <Card p={3}>
                Fees
              </Card>
            </div>
            <div className="row mb-2">
              <Card p={3}>
                <Deposits token1={token1} token2={token2} />
              </Card>
            </div>
            <div className="row">
              <Button>
                Calculer
              </Button>
            </div>
          </div>
          <div className="col">
            <div className="row mb-2">
              <Card p={3}>
                Graph
              </Card>
            </div>
            <div className="row">
              <Card p={3}>
                Range
              </Card>
            </div>
          </div>
        </div>
      </div>



    </Container>
  )
}
