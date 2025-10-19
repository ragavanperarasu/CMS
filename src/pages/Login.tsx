import React from "react";
import { Container, TextField, Button, Typography, Box } from "@mui/material";

function Login() {
  return (
    <Container sx={{ mt: 5 }}>
      <Typography variant="h4" gutterBottom>
        Login
      </Typography>
      <Box component="form" sx={{ mt: 2, display: "flex", flexDirection: "column", gap: 2, width: "300px" }}>
        <TextField label="Email" variant="outlined" fullWidth />
        <TextField label="Password" type="password" variant="outlined" fullWidth />
        <Button variant="contained" color="primary">
          Login
        </Button>
      </Box>
    </Container>
  );
}

export default Login;
