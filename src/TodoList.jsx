import { Box, List, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import TodoListItem from "./TodoListItem";
import { v4 as uuidv4 } from "uuid";
import TodoListForm from "./TodoListForm";

const initialTodoList = () => {
  return JSON.parse(localStorage.getItem("TodoList")) || [];
};

export default function TodoList() {
  const [list, setList] = useState(initialTodoList);
  useEffect(() => {
    localStorage.setItem("TodoList", JSON.stringify(list));
  }, [list]);
  const handleCheck = (id) => {
    setList((currList) => {
      return currList.map((item) => {
        if (item.id === id) {
          return { ...item, done: !item.done };
        } else {
          return { ...item };
        }
      });
    });
  };
  const handleDeletion = (id) => {
    setList((currList) => currList.filter((item) => item.id !== id));
  };
  const addItem = (text) => {
    setList((currList) => [...currList, { id: uuidv4(), text, done: false }]);
  };
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        m: 3,
      }}
    >
      <Typography variant="h2" component="h1" textAlign={"center"}>
        Todos
      </Typography>
      <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
        {list.map((item) => (
          <TodoListItem
            key={item.id}
            item={item}
            checked={() => handleCheck(item.id)}
            deleted={() => handleDeletion(item.id)}
          />
        ))}
        <TodoListForm addItem={addItem} />
      </List>
    </Box>
  );
}
