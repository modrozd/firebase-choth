import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "./Auth";
import firebaseConfig from "./firebase.js";
import Button from '@mui/material/Button';
import Grid from "@material-ui/core/Grid";

const Dashboard = () => {
  const { currentUser } = useContext(AuthContext);
  if (!currentUser) {
    return <Navigate to="/login" />;
  }
  return (
  <div>
  <p>This is the dashboard.</p>
  <Grid container direction={"column"} spacing={5} width={10}>
    <Grid item>
      <Button id="submit" onClick={ () => console.log("jejeje")}>Functionality</Button>
      <Button id="submit" onClick={() => firebaseConfig.auth().signOut()}>Sign out</Button>
    </Grid>
  </Grid>
  </div>
  );
};

export default Dashboard;
