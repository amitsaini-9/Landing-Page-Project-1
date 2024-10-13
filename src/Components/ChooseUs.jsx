const ChooseUs = () => {
  const Chooseuscard = [
    {
      img: "CIcon.svg",
      title: "Expertise in Security",
      desc: "Scelerisque pulvinar morbi felis odio ut mauris diam sit.",
    },
    {
      img: "CIcon-1.svg",
      title: "Highly Trained Team",
      desc: "Scelerisque pulvinar morbi felis odio ut mauris diam sit.",
    },
    {
      img: "CIcon-2.svg",
      title: "Proven Track Record",
      desc: "Scelerisque pulvinar morbi felis odio ut mauris diam sit.",
    },
    {
      img: "CIcon-3.svg",
      title: "Security Guaranteed",
      desc: "Scelerisque pulvinar morbi felis odio ut mauris diam sit.",
    },
    {
      img: "CIcon-4.svg",
      title: "Modern Equipments",
      desc: "Scelerisque pulvinar morbi felis odio ut mauris diam sit.",
    },
    {
      img: "CIcon-5.svg",
      title: "Years of Experience",
      desc: "Scelerisque pulvinar morbi felis odio ut mauris diam sit.",
    },
  ];
  return (
    <div className="absolute w-full h-[504px] top-[2500px]">
      <center>
        <h1 className="h-[60px] w-[634px] font-bold text-[48px] leading-[60px] text-center my-[40px]">
          Why Choose Us?
        </h1>
      </center>
      <div className="w-[1140px] h-[246px] gap-[64px]  mx-[140px] flex justify-between flex-wrap  ">
        {Chooseuscard.map((item) => (
          <div
            key={item.title}
            className="w-[326px] h-[96px] flex justify-between "
          >
            <div>
              <img src={item.img} alt="icon" />
            </div>
            <div className="w-[246px] h-[96px] flex flex-col justify-between ">
              <h1 className="w-full h-[28px] font-semibold text-[20px] leading-[28px] text-[#0F0F0F]">
                {item.title}
              </h1>
              <p className="w-full h-[52px] leading-[25.6px] text-[#7B7B7B] ">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default ChooseUs;
