import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@material-ui/core/Grid";

const SignUp = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = e.target.elements;
    console.log(email.value);
    console.log(password.value);
    try {
      const req = fetch("http://127.0.0.1:8002/todo/User/user-regular", {
        method: "POST",
        body: JSON.stringify({
          username: email.value,
          email: email.value,
          password: password.value,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((r) => {
          console.log(r.data);
        })
        .catch((e) => console.error(e));
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
            <TextField
              id="password"
              type="password"
              label="password"
              variant="outlined"
            />
          </Grid>
          <Grid item>
            <TextField
              id="repeat_password"
              type="password"
              label="password"
              variant="outlined"
            />
          </Grid>
          <Grid item>
            <Button variant="contained" color="primary" type="submit">
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </>
  );
};

export default SignUp;
