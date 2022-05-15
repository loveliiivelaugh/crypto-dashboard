import React from 'react';
import { Container } from '@mui/material';
import CurrenciesSection from '../components/CryptocurrencySection';

const Currencies = () => (
  <Container maxWidth={false}>
    <CurrenciesSection />
  </Container>
);

export default Currencies;