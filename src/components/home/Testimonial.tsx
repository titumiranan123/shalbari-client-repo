import {  FaQuoteRight, FaStar } from 'react-icons/fa';
import img from './../../assets/testimonial-1.jpg'
import img2 from './../../assets/testimonial-2.jpg'
import img3 from './../../assets/testimonial-3.jpg'
import img4 from './../../assets/testimonial-4.jpg'
import Marquee from "react-fast-marquee";
import Heading from '../Heading';
const testimonials = [
  {
    image: img,
    name: "John Doe",
    profession: "Software Engineer",
    content: "This platform has transformed the way I learn new skills!",
  },
  {
    image: img2,
    name: "Jane Smith",
    profession: "Data Scientist",
    content:
      "The resources are outstanding, and I love the interactive nature of the courses.",
  },
  {
    image: img3,
    name: "Mark Wilson",
    profession: "Web Developer",
    content: "The best online platform for professional development!",
  },
  {
    image: img4,
    name: "Mark Wilson",
    profession: "Web Developer",
    content: "The best online platform for professional development!",
  },
  {
    image: img2,
    name: "Jane Smith",
    profession: "Data Scientist",
    content:
      "The resources are outstanding, and I love the interactive nature of the courses.",
  },
  {
    image: img3,
    name: "Mark Wilson",
    profession: "Web Developer",
    content: "The best online platform for professional development!",
  },
  {
    image: img4,
    name: "Mark Wilson",
    profession: "Web Developer",
    content: "The best online platform for professional development!",
  },
  // Add more testimonials here...
];



const TestimonialCarousel = () => {
  return (
    <div className="container max-w-[1280px] mt-[120px] mx-auto py-8">
      <div>
        <Heading title='What Our Customers says !' subtitle='testimonial' />
      </div>
      <div className='mt-[60px]'>
        <Marquee>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="item p-4">
              <div className="w-[350px]  h-[250px] rounded-xl border bg-[#fffcf8] p-6 gap-5  relative">
                <div className="d-flex mb-3">
                  <div className="flex gap-2">
                    <img
                      src={testimonial.image}
                      className="rounded-full"
                      alt={testimonial.name}
                      style={{ width: "60px", height: "60px" }}
                    />
                    <div className="ps-3 my-auto">
                      <h4 className="playball text-[24px]">
                        {testimonial.name}
                      </h4>
                      <p className="opensans text-[16px] text-[#9a9a9a] ">
                        {testimonial.profession}
                      </p>
                    </div>
                  </div>
                  <div
                    className="absolute"
                    style={{ top: "15px", right: "20px" }}
                  >
                    <FaQuoteRight className="text-[#9a9a9a] text-[2em] font-bold" />
                  </div>
                </div>
                <div className="testimonial-content mt-8">
                  <div className="flex">
                    <FaStar className="text-[#d4a762] text-[20px]" />
                    <FaStar className="text-[#d4a762] text-[20px]" />
                    <FaStar className="text-[#d4a762] text-[20px]" />
                    <FaStar className="text-[#d4a762] text-[20px]" />
                    <FaStar className="text-[#d4a762] text-[20px]" />
                  </div>
                  <p className="text-[20px] leading-[30px] text-[#9a9a9a]">
                    {testimonial.content}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Marquee>
        <Marquee direction="right">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="item p-4">
              <div className="w-[350px]  h-[250px] rounded-xl border bg-[#fffcf8] p-6 gap-5  relative">
                <div className="d-flex mb-3">
                  <div className="flex gap-2">
                    <img
                      src={testimonial.image}
                      className="rounded-full"
                      alt={testimonial.name}
                      style={{ width: "60px", height: "60px" }}
                    />
                    <div className="ps-3 my-auto">
                      <h4 className="playball text-[24px]">
                        {testimonial.name}
                      </h4>
                      <p className="opensans text-[16px] text-[#9a9a9a] ">
                        {testimonial.profession}
                      </p>
                    </div>
                  </div>
                  <div
                    className="absolute"
                    style={{ top: "15px", right: "20px" }}
                  >
                    <FaQuoteRight className="text-[#9a9a9a] text-[2em] font-bold" />
                  </div>
                </div>
                <div className="testimonial-content mt-8">
                  <div className="flex">
                    <FaStar className="text-[#d4a762] text-[20px]" />
                    <FaStar className="text-[#d4a762] text-[20px]" />
                    <FaStar className="text-[#d4a762] text-[20px]" />
                    <FaStar className="text-[#d4a762] text-[20px]" />
                    <FaStar className="text-[#d4a762] text-[20px]" />
                  </div>
                  <p className="text-[20px] leading-[30px] text-[#9a9a9a]">
                    {testimonial.content}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
