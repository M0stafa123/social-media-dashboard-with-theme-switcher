import Overview from "./components/Overview";
import Header from "./components/Header";
import Social from "./components/socialStats";
function App() {
  return (
    <div>
      <span className="bg_back"></span>
      <Header />
      <Social />
      <Overview />
      <div class="w-[90%] text-center  text-white mx-auto">
        Challenge by
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
        Coded by <a href="#">Mostafa & Ahmed </a>.
      </div>
    </div>
  );
}

export default App;
