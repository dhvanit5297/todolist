import {useState } from "react";
import "./App.css";
import List from "./List";
import { v4 as uuidv4 } from "uuid";
import {toast } from 'react-toastify';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [inputText, setInput] = useState("");
  const [todoList, setTodoList] = useState([]);
  



  const handleInput = () => {

    if(inputText.length===0){
      toast.error('Input cannot be empty', {
        position: "top-right",toastId:"error1",autoClose:2500
        });
        return;
    }

    const newItem = {
      id: uuidv4(),
      data: inputText,
      success: false,
    };
    setTodoList([...todoList, newItem]);
    setInput("");
  };

  const newUpdate = (data) => {
    setTodoList(data);
  };
  
  return (
    <>
    <ToastContainer />
      <div className="App">
        <h1>To-Do-List</h1>
        <input
          type="text"
          value={inputText}
          placeholder="Enter text here..."
          onChange={(e) => {
            setInput(e.target.value);
          }}
          required
        />
        <button onClick={handleInput}>Add</button>
      </div>
      <List onInput={todoList} onupdate={newUpdate} />
    </>
  );
}

export default App;
