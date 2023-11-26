import React, { useState } from "react";
import "./Sidebar.css";
// import { sdgColorList } from "@/utils/sdgColors";
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
    <div className="sideBar">
      <div className="pt-10 text-base ">
        {/* SDGs Filter */}
        <p className="text-lg">ตัวกรองผลลัพธ์การค้นหา SDGs</p>
        <SDGFilter handleClick={Test} selectedSDG={selectedSDGs} size="big"/>
        {/* Lastest News */}
        <p className="text-lg">ผลการค้นหา</p>
        <div className="bg-gray-100 mx-auto mb-5 p-5 rounded-lg flex flex-col
        gap-y-[10px] min-h-[360px]">
          <ProjectCardMap
            id="2"
            title="โครงการอาคารสีเขียวเพื่อสิ่งแวดล้อม"
            image="https://www.kasikornbank.com/SiteCollectionDocuments/sustainable-development/img/projects/cover/green-building.jpg"
            desc="ธนาคารกสิกรไทยยึดมั่นในเจตนารมณ์ “กรีน ดีเอ็นเอ” ที่ให้ความสำคัญกับสิ่งแวดล้อมอย่างต่อเนื่อง..."
            sdgs={[13,15,14]}
          />
          <ProjectCardMap
            id="2"
            title="สิริซอฟต์ (SRS) ร่วมสร้างโอกาสทางการศึกษา ใน”โครงการปันน้ำใจให้น้องได้เรียนรู้”"
            image="https://media.licdn.com/dms/image/D5622AQFXPacnnYwg7w/feedshare-shrink_1280/0/1699356202316?e=1703721600&v=beta&t=vs7LmFDRo_DfrAFdqLRLqQQIYjnQRFep2YNd32gGU3U"
            desc="สิริซอฟต์ (SRS) ร่วมสร้างโอกาสทางการศึกษา ใน”โครงการปันน้ำใจให้น้องได้เรียนรู้” โดย..."
            sdgs={[4,17]}
          />
          <ProjectCardMap
            id="2"
            title="AIS Go Green"
            image="https://thaipublica.org/wp-content/uploads/2022/08/%E0%B8%A0%E0%B8%B2%E0%B8%9E%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B8%81%E0%B8%AD%E0%B8%9A-AIS-Go-Green-%E0%B8%82%E0%B8%B2%E0%B8%99%E0%B8%A3%E0%B8%B1%E0%B8%9A%E0%B8%99%E0%B9%82%E0%B8%A2%E0%B8%9A%E0%B8%B2%E0%B8%A2%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B8%A7%E0%B9%88%E0%B8%B2-%E0%B8%9B%E0%B8%A5%E0%B8%B9%E0%B8%81%E0%B8%95%E0%B9%89%E0%B8%99%E0%B9%84%E0%B8%A1%E0%B9%89-5-e1660032925426.jpg"
            desc="การเข้ามาของผู้ว่าราชการกรุงเทพมหานคร “ชัชชาติ สิทธิพันธุ์” กับเป้าหมายปลูกต้นไม้ล้านต้น เพื่อ..."
            sdgs={[15,13]}
          />
          <ProjectCardMap
            id="2"
            title="การยางแห่งประเทศไทย (กยท.) สนับสนุนงบตามมาตรา 49(5) รวม 16 ลบ. มุ่งช่วยเหลือเกษตรกร..."
            image="https://www.raot.co.th/images/article/news92143/n20231020145259_47153.jpg"
            desc="นายณกรณ์ ตรรกวิรพัท ผู้ว่าการ กยท. กล่าวว่า กยท. มุ่งส่งเสริมให้เกษตรกรชาวสวนยางมีแนวทาง..."
            sdgs={[8,4]}
          />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
