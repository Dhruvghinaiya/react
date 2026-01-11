import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./Card";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="flex  flex-col space-y-6">
        <h2 className="text-blue-600 bg-gray-400 inline p-2  rounded-lg">
          hello Dhruv
        </h2>
        <div className="flex gap-6 ">
          <Card
            title={"hello "}
            desciption={"Lorem ipsum dolor sit."}
            view={224}
          />
          <Card
            title={"girnar "}
            view={896}
            desciption={
              "Lorem ipsum dolor sit, amet consectetur adipisicing elit"
            }
          />
          <Card
            title={"vadodara "}
            view={578}
            desciption={
              "Lorem ipsum dolor sit, amet consectetur adipisicing elit"
            }
          />
          <Card
            title={"amreli"}
            view={204}
            desciption={
              "Lorem ipsum dolor sit, amet consectetur adipisicing elit"
            }
          />
        </div>
      </div>
    </>
  );
}

export default App;
