import React from "react";
import { Link } from "react-router-dom";
// import icon from "../assets/icon.png"; // Update with your actual path

const programs = [
  {
    id: 1,
    title: "Residential Care",
    description:
      "A safe and nurturing home for 45 girls, offering them love, care, and a sense of belonging.",
    // image: cardImage,
  },
  {
    id: 2,
    title: "Education Support",
    description:
      "Providing quality education and academic assistance to underprivileged children.",
    image: "cardImage",
  },
  {
    id: 3,
    title: "Health & Nutrition",
    description:
      "Ensuring proper healthcare and nutritious meals for children in need.",
    image: "cardImage",
  },
  {
    id: 4,
    title: "Skill Development",
    description:
      "Empowering girls with vocational training and essential life skills.",
    image: "cardImage",
  },
  {
    id: 5,
    title: "Mental Wellness",
    description:
      "Providing mental health support and emotional well-being programs.",
    image: "cardImage",
  },
  {
    id: 6,
    title: "Community Outreach",
    description:
      "Engaging with local communities to uplift and support marginalized groups.",
    image: 'cardImage',
  },
];

const OurPrograms = () => {
  return (
    <div className="w-full flex justify-center p-4">
      <div className="w-[1376px] h-auto border border-[#FB9EBB] rounded-lg p-8">
        {/* Heading */}
        <h1 className="font-bebas font-normal text-[48px] leading-[100%] tracking-[0%] text-center text-black mb-10">
          OUR PROGRAMS
        </h1>

        {/* Program Cards */}
        <div className="flex flex-col items-center gap-8">
          {programs.map((program) => (
            <div
              key={program.id}
              className="w-[1228px] h-[311px] bg-white rounded-[17px] shadow-md flex flex-col md:flex-row p-6 items-center"
            >
              {/* Left Section */}
              <div className="flex flex-col justify-center gap-3 w-full md:w-1/2">
                {/* <img src={icon} alt="Program Icon" className="w-[40px] h-[40px]" /> */}
                <h2 className="text-[24px] font-semibold font-inter leading-[100%] text-black">
                  {program.title}
                </h2>
                <p className="text-[16px] font-light font-inter leading-[100%] text-gray-700 w-[305px]">
                  {program.description}
                </p>
                <Link to="/donate">
                  <button className="bg-[#0B1957] hover:bg-yellow-500 text-white rounded-3xl shadow-md text-[20px] w-[193px] h-[57px] mt-4">
                    Donate
                  </button>
                </Link>
              </div>

              {/* Right Section (Image) */}
              <div className="w-full md:w-1/2 flex justify-center">
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-[499px] h-[281px] rounded-[10px] opacity-75 object-cover"
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
