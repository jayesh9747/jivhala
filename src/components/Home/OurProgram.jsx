import React from 'react';
import { FaHome, FaBook, FaComments } from 'react-icons/fa';
import icon1 from "../../assets/hlc1.png"
import icon2 from "../../assets/hlc2.png"
import icon3 from "../../assets/hlc3.png"

const OurPrograms = () => {
  return (
    <div className="border border-[#FB9EBB] bg-white rounded-lg p-8 flex flex-col items-center">
      <h2 className="font-['Bebas_Neue'] font-normal text-3xl lg:text-5xl leading-[100%] text-center mt-5 mb-10 lg:mt-8 lg:mb-16">
        OUR PROGRAMS
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10 w-full mb-6">
        {/* Card 1 - Residential Care */}
        <div className="bg-white border border-gray-200 rounded-[17px] pt-[21px] pr-4 pb-10 lg:pb-16 pl-6 flex flex-col gap-[22px] w-full h-2/12">
          <img src={icon1} className="w-[21px] h-[21px] md:w-[40px] md:h-[40px]"/>
          <h3 className="font-['Inter'] font-semibold text-[18px] lg:text-[24px] leading-[100%]">
            Residential Care
          </h3>
          <p className="font-['Inter'] font-light text-[13px] lg:text-[16px] leading-[100%] text-gray-700">
            A safe and nurturing home for 45 girls, offering them love, care, and a sense of belonging.
          </p>
        </div>

        {/* Card 2 - Quality Education */}
        <div className="bg-white border border-gray-200 rounded-[17px] pt-[21px] pr-4 pb-10 lg:pb-16 pl-6 flex flex-col gap-[22px] w-full h-2/12">
        <img src={icon2} className="w-[21px] h-[21px] md:w-[40px] md:h-[40px]"/>
          <h3 className="font-['Inter'] font-semibold text-[18px] lg:text-[24px] leading-[100%]">
            Quality Education
          </h3>
          <p className="font-['Inter'] font-light text-[13px] lg:text-[16px] leading-[100%] text-gray-700">
            Our passionate educators go beyond textbooks to unlock each girl's unique potential.
          </p>
        </div>

        {/* Card 3 - Counseling Services */}
        <div className="bg-white border border-gray-200 rounded-[17px] pt-[21px] pr-4 pb-10 lg:pb-16 pl-6 flex flex-col gap-[22px] w-full h-2/12">
        <img src={icon3} className="w-[21px] h-[21px] md:w-[40px] md:h-[40px]"/>
        <h3 className="font-['Inter'] font-semibold text-[18px] lg:text-[24px] leading-[100%]">
            Counseling Services
          </h3>
          <p className="font-['Inter'] font-light text-[13px] lg:text-[16px] leading-[100%] text-gray-700">
            Personalized emotional support to heal past traumas and build inner strength.
          </p>
        </div>
      </div>
      
      <button className="bg-[#0B1956] text-white font-medium py-3 px-10 rounded-md mt-4">
        Learn More
      </button>
    </div>
  );
};

export default OurPrograms;