import React from 'react';
import  { ListItemButton, ListItemIcon, ListItemText, ListSubheader } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import CurrencyBitcoinIcon from '@mui/icons-material/CurrencyBitcoin';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import NewspaperIcon from '@mui/icons-material/Newspaper';

const icons  = [
  <HomeIcon />,
  <CurrencyBitcoinIcon />,
  <CurrencyExchangeIcon />,
  <NewspaperIcon />,
];

export const ListItems = ({ items, handleClick })  => items.map(({ title }, index) => index === 0 ? (
  <ListSubheader key={title} component="div" inset>
    {title}
  </ListSubheader>
) : (
  <ListItemButton key={index} onClick={() => handleClick(title)}>
    <ListItemIcon>{icons[index - 1]}</ListItemIcon>
    <ListItemText primary={title} />
  </ListItemButton>
));