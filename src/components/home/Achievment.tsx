import React from 'react';
import Heading from '../Heading';
import img from './../../assets/big 1.jpg'
const Achievment:React.FC = () => {
    return (
      <div className='mt-[120px]'>
        <Heading title="Idea Big" subtitle="ourt achievements" />
        <div className='flex justify-center items-center mt-[60px]'>
          <img className='w-[416px] rounded-xl' src={img} alt="" />
        </div>
      </div>
    );
};

// const AchievmentCard = ()=>{

// }

export default Achievment;