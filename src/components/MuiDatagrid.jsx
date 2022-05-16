import React from 'react';
import { Container } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';

export default function DataGridDemo({ columns, rows }) {
  return (
    <Container maxWidth={false} sx={{ height: '80vh', width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={100}
        // rowsPerPageOptions={[5]}
      />
    </Container>
  );
}
