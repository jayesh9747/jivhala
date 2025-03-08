import { useRef } from "react";
import { Link } from "react-router-dom";
import heroImg2 from "../../assets/Homepage.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HeroSection = () => {
  const sliderRef = useRef(null);

  return (
    <div className="flex md:mt-8 flex-col justify-center items-center w-full min-h-auto">
      <div className="w-full bg-[#FEDCD2] relative shadow-lg overflow-hidden flex flex-row items-center">
        <div className="w-[420px] md:w-4/12 lg:w-4/12 bg-[#FEDCD2]"></div>

        {/* Background Image Container */}
        <div className="relative -right-2 -bottom-2 lg:right-0 lg:bottom-0 h-[332px] sm:h-[398px] md:h-[660px] w-[345px] md:w-[1024px] lg:w-10/12 xl:w-9/12">
          {/* Background Image */}
          <div
            className="absolute inset-0 inset-x-1 bg-cover bg-center"
            style={{ backgroundImage: `url(${heroImg2})` }}
          ></div>

          {/* Gradient Overlay */}
          <div
            className="absolute inset-y-0 left-0 w-3/4"
            style={{
              background: "linear-gradient(to right, rgba(254, 220, 210, 1), rgba(255, 255, 255, 0))",
            }}
          ></div>
        </div>

        {/* Content Over Image */}
        <div className="absolute my-auto left-[20px] md:left-[30px] lg:left-[80px] inset-y-0 flex flex-col lg:gap-4 justify-center items-start p-6 space-y-4 text-white lg:ml-12 font-quicksand">
          <div className="leading-tight sm:leading-tight md:leading-snug lg:leading-[55px]">
            <div className="flex flex-col gap-y-0 sm:gap-y-6">
              <p className="text-[20px] leading-[110%] tracking-[8%] font-bebas text-[#0B1957] sm:text-2xl md:text-[60px] lg:text-[60px] font-normal">EMPOWERING GIRLS,</p>
              <p className="text-[20px] leading-[110%] tracking-[8%] font-bebas text-[#0B1957] sm:text-2xl md:text-[60px] lg:text-[60px] font-normal">TRANSFORMING COMMUNITIES</p>
            </div>
          </div>
          <div>
            <p className="text-[9px] text-[#0B1957] sm:text-[9px] md:text-lg font-inter leading-[11px]">
              <span>We nurture confidence, resilience, and hope to create</span>
              <br />
              <span>empowered, independent leaders who uplift their</span>
              <br />
              <span>families and communities.</span>
            </p>
          </div>
          <div className="flex gap-2 font-quicksand mt-10">
            <Link to="/donate">
              <button className="bg-[#0B1957]  rounded-lg shadow-md text-[9px] sm:text-[9px] md:text-[20px] px-12 py-3">
                Donate
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
