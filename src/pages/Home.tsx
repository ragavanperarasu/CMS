import React from "react";
import { Typography, Container } from "@mui/material";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import { TypeAnimation } from 'react-type-animation';


function Home() {
  return (
    <Container sx={{ minWidth: "100vw", padding: 2, minHeight: "100vh" }}>
      <Navbar />
      <Container
        sx={{
          textAlign: "center",
          mt: 5,
          minWidth: "100%",
          pt: 5,
          pb: 10,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* Animated Text Section */}
        <Container
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut"}}
          >
            <Typography
              variant="h4"
              gutterBottom
              sx={{
                color: "#007FFF",
                fontFamily: "Philosopher, sans-serif",
                fontSize: "4rem",
              }}
            >
              Welcome
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
          >
            <Typography
              variant="h4"
              gutterBottom
              sx={{
                color: "#DE3163",
                fontFamily: "Philosopher, sans-serif",
                fontSize: "3rem",
              }}
            >
                  <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Conference Management System',
        1500, // wait 1s before replacing "Mice" with "Hamsters"
        'Publish and Manage Conferences',
        1500,
        'Publish your Research Papers',
        1500,
        'Join Conferences Worldwide',
        1500
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '3rem', display: 'inline-block' }}
      repeat={Infinity}
    />
              
            </Typography>
          </motion.div>
        </Container>

        {/* Image Section */}
        <Container>
          <motion.img
            src="./test.jpg"
            alt="Conference"
            style={{ maxWidth: "100%", borderRadius: "20px" }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          />
        </Container>
      </Container>
    </Container>
  );
}

export default Home;
