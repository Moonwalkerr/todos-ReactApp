
import './App.css';
import TextField from '@material-ui/core/TextField';
import {useState} from 'react';
function App() {
 
const [state,setState] = useState(initialState);
  return (
    <div className="App">
    <h1>TODO's App 📝</h1>
    <TextField id="standard-basic" label="What's your next goal ?" />
    <h2>Things you need to do today 👇🏻</h2>
    </div>
  );
}

export default App;
