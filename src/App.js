import React, { useEffect } from "react";
import './index.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Home from "./Home";
import Dashboard from "./Dashboard";
import LogIn from "./LogIn";
import SignUp from "./SignUp";
import Clock from "./Clock";
import Footer from './Footer'
import { AuthProvider } from "./Auth";
import { Link } from "react-router-dom";


const App = () => {
  return (
    <AuthProvider>
      <Router>
      <div id="clock"> <Clock /></div>
      <nav>
        <div id="home"><Link to="/home">Home</Link></div>
        <div id="login"><Link to="/login">Log In</Link></div>
        <div id="signup"><Link to="/signup">Sign Up</Link></div>
      </nav>
        <Routes>        
          <Route exact path="/home" element={<Home/>} />
          <Route exact path="/dashboard" element={<Dashboard/>} />
          <Route exact path="/login" element={<LogIn/>} />
          <Route exact path="/signup" element={<SignUp/>} />
          <Route exact path="*" element={<Navigate to="/home"/>} />
        </Routes>
        <Footer/>
      </Router>
    </AuthProvider>
  );
};

export default App;