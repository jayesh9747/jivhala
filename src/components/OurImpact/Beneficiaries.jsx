import React from "react";

import photo1 from "../../assets/ourimpact-1.png";
import photo2 from "../../assets/ourimpact-2.png";
import photo3 from "../../assets/ourimpact-3.png";
import photo4 from "../../assets/ourimpact-4.png";

import Achivement1 from "../../assets/Achivement-1.png";
import Achivement2 from "../../assets/Achivement-2.png";
import Achivement3 from "../../assets/Achivement-3.png";
import Achivement4 from "../../assets/Achivement-4.png";

import tickmark from "../../assets/tickmark.png";

const Beneficiaries = () => {
  return (
    <div className="flex flex-col md:flex-row bg-white shadow-sm">
      {/* Left Section */}
      <div className="sm:pr-4 p-4 sm:p-12 max-w-sm:w-full sm:w-7/12">
        <h2 className="font-bebas font-normal text-5xl leading-[100%] tracking-[0%] text-start text-black">BENEFICIARIES</h2>
        <p className="mb-4 mt-5 md:w-full text-gray-700 text-xl">
          At the{" "}
          <span className="font-extrabold font-inter">
            Suresh Muthe Residential Hostel
          </span>
          —future doctors, artists, and leaders. We proudly support
        </p>

        <h3 className="text-4xl font-bold text-blue-jivhala font-inter mb-6">
          45 remarkable girls
        </h3>

        <div className="bg-white border border-gray-200  px-6 pt-7 pb-9 rounded-lg mb-6">
          <h4 className="text-2xl font-semibold text-[#0B1956] mb-5">
            Our Achievements
          </h4>

          <ul className="space-y-3">
            <li className="flex items-center">
              <img
                src={Achivement1}
                alt="Achievement 1"
                className="w-5 h-5 mr-2"
              />
              <span className="text-lg">
                Over
                <span className="font-semibold"> 1,000 graduates</span> from
                Anuradha Primary School.
              </span>
            </li>
            <li className="flex items-center">
              <img
                src={Achivement2}
                alt="Achievement 2"
                className="w-5 h-5 mr-2"
              />
              <span className="text-lg">
                Annual talent gatherings fostering self-expression.
              </span>
            </li>
            <li className="flex items-center">
              <img
                src={Achivement3}
                alt="Achievement 3"
                className="w-5 h-5 mr-2"
              />
              <span className="text-lg">
                Employment support for mothers of hostel residents.
              </span>
            </li>
            <li className="flex items-center">
              <img
                src={Achivement4}
                alt="Achievement 4"
                className="w-5 h-5 mr-2"
              />
              <span className="text-lg">
                Career inspiration sessions during Navratri featuring successful
                women.
              </span>
            </li>
          </ul>
        </div>

        <div className="bg-white border border-gray-200  px-6 pt-7 pb-9 rounded-lg mb-6">
          <h4 className="text-2xl font-semibold text-[#0B1956] mb-5">
            Expected Outcomes
          </h4>

          <ul className="space-y-2">
            <li className="flex items-center">
              <img
                src={tickmark}
                alt="Achievement 4"
                className="w-5 h-5 mr-2"
              />
              <span className="text-lg">
                Academic growth and love for learning.
              </span>
            </li>
            <li className="flex items-center">
              <img
                src={tickmark}
                alt="Achievement 4"
                className="w-5 h-5 mr-2"
              />
              <span className="text-lg">Health and emotional well-being.</span>
            </li>
            <li className="flex items-center">
              <img
                src={tickmark}
                alt="Achievement 4"
                className="w-5 h-5 mr-2"
              />
              <span className="text-lg">Inner strength and resilience.</span>
            </li>
            <li className="flex items-center">
              <img
                src={tickmark}
                alt="Achievement 4"
                className="w-5 h-5 mr-2"
              />
              <span className="text-lg">
                Role models inspiring their communities.
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* Right Section - Photo Collage */}
      <div className="w-full  sm:w-[472px] md:w-[572px] lg:w-5/12 h-full mt-6 md:mt-0 mx-auto">
        <div className="relative w-full max-w-2xl mx-auto">
          <div className="bg-[#FB9EBB] right-0 p-0 md:pl-12 py-4">
            <div className="flex flex-col gap-2 md:gap-4">
              {/* Top large image */}
              <div className="rounded">
                <div className="w-full lg:aspect-[619/357] md:aspect-[719/450] overflow-hidden">
                  <img
                    src={photo1}
                    alt="Group of girls at the hostel"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Middle row of images */}
              <div className="grid grid-cols-2 gap-2 md:gap-4">
                <div className="rounded">
                  <div className="w-full aspect-[303/270] overflow-hidden">
                    <img
                      src={photo2}
                      alt="Hostel staff with residents"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="rounded">
                  <div className="w-full aspect-[303/270] overflow-hidden">
                    <img
                      src={photo3}
                      alt="Group activity at the hostel"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Bottom image */}
              <div className="rounded">
                <div className="w-full aspect-[617/414] overflow-hidden">
                  <img
                    src={photo4}
                    alt="Children at the hostel"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Beneficiaries;
