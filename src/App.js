import { useState } from "react";
import "./App.css";
import List from "./List";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [inputText, setInput] = useState("");
  const [todoList, setTodoList] = useState([]);

  const handleInput = () => {
    const newItem = {
      id: uuidv4(),
      data: inputText,
      success: false,
    };
    setTodoList([...todoList, newItem]);
    setInput("");
  };

  return (
    <>
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
      <List onInput={todoList}/>
    </>
  );
}

export default App;
