import { useState } from "react";
import "./App.css";
import UserInput from "./components/Users/UserInput";
import UserOutput from "./components/Users/UserOutput";

function App() {
  const [input, setInput] = useState([]);

  const inputChangeHandler = (uName, uAge) => {
    setInput((prev) => {
      return [
        ...prev,
        { name: uName, age: uAge, id: Math.random().toString() },
      ];
    });
  };

  return (
    <div className="App">
      <UserInput inputChangeHandler={inputChangeHandler} />
      <UserOutput users={input} />
    </div>
  );
}

export default App;
