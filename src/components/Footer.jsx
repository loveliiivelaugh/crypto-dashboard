import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Container, Typography, Stack } from '@mui/material';

const Footer = () => {
  return (
    <Fragment>
      <Container maxWidth={false}>
        <Typography variant="h5" style={{ color: 'white', textAlign: 'center' }}>Copyright © 2021
          <Link to="/">
            Cryptoverse Inc.
          </Link> <br />
          All Rights Reserved.
        </Typography>
        <Stack>
          <Link to="/">Home</Link>
          <Link to="/exchanges">Exchanges</Link>
          <Link to="/news">News</Link>
          <Link to="/cryptocurrencies">Cryptocurrencies</Link>
          <Link to="/portfolio">Portfolio</Link>
          <Link to="/settings">Settings</Link>
        </Stack>
      </Container>
    </Fragment>
  )
}

export default Footer