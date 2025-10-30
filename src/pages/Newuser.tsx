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
import loginAnimation from "../assets/ani/newuser.json";
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


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
const navigate = useNavigate();
  const [countryCode, setCountryCode] = useState("+91");
  const [role, setRole] = useState('Author');
  const [phone, setPhone] = useState('');

  const [username, setUsername] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [rePassword, setRePassword] = useState("");


const handleSubmit = async () => {
  if(!username || !email || !password || !phone){
    toast.warning("Please fill all the fields!");
    return;
  }
  else if (password !== rePassword) {
    toast.warning("Passwords do not match!");
    return;
  }
  else if(password.length < 6){
    toast.warning("Your Password must above 6 characters")
    return;
  }
  else if (!email.includes('@')) {
  toast.warning("Please enter a valid email address!");
  return;
}
  try {
    const response = await axios.post("http://localhost:3000/newuser", {
      username,
      phoneno: phone,
      usertype: role,
      email,
      password,
    });

    if (response.data === "done") {
  toast.success("Account Created Successfully!");
  setTimeout(() => {
    navigate("/login");
  }, 1500); // wait 1.5 seconds so toast is visible
}else if(response.data === "exists"){
  toast.warning("This Mail Id Already exists")
}
else{
  toast.error("Your account not created")
}
  } catch (error) {
    console.error(error);
    alert("Error creating account");
  }
};


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
      <ToastContainer position="bottom-right" autoClose={2000} />
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
        <Box sx={{ width: 600, height: 500 }}>
          <Lottie animationData={loginAnimation} autoplay={true} />
        </Box></motion.div>



        <Box
          sx={{
            width: "40%",
            display: "flex",
            flexDirection: "column",
            gap: 2,
            pt: 5,
            pb: 5,
            pr: 2,
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
              value={username}
  onChange={(e) => setUsername(e.target.value)}
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
              type="email"
              sx={{
                "& .MuiInputBase-input": {
                  fontFamily: "Philosopher, serif", // change font here
                  fontSize: "20px",
                },
                "& .MuiInputLabel-root": {
                  fontFamily: "Philosopher, serif", // label font
                },
              }}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              value={password}

              onChange={(e) => setPassword(e.target.value)}
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
              value={rePassword}
              onChange={(e) => setRePassword(e.target.value)}
            /></Box>


            <Button
              variant="contained"
              color="primary"
              sx={{ fontFamily: "Philosopher", textTransform: "none" }}
              onClick={handleSubmit}
            >
              Create Account
            </Button>

<Typography
              gutterBottom
              sx={{
                color: "#000000ff",
                textAlign: "center",
                fontFamily: "Philosopher, sans-serif",
                fontSize: "0.8rem",
              }}
            >
              Go Back {" "}
              <Link href="/login" underline="hover" sx={{ fontWeight: 500 }}>
                Login
              </Link>
            </Typography>
          </Box></motion.div>
          </Box>
          
        
      </Box>
    </Container>
  );
}

export default Newuser;
