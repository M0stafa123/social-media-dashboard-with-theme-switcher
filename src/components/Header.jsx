const Header = () => {
  return (
    <header className="py-4 mt-5 w-[90%] mx-auto text-white font-bold md:flex md:justify-between md:items-center">
      <div>
        <h1 className="text-2xl">Social Media Dashboard</h1>
        <p className="text-sm text-[#8b97c6]">Total Followers: 23,004</p>
      </div>
      <hr className="my-4 border-[#8b97c6] md:hidden" />
      <section className="flex text-sm justify-between md:justify-center gap-2 text-[#8b97c6]">
        Dark Mode{" "}
        <label
          className="bg-toggle toggle  w-12 rounded-full cursor-pointer flex items-center relative"
          htmlFor="toggle"
        >
          <input className=" hidden" id="toggle" type="checkbox" />
          <span className="bg-VeryDark_bg transition-all absolute rounded-full w-4 h-4 left-[6%]"></span>
        </label>
      </section>
    </header>
  );
};

export default Header;
