import Header from "./components/Header";
import Overview from "./components/Overview";
import Social from "./components/socialStats";
import { useEffect, useRef, useState } from "react";
function App() {
  const [mode, setMode] = useState(true)
  const bg = useRef(null)
  return (
    <div>
      <span className="bg_back bg-[#1f212e]" ref={bg}></span>
      <Header mode={mode} bg={bg} setMode={setMode} />
      <Social mode={mode} />
      <Overview mode={mode} />
      <div class={"w-[90%] text-center  mx-auto " + (mode ? "text-[#8b97c6]" : "text-[#63687e]")}>
        Challenge by
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
        Coded by <a href="#">Mostafa & Ahmed </a>.
      </div>
    </div>
  );
}

export default App;
