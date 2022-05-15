import React from 'react';
import { Box, Container, Grid, Card, CardContent, Typography } from '@mui/material';
import { useApi } from '../hook';

const CryptocurrencySection = ({ topTen = false }) => {
  const { coins } = useApi();
  return (
    <Container maxWidth={false}>
      <Grid container spacing={2}>
        {[...coins]
          .splice(0, topTen ? 10 : coins.length)
          .map(({ name, price, rank, iconUrl, change, symbol }) => (
            <Grid key={symbol} item md={3}>
              <Card>
                <CardContent sx={{ textAlign: 'center' }}>
                  <img src={iconUrl} alt="Coin icon" style={{ height: '75px' }}></img>
                  <Typography variant="h4">{name}</Typography>
                  <Typography variant="body1" component="p"><small>{symbol}</small></Typography>
                  <Typography variant="h4" component="p"><small>${parseInt(price).toFixed(2)}</small></Typography>
                  <Typography variant="body1" component="p">Rank: {rank}</Typography>
                  <Box sx={{ p: 2 }}>
                    <Typography variant="body1" component="p">24h {change}%</Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
        ))}
      </Grid>
    </Container>
  )
}

export default CryptocurrencySection;