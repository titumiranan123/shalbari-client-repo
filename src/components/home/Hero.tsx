import React from "react";
import header from "./../../assets/windsolar.png";

const Hero: React.FC = () => {
  return (
    <div>
      <div className="bg-gray-100 py-6 my-6 mt-0">
        <div className="max-w-[1240px] mx-auto   ">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mt-4">
            <div className="lg:w-[736px] space-y-6">
              <small className=" font-bold text-black uppercase bg-gray-100 border border-[#d4a762] rounded-full px-4 py-1 mb-4 text-[14px] leading-[21px]">
                Welcome to Shalbriikho
              </small>
              <h1 className="lg:text-[80px] lg:leading-[90px]    playball font-[400] ">
                Shalbrikkho{" "}
                <span className="text-[#d4a762]"> Powering Tomorrow, </span>{" "}
                Protecting Today.
              </h1>
              <a
                href="#"
                className="btn inline-block bg-[#d4a762] bg-opacity-90 text-white rounded-full py-3 px-8 hover:bg-opacity-100 transition-all duration-300 "
              >
                Know More
              </a>
            </div>
            <div>
              <img
                src={header}
                className=" rounded-lg max-w-[100%] h-auto"
                alt="Wind and Solar Power"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
