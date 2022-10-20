import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "./Auth";
import firebaseConfig from "./firebase.js";
import Button from '@mui/material/Button';
import Grid from "@material-ui/core/Grid";
import Todo from './components/Todo';
import {useState} from 'react';
import {TextField} from '@mui/material';

/*const Dashboard = () => {
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

export default Dashboard;*/
const Dashboard = () => {
  const { currentUser } = useContext(AuthContext);
  const [todos,setTodos]=useState([
  'My todo1',
  'My todo2'
  ]);
  const [input, setInput]=useState('');const addTodo=(e)=>{
  e.preventDefault();
  setTodos([...todos,input]);
  setInput('')
  };
  if (!currentUser) {
    return <Navigate to="/login" />;
  }
  
  return (
  <div className="App">
  <h2> TODO List App</h2>
  <form>
  <TextField id="outlined-basic" label="Make Todo" variant="outlined" style={{margin:"0px 5px"}} size="small" value={input}
  onChange={e=>setInput(e.target.value)} />
  <Grid container direction={"column"} spacing={5} width={10}>
    <Grid item>
      <Button variant="contained" color="primary" onClick={addTodo}  >Add Todo</Button>
      <Button variant="contained" onClick={() => firebaseConfig.auth().signOut()}>Sign out</Button>
    </Grid>
  </Grid>
  </form>
  <ul>
  {todos.map(todo => <Todo todo={todo} />)}
  </ul>
  </div>
  );
};

export default Dashboard;
