import {
    Stat,
    StatLabel,
    StatNumber,
    StatGroup,
    StatHelpText
} from '@chakra-ui/react';

const PriceRange = ({ range, token1, token2 }) => {
    return (
        <StatGroup justify='space-evenly'>
            <Stat>
                <StatLabel>Min Price</StatLabel>
                <StatNumber>{range.low}</StatNumber>
                <StatHelpText>{token1} per {token2}</StatHelpText>
            </Stat>
            <Stat>
                <StatLabel>Max Price</StatLabel>
                <StatNumber>{range.high}</StatNumber>
                <StatHelpText>{token1} per {token2}</StatHelpText>
            </Stat>
        </StatGroup>
    );
};

export default PriceRange;
