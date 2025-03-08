import React from 'react';

const PerspectiveSection = () => {
  return (
    <div className="flex flex-col bg-white p-3 lg:p-6 border-[#FB9EBB] border ">
      <div className="mb-8 lg:mb-16 mt-6 lg:mt-10">
      <h2 className="font-['Bebas_Neue'] font-normal text-[24px] lg:text-[48px] leading-[100%] tracking-[0%] text-center">
      THE REALITY OF UNDERPRIVILEGED CHILDREN
      </h2>
      </div>
      
      <div className="flex flex-col lg:flex-row items-stretch mb-8 justify-center gap-8 2xl:gap-12 px-2 md:px-6 xl:px-12 w-full md:max-w-4xl lg:max-w-6xl xl:max-w-7xl mx-auto">
        {/* Left Box - India Statistics */}
        <div className="bg-[#0C1C63] text-white shadow-lg rounded-lg flex-1 px-3 2xl:px-6 pb-12 pt-6">
          <p className="text-lg lg:text-2xl font-medium mb-4 lg:mb-8">
            India Statistics
          </p>
          
          <div className="mb-4">
            <p className="flex items-baseline">
              <span className=" text-2xl lg:text-5xl font-bold text-[#FFDBD1]">29.6%</span>
              <span className="text-xs lg:text-sm ml-2">children live below poverty line</span>
            </p>
          </div>
          
          <div>
            <p className="flex flex-row items-baseline">
              <span className="text-2xl lg:text-5xl font-bold text-[#FFDBD1]">35 million</span>
              <span className="text-xs lg:text-sm ml-2">children don't attend school</span>
            </p>
          </div>
        </div>
        
        {/* Right Box - Global Statistics */}
        <div className="bg-[#0C1C63] text-white shadow-lg rounded-lg flex-1 px-3 2xl:px-6 pt-6 pb-12">
          <p className="text-lg lg:text-2xl font-medium mb-8">
            Global Statistics
          </p>
          
          <div className="mb-4">
            <p className="flex items-baseline">
              <span className="text-2xl lg:text-5xl font-semibold text-[#FFDBD1]">333 million</span>
              <span className="text-xs lg:text-sm ml-2">children live in extreme poverty</span>
            </p>
            
          </div>
          
          <div>
            <p className="flex items-baseline">
              <span className="text-2xl lg:text-5xl font-semibold text-[#FFDBD1]">244 million</span>
              <span className="text-xs lg:text-sm ml-2">children are out of school</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PerspectiveSection;