import React from 'react';
import Heading from '../Heading';
import img1 from "../../assets/ekramunnesa chompa.jpg"
import img2 from "../../assets/mahbub shumoni.jpg"
import img3 from "../../assets/piyal khan.jpg"
import img4 from "../../assets/tahrat leon.jpg"
import { FaFacebook, FaInstagram, FaShare, FaTwitter } from 'react-icons/fa';
const Team:React.FC = () => {
    return (
      <div className="max-w-[1240px] mt-[120px] mx-auto">
        <Heading title="We have experienced Team" subtitle="OUR Team" />
        <div className="mt-[60px] grid-cols-1 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          <div className="w-[310px] h-[686px] rounded-xl hover:border-red-500 border border-transparent">
            <img src={img1} className="w-full rounded-xl h-[386px]" alt="" />
            <div className="bg-black flex justify-center items-center p-5 flex-col">
              <p className=" text-[#d4a762] text-[24px] leading-[28.8px] playball">
                Ekramunnesa Champa
              </p>
              <p className="text-[16px] text-white opensans leading-[24px]">
                Chairman
              </p>
            </div>
            <div className='flex flex-col gap-2 mt-5 justify-center items-center'>
              <div className="bg-[#d4a762] flex justify-center items-center rounded-l-[50%] rounded-r-[50%] h-[38px] w-[238px]">
                <FaShare className="text-[16px]" />
              </div>
              <div className="bg-[#d4a762] flex justify-center items-center rounded-l-[50%] rounded-r-[50%] h-[38px] w-[238px]">
                <FaFacebook className="text-[16px]" />
              </div>
              <div className="bg-[#d4a762] flex justify-center items-center rounded-l-[50%] rounded-r-[50%] h-[38px] w-[238px]">
                <FaTwitter className="text-[16px]" />
              </div>
              <div className="bg-[#d4a762] flex justify-center items-center rounded-l-[50%] rounded-r-[50%] h-[38px] w-[238px]">
                <FaInstagram className="text-[16px]" />
              </div>
            </div>
          </div>
          <div className="w-[310px] h-[686px] rounded-xl hover:border-red-500 border border-transparent">
            <img src={img2} className="w-full rounded-xl h-[386px]" alt="" />
            <div className="bg-black flex justify-center items-center p-5 flex-col">
              <p className=" text-[#d4a762] text-[24px] leading-[28.8px] playball">
                Ekramunnesa Champa
              </p>
              <p className="text-[16px] text-white opensans leading-[24px]">
                Chairman
              </p>
            </div>
            <div className='flex flex-col gap-2 mt-5 justify-center items-center'>
              <div className="bg-[#d4a762] flex justify-center items-center rounded-l-[50%] rounded-r-[50%] h-[38px] w-[238px]">
                <FaShare className="text-[16px]" />
              </div>
              <div className="bg-[#d4a762] flex justify-center items-center rounded-l-[50%] rounded-r-[50%] h-[38px] w-[238px]">
                <FaFacebook className="text-[16px]" />
              </div>
              <div className="bg-[#d4a762] flex justify-center items-center rounded-l-[50%] rounded-r-[50%] h-[38px] w-[238px]">
                <FaTwitter className="text-[16px]" />
              </div>
              <div className="bg-[#d4a762] flex justify-center items-center rounded-l-[50%] rounded-r-[50%] h-[38px] w-[238px]">
                <FaInstagram className="text-[16px]" />
              </div>
            </div>
          </div>
          <div className="w-[310px] h-[686px] rounded-xl hover:border-red-500 border border-transparent">
            <img src={img3} className="w-full rounded-xl h-[386px]" alt="" />
            <div className="bg-black flex justify-center items-center p-5 flex-col">
              <p className=" text-[#d4a762] text-[24px] leading-[28.8px] playball">
                Ekramunnesa Champa
              </p>
              <p className="text-[16px] text-white opensans leading-[24px]">
                Chairman
              </p>
            </div>
            <div className='flex flex-col gap-2 mt-5 justify-center items-center'>
              <div className="bg-[#d4a762] flex justify-center items-center rounded-l-[50%] rounded-r-[50%] h-[38px] w-[238px]">
                <FaShare className="text-[16px]" />
              </div>
              <div className="bg-[#d4a762] flex justify-center items-center rounded-l-[50%] rounded-r-[50%] h-[38px] w-[238px]">
                <FaFacebook className="text-[16px]" />
              </div>
              <div className="bg-[#d4a762] flex justify-center items-center rounded-l-[50%] rounded-r-[50%] h-[38px] w-[238px]">
                <FaTwitter className="text-[16px]" />
              </div>
              <div className="bg-[#d4a762] flex justify-center items-center rounded-l-[50%] rounded-r-[50%] h-[38px] w-[238px]">
                <FaInstagram className="text-[16px]" />
              </div>
            </div>
          </div>
          <div className="w-[310px] h-[686px] rounded-xl hover:border-red-500 border border-transparent">
            <img src={img4} className="w-full rounded-xl h-[386px]" alt="" />
            <div className="bg-black flex justify-center items-center p-5 flex-col">
              <p className=" text-[#d4a762] text-[24px] leading-[28.8px] playball">
                Ekramunnesa Champa
              </p>
              <p className="text-[16px] text-white opensans leading-[24px]">
                Chairman
              </p>
            </div>
            <div className='flex flex-col gap-2 mt-5 justify-center items-center'>
              <div className="bg-[#d4a762] flex justify-center items-center rounded-l-[50%] rounded-r-[50%] h-[38px] w-[238px]">
                <FaShare className="text-[16px]" />
              </div>
              <div className="bg-[#d4a762] flex justify-center items-center rounded-l-[50%] rounded-r-[50%] h-[38px] w-[238px]">
                <FaFacebook className="text-[16px]" />
              </div>
              <div className="bg-[#d4a762] flex justify-center items-center rounded-l-[50%] rounded-r-[50%] h-[38px] w-[238px]">
                <FaTwitter className="text-[16px]" />
              </div>
              <div className="bg-[#d4a762] flex justify-center items-center rounded-l-[50%] rounded-r-[50%] h-[38px] w-[238px]">
                <FaInstagram className="text-[16px]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};


export default Team;