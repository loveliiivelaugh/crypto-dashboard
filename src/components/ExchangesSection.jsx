import React from 'react';
import { Grid, Toolbar, Typography } from '@mui/material';
import MuiDatagrid from './MuiDatagrid';
import { useApi } from '../hook';

const ExchangesSection = () => {
  const { exchanges } = useApi();
  
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
        <MuiDatagrid columns={makeCols(exchanges)} rows={exchanges}/>
      </Grid>
      <br/>
    </>
  )
}

export default ExchangesSection