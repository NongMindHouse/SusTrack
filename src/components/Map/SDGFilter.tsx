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
        <img
          key={i}
          src={`/images/sdgs/sdg-${i + 1}.svg`}
          className={selectedSDG.includes(i) ? `sdg-block opacity-100` : "sdg-block"}
          style={{ backgroundColor: color, opacity: 0.2 }}
          alt={`SDG ${i}`}
          onClick={() => handleClick(i + 1)}
        />
      ))}
    </div>
  );
};

export default SDGFilter;
