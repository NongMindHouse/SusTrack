import React from "react";
import { sdgColorList } from "@/utils/sdgColors";

type Props = {
  selectedSDG: number[];
  size: string;
};

const SDGList: React.FC<Props> = ({ selectedSDG, size }) => {

  return (
    <div className="relative">
      <div data-tooltip-target="tooltip-default" data-tooltip-placement="top" className="flex gap-x-[3px] relative flex-wrap">
        {selectedSDG.map((i: number) => (
          <img
            key={i}

            src={`images/sdgs/sdg-${i}.svg`}

            className={ size == "big"
            ? "block w-[64px] h-[64px] rounded-sm p-3 m-[3px]"
            : "block w-[25px] h-[25px] rounded-sm p-1 mx-[1px]"}

            style={{
              display:"block",
              borderRadius:"0.125rem",
              backgroundColor: sdgColorList[i - 1] }}
          />
          ))}
      </div>
    </div>

  );
};

export default SDGList;
