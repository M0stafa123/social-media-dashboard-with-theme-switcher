/* eslint-disable jsx-a11y/anchor-is-valid */
import Overview from "./components/Overview";
import Header from "./components/Header";
import Social from "./components/socialStats";
import { useState } from "react";

function App() {
  const [dark, setDark] = useState(true);
  const theme = {
    Light: {
      card: "bg-[#f0f2fa]",
      bg: "bg-white",
      battern: "bg-[#f5f7ff]",
      text: "text-[#63687e]",
      darkText: "text-[#1e202a]",
      cardHover: "bg-[#f9f9f9]",
    },
    Dark: {
      card: "bg-[#252a41]",
      bg: "bg-[#1e202a]",
      battern: "bg-[#1f212e]",
      text: "text-[#8b97c6]",
      cardHover: "bg-[#31395d]",
      darkText: "text-white",
    },
  };
  let battern;
  let text;

  if (dark) {
    battern = theme.Dark.battern;
    text = theme.Dark.text;
  } else {
    battern = theme.Light.battern;
    text = theme.Light.text;
  }
  return (
    <div>
      <span className={battern + ` bg_back`}></span>
      <Header dark={dark} setDark={setDark} theme={theme} />
      <Social dark={dark} theme={theme} />
      <Overview dark={dark} theme={theme} />
      <div className={`w-[90%] text-center mx-auto ${text}`}>
        Challenge by
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
          rel="noreferrer"
        >
          Frontend Mentor
        </a>
        . Coded by <a href="#">Mostafa & Ahmed </a>.
      </div>
    </div>
  );
}

export default App;
