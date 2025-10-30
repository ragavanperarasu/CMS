import React, { useState } from "react";
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
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

// background: linear-gradient(135deg, hsla(177, 87%, 79%, 1) 0%, hsla(235, 89%, 70%, 1) 100%);
function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit() {
    if (!email || !password) {
      toast.warning("Please fill all the fields!");
      return;
    } else if (!email.includes("@")) {
      toast.warning("Please enter a valid email address!");
      return;
    }
    try {
      const response = await axios.post("http://localhost:3000/loginuser", {
        email,
        password,
      });
      if (response.data === "invalid") {
        toast.warning("Please Check you Email and Password");
      } else {
        navigate("/authordashboard", {
          state: { data: response.data },
        });
      }
    } catch (error) {
      console.error(error);
      alert("Error creating account");
    }
  }
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
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <Box sx={{ width: 400, height: 400 }}>
            <Lottie animationData={loginAnimation} autoplay={true} />
          </Box>
        </motion.div>

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
            transition={{ duration: 1, ease: "easeOut" }}
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
                Login
              </Typography>

              <TextField
                label="Email"
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <Typography
                gutterBottom
                sx={{
                  color: "#000000ff",
                  textAlign: "right",
                  fontFamily: "Philosopher, sans-serif",
                  fontSize: "0.8rem",
                }}
              >
                Forgot Password ?
              </Typography>

              <Button
                variant="contained"
                color="primary"
                sx={{ fontFamily: "Philosopher" }}
                onClick={handleSubmit}
              >
                Login
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
                Don’t have an account?{" "}
                <Link
                  href="/newuser"
                  underline="hover"
                  sx={{ fontWeight: 500 }}
                >
                  Sign Up
                </Link>
              </Typography>

              <Typography
                gutterBottom
                sx={{
                  color: "#000000ff",
                  textAlign: "center",
                  fontFamily: "Philosopher, sans-serif",
                  fontSize: "0.8rem",
                  mt: -2,
                }}
              >
                Back to{" "}
                <Link href="/" underline="hover" sx={{ fontWeight: 500 }}>
                  Home
                </Link>
              </Typography>
            </Box>
          </motion.div>
        </Box>
      </Box>
    </Container>
  );
}

export default Login;
