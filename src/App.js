
import './App.css';
import TextField from '@material-ui/core/TextField';
import {useEffect, useState} from 'react';
import {db} from './firebaseConfig';
import { Button } from '@material-ui/core';
import firebase from "firebase";

function App() {
  const [todoInput, setTodoInput] = useState("");
  function addTodo(e){
    e.preventDefault();
    // app -> firestore
    db.collection("Todos").add({
      is_in_progress: true,
      // get server timestamp from firestore itself
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      todo: todoInput,
    })
    // finally setting the todo input to blank for new todo entries from user
    setTodoInput("");
  }

  

  // we should get todos to be displayed at the start of the application on screen
    useEffect(() => {
      effect
      return () => {
        cleanup
      }
    }, [])
    // leaving [] blank as we wanna run this for first time only at time of display
  
  
    const [listTodos, setlistTodos] = useState([]);
    function getTodos(){
    // using onSnapshot for real time updates 
    db.collection("Todos").onSnapshot(function (querySnapshot){
      // mapping querySnapshots one by one into listTodos using map()
   setlistTodos(   querySnapshot.docs.map((doc)=>({
    id: doc.id,
    todo: doc.data().todo,
    inprogress: doc.data().is_in_progress,
    timestamp: doc.data().timestamp
  })));
    })
  }

  return (
    <div className="App">
    <h1>TODO's App 📝</h1>
   <form>
   <TextField id="standard-basic" 
    value={todoInput} 
    onChange={(input)=>setTodoInput(input.target.value)}
    label="What's your next goal ?" />
    <Button
     type="submit"
     variant="contained"
     onClick={addTodo}
     style={{display:"none"}}
     >Add</Button>
   </form> <h2>Things you need to do today 👇🏻</h2>
    </div>
  );
}

export default App;
 