import React from "react";
import "./Sidebar.css";

type Props = {};

const renderSDGImages = () => {
  const sdgBlocks = [];

  for (let i = 1; i <= 17; i++) {
    sdgBlocks.push(
        <img
          key={i}
          src={`/images/sdgs/sdg-${i < 10 ? '0' + i : i}.svg`}
          className={`bg-sdg${i} block w-[64px] h-[64px] rounded-sm p-2 m-1 hover:scale-105 transition duration-100 cursor-pointer`}
          alt={`SDG ${i}`}
        />
      );
  }

  return sdgBlocks;
};

const Sidebar: React.FC<Props> = () => {
  return (
    <div className="sideBar backdrop-blur-[6px]">
      <div className="pt-10 text-base">
        {/* SDGs Filter */}
        <p className="text-l">ตัวกรองผลลัพธ์การค้นหา SDGs</p>
        <div className="bg-gray-100 mx-auto mb-5 p-5 rounded-lg flex flex-wrap">
          {renderSDGImages()}
        </div>
        {/* Lastest News */}
        <p className="text-l">ผลการค้นหา</p>
        <div className="bg-gray-100 mx-auto mb-5 p-5 rounded-lg flex flex-wrap">
          test
        </div>        
      </div>
    </div>
  );
};

export default Sidebar;
