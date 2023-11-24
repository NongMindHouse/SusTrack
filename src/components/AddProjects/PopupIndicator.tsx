import React from "react";
import { sdgColorList } from "@/utils/sdgColors";

type Props = {
  isOpen:boolean,
  activeTab:number,
};

const PopupIndicator:React.FC<Props> = ({activeTab,isOpen}) => {
  const Test = (i:number) => {
    activeTab = i
    console.log(activeTab)
  }

  return(
  <div
  className="w-full h-full fixed top-0 z-10"
  style={{
    visibility: isOpen ? "visible":"hidden"
  }}
  >
    <div className="bg-[rgba(0,0,0,0.4)] w-full h-full flex justify-center items-center">
      <div className="md:w-[500px] lg:w-[800px] xl:w-[1000px] 2xl:w-[1400px]
      p-3 rounded-lg flex flex-col mt-20 relative"
      >
        {/* TABS */}
        <div className="w-full grid" style={{
          gridTemplateColumns:'repeat(17, minmax(0, 1fr))',
          gap:'0.25rem'
        }}
        >
        {sdgColorList.map((color, i: number) => (
            <div
            className="transition duration-100 cursor-pointer hover:scale-110"
            style={{
              // visibility: activeTab == i ? "hidden" : "visible",
              backgroundColor: color,
              // opacity: activeTab == i ? 1 : 0.4,
              // transition:'opacity 0.1s ease-in-out',
              // filter: activeTab == i ? 'none' : 'grayscale(60%)'
            }}>
              <img
              key={i}
              src={`/images/sdgs/sdg-${i+1}.svg`}
              // className={
              //   selectedSDG.includes(i) ?
              //   "opacity-100 block w-[64px] h-[64px] rounded-sm p-3 m-1" :
              //   "block w-[64px] h-[64px] rounded-sm p-3 m-1"
              // }
              className = "w-[32px] h-[32px] rounded-sm p-[3px] mx-auto my-1"
              alt={`SDG ${i}`}
              onClick={() => Test(i)}
              />
            </div>
        ))}
        </div>
        <div className="bg-white p-5 rounded-b-lg h-[500px] 2xl:h-[700px]">
          {/* BANNER GOAL */}
          <div className="absolute top-[75px] -left-[40px] w-[80px] h-[120px]
          flex flex-col justify-center items-center text-white"
          style={{
            backgroundColor: sdgColorList[activeTab]
          }}
          >
            <img
            src={`/images/sdgs/sdg-${activeTab+1}.svg`}
            className = "w-full h-[32px] rounded-sm p-[3px] mx-auto my-1"
            />
            <p className="text-[14px]">
              เป้าหมาย
            </p>
            <p className="text-[20px] font-extrabold">
              {activeTab+1}
            </p>
          </div>
          {/* CONTAINTER */}
          <div className="ml-8 mr-4 flex flex-col">
            <form>
              {/* GOAL TEXT */}
              <div className="">
                <p className="text-[28px] my-2">
                  <input type="checkbox" value="SDG1"
                  className="w-7 h-7 mr-4 accent-green-600" />
                  <p className="inline-block "> เป้าหมายที่ 1 ยุติความจนในทุกรูปแบบ </p>
                </p>
              </div>
              {/* INDICATOR CONTAINER */}
              <div className="bg-gray-200 h-[360px] 2xl:h-[560px] p-3 rounded-lg overflow-auto">
                <div className="h-[600px]">
                  indicator container
                </div>
              </div>
              {/* SUBMIT */}
              <div className="flex justify-end mt-4 gap-x-4">
                <button className="bg-red-600 text-white px-4 py-1 rounded-full hover:scale-105 hover:bg-red-500">
                  ยกเลิก
                </button>
                <button className="bg-green-600 text-white px-4 py-1 rounded-full hover:scale-105 hover:bg-green-500">
                  ตกลง
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      </div>
  </div>
);
}

export default PopupIndicator;
