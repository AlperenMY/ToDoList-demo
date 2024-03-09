// import './App.css'

import TodoList from "./TodoList";
import { CssBaseline } from "@mui/material";
import TodoListNavbar from "./TodoListNavbar";

function App() {
  return (
    <>
      <CssBaseline />
      <TodoListNavbar />
      <TodoList />
    </>
  );
}

export default App;
