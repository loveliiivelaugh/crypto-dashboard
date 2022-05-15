import React from 'react';
import { Grid, Card, CardContent, Typography } from '@mui/material';
import { useLocation } from 'react-router-dom';
import { useApi } from '../hook';
import LineChart from '../components/recharts/LineChart';

const CurrencyDetails = () => {
  const { pathname } = useLocation();
  const { coins } = useApi();
  const uuid = pathname.split('/')[2];
  const coin = coins.find(coin => coin.uuid === uuid);

  console.log('Coin Details: ', coin);
  return (
    <Grid container>
      {/* CurrencyDetails */}
      <Grid item xs={12}>
        <Typography variant="h4">{coin.name}</Typography>
        <Typography variant="body1" component="p"><small>{coin.symbol}</small></Typography>
        <Typography variant="h4" component="p"><small>${parseInt(coin.price).toFixed(2)}</small></Typography>
      </Grid>
      {/* Some KPI Details */}
      {new Array(4).fill(0).map((_, i) => (
        <Grid item xs={12} md={3} key={i}>
          <Card>
            <CardContent>
              <Typography variant="h4">KPI</Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
      {/* Line Chart of Recent History */}
      <Grid item xs={12}>
        <LineChart/>
      </Grid>
      {/* Relevant News */}
    </Grid>
  )
}

export default CurrencyDetails