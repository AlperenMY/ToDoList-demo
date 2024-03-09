import {
  Checkbox,
  IconButton,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

export default function TodoListItem({ item, checked, deleted }) {
  const labelId = `checkbox-list-label-${item.id}`;
  return (
    <ListItem
      secondaryAction={
        item.done && (
          <IconButton edge="end" aria-label="delete" onClick={deleted}>
            <CloseIcon />
          </IconButton>
        )
      }
      disablePadding
    >
      <ListItemButton onClick={checked} dense>
        <ListItemIcon>
          <Checkbox
            edge="start"
            checked={item.done}
            tabIndex={-1}
            disableRipple
            inputProps={{ "aria-labelledby": labelId }}
          />
        </ListItemIcon>
        <ListItemText id={labelId} primary={item.text} />
      </ListItemButton>
    </ListItem>
  );
}
