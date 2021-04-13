
import './App.css';
import TextField from '@material-ui/core/TextField';
import {useState} from 'react';
import { Button } from '@material-ui/core';


function App() {
  const [todoInput, setTodoInput] = useState("");
  
  function addTodo(value){
    value.preventDefault();
  console.log("tdo");
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
     onClick={addTodo}>Add</Button>
   </form> <h2>Things you need to do today 👇🏻</h2>
    </div>
  );
}

export default App;
