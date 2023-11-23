import React, { useState } from "react";
import "./Sidebar.css";
import { sdgColorList } from "@/utils/sdgColors";
import SDGFilter from "./SDGFilter";

type Props = {};

const RenderProjectCard = () => {
  return <div className="bg-gray-300 p-3 rounded-lg block"></div>;
};

const Sidebar: React.FC<Props> = () => {
  const [selectedSDGs, setSelectedSDGs] = useState<number[]>([]);
  const Test = (i: number) => {
    // Toggle Select

    // if select => remove from selected
    if (selectedSDGs.includes(i)) {
      const deletedSelect = selectedSDGs.filter((select) => {
        return select != i;
      });
      setSelectedSDGs(deletedSelect);
    } else {
      setSelectedSDGs([...selectedSDGs, i]);
    }
    console.log(selectedSDGs);
    console.log("Click", i);
  };

  return (
    <div className="sideBar backdrop-blur-[6px]">
      <div className="pt-10 text-base">
        {/* SDGs Filter */}
        <p className="text-l">ตัวกรองผลลัพธ์การค้นหา SDGs</p>
        {/* <div className="bg-gray-100 mx-auto mb-5 p-5 rounded-lg flex flex-wrap">
          {sdgColorList.map((color, i: number) => (
            <img
              key={i}
              src={`/images/sdgs/sdg-${i + 1}.svg`}
              className={`sdg-block`}
              style={{ backgroundColor: color, opacity: 0.2 }}
              alt={`SDG ${i}`}
              onClick={() => Test(i)}
            />
          ))}
        </div> */}
        <SDGFilter handleClick={Test} selectedSDG={selectedSDGs} />
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
