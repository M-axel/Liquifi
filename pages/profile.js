import { Container, Heading, Center, Badge, Text, LinkOverlay, Flex } from '@chakra-ui/react';
import Link from 'next/link'

import PoolCard from '../components/PoolCard';

const Profile = () => {
    const user = {
        name: 'Axel',
        membership: 'Butterfly'
    }

    const pools = [
        {
            id: 1,
            createdAt: new Date('2023/02/18'),
            range: {
                low: 1.8,
                high: 2,
            },
            tokens: {
                token1: {
                    ticker: 'ATOM',
                    value: 3.00,
                },
                token2: {
                    ticker: 'BUSD',
                    value: 3.00
                }
            },
            fees: 29.06,
        },
        {
            id: 2,
            createdAt: new Date('2023/02/18'),
            range: {
                low: 4,
                high: 4.5,
            },
            tokens: {
                token1: {
                    ticker: 'CIRCLE',
                    value: 741.0,
                },
                token2: {
                    ticker: 'BUSD',
                    value: 139.5,
                }
            },
            fees: 94.40,
        },
    ];

    const archivedPools = [
        {
            id: 3,
            createdAt: new Date('2023/02/18'),
            archivedAt: new Date('2023/02/19'),
            range: {
                low: 1.8,
                high: 2,
            },
            tokens: {
                token1: {
                    ticker: 'LTC',
                    value: 89.00,
                },
                token2: {
                    ticker: 'BTC',
                    value: 0.004
                }
            },
            fees: 30.21,
        },
        {
            id: 4,
            createdAt: new Date('2023/02/10'),
            archivedAt: new Date('2023/02/13'),
            range: {
                low: 1.8,
                high: 2,
            },
            tokens: {
                token1: {
                    ticker: 'TRX',
                    value: 740.30,
                },
                token2: {
                    ticker: 'USDC',
                    value: 80.00
                }
            },
            fees: 4.80,
        },
        {
            id: 5,
            createdAt: new Date('2023/02/01'),
            archivedAt: new Date('2023/02/05'),
            range: {
                low: 5.43,
                high: 7.21,
            },
            tokens: {
                token1: {
                    ticker: 'FTM',
                    value: 1392.00,
                },
                token2: {
                    ticker: 'USDC',
                    value: 90.82
                }
            },
            fees: 60.7,
        },
    ];

    return (
        <Container maxW="container.lg">
            <Center pb={5}>
                <Heading as='h3' size='lg' pr={3}>Hello {user.name}!</Heading>
                <Badge colorScheme='purple'>{user.membership}</Badge>
            </Center>
            {
                pools.length > 0
                    ?
                    <Text>
                        You have {pools.length} pool{pools.length > 1 ? 's' : null}:
                    </Text>
                    :
                    <Text>
                        You don't have any pool, <Link href="/"><LinkOverlay>create one right now</LinkOverlay></Link>!
                    </Text>
            }
            <Flex
            // justifyContent={'space-evenly'} p={3}
            >
                {pools.map((pool) => <PoolCard {...pool} key={`pool-${pool.id}`}/>)}
            </Flex>

            {
                archivedPools.length > 0
                    ?
                    <Text>
                        You have {archivedPools.length} archived pool{archivedPools.length > 1 ? 's' : null}:
                    </Text>
                    :
                    null
            }
            <Flex
            // justifyContent={'space-evenly'} p={3}
            >
                {archivedPools.map((pool) => <PoolCard {...pool} key={`pool-archived-${pool.id}`}/>)}
            </Flex>

        </Container>
    )
}

export default Profile;
