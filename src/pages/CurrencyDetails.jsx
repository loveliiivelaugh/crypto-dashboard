import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { coinranking } from '../api';
import { Container, Card, CardContent, Grid, Typography } from '@mui/material';
import LineChart from '../components/LineChart';

const CurrencyDetails = () => {
  const [loading, setLoading] = useState(true);
  const { pathname } = useLocation();
  const uuid = pathname.split('/')[2];
  const [coin, setCoin] = useState({});

  const fetchCoin = async () => {
    try {
      const { data: { coin }} = await coinranking.getCoin(uuid);
      setCoin(coin);
    } 
    catch (error) {console.error('Error fetching coin', { error });}
    finally {setLoading(false);}
  };

  useEffect(() => {
    fetchCoin();
  }, []);

  const getDate = i => {
    const date = new Date();
    const day = Math.abs(date.getDate() - i);
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  const getValue = key => ({
    'Change': coin.change,
    '24h Volume': coin['24hVolume'],
    'Market Cap': coin.marketCap,
    'All Time High': coin.allTimeHigh.price,
  }[key]);

  return loading ? 'Loading...' : (
    <Container maxWidth={false}>
      <Grid container>
        {/* CurrencyDetails */}
        <Grid item xs={12}>
          <Typography variant="h4">
            <span>{coin.name} <img src={coin.iconUrl} alt="icon" style={{height:'50px'}}/></span>
          </Typography>
          <Typography variant="body1" component="p">
            <small>{coin.symbol}</small>
          </Typography>
          <Typography variant="h4" component="p">
            <small>${parseInt(coin.price).toFixed(2)}</small>
          </Typography>
        </Grid>
        {/* Some KPI Details */}
        {['Change', '24h Volume', 'Market Cap', 'All Time High']
        .map((key, i) => (
          <Grid item xs={12} md={3} key={i}>
            <Card sx={{ m: 2 }}>
              <CardContent>
                <Typography variant="body1">{key}</Typography>
                <Typography variant="body1">{getValue(key)}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
        {/* Line Chart of Recent History */}
        <Grid item xs={12}>
          <LineChart lineChartData={coin.sparkline.map((price, i) =>
            ({ key: i, price, day: getDate(i) })
          )}/>
        </Grid>
        <Grid item xs={12}>
          <Card sx={{ m: 4 }}>
            <CardContent>
              <Typography variant="body1" component="p">
                {[coin.description]}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        {/* Relevant News */}
      </Grid>
    </Container>
  )
}

export default CurrencyDetails