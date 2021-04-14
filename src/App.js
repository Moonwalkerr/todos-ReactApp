import "./App.css";
import TextField from "@material-ui/core/TextField";
import { useState, useEffect } from "react";
import { Button } from "@material-ui/core";
import { db } from "./firebaseConfig";
import firebase from "firebase";
import TodoListItem from "./Todos/todos";


function App() {
  const [todos, setTodos] = useState([]);
  const [todoInput, setTodoInput] = useState("");

  useEffect(() => {
    getTodos();
  }, []); // blank to run only on first launch

  function getTodos() {
    db.collection("todos").onSnapshot(function (querySnapshot) {
      setTodos(
        querySnapshot.docs.map((doc) => ({
          id: doc.id,
          todo: doc.data().todo,
          inprogress: doc.data().inprogress,
        }))
      );
    });
  }

  function addTodo(e) {
    e.preventDefault();
    if (todoInput===""){
      // do nothing
    }
   else{ db.collection("todos").add({
      inprogress: true,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      todo: todoInput,
    });
}
    setTodoInput("");
  }

  function setdarkTheme(){
 if (document.body.style.backgroundColor === ""){
  document.body.style.backgroundColor = "#333";
  document.getElementById('App-header').style.color = 'white';
  document.getElementById('App-subheader').style.color = 'yellow';
}

else if(document.body.style.backgroundColor === "white") {
  document.body.style.backgroundColor = "#333";
  document.getElementById('App-header').style.color = 'white';
  document.getElementById('App-subheader').style.color = 'yellow';
}

else{
  document.body.style.backgroundColor = "white";
  document.getElementById('App-header').style.color = 'blue'
  document.getElementById('App-subheader').style.color = 'black';
}
  }
  return (
    <div className="App">
 
  <Button
  onClick={setdarkTheme}
  id='darkMode'
  variant="outlined" color="secondary">🌙</Button>
      <div id='brand'>Made with ❤️ by Abhishek Mishra</div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}
      >
       <h1 id='App-header'>TODO's App 📝</h1>
        <form>
          <TextField
            id="standard-basic"
            label="Write a Todo"
            value={todoInput}
            style={{ width: "90vw", maxWidth: "500px" }}
            onChange={(e) => setTodoInput(e.target.value)}
          />
          <Button
            type="submit"
            variant="contained"
            onClick={addTodo}
            style={{ display: "none" }}
          >
            Default
          </Button>
        </form>
        <h2 id='App-subheader'>Things you need to do today 👇🏻</h2>
        <div className='todoList' >
          {todos.map((todo) => (
            <TodoListItem
              todo={todo.todo}
              inprogress={todo.inprogress}
              id={todo.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;