import { useState, useEffect } from "react";
import data from "../API/data.json";

const technology = () => {
  const [index, setIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const handleOnChange = (e) => setIndex(parseInt(e.target.value));

  useEffect(() => {
    const handleWindowSizeChange = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  let imageUrl;
  windowWidth < 1024
    ? (imageUrl = data.technology[index].images.landscape)
    : (imageUrl = data.technology[index].images.portrait);

  return (
    <div className="relative w-full pt-10 h-screen bg-cover bg-center bg-[url('../src/assets/technology/background-technology-mobile.jpg')] sm:bg-[url('../src/assets/technology/background-technology-tablet.jpg')] lg:bg-[url('../src/assets/technology/background-technology-desktop.jpg')]">
      <div className="absolute top-24 left-24  uppercase text-white text-center text-base tracking-widest md:text-start md:pl-9 lg:text-3xl">
        <span className="text-gray-500 mr-4 font-extrabold opacity-70">03</span>
        Space Lauch 101
      </div>

      <div className="p-20 lg:flex lg:flex-row-reverse lg:items-center lg:gap-x-[10%]">
        <div
          className="mt-[20%] mb-[10%] sm:mb-[5%] lg:mb-0 lg:mt-[5%] 
           animate-[fadeEntrance_1s_ease-in_forwards]"
        >
          <img
            src={imageUrl}
            alt={data.technology[index].name}
            className="sm:m-auto lg:w-[40vw]"
          />
        </div>

        <div
          className="text-center text-main-white 
          lg:flex lg:items-end lg:gap-x-[8%] lg:mt-[5%] lg:ml-[10%]
          animate-[fadeEntrance_1s_ease-in_forwards]"
        >
          <form
            onChange={handleOnChange}
            className="flex items-center justify-center gap-x-4 mb-8 sm:mb-10 lg:flex-col lg:gap-y-12 lg:mb-0"
          >
            {data.technology.map((element, i) => (
              <label
                key={i}
                className={`text-lg border-[1px] border-white-opacity w-9 h-9 
                  flex items-center justify-center rounded-full cursor-pointer font-bellefair mr-4
                  hover:border-main-white ${
                    i === index ? "bg-white text-black" : "text-white"
                  }
                  lg:w-16 lg:h-16 lg:text-2xl`}
              >
                <span>{i + 1}</span>
                <input type="radio" name="radio" value={i} className="hidden" />
              </label>
            ))}
          </form>

          <div className="text-white tracking-wider lg:text-left">
            <h4 className="text-sm lg:text-xl font-[barlow]">
              THE TERMINOLOGY…
            </h4>
            <h2
              className="uppercase text-3xl font-bellefair mb-6 lg:text-[54px]
             lg:max-w-full lg:mt-3 whitespace-nowrap "
            >
              {data.technology[index].name}
            </h2>
            <p className="m-auto text-[#D0D6F9] text-base max-w-[340px] opacity-70 sm:max-w-[400px] lg:m-0 lg:text-xl lg:max-w-[480px] font-[barlow]">
              {data.technology[index].description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default technology;
