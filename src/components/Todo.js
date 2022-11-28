import React from "react";
import { List, ListItem, ListItemAvatar, ListItemText } from "@mui/material";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  todo: {
    display: flex,
    justifyContent: center,
    alignItems: center,
    width: "800px",
    border: "1px",
    marginBottom: "10px",
  },
});

function Todo() {
  const classes = useStyles();

  return (
    <List>
      <ListItem>
        <ListItemAvatar />
        <ListItemText primary={todo} secondary={todo} />
      </ListItem>
    </List>
  );
}

export default Todo;
