/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import ShippingPopup from "./Location";
import { GrDeliver } from "react-icons/gr";
import cash from "./../../assets/cash-on-delivery.png"
import bkash from '../../assets/bKash.jpg'
import upay from "./../../assets/upay.jpg"
import bag from '../../assets/bag.jpeg'
import { FaStar } from "react-icons/fa";
const Products: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("Description");
      const [zoomStyle, setZoomStyle] = useState({
        backgroundPosition: "0% 0%",
        backgroundSize:"100%"
      });

      const handleMouseMove = (e:any) => {
        const { left, top, width, height } =
          e.currentTarget.getBoundingClientRect();
        const x = ((e.pageX - left) / width) * 100;
        const y = ((e.pageY - top) / height) * 100;

        setZoomStyle({
          backgroundPosition: `${x}% ${y}%`,
          backgroundSize: "200%", // Adjust this to control zoom level
        });
      };

      const handleMouseLeave = () => {
        setZoomStyle({ backgroundPosition: "0% 0%", backgroundSize:"100%" });
      };
       const handleTabClick = (tab: string) => {
         setActiveTab(tab);
       };
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 max-w-[1240px] mx-auto mt-[60px]">
      <div className="col-span-3 flex flex-col">
        <div className="col-span-3 grid grid-cols-1 md:grid-cols-2">
          <div
            className="relative w-[350px] h-[290px] overflow-hidden border"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
              backgroundImage: `url(${bag})`,
              // Default size of the image
              ...zoomStyle,
            }}
          >
            <img
              src={bag}
              alt="Bag"
              className="max-w-[100%] h-auto opacity-0" // The image is hidden to use the background image for zoom
            />
          </div>
          <div className="flex flex-col gap-1">
            <h1 className="text-[32px] font-bold opensans">Bonkagoj</h1>
            <p className="text-[14px] font-semibold">
              Brand : <span className="text-[#D4A762]">Hand crafted</span>
            </p>

            <p className="text-[14px] text-[#777777] leading-[22.4px] opensans font-[400] mt-1">
              Planttable Paper
            </p>
            <p className="text-[14px] text-[#777777] leading-[22.4px] opensans font-[400] mt-1">
              Handmade Paper
            </p>
            <p className="text-[14px] text-[#777777] leading-[22.4px] opensans font-[400] mt-1">
              Handmade Card Paper
            </p>
            <p className="text-[14px] text-[#777777] leading-[22.4px] opensans font-[400] mt-1">
              Handmade Cartridge Paper
            </p>
            <p className="text-[14px] text-[#777777] leading-[22.4px] opensans font-[400] mt-1">
              Seed Paper
            </p>

            <p className="text-[36px] text-[#333333] font-blod opensans">
              Tk. 2000{" "}
              <span className="line-through text-[#777777] text-[20px]">
                {" "}
                Tk . 3555
              </span>
            </p>
            <div className="flex items-center gap-2">
              <div className="flex gap-1">
                <FaStar className="text-[14px] text-[#777777]" />
                <FaStar className="text-[14px] text-[#777777]" />
                <FaStar className="text-[14px] text-[#777777]" />
                <FaStar className="text-[14px] text-[#777777]" />
                <FaStar className="text-[14px] text-[#777777]" />
              </div>
              <p>0 Review(S)</p>
            </div>
          </div>
        </div>

        <div className="border-b border-[#777777] mt-10">
          {[
            { label: "Description" },
            { label: "Customer Review" },
            { label: "Order" },
          ].map((tab, idx) => (
            <button
              key={idx}
              className={`whitespace-nowrap px-4 h-[58px]  text-[18px] border-b-[6px] rounded-b-md transition-all ${
                activeTab === tab.label
                  ? "text-[#D4A762] font-semibold border-[#D4A762]"
                  : "text-black border-transparent hover:text-[#D4A762] hover:border-[#D4A762]"
              }`}
              onClick={() => handleTabClick(tab.label)}
            >
              <span className="ml-2">{tab.label}</span>
            </button>
          ))}
        </div>
      </div>
      <div className="col-span-1 flex flex-col gap-2">
        <h4 className="text-[24px] opensans font-bold text-[#777777]">
          Delivery Options
        </h4>
        <span className="w-full h-[1px] bg-[#777777]"></span>
        <div className="flex gap-4 items-center mt-2">
          <FaLocationDot className="text-xl" />
          <h1 className="text-[18px] leading-[22.5px]  text-left text-black opensans font-bold">
            Available Delivery Area : All over the Bangladesh .
          </h1>
        </div>
        <div className="flex gap-4 items-center">
          <ShippingPopup />
        </div>
        <div className="flex gap-2 mt-2 ">
          <GrDeliver className="text-xl ms-1 " />
          <div className="flex flex-col gap-2">
            <h1 className="text-[18px] leading-[22.5px]  text-left text-black opensans font-bold">
              Delivery Info
            </h1>
            <p className="text-[14px] leading-[18.2px] text-[#777777] opensans">
              Delivery Time : 1-7 working days
            </p>
            <p className="text-[14px] leading-[18.2px] opensans text-[#777777] font-[500]">
              Shipping Charge : Tk. 50
            </p>
          </div>
        </div>
        <div className="flex  gap-2">
          <img className="w-7 h-7" src={cash} alt="" />
          <h1 className="text-[18px] leading-[22.5px]  text-left text-black opensans font-bold">
            Cash on Delivery Avaiable
          </h1>
        </div>
        <div className="flex items-center justify-center">
          <img className="max-w-[100%] h-auto" src={bkash} alt="" />
          <img className="max-w-[100%] h-auto" src={upay} alt="" />
        </div>
        <div className="flex flex-col gap-1">
          <h4 className="text-[24px] opensans font-bold text-[#777777]">
            Return & Warranty
          </h4>
          <span className="w-full h-[1px] bg-[#777777]"></span>
          <div className="mt-2">
            <h1 className="text-[18px] leading-[22.5px]  text-left text-black opensans font-bold">
              7 Days Returns
            </h1>
            <p className="text-[14px] leading-[18.2px] opensans text-[#777777] font-[500]">
              Change of mind is not applicable.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
