import React from 'react';
import { Button, Container, Typography } from '@mui/material';
import Banner from '../components/Banner';
import CryptocurrencySection from '../components/CryptocurrencySection';
import NewsSection from '../components/NewsSection';

const Home = () => {
  return (
    <Container maxWidth={false}>
      <Banner />
      <br/>
      <CryptocurrencySection topTen />
      <br/>
      <NewsSection />
    </Container>
  )
}

export default Home