import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import Clock from "./Clock";

export default function ButtonAppBar() {
    return (
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <div id="clock">
                {" "}
                <Clock />
              </div>
            </Typography>

            <Button
              component={Link}
              to="/home"
              onClick={() => fetch("http://127.0.0.1:8002/todo/logout", {method: "POST", headers: {"Content-Type": "application/json", "auth-token": localStorage.getItem("token")}}).then((req) => {
                req.json().then((data) => {
                  console.log(data);
                  localStorage.removeItem("token", data["jwt-token"]);
                });
              })}
              variant="inherit"
              color="primary"
            >
              Sign out
            </Button>
            <Button
              component={Link}
              to="/home"
              variant="inherit"
              color="primary"
            >
              Home
            </Button>
            <Button
              component={Link}
              to="/login"
              variant="inherit"
              color="primary"
            >
              Login
            </Button>
            <Button
              component={Link}
              to="/signup"
              variant="inherit"
              color="primary"
            >
              Signup
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
    );
  }
