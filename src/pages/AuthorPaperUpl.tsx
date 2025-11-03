import React, { useState, useEffect } from "react";
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
import loginAnimation from "../assets/ani/lf.json";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import NavbarAuthor from "../components/NavbarAuthor";


const AuthorPaperUpl = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { data } = location.state || {};

  const [paperTitle, setPaperTitle] = useState("");
  const [paperDes, setPaperDes] = useState("");
  const [videoURL, setVideoURL] = useState("");
  const [price, setPrice] = useState("");
  const [pdfFile, setPdfFile] = useState(null);



  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type === "application/pdf") {
      setPdfFile(file);
    } else {
      alert("Please upload a valid PDF file!");
    }
  };


  async function handleSubmit() {
    if (!paperTitle || !paperDes || !videoURL || !pdfFile) {
      toast.warning("Please fill all the fields!");
      return;
    } 
    try {
      const formData = new FormData();
      formData.append("paperTitle", paperTitle);
      formData.append("paperDes", paperDes);
      formData.append("videoURL", videoURL);
      formData.append("email", data.email);
      formData.append("pdfFile", pdfFile);
      formData.append("price", price);

      const response = await axios.post("http://localhost:3000/uploadpaper", formData);
      if(response.data === "done"){
        toast.success("Paper uploaded successfully!");
        setTimeout(() => {
    navigate('/authordashboard', {state: {data}});
  }, 1500);
      } else {
        toast.error("Failed to upload paper. Please try again.");
      }

    } catch (error) {
      console.error(error);
      alert("Error creating account");
    }
  }

  return (
    <Container sx={{ minWidth: "100vw", padding: 2, minHeight: "100vh", bgcolor: "#F0F8FF", display:'flex', justifyContent:'center', alignItems:'center'}}> 
<ToastContainer position="bottom-right" autoClose={2000} />

<Box
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          height: "80vh",
          gap: 5,
          bgcolor: "white",
          borderRadius: 10,
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
                New Paper
              </Typography>

              <TextField
                label="Paper Title"
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
                value={paperTitle}
                onChange={(e) => setPaperTitle(e.target.value)}
              />
              <TextField
                label="Description"
                
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
                value={paperDes}
                onChange={(e) => setPaperDes(e.target.value)}
              />

          

                            <TextField
                label="Video URL"
                type="url"
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
                value={videoURL}
                onChange={(e) => setVideoURL(e.target.value)}
              /> 

              <TextField
                label="Paper Price (in INR)"
                
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
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              /> 


      <Button
        variant="contained"
        component="label"
        sx={{ mt: 0, fontFamily: "Philosopher, serif", textTransform:'none', bgcolor:'#39A78D' }}
      >
        Choose PDF
        <input type="file" hidden accept="application/pdf" onChange={handleFileChange} />
      </Button>

       <Typography
                      gutterBottom
                      sx={{
                        color: "#000000ff",
                        textAlign: "right",
                        fontFamily: "Philosopher, sans-serif",
                        fontSize: "0.7rem",
                        
                      }}
                    >
                      {pdfFile ? pdfFile.name : ""}
                    </Typography>

              <Button
                variant="contained"
                color="primary"
                sx={{ fontFamily: "Philosopher", textTransform:'none', bgcolor:'#395ca7ff', mt:-3}}
                onClick={handleSubmit}
              >
                Create
              </Button>




            </Box>
          </motion.div>
        </Box>
      </Box>


     

    </Container>
  );
};

export default AuthorPaperUpl;
