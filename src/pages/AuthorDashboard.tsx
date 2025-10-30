import React from "react";
import { useLocation } from "react-router-dom";
import { Typography, Container, Box, Avatar, Stack, Button } from "@mui/material";
import NavbarAuthor from "../components/NavbarAuthor";
import { useNavigate } from "react-router-dom";

const AuthorDashboard = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { data } = location.state || {};

  return (
    <Container sx={{ minWidth: "100vw", padding: 2, minHeight: "100vh", bgcolor: "#F0F8FF" }}>
      <NavbarAuthor />     
<Container
  sx={{
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    mt: 3,
    p: 4,
    borderRadius: 5,
    bgcolor: "white",
    boxShadow: "0 8px 24px rgba(0,0,0,0.1)",
    minWidth: "100%",          // ✅ use this
    maxWidth: "100%",        // ✅ prevent MUI’s default width limit
  }}
>

        {/* Left side - Avatar */}
        <Box sx={{ flex: "0 0 180px", textAlign: "center" }}>
          <Avatar
            alt="Profile"
            src="./user.webp"
            sx={{
              width: 150,
              height: 150,
              border: "4px solid #007FFF",
              boxShadow: "0 4px 15px rgba(0,127,255,0.3)",
            }}
          />
        </Box>

        {/* Right side - Welcome text */}
        <Box sx={{ ml: 5 }}>
          <Typography
            variant="h4"
            gutterBottom
            sx={{
              color: "#007FFF",
              fontFamily: "Philosopher, sans-serif",
              fontSize: "2rem",
              fontWeight: "bold",
            }}
          >
            Welcome Back,
          </Typography>

          <Typography
            variant="h4"
            sx={{
              color: "#2E3B55",
              fontFamily: "Philosopher, sans-serif",
              fontSize: "2rem",
              fontWeight: "bold",
            }}
          >
            {data?.username || "User"}
          </Typography>
        </Box>

      </Container>

<Box
  sx={{
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    mt: 3,
    p: 4,
    borderRadius: 5,
    bgcolor: "white",
    boxShadow: "0 8px 24px rgba(0,0,0,0.1)",
    minWidth: "100%",          // ✅ use this
    maxWidth: "100%",        // ✅ prevent MUI’s default width limit
  }}
>


        {/* Right side - Welcome text */}
        <Box sx={{ ml: 5 }}>
          <Typography
            variant="h4"
            gutterBottom
            sx={{
              color: "#5D8AA8",
              fontFamily: "Philosopher, sans-serif",
              fontSize: "1.5rem",
              fontWeight: "bold",
            }}
          >
            Create New Paper
          </Typography>

                        <Button
                variant="contained"
                color="primary"
                sx={{ fontFamily: "Philosopher", fontSize:'.8rem', bgcolor:'#39A78D', mt:2}}
                onClick={()=> navigate('/authorpaperupl', {state: {data}})}
              >
                Create
              </Button>

        </Box>
      </Box>


      <Box
  sx={{
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    mt: 3,
    p: 4,
    borderRadius: 5,
    bgcolor: "white",
    boxShadow: "0 8px 24px rgba(0,0,0,0.1)",
    minWidth: "100%",          // ✅ use this
    maxWidth: "100%",        // ✅ prevent MUI’s default width limit
  }}
>


        {/* Right side - Welcome text */}
        <Box sx={{ ml: 5 }}>
          <Typography
            variant="h4"
            gutterBottom
            sx={{
              color: "#5D8AA8",
              fontFamily: "Philosopher, sans-serif",
              fontSize: "1.5rem",
              fontWeight: "bold",
            }}
          >
            View Submitted Papers
          </Typography>

                        <Button
                variant="contained"
                color="primary"
                sx={{ fontFamily: "Philosopher", fontSize:'.8rem', bgcolor:'#39A78D', mt:2}}
                
              >
                View
              </Button>

        </Box>
      </Box>

      

    </Container>
  );
};

export default AuthorDashboard;
