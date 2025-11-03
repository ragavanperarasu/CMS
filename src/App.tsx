import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Newuser from "./pages/Newuser";
import AuthorDashboard from "./pages/AuthorDashboard";
import AuthorPaperUpl from "./pages/AuthorPaperUpl";
import AuthorPaperShow from "./pages/AuthorPaperShow";
import ReviewerDashboard from "./pages/ReviewerDashboard";
import ReviewerPaperShow from "./pages/ReviewerPaperShow";
import PaperShow from "./pages/PaperShow";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/newuser" element={<Newuser />} />
        <Route path="/authordashboard" element={<AuthorDashboard />} />
        <Route path="/authorpaperupl" element={<AuthorPaperUpl />} />
        <Route path="/authorpapershow" element={<AuthorPaperShow />} />
        <Route path="/reviewerdashboard" element={<ReviewerDashboard />} />
        <Route path="/reviewerpapershow" element={<ReviewerPaperShow />} />
        <Route path="/papershow" element={<PaperShow />} />
      </Routes>
    </Router>
  );
}

export default App;
