import React from "react";
import header from "./../../assets/windsolar.png";

const Hero: React.FC = () => {
  return (
    <div>
      <div className="bg-[#FFFCF8] py-6 my-6 mt-0">
        <div className="max-w-[1240px] mx-auto   ">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mt-4">
            <div className="lg:w-[736px] lg:h-[600px] space-y-6 flex justify-center  flex-col">
              <div className="bounceInDown animated space-y-6">
                <small className=" font-bold text-black uppercase bg-gray-100 border border-[#d4a762] rounded-full px-4 py-1  text-[14px]  leading-[21px]">
                  Welcome to Shalbriikho
                </small>
                <h1 className="lg:text-[80px] lg:leading-[90px]   playball font-[400] ">
                  Shalbrikkho{" "}
                  <span className="text-[#d4a762]"> Powering Tomorrow, </span>{" "}
                  Protecting Today.
                </h1>
              </div>
              <a
                href="#"
                className="btn  bg-[#d4a762] bg-opacity-90 text-white rounded-full py-3 px-8 hover:bg-opacity-100 transition-all duration-300 w-[160px] flex justify-center items-center bounceInLeft animated "
              >
                Know More
              </a>
            </div>
            <div className="lg:w-[692px] lg:h-[695px]">
              <img
                src={header}
                className=" rounded-lg animated zoomIn max-w-[100%] h-auto"
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
