import React from "react";
import img from "../../assets/img1.png";

const WhoWeAre = () => {
  return (
    <div className="border border-blue-300 bg-sky-50 rounded-md overflow-hidden">
      <div className="py-10 px-6">
        <h2 className="text-center text-3xl font-bold text-gray-800">
          WHO ARE WE
        </h2>
        <p className="text-center text-gray-700 leading-relaxed mt-4">
          Nestled in the heart of Pune, Jivhala Foundation is a beacon of hope
          for young girls from underprivileged communities. Since 2015, we have
          been committed to empowering these girls to overcome barriers to
          education, healthcare, and emotional support.
        </p>
        <p className="text-center text-gray-700 leading-relaxed mt-4">
          Founded by Adv. Sharvari Muthe, we offer a sanctuary where dreams take
          flight and potential blossoms into purpose.
        </p>
      </div>
      <div className="bg-pink-200 py-6 grid grid-cols-2 gap-4 px-6">
        <div className="rounded-md overflow-hidden">
          <img src={img} alt="Image 1" className="w-full h-auto block" />
        </div>
        <div className="rounded-md overflow-hidden">
          <img src={img} alt="Image 2" className="w-full h-auto block" />
        </div>
        <div className="rounded-md overflow-hidden">
          <img src={img} alt="Image 3" className="w-full h-auto block" />
        </div>
        <div className="rounded-md overflow-hidden">
          <img src={img} alt="Image 4" className="w-full h-auto block" />
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
