import ListItem from "@material-ui/core/ListItem";
import React from "react";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import AddIcon from "@material-ui/icons/Add";
import IconButton from "@material-ui/core/IconButton";
import { GetDisplayName } from "../../utils/string";

export const InactiveRelativeItem = ({ data, handleLink }) => {
  const styles = {
    buttonRight: {
      float: "right",
      margin: "10px"
    }
  };
  return (
    <ListItem key={data.id} role={undefined} divider dense button>
      <ListItemText primary={GetDisplayName(data)} />
      <ListItemSecondaryAction>
        <IconButton
          aria-label="add"
          style={styles.buttonRight}
          onClick={e => handleLink(data, e)}
        >
          <AddIcon color="primary" />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
};
