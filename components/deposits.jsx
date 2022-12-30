import { Input, Heading, Stack, InputGroup, InputRightElement, NumberInputField, NumberInput, NumberInputStepper, NumberIncrementStepper, NumberDecrementStepper } from '@chakra-ui/react';
import { useState } from 'react';


const Deposits = ({ token1, token2 }) => {
    const [token1Value, setToken1Value] = useState(0);
    const [token2Value, setToken2Value] = useState(0);

    const handleChange = (value) => {
        // console.log(value)
        setToken1Value(value)

        setTimeout(() => { // clear timeout si re-excecution de handleChange
            // TODO: appel api pour calcul quantité token2
            setToken2Value(value)
        }, 2000);
    }

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
            </Stack>

        </>
    )
};

export default Deposits;