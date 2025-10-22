import React from "react";
import {
  Container,
  TextField,
  Button,
  Typography,
  Box,
  Link,
} from "@mui/material";
import Lottie from "lottie-react";
import { motion } from "framer-motion";
import loginAnimation from "../assets/ani/Login.json";
// background: linear-gradient(135deg, hsla(177, 87%, 79%, 1) 0%, hsla(235, 89%, 70%, 1) 100%);
function Newuser() {
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
            p: 5,
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

            <TextField
              label="Username"
              variant="outlined"
              fullWidth
              size="medium"
              sx={{
                "& .MuiInputBase-input": {
                  fontFamily: "Philosopher, serif", // change font here
                  fontSize: "16px",
                },
                "& .MuiInputLabel-root": {
                  fontFamily: "Philosopher, serif", // label font
                },
              }}
            />

            <TextField
              label="Mobile Number"
              variant="outlined"
              fullWidth
              size="medium"
              sx={{
                "& .MuiInputBase-input": {
                  fontFamily: "Philosopher, serif", // change font here
                  fontSize: "16px",
                },
                "& .MuiInputLabel-root": {
                  fontFamily: "Philosopher, serif", // label font
                },
              }}
            />

            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              size="medium"
              sx={{
                "& .MuiInputBase-input": {
                  fontFamily: "Philosopher, serif", // change font here
                  fontSize: "16px",
                },
                "& .MuiInputLabel-root": {
                  fontFamily: "Philosopher, serif", // label font
                },
              }}
            />
            <TextField
              label="Password"
              type="password"
              variant="outlined"
              fullWidth
              sx={{
                "& .MuiInputBase-input": {
                  fontFamily: "Philosopher, serif", // change font here
                  fontSize: "16px",
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
                  fontSize: "16px",
                },
                "& .MuiInputLabel-root": {
                  fontFamily: "Philosopher, serif", // label font
                },
              }}
            />


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
