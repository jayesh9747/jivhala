import { useRef } from "react";
import { Link } from "react-router-dom";
import heroImg2 from "../../assets/Homepage.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HeroSection = () => {
  const sliderRef = useRef(null);

  return (
    <div className="flex flex-col justify-center items-center w-full min-h-auto">
      <div className="w-full bg-[#FEDCD2] shadow-lg overflow-hidden flex flex-row items-center">
        <div className="w-[340px] bg-[#FEDCD2]"></div>

        {/* Background Image Container */}
        <div className="relative h-64 sm:h-[248px] md:h-[660px] md:w-[1004px]">
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
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
        <div className="absolute top-[176px] left-[80px] h-[332px] inset-y-0 flex flex-col lg:gap-4 justify-center items-start p-6 space-y-4 text-white lg:ml-12 font-quicksand">
          <div className="leading-tight sm:leading-tight md:leading-snug lg:leading-[55px]">
            <h1 className="text-[17px] text-[#0B1957] sm:text-2xl md:text-3xl lg:text-4xl font-bold">
              <p>EMPOWERING GIRLS,</p>
              <p>TRANSFORMING COMMUNITIES</p>
            </h1>
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
              <button className="bg-[#0B1957] hover:bg-yellow-500 rounded-3xl shadow-md text-[9px] sm:text-[9px] md:text-[20px] lg:text-[25px] w-[65px] h-[19px] sm:w-[65px] sm:h-[19px] md:w-[193px] md:h-[57px] lg:w-[151px] lg:h-[45px]">
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
