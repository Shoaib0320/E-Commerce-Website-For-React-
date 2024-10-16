import * as React from 'react';
import PropTypes from 'prop-types';
import { AppBar, Toolbar, IconButton, Typography, Menu, MenuItem } from '@mui/material';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LayersIcon from '@mui/icons-material/Layers';

const NAVIGATION = [
  {
    title: 'Dashboard',
    icon: <DashboardIcon />,
    link: '/admin/dashboard',
  },
  {
    title: 'Orders',
    icon: <ShoppingCartIcon />,
    link: '/admin/orders',
  },
  {
    title: 'Delivered Orders',
    icon: <LayersIcon />,
    link: '/admin/delivered-orders',
  },
];

function Navbar() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" color="inherit" onClick={handleMenuOpen}>
          <MenuIcon />
        </IconButton>
        <Typography variant="h6">Admin Panel</Typography>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
        >
          {NAVIGATION.map((item) => (
            <MenuItem
              key={item.title}
              onClick={handleMenuClose}
              component={Link}
              to={item.link}
            >
              {item.icon}
              {item.title}
            </MenuItem>
          ))}
        </Menu>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
