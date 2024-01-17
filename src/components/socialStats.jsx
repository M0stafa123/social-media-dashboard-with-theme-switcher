const Social = ({ dark, theme }) => {
  let card;
  let text;
  let darktext;
  let hover;
  if (dark) {
    card = theme.Dark.card;
    text = theme.Dark.text;
    darktext = theme.Dark.darkText;
    hover = theme.Dark.cardHover;
  } else {
    card = theme.Light.card;
    text = theme.Light.text;
    darktext = theme.Light.darkText;
    hover = theme.Light.cardHover;
  }
  return (
    <article className=" w-[90%] mx-auto lg:justify-start xl:justify-between flex justify-between flex-wrap gap-5 my-4">
      <div className={`border-[#198ff5] ${card} hover:${hover} `}>
        <section className={darktext}>
          <img src="images/icon-facebook.svg" alt="@nathanf" />
          @nathanf
        </section>
        <h2 className={darktext}>1987</h2>
        <p className={text}>Followers</p>
        <span className="text-[#1db489]">
          <img src="images/icon-up.svg" alt="" />
          12 Today
        </span>
      </div>
      <div className={`border-[#1ca0f2] ${card} hover:${hover}`}>
        <section className={darktext}>
          <img src="images/icon-twitter.svg" alt="@nathanf" />
          @nathanf
        </section>
        <h2 className={darktext}>1044</h2>
        <p className={text}>Followers</p>
        <span className="text-[#1db489]">
          <img src="images/icon-up.svg" alt="" />
          99 Today
        </span>
      </div>
      <div className={`relative border-0 ${card} hover:${hover}`}>
        <span className=" absolute top-0 h-[4px] bg-insta w-full"></span>
        <section className={darktext}>
          <img src="images/icon-instagram.svg" alt="" />
          @realnathanf
        </section>
        <h2 className={darktext}>11k</h2>
        <p className={text}>Followers</p>
        <span className="text-[#1db489]">
          <img src="images/" alt="" />
          <img src="images/icon-up.svg" alt="" />
          1099 Today
        </span>
      </div>
      <div className={`border-[#c4032a] ${card} hover:${hover}`}>
        <section className={darktext}>
          <img src="images/icon-youtube.svg" alt="" />
          NathanF.
        </section>
        <h2 className={darktext}>8239</h2>
        <p className={text}>Subscribers</p>
        <span className="text-[#dc414c]">
          <img src="images/icon-down.svg" alt="" />
          144 Today
        </span>
      </div>
    </article>
  );
};

export default Social;
