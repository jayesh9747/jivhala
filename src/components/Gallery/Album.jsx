
// Album.jsx
import React from 'react';
import PhotoGrid from './PhotoGrid';
import part1_1 from '../../assets/part1_1.png';
import part1_2 from '../../assets/part1_2.png';
import part1_3 from '../../assets/part1_3.png';
import part1_4 from '../../assets/part1_4.png';
import part1_5 from '../../assets/part1_5.png';
import part1_6 from '../../assets/part1_6.png';
import part2_1 from '../../assets/part2_1.png';
import part2_2 from '../../assets/part2_2.png';
import part2_3 from '../../assets/part2_3.png';
import part2_4 from '../../assets/part2_4.png';
import part2_5 from '../../assets/part2_5.png';
import part2_6 from '../../assets/part2_6.png';



const Album = () => {
  // Create three different sets of images from our imported assets
  const gridOneImages = {
    leftTop: part1_1,
    leftBottom: part1_2,
    center: part1_3,
    rightTop: part1_4,
    rightBottomLeft: part1_5,
    rightBottomRight: part1_6
  };
  
  const gridTwoImages = {
    leftTop: part2_1,
    leftBottom: part2_2,
    center: part2_3,
    rightTop: part2_4,
    rightBottomLeft: part2_5,
    rightBottomRight: part2_6
  };
  
  const gridThreeImages = {
    leftTop: part1_3,
    leftBottom: part1_4,
    center: part1_1,
    rightTop: part1_2,
    rightBottomLeft: part1_6,
    rightBottomRight: part1_5
  };

  return (
    <div className=" mx-auto bg-[#FEDCD2] w-full px-10 lg:px-16 py-10 ">
      <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
        <PhotoGrid 
          title="Spreading Joy to Everyone" 
          images={gridOneImages} 
        />
        
        <PhotoGrid 
          title="Our Humble Abode" 
          images={gridTwoImages} 
        />
        
        <PhotoGrid 
          title="Happy Moments" 
          images={gridThreeImages} 
        />
      </div>
    </div>
  );
};

export default Album;