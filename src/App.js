import { useState } from "react";
import "./App.css";
import UserInput from "./components/Users/UserInput";
import UserOutput from "./components/Users/UserOutput";

function App() {
  const [input, setInput] = useState(null);
  const enterdData = [];
  return (
    <div className="App">
      <UserInput />
      <UserOutput />
    </div>
  );
}

export default App;
