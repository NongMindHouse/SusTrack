import React from "react";
import "./Sidebar.css";

type Props = {};

// const RenderSDGBlocks = () => {
//   const sdgBlocks = [];

//   for (let i = 1; i <= 17; i++) {
//     sdgBlocks.push(
//       return (
//         <img
//           key={i}
//           src={`/images/sdgs/sdg-${i < 10 ? '0' + i : i}.svg`}
//           className={`bg-sdg${i} block w-[64px] h-[64px] rounded-sm p-2 m-1 hover:scale-105 transition duration-100 cursor-pointer`}
//           alt={`SDG ${i}`}
//         />
//       );
//   }
//   return sdgBlocks
// };

const RenderSDGBlocks = (i:number) => {
  // let className = "sdg-block";
  // if(i==1) className = "bg-sdg1 sdg-block";
  // else if(i==2) className = "bg-sdg2 sdg-block";
  // else if(i==3) className = "bg-sdg3 sdg-block";
  // else if(i==4) className = "bg-sdg4 sdg-block";
  // else if(i==5) className = "bg-sdg5 sdg-block";
  // else if(i==6) className = "bg-sdg6 sdg-block";
  // else if(i==7) className = "bg-sdg7 sdg-block";
  // else if(i==8) className = "bg-sdg8 sdg-block";
  // else if(i==9) className = "bg-sdg9 sdg-block";
  // else if(i==10) className = "bg-sdg10 sdg-block";
  // else if(i==11) className = "bg-sdg11 sdg-block";
  // else if(i==12) className = "bg-sdg12 sdg-block";
  // else if(i==13) className = "bg-sdg13 sdg-block";
  // else if(i==14) className = "bg-sdg14 sdg-block";
  // else if(i==15) className = "bg-sdg15 sdg-block";
  // else if(i==16) className = "bg-sdg16 sdg-block";
  // else if(i==17) className = "bg-sdg17 sdg-block";
  // console.log(className);
    return (
       <img
          key={i}
          src={`/images/sdgs/sdg-${i < 10 ? '0' + i : i}.svg`}
          className={`sdg-block bg-sdg${i}`}
          alt={`SDG ${i}`}
        />
        );
};

const RenderProjectCard = () =>{
  return (
    <div className="bg-gray-300 p-3 rounded-lg block">
    </div>
  );
};

const Sidebar: React.FC<Props> = () => {
  return (
    <div className="sideBar backdrop-blur-[6px]">
      <div className="pt-10 text-base">
        {/* SDGs Filter */}
        <p className="text-l">ตัวกรองผลลัพธ์การค้นหา SDGs</p>
        <div className="bg-gray-100 mx-auto mb-5 p-5 rounded-lg flex flex-wrap">
          {RenderSDGBlocks(1)}
          {RenderSDGBlocks(2)}
          {RenderSDGBlocks(3)}
          {RenderSDGBlocks(4)}
          {RenderSDGBlocks(5)}
          {RenderSDGBlocks(6)}
          {RenderSDGBlocks(7)}
          {RenderSDGBlocks(8)}
          {RenderSDGBlocks(9)}
          {RenderSDGBlocks(10)}
          {RenderSDGBlocks(11)}
          {RenderSDGBlocks(12)}
          {RenderSDGBlocks(13)}
          {RenderSDGBlocks(14)}
          {RenderSDGBlocks(15)}
          {RenderSDGBlocks(16)}
          {RenderSDGBlocks(17)}
        </div>
        {/* Lastest News */}
        <p className="text-l">ผลการค้นหา</p>
        <div className="bg-gray-100 mx-auto mb-5 p-5 rounded-lg flex-col gap-y-[10px] items-start justify-start">
          {RenderProjectCard()}
          {RenderProjectCard()}
        </div>        
      </div>
    </div>
  );
};

export default Sidebar;
