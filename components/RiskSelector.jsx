import { useRadioGroup, HStack, useRadio, Box, Heading } from '@chakra-ui/react';

const RadioCard = (props) => {
    const { getInputProps, getCheckboxProps } = useRadio(props)

    const input = getInputProps()
    const checkbox = getCheckboxProps()

    return (
        <Box as='label'>
            <input {...input} />
            <Box
                {...checkbox}
                cursor='pointer'
                borderWidth='1px'
                borderRadius='md'
                boxShadow='md'
                _checked={{
                    bg: 'teal.600',
                    color: 'white',
                    borderColor: 'teal.600',
                }}
                _focus={{
                    boxShadow: 'outline',
                }}
                px={5}
                py={3}
            >
                {props.children}
            </Box>
        </Box>
    )
}

const RiskSelector = ({ setRisk }) => {
    const options = ['Low', 'Medium', 'High']

    const { getRootProps, getRadioProps } = useRadioGroup({
        name: 'RiskSelector',
        defaultValue: 'Medium',
        onChange: value => setRisk(value),
    })

    const group = getRootProps()

    return (
        <>
            <Heading as='h3' size='md'>
                Risk selection
            </Heading>
            <HStack {...group}>
                {options.map((value) => {
                    const radio = getRadioProps({ value })
                    return (
                        <RadioCard key={value} {...radio}>
                            {value}
                        </RadioCard>
                    )
                })}
            </HStack>
        </>
    )
};

export default RiskSelector;