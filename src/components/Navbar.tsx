import React from "react";
import { AppBar, Toolbar, Typography, Button, IconButton } from "@mui/material";
import { Link } from "react-router-dom";

import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';
import LoginIcon from '@mui/icons-material/Login';

import AccountCircle from '@mui/icons-material/AccountCircle';

function Navbar() {
  return (
    <AppBar position="static" sx={{ width: "100%", mb: 2, bgcolor:'white', borderRadius: 3, boxShadow: '0 8px 24px rgba(0, 0, 0, 0.3)' }}>
      <Toolbar>
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, fontWeight: "bold", fontFamily: "Bungee, sans-serif", fontSize: '1.5rem' }}
          color="#007FFF"
        >
          CMS
        </Typography>

        <Button color="inherit" component={Link} to="/" sx={{ mr: 2, color:'#007BA7', fontFamily:'Roboto Slab', fontWeight: '600', textTransform: 'none' }} startIcon={<HomeIcon />}>Home</Button>
        <Button color="inherit" component={Link} to="/" sx={{ mr: 2, color:'#007BA7', fontFamily:'Roboto Slab', fontWeight: '600', textTransform: 'none' }} startIcon={<HistoryEduIcon />}>Papers</Button>
        <Button color="inherit" component={Link} to="/" sx={{ mr: 2, color:'#007BA7', fontFamily:'Roboto Slab', fontWeight: '600', textTransform: 'none' }} startIcon={<InfoIcon />}>About</Button>
        {/* <Button color="inherit" component={Link} to="/login" sx={{mr: 2, color:'white', fontFamily:'Roboto Slab', fontWeight: '500', bgcolor:'#DE3163', borderRadius:3, textTransform: 'none'}} startIcon={<AccountCircle />}>Login</Button> */}
        <IconButton
  component={Link}
  to="/login"
  sx={{ color: '#007FFF', fontSize: '2.3rem' }}
>
  <AccountCircle sx={{ fontSize: '2.3rem' }} />
</IconButton>

      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
