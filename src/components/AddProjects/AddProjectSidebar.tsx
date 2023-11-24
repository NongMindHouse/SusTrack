import React, { useState } from "react";
import "../Map/Sidebar.css";
import { sdgColorList } from "@/utils/sdgColors";
// import SDGFilter from "../Map/SDGFilter";
// import ProjectCardMap from "../Map/ProjectCardMap";

type Props = {};

const AddProjectSidebar: React.FC<Props> = () => {
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
      <form>
      <div className="pt-10 text-base flex flex-col">
        <div className="flex gap-x-[20px] mb-3">
        {/* PHOTOS */}
        <div className="bg-white rounded-md p-4">
        <label className="block font-medium mb-3">
          รูปภาพกิจกรรม
          <label>
            <input
              type="file"
              accept="image/*"
              placeholder="กิจกรรมรณรงค์การแยกขยะก่อนทิ้ง"
              className="w-full pt-2 mt-2 rounded-md"
              required
            />
          </label>
        </label>
        </div>
          {/* SDGs */}
          <div className="bg-white p-4 rounded-md w-1/2 text-center">
            SDGs
          </div>
        </div>
        {/* ACTIVITY NAME */}
        <div>
        <label className="block font-medium mb-3">
          ชื่อกิจกรรม/โครงการ
          <label>
            <input
              type="text"
              placeholder="กิจกรรมรณรงค์การแยกขยะก่อนทิ้ง"
              className="w-full px-4 py-2 mt-2 border rounded-md 
              focus:outline-none focus:ring-1 focus:ring-navy"
              required
            />
          </label>
        </label>
        </div>
        {/* WEBSITE */}
        <div>
        <label className="block font-medium mb-3">
          เว็บไซต์กิจกรรม
          <label>
            <input
              type="url"
              placeholder="https://sdgs.co.th/articles/12345/"
              className="w-full px-4 py-2 mt-2 border rounded-md 
              focus:outline-none focus:ring-1 focus:ring-navy"
              required
            />
          </label>
        </label>
        </div>
        <div className="flex gap-x-[10px]">
        <div>
        <label className="block font-medium mb-3">
        วันที่เริ่มกิจกรรม
          <label>
            <input
              type="date"
              className="w-full px-4 py-2 mt-2 border rounded-md
              focus:outline-none focus:ring-1 focus:ring-navy font-normal"
              required
            />
          </label>
        </label>
        </div>
        <div>
        <label className="block font-medium mb-3">
          ระยะเวลาดำเนินการ
          <label>
            <input
              type="text"
              placeholder="4 วัน 3 คีน"
              className="w-full px-4 py-2 mt-2 border rounded-md 
              focus:outline-none focus:ring-1 focus:ring-navy"
              required
            />
          </label>
        </label>
        </div>
        </div>
        {/* DETAIL */}
        <div>
        <label className="block font-medium">
          รายละเอียดกิจกรรม
          <label>
            <textarea
              placeholder="กิจกรรมนี้จัดขึ้นเพื่อ..."
              className="w-full px-4 py-2 mt-2 border rounded-md h-[150px]
              focus:outline-none focus:ring-1 focus:ring-navy"
              required
            />
          </label>
        </label>
        </div>
        {/* SUBMIT */}
        <div className="px-2 flex justify-end">
          <button
          className="block px-8 py-1 bg-navy text-white hover:bg-blue-600 
          rounded-full w-fit text-[18px] cursor-pointer hover:scale-[1.03]
          transition duration-100 my-4"
          type="submit"
          // onClick={}
          >
            เพิ่มกิจกรรม
          </button>
        </div>
      </div>
      </form>
    </div>
  );
};

export default AddProjectSidebar;
