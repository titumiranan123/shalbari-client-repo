import React from 'react';
interface cartProp{
    img:string
    date:string,
    title:string
}
const Blogcart:React.FC<cartProp> = ({img,date,title}) => {
    return (
      <div className="flex flex-col lg:w-[390px]">
        <div>
          <img src={img} alt="" />
        </div>
        <div className='flex gap-4 items-center'>
          <div className="date bg-[#d4a762] w-[120px] flex justify-center items-center p-4 text-center opensans text-[24px] leading-[28px]">
            {date}
          </div>
          <div className="playball font-semibold text-[26px]">{title}</div>
        </div>
      </div>
    );
};

export default Blogcart;