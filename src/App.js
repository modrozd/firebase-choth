import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Dashboard from "./Dashboard";
import LogIn from "./LogIn";
import SignUp from "./SignUp";
import { AuthProvider } from "./Auth";

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/dashboard" element={<Dashboard/>} />
          <Route exact path="/login" element={<LogIn/>} />
          <Route exact path="/signup" element={<SignUp/>} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;