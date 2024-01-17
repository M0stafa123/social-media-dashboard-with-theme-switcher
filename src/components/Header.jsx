const Header = ({ mode, setMode, bg }) => {
  return (
<<<<<<< Updated upstream
    <header className="p-4">
      <div>
        <h1 className="text-2xl font-bold">Social Media Dashboard</h1>
        <p>Total Followers: 23,004</p>
      </div>
      <hr className="my-4" />
      <section className="flex justify-between">
        Dark Mode{" "}
        <label
          className="bg-toggle toggle border w-12 rounded-full cursor-pointer flex items-center relative"
          htmlFor="toggle"
        >
          <input className=" hidden" id="toggle" type="checkbox" />
          <span className="bg-VeryDark_bg transition-all absolute rounded-full w-4 h-4 left-[6%]"></span>
=======
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
>>>>>>> Stashed changes
        </label>
      </section>
    </header>
  );
};

export default Header;
