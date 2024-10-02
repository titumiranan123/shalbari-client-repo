import React from 'react';
import {  FaCheck, FaUsers, FaUsersCog } from 'react-icons/fa';
import CountUp from "react-countup";
import ourWork from '../../assets/ourwork.png'
const State:React.FC = () => {
    return (
      <div className="max-w-[1280px] flex justify-between items-center mx-auto mt-[120px]">
        <div className="flex gap-5">
          <div className="w-[230px] bg-[#d4a762] h-[235px] flex flex-col items-center justify-center gap-5 rounded-[8px] ">
            <FaUsers className="text-[64px] text-white" />
            <CountUp
              className="playball text-[56px] leading-[67.2px] text-center uppercase font-bold"
              start={1}
              delay={2}
              enableScrollSpy
              end={100}
            />
            <p className="opensans text-[16px] leading-[24.2px] text-center uppercase font-bold">
              HAPPY CUSTOMERS
            </p>
          </div>
          <div className="w-[230px] bg-[#d4a762] h-[235px] flex flex-col items-center justify-center gap-5 rounded-[8px] ">
            <FaUsersCog className="text-[64px] text-white" />
            <CountUp
              className="playball text-[56px] leading-[67.2px] text-center uppercase font-bold"
              start={1}
              delay={2}
              enableScrollSpy
              end={100}
            />
            <p className="opensans text-[16px] leading-[24.2px] text-center uppercase font-bold">
              On Going Project
            </p>
          </div>
          <div className="w-[230px] bg-[#d4a762] h-[235px] flex flex-col items-center justify-center gap-5 rounded-[8px] ">
            <FaCheck className="text-[64px] text-white" />
            <CountUp
              className="playball text-[56px] leading-[67.2px] text-center uppercase font-bold"
              start={1}
              delay={2}
              enableScrollSpy
              end={100}
            />
            <p className="opensans text-[16px] leading-[24.2px] text-center uppercase font-bold">
              Completee Work
            </p>
          </div>
        </div>
        <div className='w-[540px] h-[400px]'>
          <img className='max-w-[100%] h-auto' src={ourWork} alt="" />
        </div>
      </div>
    );
};

export default State;