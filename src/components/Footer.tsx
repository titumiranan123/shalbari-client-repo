import React from 'react';
import { FaCheck, FaClock, FaEnvelope, FaFacebook, FaInstagram, FaLinkedin,  FaPhone, FaTwitter } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';
import footer1 from './../assets/footer1.jpg'
import footer2 from './../assets/footer2.jpg'
import footer3 from './../assets/footer3.jpg'
import footer4 from './../assets/footer4.jpg'
import footer5 from './../assets/footer5.jpg'
import footer6 from './../assets/footer6.jpg'
const Footer:React.FC = () => {
    return (
      <div className="mt-[120px] flex flex-col gap-10">
        <div className="max-w-[1240px] mx-auto grid grid-cols-1 lg:grid-cols-4">
          <div>
            <a href="/" className="text-3xl font-bold">
              <h1 className="playball -mt-[12px] text-[40px] leading-[48px]">
                <span className="text-[#d4a762]">Shal</span>
                <span className="text-gray-900">brikkho</span>
              </h1>
            </a>
            <p className="mt-5 opensans text-[#9a9a9a]">
              Shalbrikkho aspires to create and make available renewable energy
              solutions as well as biodegradable .
            </p>
            <div className="flex items-center gap-3 mt-4">
              <div className="h-12 w-12 p-3 flex justify-center transition-all duration-200 hover:scale-125 items-center rounded-full bg-[#d4a762]">
                <FaFacebook className="text-[32px]" />
              </div>
              <div className="h-12 w-12 p-3 transition-all duration-200 hover:scale-125 flex justify-center items-center rounded-full bg-[#d4a762]">
                <FaTwitter className="text-[32px]" />
              </div>
              <div className="h-12 w-12 p-3 transition-all duration-200 hover:scale-125 flex justify-center items-center rounded-full bg-[#d4a762]">
                <FaInstagram className="text-[32px]" />
              </div>
              <div className="h-12 w-12 p-3 transition-all duration-200 hover:scale-125 flex justify-center items-center rounded-full bg-[#d4a762]">
                <FaLinkedin className="text-[32px] rounded-full" />
              </div>
            </div>
          </div>
          <div>
            <h1 className="playball text-[24px] leading-[28.8px] text-start font-bold ">
              {" "}
              Products
            </h1>
            <div className="flex flex-col gap-4 mt-6 font-semibold">
              <div className="flex gap-2  transition-all duration-200 hover:translate-x-4 hover:underline  items-center text-[16px] leading-[24px] ">
                <FaCheck className="text-[#d4a762]" />
                <p className="text-[#9a9a9a]">Bonkagoj</p>
              </div>
              <div className="flex gap-2  transition-all duration-200 hover:translate-x-4 hover:underline items-center text-[16px] leading-[24px]">
                <FaCheck className="text-[#d4a762]" />
                <p className="text-[#9a9a9a]">Polka</p>
              </div>
              <div className="flex gap-2  transition-all duration-200 hover:translate-x-4 hover:underline items-center text-[16px] leading-[24px]">
                <FaCheck className="text-[#d4a762]" />
                <p className="text-[#9a9a9a]">Alo Project</p>
              </div>
              <div className="flex gap-2  transition-all duration-200 hover:translate-x-4 hover:underline items-center text-[16px] leading-[24px]">
                <FaCheck className="text-[#d4a762]" />
                <p className="text-[#9a9a9a]">Bambuk</p>
              </div>
            </div>
          </div>
          <div>
            <h1 className="playball text-[24px] leading-[28.8px] text-start font-bold ">
              {" "}
              Contact Us
            </h1>
            <div className="flex flex-col gap-4 mt-6 font-semibold">
              <div className="flex gap-2  transition-all duration-200 hover:translate-x-4 hover:underline items-center text-[16px] leading-[24px] ">
                <FaLocationDot className="text-[#d4a762]" />
                <p className="text-[#9a9a9a]">Dhaka Narayanganj Highway</p>
              </div>
              <div className="flex gap-2  transition-all duration-200 hover:translate-x-4 hover:underline items-center text-[16px] leading-[24px]">
                <FaPhone className="text-[#d4a762]" />
                <p className="text-[#9a9a9a]">(+880) 1580-305672</p>
              </div>
              <div className="flex gap-2  transition-all duration-200 hover:translate-x-4 hover:underline items-center text-[16px] leading-[24px]">
                <FaEnvelope className="text-[#d4a762]" />
                <p className="text-[#9a9a9a]">shalbrikho@gmail.com</p>
              </div>
              <div className="flex gap-2  transition-all duration-200 hover:translate-x-4 hover:underline items-center text-[16px] leading-[24px]">
                <FaClock className="text-[#d4a762]" />
                <p className="text-[#9a9a9a]">info@shalbrikho.com</p>
              </div>
            </div>
          </div>
          <div>
            <h1 className="playball text-[24px] leading-[28.8px] text-start font-bold ">
              {" "}
              Social Gallery
            </h1>
            <div className="grid grid-cols-3 gap-4 mt-5">
              <div className="p-3 flex justify-center items-center group border border-[#d4a762] w-[100px] h-[100px] rounded-full">
                <img
                  className="rounded-full group-hover:scale-125 scale-110 transition-all duration-200  w-[70px] h-[70px]"
                  src={footer1}
                  alt=""
                />
              </div>
              <div className="p-3 flex justify-center items-center group border border-[#d4a762] w-[100px] h-[100px] rounded-full">
                <img
                  className="rounded-full group-hover:scale-125 scale-110 transition-all duration-200  w-[70px] h-[70px]"
                  src={footer2}
                  alt=""
                />
              </div>
              <div className="p-3 flex justify-center items-center group border border-[#d4a762] w-[100px] h-[100px] rounded-full">
                <img
                  className="rounded-full group-hover:scale-125 scale-110 transition-all duration-200  w-[70px] h-[70px]"
                  src={footer3}
                  alt=""
                />
              </div>
              <div className="p-3 flex justify-center items-center group border border-[#d4a762] w-[100px] h-[100px] rounded-full">
                <img
                  className="rounded-full group-hover:scale-125 scale-110 transition-all duration-200  w-[70px] h-[70px]"
                  src={footer4}
                  alt=""
                />
              </div>
              <div className="p-3 flex justify-center items-center group border border-[#d4a762] w-[100px] h-[100px] rounded-full">
                <img
                  className="rounded-full group-hover:scale-125 scale-110 transition-all duration-200  w-[70px] h-[70px]"
                  src={footer5}
                  alt=""
                />
              </div>
              <div className="p-3 flex justify-center items-center group border border-[#d4a762] w-[100px] h-[100px] rounded-full">
                <img
                  className="rounded-full group-hover:scale-125 scale-110 transition-all duration-200  w-[70px] h-[70px]"
                  src={footer6}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>

        {/* lower footer  */}
        <div className="lower-footer bg-black">
          <div className="max-w-[1280px] mx-auto flex justify-between items-center opensans py-5">
            <div className="flex items-center gap-2">
              &copy; <span className="text-[#d4a762]">Shalbrikkho</span>.{" "}
              <span className="text-white">All right reserved .</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-white ">Designed & Developed By</span>.{" "}
              <span className="text-[#d4a762] underline">Youthminds</span>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Footer;