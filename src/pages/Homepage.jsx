import React from "react";

const Homepage = () => {
  return (
    <>
      <div className="fixed min-h-screen w-full p-8 bg-[url(../src/assets/home/background-home-mobile.jpg)] lg:bg-[url(../src/assets/home/background-home-desktop.jpg)] bg-cover bg-center h-screen">
        <div className="flex flex-col lg:flex-row lg:justify-around lg:items-center ">
          <div className="my-10 lg:mt-36 lg:w-[30%]">
            <p className="text-[#D0D6F9] text-center lg:text-left my-10 tracking-widest text-lg">
              SO, YOU WANT TO TRAVEL TO
            </p>
            <h1 className="text-white text-8xl my-10 text-center lg:text-left">
              SPACE
            </h1>
            <p className="text-[#D0D6F9] my-10 text-xl text-center lg:text-left tracking-wide leading-relaxed">
              Let’s face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well, sit back and relax because we’ll give you a truly
              out-of-this-world experience!
            </p>
          </div>
          <div className="my-20">
            <div className="flex justify-center">
              <div className="w-40 h-40 text-2xl rounded-full bg-white flex items-center justify-center">
                EXPLORE
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;
