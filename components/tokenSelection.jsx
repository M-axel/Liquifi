import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    useDisclosure,
    Button,
    Select,
    Box,
    FormControl
} from '@chakra-ui/react';
import { Field, Form, Formik } from 'formik';
import { useRouter } from 'next/router';

import getTokens from '../lib/tokens';

const TokenSelectionModal = () => {
    const { isOpen, onOpen, onClose } = useDisclosure({ defaultIsOpen: true })

    const router = useRouter();

    const tokens = getTokens();

    return (
        <Modal isOpen={isOpen} onClose={onClose} closeOnOverlayClick={false}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Liquifi</ModalHeader>

                <ModalBody>
                    Selection de la paire
                </ModalBody>

                <Formik
                    initialValues={{ token1: 'ETH', token2: 'USDC' }}
                    onSubmit={(values, actions) => {
                        // on pousse en query string
                        router.push({
                            pathname: '/',
                            query: {
                                token1: values.token1,
                                token2: values.token2,
                            }
                        }, undefined, /* { shallow: true } */)
                        onClose()
                    }}
                >
                    {(props) => (
                        <Form>
                            <Box display='flex' mr={5} ml={5}>
                                <Field name='token1'>
                                    {({ field, form }) => (
                                        <FormControl>
                                            <Select {...field}>
                                                {tokens.map(t => <option value={t.ticker} key={`token-1-select-option-${t.ticker}`}>{`${t.name} (${t.ticker})`}</option>)}
                                            </Select>
                                        </FormControl>
                                    )}
                                </Field>
                                <Field name='token2'>
                                    {({ field, form }) => (
                                        <FormControl>
                                            <Select {...field}>
                                                {tokens.map(t => <option value={t.ticker} key={`token-1-select-option-${t.ticker}`}>{`${t.name} (${t.ticker})`}</option>)}
                                            </Select>
                                        </FormControl>
                                    )}
                                </Field>

                            </Box>
                            <ModalFooter>
                                <Button
                                    mt={4}
                                    isLoading={props.isSubmitting}
                                    type='submit'
                                >
                                    Calculer
                                </Button>
                            </ModalFooter>
                        </Form>
                    )}
                </Formik>



            </ModalContent>
        </Modal>
    );
};

export default TokenSelectionModal;