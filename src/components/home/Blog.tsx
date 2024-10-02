import React from 'react';
import Blogcart from './Blogcart';
import img1 from './../../assets/blog-1.jpg'
import img2 from './../../assets/blog-2.jpg'
import img3 from './../../assets/blog-3.jpg'
import Heading from '../Heading';
const Blog:React.FC = () => {
    return (
      <div className="max-w-[1280px] mx-auto mt-[120px]">
        <Heading title='Be First who Read News' subtitle='Our blog' />
        <div  className='grid grid-cols-1 lg:grid-cols-3 mt-[60px]'>
          <Blogcart
            img={img1}
            title="One man's trash is another man's treasure"
            date="5 May"
          />
          <Blogcart
            img={img2}
            title="One man's trash is another man's treasure"
            date="5 May"
          />
          <Blogcart
            img={img3}
            title="One man's trash is another man's treasure"
            date="5 May"
          />
        </div>
      </div>
    );
};

export default Blog;