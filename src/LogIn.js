import React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@material-ui/core/Grid";

const LogIn = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = e.target.elements;

    fetch("http://127.0.0.1:8002/todo/auth", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username: email.value, password: password.value }),
    })
      .then((req) => {
        req.json().then((data) => {
          console.log(data);
          localStorage.setItem("token", data["jwt-token"]);
        });
      })
      .catch((e) => console.error(e));
  };

  return (
    <>
      <h1>LOG IN PAGE</h1>
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
            <Button variant="contained" color="primary" type="submit">
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </>
  );
};

export default LogIn;
