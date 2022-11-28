import React from "react";
import { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles({
  field: {
    "&&": {
      marginTop: "20px",
      marginBottom: "10px",
    },
  },
  todolist: {
    fontFamily: "Monospace",
  },
  todo_box: {
    fontFamily: "Monospace",
    display: "block",
  },
});

export default function Dashboard() {
  const classes = useStyles();

  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    if (savedTodos) {
      return JSON.parse(savedTodos);
    } else {
      return [];
    }
  });
  const [todo, setTodo] = useState("");

  useEffect(() => {
    fetch("http://127.0.0.1:8002/todo/TodoItem/*/regular", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
    }).then((req) => req.json().then((data) => setTodos(data)));
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  function handleInputChange(e) {
    setTodo(e.target.value);
  }

  function handleFormSubmit(e) {
    e.preventDefault();

    fetch("http://127.0.0.1:8002/todo/TodoItem/regular", {
      method: "POST",
      body: JSON.stringify({ todoId: 1, name: todo.trim() }),
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
    });
  }
  function handleDeleteClick(id) {
    fetch(`http://127.0.0.1:8002/todo/TodoItem/"id"=='${id}'/regular`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
    });
  }

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <TextField
          InputProps={{
            className: classes.field,
          }}
          name="todo"
          type="text"
          placeholder="Create a new todo"
          value={todo}
          onChange={handleInputChange}
        />
      </form>

      <ul className={classes.todolist}>
        {todos.map((todo) => (
          <div key={todo.id}>
            <Box className={classes.todo_box}>
              {todo.name}{" "}
              <Button
                variant="inherit"
                onClick={() => handleDeleteClick(todo.id)}
              >
                X
              </Button>
            </Box>
          </div>
        ))}
      </ul>
    </div>
  );
}
