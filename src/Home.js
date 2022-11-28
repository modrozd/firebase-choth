import { Link } from "react-router-dom";
import React from "react";
import Button from "@mui/material/Button";

const Home = () => {
  return (
    <>
      <h1>HOME PAGE</h1>
      <p>
        <Button component={Link} to="/login" variant="inherit" color="primary">
          Login
        </Button>
        <Button component={Link} to="/signup" variant="inherit" color="primary">
          Signup
        </Button>
      </p>
    </>
  );
};

export default Home;
