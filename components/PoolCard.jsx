import { Card, CardHeader, CardBody, Heading, Stack, Button, Text, CardFooter } from '@chakra-ui/react';


const PoolCard = ({
    id,
    createdAt,
    archivedAt,
    range: {
        low,
        high,
    },
    tokens: {
        token1,
        token2
    },
    fees,
}) => {
    return (
        <Card m={2} id={`pool-card-${id}`}>
            <CardHeader pb={0}>
                <Heading size='md'>{`${token1.ticker} / ${token2.ticker}`}</Heading>
            </CardHeader>

            <CardBody>
                <Stack>
                    {
                        archivedAt
                            ?
                            <Text pt='2' fontSize='sm'>
                                Created on {createdAt.toLocaleDateString('fr-FR')}
                                Archived on {archivedAt.toLocaleDateString('fr-FR')}
                            </Text>
                            :
                            <Text pt='2' fontSize='sm'>
                                Active since {`${createdAt.toLocaleDateString('fr-FR')} (${Math.round((new Date() - createdAt) / 10000000)} hours ago)`}
                            </Text>
                    }
                    <Text pt='2' fontSize='sm' as='b'>
                        Range {`${low} to ${high}`}
                    </Text>
                    <Text pt='2' fontSize='sm'>
                        Fees collected:
                    </Text>
                    <Text color='blue.600' fontSize='2xl'>
                        ${fees}
                    </Text>
                </Stack>
            </CardBody>
            {
                archivedAt
                    ?
                    null
                    :
                    <CardFooter pt={0} justifyContent='flex-end'>
                        <Button variant='ghost' colorScheme='red'>
                            Close Pool
                        </Button>
                    </CardFooter>

            }
        </Card>
    )
}

export default PoolCard;
