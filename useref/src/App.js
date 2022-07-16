import './App.css';
import React,{useRef} from 'react';

function App() {

const inputRef = useRef(null)

function handleInput(){
    console.warn("function call")
      inputRef.current.value = "100"
       inputRef.current.focus();
        inputRef.current.style.display = "none"
  
}
return (

    <div className="App">
        <h1>useRef In React</h1>
        <input type = "text" ref = {inputRef}/>
        <button onClick={handleInput}>Handle Input</button>
    </div>
  );
}

export default App;
