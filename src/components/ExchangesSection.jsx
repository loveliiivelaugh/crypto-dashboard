import React from 'react';
import { Container } from '@mui/material';
import MuiDatagrid from './MuiDatagrid';
import { useApi } from '../hook';

const ExchangesSection = () => {
  const { exchanges } = useApi();
  console.log({ exchanges });
  
  const formatCols = exchanges => exchanges && Object
    .keys(exchanges[0])
    .map(key => key.replace('_', ' '))
    .map(key => ({ 
      key, 
      field: key, 
      headerName: key,
      width: 150, 
      editable: true 
    }));

  const formatRows = exchanges => exchanges.map(values => ({ ...values }));

  return (
    <Container maxWidth={false}>
    {exchanges && (
      <>
      {/* <MuiDatagrid
        colums={formatCols(exchanges)}
        rows={formatRows(exchanges)}
      /> */}
      </>
    )}
    </Container>
  )
}

export default ExchangesSection