import React from 'react';
import { FaHome, FaBook, FaComments } from 'react-icons/fa';

const OurPrograms = () => {
  return (
    <div className="border border-blue-300 rounded-lg p-8 flex flex-col items-center">
      <h2 className="font-['Bebas_Neue'] font-normal text-5xl leading-[100%] text-center mb-8">
        OUR PROGRAMS
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 w-full mb-6">
        {/* Card 1 - Residential Care */}
        <div className="bg-white border border-gray-200 rounded-[17px] pt-[21px] pr-4 pb-[9px] pl-6 flex flex-col gap-[22px] w-[356px] h-[239px]">
          <FaHome className="text-[#0C1C63] w-[26.67px] h-[30px] mt-[5px] ml-[6.67px]" />
          <h3 className="font-['Inter'] font-semibold text-[24px] leading-[100%]">
            Residential Care
          </h3>
          <p className="font-['Inter'] font-light text-[16px] leading-[100%] text-gray-700">
            A safe and nurturing home for 45 girls, offering them love, care, and a sense of belonging.
          </p>
        </div>

        {/* Card 2 - Quality Education */}
        <div className="bg-white border border-gray-200 rounded-[17px] pt-[21px] pr-4 pb-[9px] pl-6 flex flex-col gap-[22px] w-[356px] h-[239px]">
          <FaBook className="text-[#0C1C63] w-[26.67px] h-[30px] mt-[5px] ml-[6.67px]" />
          <h3 className="font-['Inter'] font-semibold text-[24px] leading-[100%]">
            Quality Education
          </h3>
          <p className="font-['Inter'] font-light text-[16px] leading-[100%] text-gray-700">
            Our passionate educators go beyond textbooks to unlock each girl's unique potential.
          </p>
        </div>

        {/* Card 3 - Counseling Services */}
        <div className="bg-white border border-gray-200 rounded-[17px] pt-[21px] pr-4 pb-[9px] pl-6 flex flex-col gap-[22px] w-[356px] h-[239px]">
          <FaComments className="text-[#0C1C63] w-[26.67px] h-[30px] mt-[5px] ml-[6.67px]" />
          <h3 className="font-['Inter'] font-semibold text-[24px] leading-[100%]">
            Counseling Services
          </h3>
          <p className="font-['Inter'] font-light text-[16px] leading-[100%] text-gray-700">
            Personalized emotional support to heal past traumas and build inner strength.
          </p>
        </div>
      </div>
      
      <button className="bg-blue-900 text-white font-medium py-2 px-6 rounded-full mt-4">
        Learn More
      </button>
    </div>
  );
};

export default OurPrograms;