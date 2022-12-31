import { Container, Heading, Card, Button } from '@chakra-ui/react';

import TokenSelectionModal from '../components/tokenSelection';
import Deposits from '../components/deposits';
import RiskSelector from '../components/RiskSelector';

import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function Home() {
  const router = useRouter();
  const [token1, setToken1] = useState(router?.query?.token1)
  const [token2, setToken2] = useState(router?.query?.token2)

  const [token1Value, setToken1Value] = useState(0);
  const [token2Value, setToken2Value] = useState(0);

  const [risk, setRisk] = useState('Medium');

  const [sumbittable, setSubmittable] = useState(false);

  useEffect(() => {
    setToken1(router.query.token1)
    setToken2(router.query.token2)
  }, [router.query])

  useEffect(() => {
    if(token1Value > 0 && token1Value !== undefined && token1Value > 0 && token2Value !== undefined) setSubmittable(true)
    else setSubmittable(false)
  }, [token1Value, token2Value])

  const onSubmit = () => {
    console.log(risk)
    console.log(token1, '=>', token1Value)
    console.log(token2, '=>', token2Value)
  }

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
                <Deposits
                  token1={token1}
                  token1Value={token1Value}
                  setToken1Value={setToken1Value}
                  token2={token2}
                  token2Value={token2Value}
                  setToken2Value={setToken2Value}
                />
              </Card>
            </div>
            <div className="row mb-2">
              <Card p={3}>
                <RiskSelector setRisk={setRisk} />
              </Card>
            </div>
            <div className="row">
              <Button
                disabled={!sumbittable}
                onClick={onSubmit}>
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
