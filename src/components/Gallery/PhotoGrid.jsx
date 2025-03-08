// PhotoGrid.jsx
import React from "react";

const PhotoGrid = ({ title, images }) => {
  // Destructure images with defaults for safety
  const {
    leftTop = "/api/placeholder/150/100",
    leftBottom = "/api/placeholder/150/100",
    center = "/api/placeholder/400/200",
    rightTop = "/api/placeholder/300/150",
    rightBottomLeft = "/api/placeholder/150/100",
    rightBottomRight = "/api/placeholder/150/100",
  } = images || {};

  return (
    <div className="bg-white w-full p-4 rounded-xl shadow-md">
      {/* Title Section */}
      <h1 className="text-2xl font-bold text-left mb-6">
        {title || "Spreading Joy to Everyone"}
      </h1>

      {/* Photo Grid Layout */}
      <div className="grid grid-cols-12 gap-2">
        {/* Left Column - Small Images */}
        <div className="col-span-2 flex flex-col gap-2">
          <div className="bg-white">
            <img src={leftTop} alt="Group photo 1" className="w-full h-auto" />
          </div>
          <div className="bg-white">
            <img
              src={leftBottom}
              alt="Group photo 2"
              className="w-full h-auto "
            />
          </div>
        </div>

        {/* Center Column - Large Image */}
        <div className="col-span-6 bg-white">
          <img src={center} alt="Main group photo" className="w-full h-auto" />
        </div>

        {/* Right Column - Large and Small Images */}
        <div className="col-span-4 flex flex-col gap-2">
          <div className="bg-white ">
            <img
              src={rightTop}
              alt="Featured group"
              className="w-full h-auto"
            />
          </div>
          <div className="flex gap-2">
            <div className="bg-white w-1/2 h-full">
              <img
                src={rightBottomLeft}
                alt="Small group 1"
                className="w-full h-full"
              />
            </div>
            <div className="bg-white w-1/2 h-fit">
              <img
                src={rightBottomRight}
                alt="Small group 2"
                className="w-full h-fit"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoGrid;
