import React, {useState} from "react";
import { Navigate } from "react-router-dom";
import firebaseConfig from "./firebase.js";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from "@material-ui/core/Grid";

const SignUp = () => {
  const [currentUser, setCurrentUser] = useState(null);    
  const handleSubmit = (e) => {
    e.preventDefault();    
    const { email, password} = e.target.elements;
    try {
      firebaseConfig.auth().createUserWithEmailAndPassword(email.value, password.value);      
      setCurrentUser(true);
    } catch (error) {
      alert(error);
    }
    };
  if (currentUser) {
      return <Navigate to="/dashboard" />;
  }
  return (
    <>
      <h1>SIGN UP PAGE</h1>
      <form onSubmit={handleSubmit}>
      <Grid container direction={"column"} spacing={5} width={10}>
        <Grid item>
          <TextField id="email" label="email" variant="outlined" />
        </Grid>
        <Grid item>
          <TextField id="password" type="password" label="password" variant="outlined" />
        </Grid>
        <Grid item>
          <TextField id="repeat_password" type="password" label="password" variant="outlined" />
        </Grid>
        <Grid item>
          <Button id="submit" type="submit">Submit</Button>
        </Grid>
        </Grid>
      </form>
    </>
  );
};

export default SignUp;