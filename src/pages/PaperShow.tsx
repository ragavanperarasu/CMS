import React,{useState, useEffect} from "react";
import { useLocation } from "react-router-dom";
import { Typography, Container, Box, Avatar, Stack, Button, Dialog, DialogTitle, DialogContent, DialogActions, TextField } from "@mui/material";
import NavbarAuthor from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import YouTubeIcon from '@mui/icons-material/YouTube';
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';
import BookmarksIcon from '@mui/icons-material/Bookmarks';

const PaperShow = () => {
  const navigate = useNavigate();


  const [paperdata, setPaperData] = useState([]);


useEffect(() => {
  load();
}, []);



  const load = async () => {
    try {


      const response3 = await axios.post("http://localhost:3000/viewpaperrev", {
        status: "Public",
      });

      setPaperData(response3.data);

    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Container sx={{ minWidth: "100vw", padding: 2, minHeight: "100vh", }}>
      <NavbarAuthor />     

<ToastContainer position="bottom-right" autoClose={2000} />

      

{/* Paper Data List */}
{paperdata.map((paper, index) => (
  <Box
    key={index}
    sx={{
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-start",
      mt: 3,
      p: 4,
      borderRadius: 5,
      background: "linear-gradient(135deg, hsla(0, 0%, 100%, 1) 70%, hsla(186, 100%, 88%, 1) 100%)",
      boxShadow: "0 8px 24px rgba(0,0,0,0.1)",
      minWidth: "100%",
      maxWidth: "100%",
      position: "relative",
      overflow: "hidden",
    }}
  >
    {/* Small top-left glow effect */}
    <Box
      sx={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100px",
        height: "100px",
        
        zIndex: 0,
      }}
    />

    {/* Right side - Paper details */}
    <Box sx={{ ml: 5, position: "relative", zIndex: 1 }}>
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
        {paper.topic}
      </Typography>
      <Typography
        variant="h4"
        gutterBottom
        sx={{
          color: "#8d8d8dff",
          fontFamily: "Philosopher, sans-serif",
          fontSize: ".7rem",
          fontWeight: "bold",
        }}
      >
        Posted By : {paper.email}
      </Typography>

            <Typography
        variant="h4"
        gutterBottom
        sx={{
          color: "#8d8d8dff",
          fontFamily: "Philosopher, sans-serif",
          fontSize: ".7rem",
          fontWeight: "bold",
        }}
      >
        Posted On : {new Date(paper.CreateDate).toLocaleString()}
      </Typography>

      <Typography
        variant="h6"
        gutterBottom
        sx={{
          color: "#333333",
          fontFamily: "Philosopher, sans-serif",
          fontSize: "1rem",
          mt:2,
          mb:2
        }}
      >
        Description : <br/>{paper.description}
      </Typography>

      <Typography
        variant="h6"
        gutterBottom
        sx={{
          color: "#00A86B",
          fontFamily: "Philosopher, sans-serif",
          fontSize: "0.8rem",
        }}
      >
        Price : {paper.price}
      </Typography>
      <Typography
        variant="h6"
        gutterBottom
        sx={{
          color: "#00A86B",
          fontFamily: "Philosopher, sans-serif",
          fontSize: "0.8rem",
        }}
      >
        Reviewed By : {paper.reviewer}
      </Typography>

      <Typography
        variant="h6"
        gutterBottom
        sx={{
          color: "#00A86B",
          fontFamily: "Philosopher, sans-serif",
          fontSize: "0.8rem",
        }}
      >
        Reviewer Comments : {paper.reviewdes}
      </Typography>

      <Typography
        variant="h6"
        gutterBottom
        sx={{
          color: "#00A86B",
          fontFamily: "Philosopher, sans-serif",
          fontSize: ".8rem",
        }}
      >
        Score: {paper.mark} / 100
      </Typography>

      <Typography
        variant="h6"
        gutterBottom
        sx={{
          color: "#00A86B",
          fontFamily: "Philosopher, sans-serif",
          fontSize: "0.8rem",
        }}
      >
        Status: {paper.status}
      </Typography>

      {/* Action icons */}
      <Stack direction="row" spacing={3} sx={{ mt: 2 }}>
        {/* YouTube Video Button */}
        {paper.videoURL && (
          <Button
            variant="contained"
            color="error"
            sx={{
              borderRadius: 2,
              textTransform: "none",
              fontFamily: "Philosopher",
              fontSize: ".9rem",
              bgcolor: "#FF0000",
              "&:hover": { bgcolor: "#CC0000" },
            }}
            onClick={() => window.open(paper.videoURL, "_blank")}
          >
            <YouTubeIcon sx={{ mr: 1 }} />
            Watch Video
          </Button>
        )}

        {/* View Paper Button */}
        {paper.filepath && (
          <Button
            variant="contained"
            sx={{
              borderRadius: 2,
              textTransform: "none",
              fontFamily: "Philosopher",
              fontSize: ".9rem",
              bgcolor: "#0078D4",
              "&:hover": { bgcolor: "#005A9E" },
            }}
            onClick={() => window.open("http://localhost:3000"+paper.filepath, "_blank")}
          >
            <HistoryEduIcon sx={{ mr: 1 }} />
            View Paper
          </Button>
        )}


      </Stack>
    </Box>
  </Box>
))}






 

      

    </Container>
  );
};

export default PaperShow;
