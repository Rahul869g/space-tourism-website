import img1 from "../assets/crew/image-douglas-hurley.png";
import { useState } from "react";
import data from "../API/data.json";

const initialState = 0;

const Crew = () => {
  const [index, setIndex] = useState(initialState);

  const handleOnChange = (e) => setIndex(parseInt(e.target.value));

  return (
    <div className="text-black min-h-screen h-screen w-full">
      {/* <div className=""> */}
      <div className="uppercase ml-20 bg-yellow-900 text-base tracking-widest lg:text-start  md:text-center md:ml-5">
        <span className="text-gray-400 mr-4 font-extrabold opacity-70 ">
          02
        </span>
        Meet Your Crew
      </div>

      <div
        className="mt-[10%] px-6
        sm:flex sm:flex-col-reverse sm:justify-start sm:h-screen sm:mt-0
        lg:flex-row-reverse lg:items-end animate-[fadeEntrance_1s_ease-in_forwards]"
      >
        <img
          className="h-60 mx-auto sm:h-[50%] lg:h-4/5"
          src={img1}
          // src={data.crew[index].images.png}
          alt={data.crew[index].name}
        />
        <hr className="w-[80%] mx-auto opacity-70 sm:hidden" />

        <div
          className="sm:flex sm:flex-col-reverse sm:justify-start sm:items-center
                lg:items-start lg:mb-[5%] lg:ml-[6%] animate-[fadeEntrance_1s_ease-in_forwards]"
        >
          <form
            className="flex items-center justify-center gap-x-4 mb-8 sm:mb-10"
            onChange={handleOnChange}
          >
            {data.crew.map((element, i) => (
              <label
                key={i}
                className={`bg-[#E5E7DC] w-3 h-3 rounded-full cursor-pointer hover:opacity-50 ${
                  i !== index ? "opacity-30" : ""
                }
                transition-all duration-500 mt-8`}
              >
                <input type="radio" name="radio" value={i} className="hidden" />
              </label>
            ))}
          </form>

          <div
            className="text-center text-main-white sm:mb-12 sm:max-w-[480px]
                  lg:text-left lg:max-w-[660px]"
          >
            <h3 className="uppercase font-bellefair opacity-40 text-lg mb-2 lg:text-4xl">
              {data.crew[index].role}
            </h3>
            <h2 className="uppercase font-bellefair text-2xl mb-4 lg:text-6xl lg:mb-8">
              {data.crew[index].name}
            </h2>
            <p
              className="opacity-60 font-barlow text-lg tracking-wider lg:mb-10 
                  lg:max-w-[450px] lg:text-xl"
            >
              {data.crew[index].bio}
            </p>
          </div>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
};

export default Crew;
