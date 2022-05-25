import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Typography } from '@mui/material';

const Footer = () => (
  <Container maxWidth={false} sx={{ margin: '40px 0' }}>
    <Link to="/">
      <Typography variant="h5" style={{ color: 'white', textAlign: 'center' }}>
        Copyright © 2021 All Rights Reserved.
      </Typography>
    </Link>
    <center>
      <Link to="/">Home</Link>
      <Link to="/exchanges">Exchanges</Link>
      <Link to="/news">News</Link>
      <Link to="/cryptocurrencies">Cryptocurrencies</Link>
    </center>
  </Container>
)


export default Footer