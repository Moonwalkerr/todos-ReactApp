import React from "react";
import { ListItem, ListItemText, Button } from "@material-ui/core";
import { db } from "../firebaseConfig";

export default function TodoListItem({ todo, inprogress, id }) {
  function toggleInProgress() {
    db.collection("todos").doc(id).update({
      inprogress: !inprogress,
    });
  }

  function deleteTodo() {
    db.collection("todos").doc(id).delete();
  }

  return (
    <div className="list">
      <ListItem>
        <ListItemText
          primary={todo}
          secondary={inprogress ? "In Progress" : "Completed"}
        />
      </ListItem>

      <Button onClick={toggleInProgress}>
        {inprogress ? "✔️" : "❌"}
      </Button>
      <Button onClick={deleteTodo}>❌</Button>
    </div>
  );
}