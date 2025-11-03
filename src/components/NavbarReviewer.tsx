import React from "react";
import { AppBar, Toolbar, Typography, Button, IconButton } from "@mui/material";
import { Link } from "react-router-dom";

import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';
import LoginIcon from '@mui/icons-material/Login';

import AccountCircle from '@mui/icons-material/AccountCircle';

function NavbarReviewer() {
  return (
   <AppBar
  position="static"
  sx={{
    width: "100%",
    mb: 2,
    borderRadius: 3,
    background: "white", // transparent white

    border: "1px solid rgba(255, 255, 255, 0.18)", // glass border
  }}
>

      <Toolbar>
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, fontWeight: "bold", fontFamily: "Roboto Slab, sans-serif", fontSize: '1.9rem' }}
          color="#007FFF"
        >
          CMS Reviewer
        </Typography>

       
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

export default NavbarReviewer;
