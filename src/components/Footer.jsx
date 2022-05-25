import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Grid, Typography } from '@mui/material';

const linkStyle = { color: 'white', textAlign: 'center', textDecoration: 'none' };

const Footer = () => (
  <Container maxWidth={false} sx={{ margin: '40px 0' }}>
    <Link to="/">
      <Typography variant="body1" style={linkStyle}>
        Home
      </Typography>
    </Link>
    <Link to="/exchanges">
      <Typography variant="body1" style={linkStyle}>
        Exchanges
      </Typography>
    </Link>
    <Link to="/news">
      <Typography variant="body1" style={linkStyle}>
        News
      </Typography>
    </Link>
    <Link to="/cryptocurrencies">
      <Typography variant="body1" style={linkStyle}>
        Cryptocurrencies
      </Typography>
    </Link>
    <Link to="/">
      <Typography variant="h5" style={linkStyle}>
        Copyright © 2021 All Rights Reserved.
      </Typography>
    </Link>
  </Container>
)


export default Footer