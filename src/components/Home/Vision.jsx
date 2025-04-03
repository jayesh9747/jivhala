import React from "react";

const Vision = () => {
  return (
    <div className="bg-white text-black flex items-center justify-center w-full">
      <div
        className="w-full mx-auto p-5 lg:p-10 md:p-8 sm:p-6 rounded-lg text-center"
        style={{ boxShadow: "0px 0px 1.3px 0px #00000040" }}
      >
        <div className="mx-auto w-full lg:w-9/12">
          {/* Heading */}
          <h1 className="font-['Bebas_Neue'] font-normal text-[34px] lg:text-[48px] leading-[100%] tracking-[0%] text-center mt-4 lg:mt-8 mb-4 lg:mb-8 ">
            OUR VISION
          </h1>

          {/* Description */}
          <p className="font-['Inter'] font-light text-[11px] lg:text-[20px] leading-[100%] tracking-[5%] opacity-85 text-center mb-8">
            A world where every girl is empowered with education, support, and
            opportunities to achieve her dreams, breaking barriers and
            transforming communities.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Vision;
