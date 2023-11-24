import React from "react";
import { sdgColorList } from "@/utils/sdgColors";

type Props = {
  handleClick: (message: number) => void;
  selectedSDG: number[];
};

const SDGFilter: React.FC<Props> = ({ handleClick, selectedSDG }) => {

  return (
    <div className="bg-gray-100 mx-auto mb-5 p-5 rounded-lg flex flex-wrap">
      {sdgColorList.map((color, i: number) => (
        <div className="relative hover:scale-[1.07] transition
          duration-100 cursor-pointer"
        >
          <p className="absolute left-2 top-1 text-white font-bold text-[14px]">
            {i+1}
          </p>
          <img
            key={i}
            src={`/images/sdgs/sdg-${i + 1}.svg`}
            // className={
            //   selectedSDG.includes(i) ?
            //   "opacity-100 block w-[64px] h-[64px] rounded-sm p-3 m-1" :
            //   "block w-[64px] h-[64px] rounded-sm p-3 m-1"
            // }
            className="block w-[64px] h-[64px] rounded-sm p-3 m-1"
            // style={{ backgroundColor: color, opacity: 0.2 }}
            style={{
              backgroundColor: color,
              opacity: selectedSDG.includes(i) ? 1 : 0.2,
              transition:'opacity 0.1s ease-in-out'
            }}
            alt={`SDG ${i}`}
            onClick={() => handleClick(i)}
          />
        </div>
      ))}
    </div>
  );
};

export default SDGFilter;
