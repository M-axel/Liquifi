import {
    Heading,
    Text,
    Flex,
    Box,
    HStack
} from '@chakra-ui/react';


const Fees = ({ value = 0.00, /* totalDeposit = 0.00 */ }) => (
    <>
        <Flex>
            <Heading as='h3' size='md' mr={2}>
                Fees
            </Heading>
            <Text>
                (24h)
            </Text>
        </Flex>
        <Text fontSize='4xl' color='green' mb={2}>${value}</Text>
        <Flex bg='teal.600' borderRadius={'10px'} pl={3} pr={3} justify='space-between' mb={1}>
            <Text as='b' mb={0}>Monthly</Text>
            <HStack>
                <Text as='b' mb={0}>${value * 30}</Text>
                {/* <Text mb={0}>${(value * 30)}</Text> */}
            </HStack>
        </Flex>
        <Flex bg='teal.600' borderRadius={'10px'} pl={3} pr={3} justify='space-between'>
            <Text as='b' mb={0}>Yearly</Text>
            <HStack>
                <Text as='b' mb={0}>${value * 30 * 365}</Text>
            </HStack>
        </Flex>
    </>
);

export default Fees;