const Social = () => {
  return (
    <article className=" flex flex-wrap gap-4 my-4 px-2">
      <div className=" border-[#198ff5]">
        <section>
          <img src="images/icon-facebook.svg" alt="@nathanf" />
          @nathanf
        </section>
        <h2>1987</h2>
        <p>Followers</p>
        <span className="text-[#1db489]">
          <img src="images/icon-up.svg" alt="" />
          12 Today
        </span>
      </div>
      <div className=" border-[#1ca0f2]">
        <section>
          <img src="images/icon-twitter.svg" alt="@nathanf" />
          @nathanf
        </section>
        <h2>1044</h2>
        <p>Followers</p>
        <span className="text-[#1db489]">
          <img src="images/icon-up.svg" alt="" />
          99 Today
        </span>
      </div>
      <div className="relative border-0">
        <span className=" absolute top-0 h-[4px] bg-insta w-full"></span>
        <section>
          <img src="images/icon-instagram.svg" alt="" />
          @realnathanf
        </section>
        <h2>11k</h2>
        <p>Followers</p>
        <span className="text-[#1db489]">
          <img src="images/" alt="" />
          <img src="images/icon-up.svg" alt="" />
          1099 Today
        </span>
      </div>
      <div className=" border-[#c4032a]">
        <section>
          <img src="images/icon-youtube.svg" alt="" />
          NathanF.
        </section>
        <h2>8239</h2>
        <p>Subscribers</p>
        <span className="text-[#dc414c]">
          <img src="images/icon-down.svg" alt="" />
          144 Today
        </span>
      </div>
    </article>
  );
};

export default Social;
