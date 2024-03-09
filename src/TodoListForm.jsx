import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import FilledInput from "@mui/material/FilledInput";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import { useState } from "react";
import { ListItem } from "@mui/material";

export default function TodoListForm({ addItem }) {
  const [item, setItem] = useState("");
  const handleChange = (evt) => {
    setItem(evt.target.value);
  };
  const handleSubmit = (evt) => {
    evt.preventDefault();
    addItem(item);
    setItem("");
  };
  return (
    <ListItem>
      <form onSubmit={handleSubmit}>
        <FormControl sx={{ m: 1, width: "25ch" }} variant="filled">
          <InputLabel htmlFor="new-item">New Item</InputLabel>
          <FilledInput
            id="new-item"
            type="text"
            value={item}
            onChange={handleChange}
            endAdornment={
              <InputAdornment position="end">
                <IconButton aria-label="add new item" edge="end" type="submit">
                  <EditIcon color="action" />
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
      </form>
    </ListItem>
  );
}
