import {
    Heading,
    Flex,
    Button,
    Stack, InputGroup,
    InputRightElement,
    NumberInputField,
    NumberInput,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper
} from '@chakra-ui/react';
import CachedIcon from '@mui/icons-material/Cached';
import { useState } from 'react';

const Deposits = ({ token1, token2 }) => {
    const [token1Value, setToken1Value] = useState(0);
    const [token2Value, setToken2Value] = useState(0);

    const handleChange = (value) => {
        setToken1Value(value);
        setToken2Value();
    }

    const computeToken2 = () => {
        fetch('/api/deposits', {
            method: 'POST',
            body: JSON.stringify({
                token1: {
                    ticker: token1,
                    value: token1Value
                },
                token2: {
                    ticker: token2
                }
            })
        })
            .then((res) => res.json())
            .then((data) => {
                setToken2Value(data);
            })
    };

    return (
        <>
            <Heading as='h3' size='md'>
                Deposits
            </Heading>

            <Stack mt={5}>
                <InputGroup>
                    <NumberInput
                        precision={2}
                        step={0.2}
                        placeholder='Entrez une somme'
                        size='lg'
                        value={token1Value}
                        onChange={handleChange}
                        w='100%'
                    >

                        <NumberInputField />
                        <NumberInputStepper>
                            <NumberIncrementStepper />
                            <NumberDecrementStepper />
                        </NumberInputStepper>
                        <InputRightElement
                            pointerEvents='none'
                            color='gray.300'
                            fontSize='1em'
                            children={token1}
                            mr={10}
                        />
                    </NumberInput>
                </InputGroup>
                <Flex align={'center'}>
                    <Button mr={3} onClick={computeToken2}>
                        {/* <Icon as={RepeatIcon} /> */}
                        <CachedIcon />
                    </Button>
                    <InputGroup>
                        <NumberInput
                            size='lg'
                            value={token2Value}
                            w='100%'
                        >
                            <NumberInputField />
                            <InputRightElement
                                pointerEvents='none'
                                color='gray.300'
                                fontSize='1em'
                                children={token2}
                                mr={10}
                            />
                        </NumberInput>
                    </InputGroup>
                </Flex>

            </Stack>

        </>
    )
};

export default Deposits;