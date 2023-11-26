import React, { useState, ChangeEvent } from "react";
import "../Map/Sidebar.css";
import { sdgColorList } from "@/utils/sdgColors";
import SDGList from "../Map/SDGList";
import PopupIndicator from "./PopupIndicator";
// import SDGFilter from "../Map/SDGFilter";
// import ProjectCardMap from "../Map/ProjectCardMap";

type Props = {
  onSDGsClick: () => void;
};


const AddProjectSidebar: React.FC<Props> = ({ onSDGsClick }) => {
  const [selectedSDGs, setSelectedSDGs] = useState<number[]>([]);

  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const fileInput = event.target as HTMLInputElement;
    const file = fileInput.files?.[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    } else {
      setImagePreview(null);
    }
  };

  const handleIndicatorsSubmit = (checkedIndicators: string[]) => {
    // Do something with the submitted checkedIndicators array
    console.log("Submitted Indicators:", checkedIndicators);
    // You can set the state or perform any other actions in AddProjectSidebar
  };

  const handleSDGsClick = () => {
    // Call the parent component's callback function
    onSDGsClick();
  };

  return (
    <div className="sideBar backdrop-blur-[6px]">
      <form>
      <div className="pt-10 text-base flex flex-col">
        <div className="flex gap-x-[20px] mb-3 flex-col">
        {/* PHOTOS */}
        <div className="bg-white rounded-md p-4">

        <label className="block font-medium mb-3 ">
          <p className="text-center">รูปภาพกิจกรรม</p>

          <div className="bg-gray-200 rounded-md p-2 mt-1 hover:bg-gray-300 hover:scale-[1.02] transition duration-200 hover:cursor-pointer">
              <input
                id="upload"
                type="file"
                accept="image/*"
                placeholder="กิจกรรมรณรงค์การแยกขยะก่อนทิ้ง"
                className="w-full pt-2 mt-2 rounded-md hidden"
                required
                onChange={handleFileChange}
              />
              {imagePreview && (
                <div className="mt-2">
                  <img src={imagePreview} alt="Preview" className="w-full rounded-md" />
                </div>
              )}
              {!imagePreview && (
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" className="w-10 h-10 text-gray-600 mx-auto mb-4">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
                  </svg>
                  <p className="mt-2 text-gray-700 text-center"> เพิ่มรูปโครงการ รูปควรอยู่ในไฟล์ {" "} 
                  <b className="text-gray-500"> JPG, PNG, or GIF</b></p>
                </div>
              )}

            </div>
          </label>
        </div>
          {/* SDGs */}
          <div className="bg-white p-4 rounded-md w-full text-center mt-2 hover:scale-[1.02] transition duration-200 hover:bg-gray-200"
          onClick={handleSDGsClick}
          style={{ cursor: "pointer" }}
          >
            <p className="text-center"> เพิ่ม SDGs </p>
            <div className="flex w-full h-full bg-gray-200 rounded-lg">
              {/* <SDGList selectedSDG={[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17]} size={"big"} /> */}
            </div>
          </div>
        </div>
        {/* ORGANIZATION */}
        <div>
        <label className="block font-medium mb-3">
          ชื่อองค์กร/หน่วยงาน
          <label>
            <input
              type="text"
              placeholder="พวกเรารัก Sirisoft"
              className="w-full px-4 py-2 mt-2 border rounded-md
              focus:outline-none focus:ring-1 focus:ring-navy"
              required
            />
          </label>
        </label>
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
