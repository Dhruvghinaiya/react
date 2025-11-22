import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Hello } from "./Hello";
import FunctionEvent from "./FunctionEvent";
import ArrayObject from "./ArrayObject";
import Props from "./Props";
import Button from "./Button";
function App() {
  return (
    <>
      {/* <Hello />
      <FunctionEvent />
      <ArrayObject /> */}
      <Props name="dhruv" age={25} subject={["react", "java", "php"]} />
      <Button label={"Click Me"} handleClick={() => alert("you click !")} />
    </>
  );
}

export default App;
