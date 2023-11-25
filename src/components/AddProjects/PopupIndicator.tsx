import React, {useEffect, useState} from "react";
import { sdgColorList } from "@/utils/sdgColors";
import indicatorData from "@/utils/Indicator.json";

type Props = {
  isOpen:boolean,
  activeTab:number,
  onTabClick: (tabIndex: number) => void;
  onClose: () => void; // Callback function to handle closing the popup
};

const PopupIndicator:React.FC<Props> = ({activeTab,isOpen,onTabClick, onClose}) => {
  const Test = (i:number) => {
    onTabClick(i);
    console.log(activeTab)
  }

  const handleOverlayClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const overlayElement = event.currentTarget;
  
    // Check if the clicked element is the overlay or its child elements
    if (event.target === overlayElement) {
      onClose();
    }
  };

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === "Escape" && isOpen) {
      onClose();
    }
  };

  const searchIndicatorByID = (unid:string) => {
    return indicatorData.find(item => item.UNSDIndicatorCodes === unid);
  };

  const searchIndicatorByGoal = (goal:number) => {
    return indicatorData.filter(item => item.SDGNumber === goal);
  };

  const searchIndicatorByTarget = (target:string) => {
    return indicatorData.filter(item => item.TargetsNumber.toString() === target);
  };

  const loadIndicator = (goal:number) => {
    const goalObject = searchIndicatorByGoal(goal+1);
    // console.log(`${goal+1}:${goalObject.length}`);
    const targets = Array.from(new Set(goalObject.map(item => item.TargetsNumber.toString())));
    // console.log(targets)

    // Array of indicator 
    const [checkedIndicators, setCheckedIndicators] = useState<string[]>([]);

    const handleCheckboxChange = (indicatorsNumber: string | number) => {
      const stringIndicatorsNumber = indicatorsNumber.toString();
      if (checkedIndicators.includes(stringIndicatorsNumber)) {
        // Uncheck: Remove from array
        setCheckedIndicators((prev) => prev.filter((num) => num !== stringIndicatorsNumber));
      } else {
        // Check: Add to array
        setCheckedIndicators((prev) => [...prev, stringIndicatorsNumber]);
      }
      console.log('Checked Indicators:', checkedIndicators);
    };

    return (
      <div>
        {targets.map((target) => (
          <div >
            <p className="text-lg bg-gray-300 p-2 rounded-lg">
              {target + ")"} {goalObject.find(item => item.TargetsNumber.toString() === target)?.Targets}
            </p>
            {goalObject.filter(item => item.TargetsNumber.toString() === target).map((ind) => (
              <div key={ind.IndicatorsNumber} className="bg-gray-200 my-3 rounded-md mx-4 p-2
               grid grid-cols-[5%_1fr]">
                <input type="checkbox"
                className="mx-2 my-auto w-5 h-5 accent-green-600 cursor-pointer"
                onChange={() => handleCheckboxChange(ind.IndicatorsNumber)}
                  checked={checkedIndicators.includes(ind.IndicatorsNumber.toString())}
                />
                <p className="text-sm">
                  {ind.IndicatorsNumber + ")"} {ind.Indicators}
                </p>
              </div>
            ))
            }
          </div>
        ))
        }
      </div>
    );
  };

  useEffect(() => {
    // Add event listener on mount
    document.addEventListener("keydown", handleKeyDown);

    // Remove event listener on unmount
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return(
  <div
  className="w-full h-full fixed top-0 z-10"
  style={{
    visibility: isOpen ? "visible":"hidden"
  }}
  >
    <div className="bg-[rgba(0,0,0,0.6)] w-full h-full flex justify-center items-center"
          onClick={handleOverlayClick}
    >
      <div className="md:w-[500px] lg:w-[800px] xl:w-[1000px] 2xl:w-[1400px]
      p-3 rounded-lg flex flex-col relative"
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
        <div className="bg-white p-5 rounded-b-lg h-[540px] 2xl:h-[700px]">
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
          <form>
          <div className="ml-8 mr-4 h-[500px] grid grid-rows-auto">
              {/* GOAL TEXT */}
              <div className="">
                <p className="text-2xl my-2">
                  {/* <input type="checkbox" value="SDG1"
                  className="w-7 h-7 mr-4 accent-green-600" /> */}
                  <p className="inline-block"> เป้าหมายที่ {activeTab+1} {indicatorData.find(item => item.SDGNumber === (activeTab+1))?.SDGTitle}
                  </p>
                </p>
              </div>
              {/* INDICATOR CONTAINER */}
              <div className="bg-gray-100 p-3 rounded-lg overflow-auto">
                <div>
                  {loadIndicator(activeTab)}
                </div>
              </div>
              {/* SUBMIT */}
              <div className="flex justify-end mt-4 gap-x-4">
                <div
                className="bg-red-600 text-white px-4 py-1 rounded-full hover:scale-105 hover:bg-red-500 cursor-pointer"
                onClick={handleOverlayClick}
                >
                  ยกเลิก
                </div>
                <div
                className="bg-green-600 text-white px-4 py-1 rounded-full hover:scale-105 hover:bg-green-500 cursor-pointer"
                onClick={handleOverlayClick}
                >
                  ตกลง
                </div>
              </div>
          </div>
            </form>
        </div>
      </div>
      </div>
  </div>
);
}

export default PopupIndicator;
