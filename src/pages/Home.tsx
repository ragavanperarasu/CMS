import React from "react";
import { Typography, Container, Box} from "@mui/material";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import { TypeAnimation } from 'react-type-animation';

import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import GroupsIcon from '@mui/icons-material/Groups';
import ArticleIcon from '@mui/icons-material/Article';

import Lottie from "lottie-react";

import loginAnimation from "../assets/ani/teach.json";


function Home() {
  return (
    <Container sx={{ minWidth: "100vw", padding: 2, minHeight: "100vh" }}>
      <Navbar />
      <Container
        sx={{
          textAlign: "center",
          mt: 1,
          minWidth: "100%",
          pt: 4,
          pb: 5,
          display: "flex",
          justifyContent:'space-around',
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
                fontSize: "3rem",
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
                color: "#800080",
                fontFamily: "Philosopher, sans-serif",
                fontSize: "4rem",
                fontWeight: "500",
              }}
            >
                  <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Conference Management System',
        2500, // wait 1s before replacing "Mice" with "Hamsters"
        'Publish and Manage Conferences',
        2500,
        'Publish your Research Papers',
        2500,
        'Join Conferences Worldwide',
        2500
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '2.2rem', display: 'inline-block' }}
      repeat={Infinity}
    />
              
            </Typography>
          </motion.div>
        </Container>

        {/* Image Section */}
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
          >
            <Lottie animationData={loginAnimation} autoplay={true} style={{height:400, width:600}}/>
          </motion.div>
        </Container>

      </Container>

      <Box sx={{display:'flex', justifyContent:'space-evenly', alignItems:'center', mt:1}}>
                  <motion.div
            initial={{ opacity: 0, x: -200 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 1 }}
          >
        <Box   sx={{
    textAlign: 'center',
    background: 'rgba(255, 255, 255, 0.2)', // semi-transparent white
    borderRadius: 5,
    p: 2,
    boxShadow: '0 8px 32px 0 rgba(168, 168, 168, 0.3)',
    backdropFilter: 'blur(0px)', // frosted effect
    border: '1px solid rgba(255, 255, 255, 0.18)',
  }}>
          <ArticleIcon sx={{fontSize:60, color:'#6495ED'}}/>
          <Typography variant="h6" sx={{textAlign:'center', mt:2, fontFamily:'Roboto Slab', color:'#6495ED'}}>Publish Papers</Typography>
        </Box>
        </motion.div>

        <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 2 }}
          >
          <Box   sx={{
    textAlign: 'center',
    background: 'rgba(255, 255, 255, 0.2)', // semi-transparent white
    borderRadius: 5,
    p: 2,
    boxShadow: '0 8px 32px 0 rgba(168, 168, 168, 0.3)',
    backdropFilter: 'blur(0px)', // frosted effect
    border: '1px solid rgba(255, 255, 255, 0.18)',
  }}>
          <GroupsIcon sx={{fontSize:60, color:'#6495ED'}}/>
          <Typography variant="h6" sx={{textAlign:'center', mt:2, fontFamily:'Roboto Slab', color:'#6495ED'}}>Join Conferences</Typography>
          </Box>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 3 }}
          >
         <Box
  sx={{
    textAlign: 'center',
    background: 'rgba(255, 255, 255, 0.2)', // semi-transparent white
    borderRadius: 5,
    p: 2,
    boxShadow: '0 8px 32px 0 rgba(168, 168, 168, 0.3)',
    backdropFilter: 'blur(0px)', // frosted effect
    border: '1px solid rgba(255, 255, 255, 0.18)',
  }}
>
  <CurrencyExchangeIcon sx={{ fontSize: 60, color: '#6495ED' }} />
  <Typography
    variant="h6"
    sx={{
      textAlign: 'center',
      mt: 2,
      fontFamily: 'Roboto Slab',
      color: '#6495ED',
    }}
  >
    Gain Earnings
  </Typography>
</Box>

          </motion.div>
          
      </Box>
    </Container>
  );
}

export default Home;
