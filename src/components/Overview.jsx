const Overview = () => {
  const data = [
    { name: "Page Views", number: 87, rate: `3%`, svg: "images/icon-facebook.svg", color: `green` },
    { name: "Likes", number: `52`, rate: `2%`, svg: "images/icon-facebook.svg", color: `red` },
    {
      name: "Likes",
      number: 5462,
      rate: `2257%`,
      svg: "images/icon-instagram.svg",
      color: `green`,
    },
    {
      name: "Profile Views",
      number: `52k`,
      rate: `1375%`,
      svg: "images/icon-instagram.svg",
      color: `green`,
    },
    { name: "Retweets", number: 117, rate: `303%`, svg: "images/icon-twitter.svg", color: `green` },
    { name: "Likes", number: 507, rate: ` 553%`, svg: "images/icon-twitter.svg", color: `green` },
    {
      name: "Likes",
      number: 107,
      rate: `19%`,
      svg: "images/icon-youtube.svg",
      color: `red`,
    },
    {
      name: "Total Views",
      number: 1407,
      rate: `12%`,
      svg: "images/icon-youtube.svg",
      color: `red`,
    },
  ];
  return (
    <div className="w-[90%]  mx-auto">
      <h1 className=" text-3xl mb-5 font-bold text-white ">Overview - Today</h1>
      <div className="parent-card">
        {data.map((item, index) => (
          <div className="cards" key={index}>
            <div className="flex justify-between items-center">
              <p className=" font-semibold text-[#8b97c6]">{item.name}</p>
              <img className="" src={item.svg} alt="" />
            </div>
            <div className="flex justify-between">
              <p className="font-bold text-3xl text-white">{item.number}</p>
              {item.color === `red` ? (
                <div className="text-[red] rate">
                  <img src="images/icon-down.svg" alt="" />
                  <p>{item.rate}</p>
                </div>
              ) : (
                <div className="text-[green] rate ">
                  <img src="images/icon-up.svg" alt="" />
                  <p> {item.rate}</p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Overview;
