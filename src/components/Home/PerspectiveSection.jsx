import React from 'react';

const PerspectiveSection = () => {
  return (
    <div className="flex flex-col bg-white p-6">
      <div className="mb-6">
        <h2 className="text-center text-4xl font-bold">
          THE REALITY OF UNDERPRIVILEGED CHILDREN
        </h2>
      </div>
      
      <div className="flex flex-col md:flex-row items-stretch justify-center gap-6 w-full max-w-5xl mx-auto">
        {/* Left Box - India Statistics */}
        <div className="bg-[#0C1C63] text-white shadow-lg rounded-lg flex-1 p-6">
          <p className="text-base font-medium mb-4">
            India Statistics
          </p>
          
          <div className="mb-4">
            <p className="flex items-baseline">
              <span className="text-5xl font-bold text-yellow-400">29.6%</span>
              <span className="text-sm ml-2">children live below poverty line</span>
            </p>
          </div>
          
          <div>
            <p className="flex items-baseline">
              <span className="text-5xl font-bold text-yellow-400">35 million</span>
            </p>
            <p className="text-sm mt-1">children don't attend school</p>
          </div>
        </div>
        
        {/* Right Box - Global Statistics */}
        <div className="bg-[#0C1C63] text-white shadow-lg rounded-lg flex-1 p-6">
          <p className="text-base font-medium mb-4">
            Global Statistics
          </p>
          
          <div className="mb-4">
            <p className="flex items-baseline">
              <span className="text-5xl font-bold text-yellow-400">333 million</span>
            </p>
            <p className="text-sm mt-1">children live in extreme poverty</p>
          </div>
          
          <div>
            <p className="flex items-baseline">
              <span className="text-5xl font-bold text-yellow-400">244 million</span>
            </p>
            <p className="text-sm mt-1">children are out of school</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PerspectiveSection;