import React from "react";
import { Link } from "react-router-dom";
import icon1 from "../../assets/hlc1.png";
import icon2 from "../../assets/hlc2.png";
import icon3 from "../../assets/hlc3.png";
import icon4 from "../../assets/hlc4.png";
import icon5 from "../../assets/hlc5.png";
import icon6 from "../../assets/hlc6.png";
import im1 from "../../assets/im1.png";
import im2 from "../../assets/im2.png";
import im3 from "../../assets/im3.png";
import im4 from "../../assets/im4.png";
import im5 from "../../assets/im5.png";
import im6 from "../../assets/im6.png";

const programs = [
  {
    id: 1,
    icon: icon1,
    title: "Residential Care",
    description:
      "A safe and nurturing home for 45 girls, offering them love, care, and a sense of belonging.",
    image: im1,
  },
  {
    id: 2,
    icon: icon2,
    title: "Quality Education",
    description:
      "Our passionate educators go beyond textbooks to unlock each girl’s unique potential.",
    image: im2,
  },
  {
    id: 3,
    icon: icon3,
    title: "Counseling Services",
    description:
      "Personalized emotional support to heal past traumas and build inner strength.",
    image: im3,
  },
  {
    id: 4,
    icon: icon4,
    title: "Career Guidance",
    description:
      "Equipping girls with vocational skills and career paths for financial independence.",
    image: im4,
  },
  {
    id: 5,
    icon: icon5,
    title: "Cultural Enrichment",
    description:
      "Festivals, art, and craft workshops connect them to their roots and spark creativity.",
    image: im5,
  },
  {
    id: 6,
    icon: icon6,
    title: "Empowerment Workshops",
    description:
      "Workshops designed to inspire and empower young girls to be leaders.",
    image: im6,
  },
];

const OurPrograms = () => {
  return (
    <div className="w-full flex justify-center mt-10">
      <div className="w-full h-auto border border-[#FB9EBB] bg-[#FEDCD2] rounded-lg px-4 py-4 md:p-8">
        {/* Heading */}
        <h1 className="font-bebas font-normal text-[28px] md:text-[48px] leading-[100%] tracking-[0%] text-center text-black mt-4 md:mt-12 mb-4 md:mb-16">
          OUR PROGRAMS
        </h1>

        {/* Program Cards */}
        <div className="flex flex-col items-center gap-4 md:gap-8">
          {programs.map((program) => (
            <div
              key={program.id}
              className="w-full h-auto md:h-[311px] bg-white rounded-[17px] shadow-md flex flex-row py-2 md:py-4 px-2 md:pl-4 mx-3 md:mx-16 items-center justify-around"
            >
              {/* Left Section */}
              <div className="flex flex-col justify-center gap-y-2 md:gap-y-5 w-full md:w-1/2">
                <img src={program.icon} alt="Program Icon" className="w-[14px] h-[14px] md:w-[40px] md:h-[40px]" />
                <h2 className="text-[14px] md:text-[24px] font-semibold font-inter leading-[100%] text-black">
                  {program.title}
                </h2>
                <p className="text-[9px] md:text-[16px] font-light font-inter leading-[100%] text-gray-700 w-11/12">
                  {program.description}
                </p>
                <Link to="/donate">
                  <button className="bg-[#0B1957]  text-white rounded-lg md:rounded-xl shadow-md text-[11px] md:text-[20px] md:px-10 md:py-3 px-4 py-1 mt-2 md:mt-4">
                    Donate
                  </button>
                </Link>
              </div>

              {/* Right Section (Image) */}
              <div className="w-full md:w-5/12 flex justify-center">
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-[125.64px] md:h-[281px] rounded-[10px] opacity-100 object-cover "
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurPrograms;
