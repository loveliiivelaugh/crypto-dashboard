import React, { useEffect, useState } from 'react';
import { CircularProgress, Grid, Typography } from '@mui/material';
import MuiDatagrid from './MuiDatagrid';
import { coingecko } from '../api';
// import { useApi } from '../hook';

const ExchangesSection = () => {
  // const { exchanges } = useApi();
  const [exchanges, setExchanges] = useState([]);
  useEffect(() => {
    (async () => {
      const exchanges = await coingecko.getExchanges();
      setExchanges(exchanges);
    })();
  });
  
  const makeCols = exchanges => Object
    .keys(exchanges[0])
    .map(key => ({ 
      key, 
      field: key, 
      headerName: key.replace('_', ' '),
      width: 150, 
      editable: false
    }));

  return (
    <>
      <Typography variant="h2" gutterBottom>
        Top Crypto Exchanges
      </Typography>
      <Grid container>
        {exchanges.length ? (
          <MuiDatagrid columns={makeCols(exchanges)} rows={exchanges}/>
        ) : <CircularProgress />}
      </Grid>
      <br/>
    </>
  )
}

export default ExchangesSection