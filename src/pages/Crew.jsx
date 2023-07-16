import React, { useState } from "react";
import data from "../API/data.json";

const initialState = 0;

const Crew = () => {
  const [index, setIndex] = useState(initialState);

  const handleOnChange = (e) => setIndex(parseInt(e.target.value));

  // Destructure the required properties from the data.crew[index] object
  const { role, name, bio, images } = data.crew[index];

  return (
    <div className="fixed text-black min-h-screen p-16 bg-cover bg-center h-screen w-full bg-crew-xs sm:bg-crew-sm lg:bg-crew-md sm:pt-[6%]  ">
      <div className=" flex align-middle uppercase  text-center  py-16 text-sm tracking-widest sm:pt-30 sm:pb-0 md:text-start md:pl-9 lg:text-3xl sm:justify-start justify-center sm:ml-8 font-[barlow]">
        <span className="text-white inline-block uppercase opacity-25 mr-4 text-base sm:text-xl lg:text-3xl">
          02
        </span>
        <h1 className="text-white uppercase text-base sm:text-xl lg:text-3xl">
          Meet Your Crew
        </h1>
      </div>

      <div
        className="
        sm:flex sm:flex-col-reverse sm:justify-start sm:mt-10  
        lg:flex-row-reverse lg:items-end animate-[fadeEntrance_1s_ease-in_forwards]"
      >
        <img
          className="h-60 mx-auto sm:h-[60%] sm:w-[30%] lg:h-4/5 "
          src={images.png}
          alt={name}
        />
        <hr className="w-[80%] mx-auto opacity-70 sm:hidden" />

        <div
          className="sm:flex sm:flex-col-reverse sm:justify-start sm:items-center
                lg:items-start lg:mb-[12%] lg:ml-[5%] animate-[fadeEntrance_1s_ease-in_forwards]"
        >
          <form
            className="flex items-center justify-center gap-x-6 mb-8 sm:mb-2 "
            onChange={handleOnChange}
          >
            {data.crew.map((element, i) => (
              <label
                key={i}
                className={`bg-[#E5E7DC] w-3 h-3 rounded-full cursor-pointer hover:opacity-50 ${
                  i !== index ? "opacity-30" : ""
                }
                transition-all duration-500 mt-8 sm:mt-0`}
              >
                <input
                  type="radio"
                  name="radio"
                  value={i}
                  className="hidden "
                />
              </label>
            ))}
          </form>

          <div
            className="text-center text-white sm:mb-12 sm:max-w-[480px]
                  lg:text-left lg:max-w-[660px]"
          >
            <h3 className="uppercase font-bellefair opacity-40 text-lg mb-2 lg:text-4xl font-[bellefair]">
              {role}
            </h3>
            <h2 className="uppercase font-bellefair text-2xl mb-4 lg:text-6xl lg:mb-8 font-[bellefair]">
              {name}
            </h2>
            <p
              className="opacity-60 font-barlow text-lg tracking-wider font-[barlow]  
                  lg:max-w-[450px] lg:text-xl lg:mb-5"
            >
              {bio}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Crew;
