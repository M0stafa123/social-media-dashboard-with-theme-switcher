const Header = () => {
  return (
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
        </label>
      </section>
    </header>
  );
};

export default Header;
