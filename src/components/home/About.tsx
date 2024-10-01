/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef } from "react";
import about from "./../../assets/shalbrikkho about.jpg";
import { FaArrowRight, FaShare } from "react-icons/fa";


const About: React.FC = () => {
  const imageRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const animateOnScroll = (
      entries: IntersectionObserverEntry[],
      observer: IntersectionObserver
    ) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("bounceInUp");
          observer.unobserve(entry.target); // Stop observing once the animation is applied
        }
      });
    };

    const observer = new IntersectionObserver(animateOnScroll, {
      threshold: 0.5, // Trigger when 50% of the element is visible
    });

    if (imageRef.current) observer.observe(imageRef.current);
    if (textRef.current) observer.observe(textRef.current);

    return () => {
      if (imageRef.current) observer.unobserve(imageRef.current);
      if (textRef.current) observer.unobserve(textRef.current);
    };
  }, []);

  return (
    <div className="bg-white">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between gap-8 items-center">
          <div ref={imageRef} className="lg:w-[436px] lg:h-[500px] opacity-0">
            <img
              src={about}
              className="max-w-[100%] h-auto rounded-lg"
              alt="About Shalbrikkho"
            />
          </div>
          <div ref={textRef} className="lg:w-[700px] lg:h-[553px] opacity-0">
            <small className="font-bold opensans text-black uppercase bg-gray-100 border border-[#d4a762] w-[140px] flex justify-center items-center rounded-full px-4 py-1 mb-3 text-sm">
              About Us
            </small>
            <h1 className="text-4xl playball lg:text-[48px] lg:leading-[57.6px] mb-4">
              Sustainable Solutions, Today and Beyond.
            </h1>
            <p className="mb-6 text-[#9A9A9A] opensans">
              Shalbrikkho is a forward-thinking company dedicated to creating
              and providing sustainable solutions. Their mission is to lead in
              renewable energy and biodegradable products, envisioning a future
              where innovation aligns with environmental responsibility. With a
              focus on cutting-edge technologies and a commitment to carbon
              neutrality, waste reduction, and community engagement, Shalbrikkho
              aims to be a catalyst for positive change, building a world where
              progress harmonizes with a healthier planet.
            </p>
            <div className="grid grid-cols-2 gap-2 mb-6 text-black opensans text-[16px]">
              <div className="flex items-center gap-2">
                <FaShare className="text-[#d4a762]" />
                <span className="text-[16px]">
                  Service with a Smile, Solutions with Care.
                </span>
              </div>
              <div className="flex items-center gap-2">
                <FaShare className="text-[#d4a762]" />
                <span>Your Concerns, Our Priority.</span>
              </div>
              <div className="flex items-center gap-2">
                <FaShare className="text-[#d4a762]" />
                <span>Beyond Support, Building Connections.</span>
              </div>
              <div className="flex items-center gap-2">
                <FaShare className="text-[#d4a762]" />
                <span className="text-[16px]">
                  Dedicated to You, Committed to Excellence.
                </span>
              </div>
            </div>
            <a
              href="#"
              className="bg-[#d4a762] w-[160px] text-white rounded-full py-3 px-6 hover:bg-[#d4a762] transition duration-300 flex justify-center items-center gap-2 text-[18px]"
            >
              About Us <FaArrowRight />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
