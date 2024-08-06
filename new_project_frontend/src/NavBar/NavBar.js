import * as React from 'react';
import { AppBar, Toolbar, Typography, Button,Box } from '@mui/material';
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <AppBar  position='' sx={{
    
        height: 64, // Adjust the height as needed
        backgroundColor: '#D84315', // Custom color, change as needed
        borderRadius: '8px', // Custom border radius
        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.05)', // Light and minimal box shadow
        padding: '0 24px' // Custom padding
      }}
    >
      <Box  >
      <Toolbar>
        <Typography variant="h4" component={Link} to="/" color={'white'}  sx={{ flexGrow: 1 }}>
        My webSite
        </Typography>
        <Button sx={{
        fontSize: '1.2rem'
      }} color="inherit"  component={Link} to="/">Home</Button>
       <Button sx={{
        fontSize: '1.2rem'
      }} color="inherit"  component={Link} to="/login">Login</Button>
       <Button sx={{
        fontSize: '1.2rem'
      }} color="inherit"  component={Link} to="/signup">Signup</Button>
        <Button sx={{
        fontSize: '1.2rem'
      }}  color="inherit"  component={Link} to="/about-us">About Us</Button>
        <Button sx={{
        fontSize: '1.2rem'
      }}  color="inherit"  component={Link} to="/guest">Guest</Button>
        <Button sx={{
        fontSize: '1.2rem'
      }}  color="inherit"  component={Link} to="/host">Host</Button>
      </Toolbar>
      </Box>
    </AppBar>
  );
};

export default Navbar;
