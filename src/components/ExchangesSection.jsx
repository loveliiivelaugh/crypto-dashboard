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
    <Grid container>
      <MuiDatagrid columns={makeCols(exchanges)} rows={exchanges}/>
    </Grid>
  )
}

export default ExchangesSection