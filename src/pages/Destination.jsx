import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import data from "../API/data.json";
import GalaxyBackground from "../pages/Galaxy";

const initialState = 0;

const Destination = () => {
  const [index, setIndex] = useState(initialState);

  const handleOnChange = (e) => setIndex(parseInt(e.target.value));

  const { destinations } = data;
  const { name, description, distance, travel, images } = destinations[index];

  return (
    <>
      <div
        className="fixed min-h-screen h-screen w-full bg-cover bg-center 
        bg-[url(../src/assets/destination/background-destination-mobile.jpg)] sm:bg-[url(../src/assets/destination/background-destination-tablet.jpg)] lg:bg-[url(../src/assets/destination/background-destination-desktop.jpg)]
        "
      >
        <GalaxyBackground render={true} />

        <div className="flex align-middle mb-[-20%] mt-[20%] sm:mb-[-12%] sm:justify-start sm:ml-8 lg:mt-[12%] lg:ml-[9%] justify-center font-[bellefair]">
          <span className="text-white inline-block uppercase opacity-25 mr-4 text-base sm:text-xl lg:text-3xl ">
            01
          </span>
          <h1 className="text-white uppercase text-base sm:text-xl lg:text-3xl ">
            pick your destination
          </h1>
        </div>
        <div className="lg:flex lg:items-center lg:justify-center">
          <motion.img
            whileInView={{ rotate: [0, 360] }}
            transition={{ ease: "linear", duration: 10, repeat: Infinity }}
            src={images.png}
            alt={`${name} image`}
            className="w-36 m-auto mt-[30%] sm:mt-[20%] sm:w-48 
                  lg:w-96 lg:ml-[12%] lg:mt-[15%] animate-[fadeEntrance_1s_ease-in_forwards]"
          />
          <motion.div
            whileInView={{ y: [100, 0], opacity: [0, 1] }}
            transition={{ duration: 0.8 }}
            className="m-auto mt-[8%] lg:mt-[15%] animate-[fadeEntrance_1s_ease-in_forwards]"
          >
            <form
              className="flex items-center justify-center gap-x-8 lg:justify-start lg:gap-x-16"
              onChange={handleOnChange}
            >
              {destinations.map((element, i) => (
                <label
                  key={element.name}
                  htmlFor={element.name}
                  className={`${
                    i === index
                      ? "border-b-2 border-main-white hover:border-main-white"
                      : ""
                  }
                         hover:border-b-2 hover:border-white-opacity pb-4 
                         transition-all duration-500 cursor-pointer`}
                >
                  <input
                    type="radio"
                    className="hidden"
                    name="radio"
                    value={i}
                    id={element.name}
                  />
                  <span className="font-[barlow] w-8 lg:w-12 text-white uppercase leading-3">
                    {element.name}
                  </span>
                </label>
              ))}
            </form>
            <AnimatePresence initial={false}>
              <motion.div
                key={name}
                variants={tabAnimation}
                initial="hidden"
                animate={name === name ? "show" : "hidden"}
                exit="hidden"
                className="planet-facts"
              >
                <h2
                  className="text-center font-bellefair text-white uppercase 
                text-6xl mt-[5%] lg:text-9xl lg:text-left font-[bellefair]"
                >
                  {name}
                </h2>
                <p
                  className="font-barlow text-[#D0D6F9] opacity-70 text-center mx-auto
                py-4 px-10 mb-4 tracking-wide sm:max-w-xl lg:text-left lg:px-0 lg:max-w-lg font-[barlow]"
                >
                  {description}
                </p>
                <div
                  className="uppercase text-center text-[#D0D6F9] text-3xl font-bellefair mx-auto
                  border-t-[1px] border-white-opacity pt-8 max-w-[280px] 
                  sm:max-w-xl sm:flex sm:justify-evenly lg:justify-start lg:gap-x-16"
                >
                  <article className="py-4 font-[bellefair]">
                    {distance}
                  </article>
                  <article className="py-4 font-[bellefair]">{travel}</article>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </>
  );
};

const tabAnimation = {
  hidden: {
    y: 200,
    opacity: 0
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeInOut"
    }
  }
};

export default Destination;
