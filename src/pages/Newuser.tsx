import React, {useState} from "react";
import {
  Container,
  TextField,
  Button,
  Typography,
  Box,
  Link,
  MenuItem, InputAdornment
} from "@mui/material";
import Lottie from "lottie-react";
import { motion } from "framer-motion";
import loginAnimation from "../assets/ani/Login.json";
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';

const roles = [
  { value: 'Author', label: 'Author' },
  { value: 'Attendee', label: 'Attendee' },
  { value: 'Reviewer', label: 'Reviewer' },
];

const countryCodes = [
  { code: "+1", label: "US" },
  { code: "+91", label: "IN" },
  { code: "+44", label: "UK" },
];

function Newuser() {

  const [countryCode, setCountryCode] = useState("+91");
  const [role, setRole] = useState('Author');
  const [phone, setPhone] = useState('');


  return (
    <Container
      sx={{
        minWidth: "100vw",
        minHeight: "100vh",
        p: 2,
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
        gap: 5,
        background: "linear-gradient(135deg, #a0eaff 0%, #ffb3ff 100%)",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          height: "80vh",
          gap: 5,
          bgcolor: "white",
          borderRadius: 3,
          boxShadow: "0 8px 24px rgba(0, 0, 0, 0.3)",
          width: "80%",
        }}
      >
        <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut"}}
                  >
        <Box sx={{ width: 400, height: 400 }}>
          <Lottie animationData={loginAnimation} loop={true} autoplay={true} />
        </Box></motion.div>



        <Box
          sx={{
            width: "40%",
            display: "flex",
            flexDirection: "column",
            gap: 2,
            pt: 5,
            pb: 5,
          }}
        >
          <motion.div
                    initial={{ opacity: 0, y: -100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut"}}
                  >
          <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
            <Typography
              variant="h4"
              gutterBottom
              sx={{
                color: "#007FFF",
                textAlign: "center",
                fontFamily: "Philosopher, sans-serif",
                fontSize: "3rem",
              }}
            >
              New Account
            </Typography>

<Box sx={{ display: "flex", flexDirection: "row", gap: 2 }}>
            <TextField
              label="Username"
              variant="outlined"
              fullWidth
              size="medium"
              sx={{
                "& .MuiInputBase-input": {
                  fontFamily: "Philosopher, serif", // change font here
                  fontSize: "20px",
                },
                "& .MuiInputLabel-root": {
                  fontFamily: "Philosopher, serif", // label font
                },
              }}
            />

            
      
<PhoneInput
        defaultCountry="in"
        value={phone}
        onChange={setPhone}
        // style the container
        style={{
          width: '100%',
          '--react-international-phone-height': '55px', // height
          '--react-international-phone-font-size': '16px', // font size
          '--react-international-phone-border-radius': '4px',
          '--react-international-phone-border-color': 'rgba(0,0,0,0.23)',
        }}
        // style the internal input field
        inputStyle={{
          fontFamily: 'Philosopher, serif',
          height: '55px',
          fontSize: '16px',
        }}

      />
</Box> 
            <TextField
        select
        label="Select Role"
        value={role}
        onChange={(e) => setRole(e.target.value)}
        fullWidth
      >
        {roles.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>

            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              size="medium"
              sx={{
                "& .MuiInputBase-input": {
                  fontFamily: "Philosopher, serif", // change font here
                  fontSize: "20px",
                },
                "& .MuiInputLabel-root": {
                  fontFamily: "Philosopher, serif", // label font
                },
              }}
            />

            <Box sx={{ display: "flex", flexDirection: "row", gap: 2 }}>
            <TextField
              label="Password"
              type="password"
              variant="outlined"
              fullWidth
              sx={{
                "& .MuiInputBase-input": {
                  fontFamily: "Philosopher, serif", // change font here
                  fontSize: "20px",
                },
                "& .MuiInputLabel-root": {
                  fontFamily: "Philosopher, serif", // label font
                },
              }}
            />
                        <TextField
              label="Re-Type Password"
              type="password"
              variant="outlined"
              fullWidth
              sx={{
                "& .MuiInputBase-input": {
                  fontFamily: "Philosopher, serif", // change font here
                  fontSize: "20px",
                },
                "& .MuiInputLabel-root": {
                  fontFamily: "Philosopher, serif", // label font
                },
              }}
            /></Box>


            <Button
              variant="contained"
              color="primary"
              sx={{ fontFamily: "Philosopher", textTransform: "none" }}
            >
              Create Account
            </Button>

          </Box></motion.div>
          </Box>
          
        
      </Box>
    </Container>
  );
}

export default Newuser;
