import React, { useEffect, useState } from 'react';
import { Box, Button, CircularProgress, Grid, Card, CardContent, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { coinranking } from '../api';

const CryptocurrencySection = ({ topTen = false }) => {
  const navigate = useNavigate();
  const [coins, setCoins] = useState([]);
  useEffect(() => {
    (async () => {
      const { data: { coins }} = await coinranking.getCoins();
      setCoins(coins);
    })();
  });
  return (
    <>
      <Typography variant="h2" gutterBottom>
        Top {topTen && 10} Cryptos in The World
      </Typography>
      {topTen && (
        <Button variant="text" color="primary" onClick={() => navigate('/cryptocurrencies')}>
          Show more
        </Button>
      )}
      <Grid container spacing={2}>
        {coins.length ? [...coins]
          .splice(0, topTen ? 10 : coins.length)
          .map(({ name, price, rank, iconUrl, change, symbol, uuid }) => (
            <Grid key={symbol} item md={3}>
              <Card onClick={() => navigate(`/coin/${uuid}`)} sx={{ cursor: 'pointer' }}>
                <CardContent sx={{ textAlign: 'center' }}>
                  <img src={iconUrl} alt="Coin icon" style={{ height: '50px' }}></img>
                  <Typography variant="h4">{name}</Typography>
                  <Typography variant="body1" component="p"><small>{symbol}</small></Typography>
                  <Typography variant="h5" component="p"><small>${parseInt(price).toFixed(2)}</small></Typography>
                  <Typography variant="body1" component="p">Rank: {rank}</Typography>
                  <Box sx={{ p: 2 }}>
                    <Typography variant="body1" component="p">24h {change}%</Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
        )) : <CircularProgress />}
      </Grid>
    </>
  )
}

export default CryptocurrencySection;