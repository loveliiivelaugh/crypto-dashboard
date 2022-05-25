import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import { Box, CssBaseline, Divider, List, IconButton, Toolbar } from '@mui/material';
import MuiDrawer from '@mui/material/Drawer';
import { ListItems } from './ListItems';
import logo from '../images/logo-white.png';

const drawerWidth = 240;

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    '& .MuiDrawer-paper': {
      position: 'relative',
      whiteSpace: 'nowrap',
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      boxSizing: 'border-box',
      ...(!open && {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
          width: theme.spacing(9),
        },
      }),
    },
  }),
);


export default function SideDrawer({ content }) {
  const navigate = useNavigate();
  const handleClick = path => navigate(path === 'Home' ? '/' : path.toLowerCase());

  const items = [
    { title:  '' },
    { title: 'Home' },
    { title: 'Cryptocurrencies' },
    { title: 'Exchanges' },
    { title: 'News' },
  ];

  return (
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <Drawer variant="permanent" open>
          <Toolbar sx={{ display: 'flex', px: [1] }}>
            <IconButton onClick={() => navigate('/')}>
              <img src={logo} alt="logo" style={{ height: '75px' }} />
            </IconButton>
          </Toolbar>
          <Divider />
          <List component="nav">
            <ListItems items={items} handleClick={handleClick} />
          </List>
        </Drawer>
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
          }}
        >
          <Toolbar />
          {content}
        </Box>
      </Box>
  );
}