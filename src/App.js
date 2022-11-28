import React from "react";
import "./index.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Home from "./Home";
import Dashboard from "./Dashboard";
import LogIn from "./LogIn";
import SignUp from "./SignUp";
import Footer from "./Footer";
import MenuAppBar from "./MenuAppBar";

const App = () => {
  return (
      <Router>
        <div>
          {" "}
          <MenuAppBar />{" "}
        </div>
        <Routes>
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
          <Route exact path="/login" element={<LogIn />} />
          <Route exact path="/signup" element={<SignUp />} />
          <Route exact path="*" element={<Navigate to="/home" />} />
        </Routes>
        <Footer />
      </Router>
  );
};

export default App;
