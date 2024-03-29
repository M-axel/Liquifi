import { Container, Heading, Card, Button, Center } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import TokenSelectionModal from '../components/tokenSelection';
import Deposits from '../components/deposits';
import RiskSelector from '../components/RiskSelector';
import Fees from '../components/Fees';
import Graph from '../components/Graph';
import PriceRange from '../components/PriceRange';
import FeedbackModal from '../components/FeedbackModal';

export default function Home() {
  const router = useRouter();
  const [token1, setToken1] = useState(router?.query?.token1)
  const [token2, setToken2] = useState(router?.query?.token2)

  const [token1Value, setToken1Value] = useState(0);
  const [token2Value, setToken2Value] = useState(0);

  const [risk, setRisk] = useState('Medium');

  const [sumbittable, setSubmittable] = useState(false);
  const [poolSumbittable, setPoolSubmittable] = useState(false);

  const [data, setData] = useState({
    fees: 0.0,
    range: {
      low: 0,
      mid: 0,
      high: 0,
    },
    series: [
      { x: 0, y: 0 },
      { x: 1, y: 0 },
      { x: 2, y: 0 },
      { x: 3, y: 0 },
      { x: 4, y: 0 },
    ]
  });

  const [creationPoolRes, setCreationPoolRes] = useState();

  useEffect(() => {
    setToken1(router.query.token1)
    setToken2(router.query.token2)
  }, [router.query])

  useEffect(() => {
    if (token1Value > 0 && token1Value !== undefined && token1Value > 0 && token2Value !== undefined) setSubmittable(true)
    else {
      setSubmittable(false)
      setPoolSubmittable(false)
    }

    setCreationPoolRes() // réinitialise la reponse
  }, [token1Value, token2Value])

  const onSubmit = () => {
    fetch('/api/range', {
      method: 'POST',
      body: JSON.stringify({
        risk,
        token1: {
          ticker: token1,
          value: token1Value
        },
        token2: {
          ticker: token2,
          value: token2Value
        }
      })
    })
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      })
      .then(() => setPoolSubmittable(true))
  }

  const onSubmitPool = () => {
    fetch('/api/pool', {
      method: 'POST',
      body: JSON.stringify({
        risk,
        token1: {
          ticker: token1,
          value: token1Value
        },
        token2: {
          ticker: token2,
          value: token2Value
        },
        range: {
          low: data.range.low,
          high: data.range.high
        }
      })
    }).then((res) => setCreationPoolRes(res.status))
  }

  return (
    <Container maxW="container.lg">
      <TokenSelectionModal />

      <Center>
        <Heading as='h3' size='lg'>
          {`${token1} / ${token2}`}
        </Heading>
      </Center>
      
      <div className="container overflow-hidden">
        <div className="row g-5">
          <div className="col">
            <div className="row mb-2">
              <Card p={3}>
                <Fees value={data?.fees} /* totalDeposit={} */ />
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
                Find Price Range
              </Button>
            </div>
          </div>
          <div className="col">
            <div className="row mb-2">
              <Card p={3}>
                <Heading as='h3' size='md'>
                  Liquidity Position
                </Heading>
                {
                  data != undefined ? <Graph data={data} /> : <p>No data</p>
                }
              </Card>
            </div>
            <div className="row mb-2">
              <Card p={3}>
                <Heading as='h3' size='md'>
                  Price Range
                </Heading>
                {
                  data != undefined ? <PriceRange range={data?.range} token1={token1} token2={token2} /> : <p>No data</p>
                }
              </Card>
            </div>
            <div className="row">
              <Button
                disabled={!poolSumbittable}
                onClick={onSubmitPool}>
                Create Pool
              </Button>
              <FeedbackModal code={creationPoolRes} />
            </div>
          </div>
        </div>
      </div>



    </Container>
  )
}
