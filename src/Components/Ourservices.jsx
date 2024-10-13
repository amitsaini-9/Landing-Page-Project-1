const Ourservices = () => {
  const ourserviceCard = [
    {
      img: "icon.svg",
      title: "Private Security",
      desc: "Personalized protection for individuals",
    },
    {
      img: "icon1.svg",
      title: "Event security guards",
      desc: "Professional security for your events",
    },
    {
      img: "icon2.svg",
      title: "Commercial /Retail security",
      desc: "Securing businesses and retail spaces",
    },
    {
      img: "icon3.svg",
      title: "Residential/ Multifamily Security ",
      desc: "Protecting homes and residential complexes",
    },
    {
      img: "icon4.svg",
      title: "Firewatch security",
      desc: "Preventing and monitoring fire hazards",
    },
    {
      img: "icon5.svg",
      title: "Parking lot security ",
      desc: "Ensuring safety in parking areas.",
    },
    {
      img: "icon6.svg",
      title: "Armed & Unarmed security",
      desc: "Flexible security options to suit needs",
    },
    {
      img: "icon7.svg",
      title: "Mobile patrol security",
      desc: "Regular patrols for enhanced security",
    },
    {
      img: "icon8.svg",
      title: "Construction site security",
      desc: "Safeguarding your construction sites",
    },
  ];
  return (
    <>
      <div
        className="mx-10 mt-1 sm:mt-10 w-[650px] sm:w-full  absolute top-[800px] sm:top-[736px]
      flex flex-col items-center flex-wrap justify-center gap-5"
      >
        <h1 className="text-6xl font-bold">Ourservices</h1>
        <span className="text-lg text-[#545971] m-auto">
          At Allied Control , we provide reliable, tailored
        </span>
        <span className="text-lg text-[#545971] m-auto">
          security services to keep you safe.
        </span>
      </div>
      <div className="absolute top-[1000px] mx-7 sm:mx-14 h-auto w-auto flex flex-wrap  justify-center">
        {ourserviceCard.map((item, index) => (
          <div
            key={index}
            className="flex flex-col gap-5 justify-center flex-wrap items-center w-[360px] "
          >
            <img src={item.img} alt="icon" className="w-16 h-16" />
            <div className="p-[5%] text-center flex flex-col items-center">
              <h1 className=" flex w-60 h-16 text-2xl font-bold justify-center text-[#171921]">
                {item.title}
              </h1>
              <p className="flex justify-center items-start w-full h-14 font-normal text-center text-[#545971]">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
export default Ourservices;
