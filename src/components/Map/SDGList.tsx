import React from "react";
import { sdgColorList } from "@/utils/sdgColors";

type Props = {
  selectedSDG: number[];
};

const SDGList: React.FC<Props> = ({ selectedSDG }) => {
  return (
    <div className="flex gap-x-[3px]">
      {selectedSDG.map((i: number) => (
        <img
          key={i}
          src={`images/sdgs/sdg-${i}.svg`}
          className="block w-[25px] h-[25px] rounded-sm p-[4px]"
          style={{ backgroundColor: sdgColorList[i - 1] }}
        />
      ))}
    </div>
  );
};

export default SDGList;
