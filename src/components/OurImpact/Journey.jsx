import React from "react";

// Import images
import photo1 from "../../assets/ourimpact-1.png";
import photo2 from "../../assets/ourimpact-2.png";
import photo3 from "../../assets/ourimpact-3.png";
import photo4 from "../../assets/ourimpact-4.png";

const Journey = () => {
  return (
    <div className="bg-blue-jivhala w-full p-4 sm:p-8 relative overflow-hidden min-h-screen">
      <div className="w-[100vw] sm:hidden bg-black flex justify-end">
        <div className="absolute w-[70vw] mt-4 h-[20vh] p-2">
          <img
            src={photo1}
            alt="Background"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
      </div>
      {/* Title */}
      <h1 className="text-white text-4xl font-bold mb-12 z-10 relative">
        GIRLS' JOURNEYS AT JIVHALA
      </h1>

      {/* Large quotation marks */}

      <div
        className="absolute top-[70px] sm:top-0 md:top-[34px] font-bebas left-5 text-[#FB9EBB]  z-20"
        style={{
          fontFamily: "Bebas Neue",
          fontWeight: "400",
          fontSize: "231.22px",
          lineHeight: "346.82px",
          letterSpacing: "0%",
          textAlign: "center",
        }}
      >
        "
      </div>

      <div
        className="absolute -bottom-[198px] right-20 sm:mb-16 sm:right-8 xl:-bottom-[270px] 2xl:-bottom-[275px] text-[#FB9EBB] z-20"
        style={{
          fontFamily: "Bebas Neue",
          fontWeight: "400",
          fontSize: "231.22px",
          lineHeight: "346.82px",
          letterSpacing: "0%",
          textAlign: "center",
        }}
      >
        "
      </div>

      {/* Background images with low opacity in a 4x4 grid */}
      <div className="hidden absolute pt-24 pb-20 inset-0 z-0 sm:grid grid-cols-4 grid-rows-4">
        {/* Row 1: [0, 0, 1, 1] */}
        <div className="col-start-1 col-span-1 row-start-1 row-span-1"></div>
        <div className="col-start-2 col-span-1 row-start-1 row-span-1"></div>
        <div className="col-start-3 col-span-1 row-start-1 row-span-1">
          <div className="w-full h-full p-2">
            <img
              src={photo1}
              alt="Background"
              className="w-full h-full object-cover opacity-20"
            />
          </div>
        </div>
        <div className="col-start-4 col-span-1 row-start-1 row-span-1">
          <div className="w-full h-full p-2">
            <img
              src={photo2}
              alt="Background"
              className="w-full h-full object-cover  opacity-20"
            />
          </div>
        </div>

        {/* Row 2 & 3: [0, 0, 0, 0] - Empty rows */}

        {/* Row 4: [1, 1, 1, 0] */}
        <div className="col-start-1 col-span-1 row-start-4 row-span-1">
          <div className="w-full h-full p-2">
            <img
              src={photo3}
              alt="Background"
              className="w-full h-full object-cover  opacity-20"
            />
          </div>
        </div>
        <div className="col-start-2 col-span-1 row-start-4 row-span-1">
          <div className="w-full h-full p-2">
            <img
              src={photo3}
              alt="Background"
              className="w-full h-full object-cover  opacity-20"
            />
          </div>
        </div>
        <div className="col-start-3 col-span-1 row-start-4 row-span-1">
          <div className="w-full h-full p-2">
            <img
              src={photo4}
              alt="Background"
              className="w-full h-full object-cover opacity-20"
            />
          </div>
        </div>
        <div className="col-start-4 col-span-1 row-start-4 row-span-1"></div>
      </div>

      {/* 4x3 Grid for text boxes - Keeping the original positioning */}
      <div className="hidden sm:grid grid-cols-3 grid-rows-4 gap-4 relative z-10 h-full">
        {/* Row 1: [1, 0, 0] */}
        <div className="col-span-1 row-span-1">
          <div className="bg-white rounded-md p-4 shadow h-full">
            <h3 className="text-blue-900 text-xl font-roboto font-bold mb-2">
              Chaya's Journey
            </h3>
            <p className="text-gray-700 text-sm">
              Chaya joined Jivhala Foundation at a crossroads in life, facing
              challenges that she chose to rise above. Education transformed
              her, and she now dreams of becoming a fashion designer.
            </p>
          </div>
        </div>
        <div className="col-span-1 row-span-1"></div>
        <div className="col-span-1 row-span-1"></div>

        {/* Row 2: [1, 1, 0] */}
        <div className="col-span-1 row-span-1">
          <div className="bg-white rounded-md p-4 shadow h-full">
            <h3 className="text-blue-900 text-xl  font-roboto font-bold mb-2">
              Aarohi's Journey
            </h3>
            <p className="text-gray-700 text-sm">
              Aarohi, a bright 12-year-old, loves writing and art. She dreams of
              self-reliance and aims to inspire others through her journey at
              Jivhala Foundation.
            </p>
          </div>
        </div>
        <div className="col-span-1 row-span-1">
          <div className="bg-white rounded-md p-4 shadow h-full">
            <h3 className="text-blue-900 text-xl font-roboto font-bold mb-2">
              Sarika's Journey
            </h3>
            <p className="text-gray-700 text-sm">
              Sarika found a home at Jivhala Foundation, where her passion for
              learning flourished. She dreams of opening her own parlor and
              empowering other girls through education.
            </p>
          </div>
        </div>
        <div className="col-span-1 row-span-1"></div>

        {/* Row 3: [0, 1, 1] */}
        <div className="col-span-1 row-span-1"></div>
        <div className="col-span-1 row-span-1">
          <div className="bg-white rounded-md p-4 shadow h-full">
            <h3 className="text-blue-900 font-roboto text-xl font-bold mb-2">
              Deepa's Story
            </h3>
            <p className="text-gray-700 text-sm">
              At just eight, Deepa is ambitious and dreams of becoming a doctor.
              She wants to build a school for underprivileged kids, believing
              every child deserves education.
            </p>
          </div>
        </div>
        <div className="col-span-1 row-span-1">
          <div className="bg-white rounded-md p-4 shadow h-full">
            <h3 className="text-blue-900 text-xl font-roboto font-bold mb-2">
              Rekha's Journey
            </h3>
            <p className="text-gray-700 text-sm">
              At just 13, Rekha is a beacon of hope. With a love for English and
              art, she dreams of helping others access education, proving
              success is about lifting others.
            </p>
          </div>
        </div>

        {/* Row 4: [0, 0, 1] */}
        <div className="col-span-1 row-span-1"></div>
        <div className="col-span-1 row-span-1"></div>
        <div className="col-span-1 row-span-1">
          <div className="bg-white rounded-md p-4 shadow h-full">
            <h3 className="text-blue-900 font-roboto text-xl font-bold mb-2">
              Archana's Journey
            </h3>
            <p className="text-gray-700 text-sm">
              Archana, a 9-year-old, is passionate about helping others. She
              dreams of being a doctor and starting her own school to empower
              young girls.
            </p>
          </div>
        </div>
      </div>

      {/* mobile view  */}
      <div className="flex z-50 sm:hidden flex-col">
        <div className="flex flex-col my-10 gap-4">
          <div className="bg-white rounded-md p-4 shadow h-full w-[80%]">
            <h3 className="text-blue-900 text-xl font-roboto font-bold mb-2">
              Chaya's Journey
            </h3>
            <p className="text-gray-700 text-sm">
              Chaya joined Jivhala Foundation at a crossroads in life, facing
              challenges that she chose to rise above. Education transformed
              her, and she now dreams of becoming a fashion designer.
            </p>
          </div>

          <div className="bg-white rounded-md p-4 shadow h-full w-[80%]">
            <h3 className="text-blue-900 text-xl  font-roboto font-bold mb-2">
              Aarohi's Journey
            </h3>
            <p className="text-gray-700 text-sm">
              Aarohi, a bright 12-year-old, loves writing and art. She dreams of
              self reliance and aims to inspire others through her journey at
              Jivla Foundation.
            </p>
          </div>
        </div>

        <div className="flex flex-col my-10 gap-4 items-end">
          <div className="bg-white rounded-md p-4 shadow h-full w-[80%]">
            <h3 className="text-blue-900 text-xl font-roboto font-bold mb-2">
              Sarika's Journey
            </h3>
            <p className="text-gray-700 text-sm">
              Sarika found a home at Jivhala Foundation, where her passion for
              learning flourished. She dreams of opening her own parlor and
              empowering other girls through education.
            </p>
          </div>
          <div className="bg-white rounded-md p-4 shadow h-full w-[80%]">
            <h3 className="text-blue-900 font-roboto text-xl font-bold mb-2">
              Deepa's Story
            </h3>
            <p className="text-gray-700 text-sm">
              At just eight, Deepa is ambitious and dreams of becoming a doctor.
              She wants to build a school for underprivileged kids, believing
              every child deserves education.
            </p>
          </div>
        </div>

        <div className="flex flex-col my-10 gap-4">
          <div className="bg-white rounded-md p-4 shadow h-full w-[80%]">
            <h3 className="text-blue-900 text-xl font-roboto font-bold mb-2">
              Rekha's Journey
            </h3>
            <p className="text-gray-700 text-sm">
              At just 13, Rekha is a beacon of hope. With a love for English and
              art, she dreams of helping others access education, proving
              success is about lifting others.
            </p>
          </div>

          <div className="bg-white rounded-md p-4 shadow h-full w-[80%]">
            <h3 className="text-blue-900 font-roboto text-xl font-bold mb-2">
              Archana's Journey
            </h3>
            <p className="text-gray-700 text-sm">
              Archana, a 9-year-old, is passionate about helping others. She
              dreams of being a doctor and starting her own school to empower
              young girls.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Journey;
