import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "./Auth";
import firebaseConfig from "./firebase.js";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from "@material-ui/core/Grid";

const LogIn = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = e.target.elements;
    try {
      firebaseConfig.auth().signInWithEmailAndPassword(email.value, password.value);
    } catch (error) {
      alert(error);
    }
  };
  const { currentUser } = useContext(AuthContext);
  if (currentUser) {
    return <Navigate to="/dashboard" />;
  }
  return (
    <>
      <h1>LOG IN PAGE</h1>
      <form onSubmit={handleSubmit}>
        <Grid container direction={"column"} spacing={5} width={10}>
        <Grid item>
          <TextField id="email" label="email" variant="outlined" />
        </Grid>
        <Grid item>
          <TextField id="password" type="password" label="password" variant="outlined" />
        </Grid>
        <Grid item>
          <Button id="submit" type="submit">Submit</Button>
        </Grid>
        </Grid>
      </form>
    </>
  );
};

export default LogIn;