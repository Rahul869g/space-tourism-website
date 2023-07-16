import React from "react";
import { motion } from "framer-motion";

const Homepage = () => {
  return (
    <>
      <div className="fixed min-h-screen w-full p-8 bg-[url(../src/assets/home/background-home-mobile.jpg)] lg:bg-[url(../src/assets/home/background-home-desktop.jpg)] bg-cover bg-center h-screen">
        <div className="flex flex-col lg:flex-row lg:justify-around lg:items-center ">
          <motion.div
            whileInView={{ y: [100, 0], opacity: [0, 1] }}
            transition={{ duration: 0.8, ease: "easeIn" }}
            className="my-10 lg:mt-36 lg:w-[30%]"
          >
            <p className="text-[#D0D6F9] text-center lg:text-left my-10 tracking-widest text-lg font-[barlow]">
              SO, YOU WANT TO TRAVEL TO
            </p>
            <h1 className="text-white text-8xl my-10 text-center lg:text-left font-[bellefair]">
              SPACE
            </h1>
            <p className="text-[#D0D6F9] my-10 text-xl text-center font-[barlow] lg:text-left tracking-wide leading-relaxed">
              Let’s face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well, sit back and relax because we’ll give you a truly
              out-of-this-world experience!
            </p>
          </motion.div>
          <div className="my-0 sm:my-5 lg:20 hover:scale-110 transition-all">
            <div className="flex justify-center transition-all">
              <motion.div
                whileInView={{ rotate: [180, 0], scale: [0, 1] }}
                whileHover={{
                  boxShadow: "0 0 80px #DAFFFB"
                }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 20
                }}
                className="w-52 h-52 text-3xl rounded-full transition-all bg-white flex items-center justify-center cursor-pointer font-[bellefair]"
              >
                EXPLORE
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;
