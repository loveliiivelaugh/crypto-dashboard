import React from 'react';
import { Button, Container, Typography } from '@mui/material';
import Banner from '../components/Banner';
import CryptocurrencySection from '../components/CryptocurrencySection';
import NewsSection from '../components/NewsSection';

const Home = () => {
  return (
    <Container maxWidth={false}>
      <Banner />
      <Typography variant="h2">
        Top 10 Cryptos in The World
      </Typography>
      <Button variant="text" color="primary">
        Show more
      </Button>
      <CryptocurrencySection topTen />
      <Typography variant="h2">
        Top Stories in Crypto News
      </Typography>
      <NewsSection />
    </Container>
  )
}

export default Home