import React from "react";
import { Typography, Container } from "@mui/material";

function Home() {
  return (
    <Container sx={{ mt: 5 }}>
      <Typography variant="h4" gutterBottom>
        Welcome to the Home Page
      </Typography>
      <Typography>
        This is a simple example of React + Material UI + React Router.
      </Typography>
    </Container>
  );
}

export default Home;
