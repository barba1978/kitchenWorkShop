import * as React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          My Website
        </Typography>
        <Button color="inherit" component={Link} to="/">Home</Button>
        <Button color="inherit" component={Link} to="/about-us">About Us</Button>
        <Button color="inherit" component={Link} to="/guest">Guest</Button>
        <Button color="inherit" component={Link} to="/host">Host</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
