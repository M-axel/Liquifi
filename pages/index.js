import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Container, Heading, Link, Text } from '@chakra-ui/react';

import TokenSelectionModal from '../components/tokenSelection';

export default function Home() {


  return (
    <Container>
      <TokenSelectionModal />

    </Container>
  )
}
