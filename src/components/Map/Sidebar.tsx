import React, { useState } from "react";
import "./Sidebar.css";
import { sdgColorList } from "@/utils/sdgColors";
import SDGFilter from "./SDGFilter";
import ProjectCardMap from "./ProjectCardMap";

type Props = {};

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
        <p className="text-lg">ตัวกรองผลลัพธ์การค้นหา SDGs</p>
        <SDGFilter handleClick={Test} selectedSDG={selectedSDGs} size="big"/>
        {/* Lastest News */}
        <p className="text-lg">ผลการค้นหา</p>
        <div className="bg-gray-100 mx-auto mb-5 p-5 rounded-lg flex flex-col
        gap-y-[10px] min-h-[360px]">
          <ProjectCardMap
            id="2"
            title="ชื่อกิจกรรมชื่อกิจกรรมชื่อกิจกรรมชื่อกิจกรรมชื่อกิจกรรมชื่อกิจกรรมชื่อกิจกรรมชื่อกิจกรรม..."
            image="https://fastly.picsum.photos/id/658/536/354.jpg?hmac=lJsBY1i-cotZRX7y_Gs4NWkIaCtyhT3HhAeLnRpra8k"
            desc="รายละเอียดกิจกรรมรายละเอียดกิจกรรมรายละเอียดกิจกรรมรายละเอียดกิจกรรมรายละเอียดกิจกรรม..."
            sdgs={[1,2,3]}
          />
          <ProjectCardMap
            id="2"
            title="ชื่อกิจกรรมชื่อกิจกรรมชื่อกิจกรรมชื่อกิจกรรมชื่อกิจกรรมชื่อกิจกรรมชื่อกิจกรรมชื่อกิจกรรม..."
            image="https://media.tenor.com/x8v1oNUOmg4AAAAd/rickroll-roll.gif"
            desc="รายละเอียดกิจกรรมรายละเอียดกิจกรรมรายละเอียดกิจกรรมรายละเอียดกิจกรรมรายละเอียดกิจกรรม..."
            sdgs={[3,4,7]}
          />
          <ProjectCardMap
            id="2"
            title="ชื่อกิจกรรมชื่อกิจกรรมชื่อกิจกรรมชื่อกิจกรรมชื่อกิจกรรมชื่อกิจกรรมชื่อกิจกรรมชื่อกิจกรรม..."
            image="https://fastly.picsum.photos/id/658/536/354.jpg?hmac=lJsBY1i-cotZRX7y_Gs4NWkIaCtyhT3HhAeLnRpra8k"
            desc="รายละเอียดกิจกรรมรายละเอียดกิจกรรมรายละเอียดกิจกรรมรายละเอียดกิจกรรมรายละเอียดกิจกรรม..."
            sdgs={[8,4,11,12,13]}
          />
          <ProjectCardMap
            id="2"
            title="ชื่อกิจกรรมชื่อกิจกรรมชื่อกิจกรรมชื่อกิจกรรมชื่อกิจกรรมชื่อกิจกรรมชื่อกิจกรรมชื่อกิจกรรม..."
            image="https://media.tenor.com/x8v1oNUOmg4AAAAd/rickroll-roll.gif"
            desc="รายละเอียดกิจกรรมรายละเอียดกิจกรรมรายละเอียดกิจกรรมรายละเอียดกิจกรรมรายละเอียดกิจกรรม..."
            sdgs={[16,17,14]}
          />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
