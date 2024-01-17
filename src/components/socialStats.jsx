const Social = ({ mode }) => {
  return (
    <article className=" w-[90%] mx-auto lg:justify-start xl:justify-between flex justify-between flex-wrap gap-5 my-4 ">
      <div
        className={
          " border-[#198ff5] " +
          (mode ? "bg-[#252a41] hover:bg-[#1f212e]" : "bg-[#f0f2fa] hover:bg-[#e1e3f0]")
        }
      >
        <section className={mode ? "text-[#8b97c6]" : "text-[#63687e]"}>
          <img src="images/icon-facebook.svg" alt="@nathanf" />
          @nathanf
        </section>
        <h2 className={mode ? "text-white" : "text-black"}>1987</h2>
        <p className={mode ? "text-[#8b97c6]" : "text-[#63687e]"}>Followers</p>
        <span className="text-[#1db489]">
          <img src="images/icon-up.svg" alt="" />
          12 Today
        </span>
      </div>
      <div
        className={
          " border-[#1ca0f2] " +
          (mode ? "bg-[#252a41] hover:bg-[#1f212e]" : "bg-[#f0f2fa] hover:bg-[#e1e3f0]")
        }
      >
        <section className={mode ? "text-[#8b97c6]" : "text-[#63687e]"}>
          <img src="images/icon-twitter.svg" alt="@nathanf" />
          @nathanf
        </section>
        <h2 className={mode ? "text-white" : "text-black"}>1044</h2>
        <p className={mode ? "text-[#8b97c6]" : "text-[#63687e]"}>Followers</p>
        <span className="text-[#1db489]">
          <img src="images/icon-up.svg" alt="" />
          99 Today
        </span>
      </div>
      <div
        className={
          "relative border-0 " +
          (mode ? "bg-[#252a41] hover:bg-[#1f212e]" : "bg-[#f0f2fa] hover:bg-[#e1e3f0]")
        }
      >
        <span className=" absolute top-0 h-[4px] bg-insta w-full"></span>
        <section className={mode ? "text-[#8b97c6]" : "text-[#63687e]"}>
          <img src="images/icon-instagram.svg" alt="" />
          @realnathanf
        </section>
        <h2 className={mode ? "text-white" : "text-black"}>11k</h2>
        <p className={mode ? "text-[#8b97c6]" : "text-[#63687e]"}>Followers</p>
        <span className="text-[#1db489]">
          <img src="images/" alt="" />
          <img src="images/icon-up.svg" alt="" />
          1099 Today
        </span>
      </div>
      <div
        className={
          " border-[#c4032a] " +
          (mode ? "bg-[#252a41] hover:bg-[#1f212e]" : "bg-[#f0f2fa] hover:bg-[#e1e3f0]")
        }
      >
        <section className={mode ? "text-[#8b97c6]" : "text-[#63687e]"}>
          <img src="images/icon-youtube.svg" alt="" />
          NathanF.
        </section>
        <h2 className={mode ? "text-white" : "text-black"}>8239</h2>
        <p className={mode ? "text-[#8b97c6]" : "text-[#63687e]"}>Subscribers</p>
        <span className="text-[#dc414c]">
          <img src="images/icon-down.svg" alt="" />
          144 Today
        </span>
      </div>
    </article>
  );
};

export default Social;
