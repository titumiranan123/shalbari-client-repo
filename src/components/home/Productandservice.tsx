import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Heading from '../Heading';
import bankagoj from './../../assets/Bonkagoj.png';
import Polka from "./../../assets/polka.png";
import aloproject from "./../../assets/alo project.png";
import Ecopac from "./../../assets/ecopac.png";
import bamboo from "./../../assets/bamboo.png";
import renewable from "./../../assets/renewable.png";
import ecotech from "./../../assets/ecotech.png";
import publication from "./../../assets/publication.png"

const Productandservice: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in ms
      once: true,     // Only animate once as you scroll
    });
  }, []);

  const services = [
    {
      id: 1,
      title: "Bonkagoj",
      image: bankagoj,
      description: "Contrary to popular belief, ipsum is not simply random.",
    },
    {
      id: 2,
      title: "Polka",
      image: Polka,
      description: "Contrary to popular belief, ipsum is not simply random.",
    },
    {
      id: 3,
      title: "Alo Project",
      image: aloproject,
      description: "Contrary to popular belief, ipsum is not simply random.",
    },
    {
      id: 4,
      title: "Ecopac",
      image: Ecopac,
      description: "Contrary to popular belief, ipsum is not simply random.",
    },
    {
      id: 5,
      title: "Bambuk",
      image: bamboo,
      description: "Contrary to popular belief, ipsum is not simply random.",
    },
    {
      id: 6,
      title: "Renewable Energy",
      image: renewable,
      description: "Contrary to popular belief, ipsum is not simply random.",
    },
    {
      id: 7,
      title: "Ecotech",
      image: ecotech,
      description: "Contrary to popular belief, ipsum is not simply random.",
    },
    {
      id: 8,
      title: "Publication",
      image: publication,
      description: "Contrary to popular belief, ipsum is not simply random.",
    },
  ];

  return (
    <div className="mt-[120px] max-w-[1280px] mx-auto">
      <Heading title="What we offer" subtitle="product & service" />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-[60px]">
        {services.map((service, index) => (
          <div
            key={service.id}
            className="w-[306px] h-[363px] flex flex-col justify-center items-center gap-2 bg-[#fffcf8] p-6"
            data-aos="fade-up" // AOS bounce-up animation
            data-aos-delay={index * 200} // Delay to stagger animations (200ms between each)
          >
            <img
              className="w-[167px] h-[156px] border rounded-[8px]"
              src={service.image}
              alt={service.title}
            />
            <h1 className="text-[24px] leading-[28.8px] playball text-center font-semibold">
              {service.title}
            </h1>
            <p className="opensans text-[16px] mt-4 text-[#9a9a9a] text-center">
              {service.description}
            </p>
            <button className="py-3 px-5 bg-[#d4a762] rounded-full opensans mt-4">
              Read More
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Productandservice;
