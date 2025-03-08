import React from "react";
import img from "../../assets/About-1.png";
import img1 from "../../assets/About-2.png";
import img2 from "../../assets/About-3.png";
import img3 from "../../assets/About-4.png";

const WhoWeAre = () => {
  return (
    <div className="border overflow-hidden bg-white">
      <div className="py-10 px-6">
      <h1 className="font-bebas font-normal text-[40px] leading-[100%] tracking-[0%] text-center text-black">
          WHO ARE WE
        </h1>
        <p className="text-center mx-auto w-[75%] text-black leading-relaxed mt-4  font-inter">
          Nestled in the heart of Pune, Jivhala Foundation is a beacon of hope
          for young girls from underprivileged communities. Since 2015, we have
          been committed to empowering these girls to overcome barriers to
          education, healthcare, and emotional support.
        </p>
        <p className="text-center text-black leading-relaxed mt-4 font-inter">
          Founded by Adv. Sharvari Muthe, we offer a sanctuary where dreams take
          flight and potential blossoms into purpose.
        </p>
      </div>
      <div className="bg-pink-200 grid grid-cols-4 gap-4 h-72">
  {/* Image 1 - Bottom Right */}
  <div className="rounded-md overflow-hidden flex justify-end items-end relative h-full">
    <img src={img} alt="Image 1" className="w-full h-auto block self-end pl-4" />
  </div>

  {/* Image 2 - Touching Top & Centered */}
  <div className="rounded-md overflow-hidden flex items-start">
    <img src={img1} alt="Image 2" className="w-full h-auto block " />
  </div>

  {/* Image 3 - Bottom Right */}
  <div className="rounded-md overflow-hidden flex justify-end items-end relative h-full">
    <img src={img2} alt="Image 3" className="w-full h-auto block self-end pl-4" />
  </div>

  {/* Image 4 - Touching Top & Centered */}
  <div className="rounded-md overflow-hidden flex items-start">
    <img src={img3} alt="Image 4" className="w-full h-auto block" />
  </div>
</div>
    </div>
  );
};

export default WhoWeAre;
