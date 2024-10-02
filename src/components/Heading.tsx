import React from 'react';
interface HeadingProp {
    subtitle :string,
    title:string
}
const Heading:React.FC<HeadingProp> = ({subtitle,title}) => {
    return (
      <div className='flex flex-col gap-4 items-center justify-center '>
        <p className=" font-bold text-black  bg-gray-100 border border-[#d4a762] rounded-full px-4 py-1  text-[14px] opensans leading-[21px] uppercase">
          {subtitle}
        </p>
        <h1 className='text-center text-[48px] leading-[57px]  playball'>{title}</h1>
      </div>
    );
};

export default Heading;