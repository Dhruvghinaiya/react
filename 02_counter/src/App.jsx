import "./App.css";
import { useState } from "react";
function App() {
  const [counter, setCounter] = useState(0);

  const addValue = () => {
    setCounter(counter + 1);
  };

  const removeValue = () => {
    if (counter > 0) setCounter(counter - 1);
  };
  return (
    <>
      <h2>Hello React</h2>
      <h3>Counter:{counter}</h3>
      <button onClick={addValue}>Add Value</button>&nbsp; &nbsp;
      <button onClick={removeValue}>Remove Value</button>
    </>
  );
}

export default App;
