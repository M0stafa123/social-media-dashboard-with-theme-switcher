const Header = ({ mode, setMode, bg }) => {
  return (
    <header className="py-4 mt-5 w-[90%] mx-auto  font-bold md:flex md:justify-between md:items-center">
      <div>
        <h1 className={mode ? "text-2xl text-white" : "text-2xl text-black"}>
          Social Media Dashboard
        </h1>
        <p className={"text-sm " + (mode ? "text-[#8b97c6]" : "text-[#63687e]")}>
          Total Followers: 23,004
        </p>
      </div>
      <hr className="my-4 border-[#8b97c6] md:hidden" />
      <section
        className={
          "flex text-sm justify-between md:justify-center gap-2 " +
          (mode ? "text-[#8b97c6]" : "text-[#63687e]")
        }
      >
        Dark Mode{" "}
        <label className={mode ? "coreBB" : "coreWW"} htmlFor="toggle">
          <input
            onClick={() => {
              document.body.classList.toggle("bg-[#1e202a]");
              document.body.classList.toggle("bg-white");
              bg.current.classList.toggle("bg-[#1f212e]");
              bg.current.classList.toggle("!bg-[#f5f7ff]");
              setMode(!mode);
            }}
            className=" hidden"
            id="toggle"
            type="checkbox"
          />
          <span className={mode ? "coreW" : "coreB"}></span>
        </label>
      </section>
    </header>
  );
};

export default Header;
