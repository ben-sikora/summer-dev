import { useState } from "react";
import Nav from "./components/Nav";
import Dropbox from "./components/dropbox";
import logo from "./assets/Vector.png";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="w-[100%] h-[150vh] bg-purple grid grid-cols-1 grid-rows-1 overflow-clip">
      <div className="row-start-1 row-end-2 col-start-1 col-end-2 z-20">
        <div className="w-[100%] h-[150vh] flex flex-row">
          <img src={logo} className="max-w-[8vh] max-h-[8vh] ml-3 mr-3 mt-3" />
          <div className="flex-grow self-center">
            <h1 className="font-title font-bold text-[64px] text-grey">
              Welcome to Summer
            </h1>
            <h2 className="font-title font-bold text-[40px] mt-[-20px] text-grey">
              Summarize your documents...
            </h2>
          </div>
          <div className="box-border">
            <button className="bg-orange text-grey h-[50px] w-[160px] rounded-xl text-[32px] mr-6">
              {" "}
              Login
            </button>
          </div>
        </div>
      </div>
      <div className="row-start-1 row-end-2 col-start-1 col-end-2 w-[100%] h-[150vh] bg-gradient-radial from-[#C5C5C5] opacity-25 z-0">
        {" "}
      </div>
      <div className="row-start-1 row-end-2 col-start-1 col-end-2 z-10 w-[80%] h-[800px] mx-auto bg-gradient-radial from-orange to-transparent to-70% mt-[110vh]">
        {" "}
      </div>
    </div>
  );
}

export default App;
