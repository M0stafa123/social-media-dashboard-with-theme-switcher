const Header = ({ setDark, dark, theme }) => {
  const handleClick = () => {
    setDark(!dark);
  };
  let text;
  let darktext;
  let bg;
  if (dark) {
    bg = theme.Dark.bg;
    text = theme.Dark.text;
    darktext = theme.Dark.text;
  } else {
    bg = theme.Light.bg;
    text = theme.Light.text;
    darktext = theme.Light.darkText;
  }
  return (
    <header className={darktext}>
      <div>
        <h1 className="text-2xl transition-none">Social Media Dashboard</h1>
        <p className={text}>Total Followers: 23,004</p>
      </div>
      <hr className="border-[#8b97c6]" />
      <section className={text}>
        Dark Mode{" "}
        <label
          className="bg-toggle toggle  w-12 rounded-full cursor-pointer flex items-center relative"
          htmlFor="toggle"
        >
          <input
            onChange={handleClick}
            className="hidden"
            id="toggle"
            type="checkbox"
          />
          <span className={bg}></span>
        </label>
      </section>
    </header>
  );
};

export default Header;
