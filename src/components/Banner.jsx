import React from 'react';
import { Grid, Typography } from '@mui/material';
import { useApi } from '../hook';

const Banner = () => {
  const { stats } = useApi();

  const formatStats = stat => ({
    'total': 'Total',
    'totalMarkets': 'Total Markets',
    'totalMarketCap': 'Total Markets Cap',
    'totalCoins': 'Total Coins',
    'totalExchanges': 'Total Exchanges',
    'total24hVolume': 'Total 24h Volume',
  }[stat]);

  return (
    <>
      <Typography variant="h2">Global Crypto Stats</Typography>
      <Grid container>
        {Object.keys(stats).map((stat, i) => (
          <Grid key={i} item xs={12} sm={6}>
            <Typography variant="h5">{formatStats(stat)}</Typography>
            <Typography variant="body1" component="p">{stats[stat]}</Typography>
          </Grid>
        ))}
      </Grid>
    </>
  )
}

export default Banner