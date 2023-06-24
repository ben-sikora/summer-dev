import { useState } from "react";
import Nav from "./components/Nav";
import Dropbox from "./components/dropbox";
import Title from "./components/Title";
import Logo from "./components/Logo";
import Login from "./components/Login"
import WhiteGrad from "./components/WhiteGrad"
import SunGrad from "./components/SunGrad"
import logo from "./assets/Vector.png";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="w-[100%] h-[100vh] bg-purple grid grid-cols-1 grid-rows-1 overflow-clip">
      <div className="row-start-1 row-end-2 col-start-1 col-end-2 z-20 w-[100%]">
        <div className="w-[100%] h-[150vh] flex flex-row">
          {/* <Logo />*/}
          <div className="flex-grow flex flex-col items-center">
            <Title />
            <Dropbox />
          </div>
          {/* <Login /> */}
        </div>
      </div>
      <WhiteGrad />
      <SunGrad />
    </div>
  );
}

export default App;
