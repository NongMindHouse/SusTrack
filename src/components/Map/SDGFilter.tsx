import React from "react";
import { sdgColorList } from "@/utils/sdgColors";
import Tooltip from "@/components/Tooltip/Tooltip.tsx";
import indicatorData from "@/utils/Indicator.json";

type Props = {
  handleClick: (message: number) => void;
  selectedSDG: number[];
  size: string;
};

const SDGFilter: React.FC<Props> = ({ handleClick, selectedSDG, size }) => {

  return (
    <div className="bg-gray-100 mx-auto mb-5 p-5 rounded-lg flex flex-wrap">
      {sdgColorList.map((color, i: number) => (
        <div
          className="relative hover:scale-[1.07] transition
          duration-100 cursor-pointer"
          key={i}
        >
          <div className="container">
            <Tooltip disabled={false} content={`SDGs ${i+1}) ${(indicatorData.find(item => item.SDGNumber === (i + 1))?.SDGTitle || '').substring(0, 30)}...`}>
              <div >
              <img
            key={i}
            src={`/images/sdgs/sdg-${i + 1}.svg`}
            className={
              size == "big"
                ? "block w-[64px] h-[64px] rounded-sm p-3 m-1"
                : "block w-[32px] h-[32px] rounded-sm p-1 m-1"
            }
            // style={{ backgroundColor: color, opacity: 0.2 }}
            style={{
              backgroundColor: color,
              opacity: selectedSDG.includes(i) ? 1 : 0.2,
              transition: "opacity 0.1s ease-in-out",
              filter: selectedSDG.includes(i) ? "none" : "grayscale(60%)",
            }}
            alt={`SDGs ${i+1}`}
            title={`${(indicatorData.find(item => item.SDGNumber === (i + 1))?.SDGTitle || '')}`}
            onClick={() => handleClick(i)}
          />
          <p className={size == "big" ? "absolute left-[6px] top-[0px] text-white font-bold text-[14px]" : "hidden"}>{i + 1}</p>

              </div>
              </Tooltip>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SDGFilter;
