import { useState } from "react";
function App() {
  const [color, setColor] = useState("green");
  return (
    <>
      <div className={`w-full h-screen bg-${color}-600`}>
        <div className="inset-x-0    fixed bottom-10 flex justify-center   p-2 rounded-xl space-x-5">
          <div className="flex space-x-6 bg-white shadow-lg px-4 py-2 rounded-xl ">
            <button onClick={()=> setColor('blue')} className="bg-blue-600 py-2 px-4 rounded-xl text-sm ">
              Blue
            </button>
            <button onClick={()=> setColor('red')} className="bg-red-600 py-2 px-4 rounded-xl text-sm">
              Red
            </button>
            <button onClick={() => setColor('pink')} className="bg-pink-600 py-2 px-4 rounded-xl text-sm">
              Pink
            </button>
            <button onClick={()=> setColor('orange')} className="bg-orange-600 py-2 px-4 rounded-xl text-sm">
              Orange
            </button>
            <button onClick={()=>setColor('gray')} className="bg-gray-600 py-2 px-4 rounded-xl ">Gray</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
