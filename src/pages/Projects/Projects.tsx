import ProjectCard from "@/components/Projects/ProjectCard";
import SDGFilter from "@/components/Map/SDGFilter.tsx";
import React, { useCallback, useEffect, useState } from "react";


const Projects = () => {
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
    <div className="px-8 pb-8 bg-[url('images/bangkok-map-blur.png')]
    flex flex-row-reverse gap-x-10 w-full">
      <div className="flex flex-col gap-y-5">
        <div className="bg-white h-fit w-[300px] p-6 rounded-xl shadow-lg mt-6">
            ตัวกรองการค้นหากิจกรรม
          <form>
            <div>
                <label>
                  <input
                  type="text"
                  placeholder="ชื่อกิจกรรม"
                  className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-navy"
                  />
                </label>
            </div>
            <button 
              className="text-[14px] cursor-pointer px-4 py-1 mt-4 text-white font-semibold bg-navy rounded-full hover:bg-lightblue hover:text-white hover:scale-110 transition ease-linear duration-200"
              type="submit"
              // onClick={handleRegis}
              >
              ค้นหา
            </button>
          </form>
        </div>
        <div className="w-[300px]">
          <p>SDGs ที่เกี่ยวข้อง</p>
          <SDGFilter handleClick={Test} selectedSDG={selectedSDGs} size="small"/>
        </div>
      </div>
      <div className="lg:w-[1000px] bg-white rounded-b-xl shadow-lg">
        <h1 className="pt-3 pl-4 text-lg font-bold">โครงการทั้งหมด</h1>
        <div className="p-5 grid justify-center gap-y-6 lg:grid-cols-4 lg:gap-4 md:grid-cols-3 md:gap-3 sm:grid-cols-2 sm:gap-3">
          <ProjectCard
            id="1"
            title="Testo!"
            image="https://fastly.picsum.photos/id/658/536/354.jpg?hmac=lJsBY1i-cotZRX7y_Gs4NWkIaCtyhT3HhAeLnRpra8k"
            desc="some description"
          />
          <ProjectCard
            id="2"
            title="Testo2!"
            image="https://fastly.picsum.photos/id/658/536/354.jpg?hmac=lJsBY1i-cotZRX7y_Gs4NWkIaCtyhT3HhAeLnRpra8k"
            desc="some description2"
          />
          <ProjectCard
            id="1"
            title="Testo!"
            image="https://fastly.picsum.photos/id/658/536/354.jpg?hmac=lJsBY1i-cotZRX7y_Gs4NWkIaCtyhT3HhAeLnRpra8k"
            desc="some description"
          />
          <ProjectCard
            id="1"
            title="Testo!"
            image="https://fastly.picsum.photos/id/658/536/354.jpg?hmac=lJsBY1i-cotZRX7y_Gs4NWkIaCtyhT3HhAeLnRpra8k"
            desc="some description"
          />
          <ProjectCard
            id="1"
            title="Testo!"
            image="https://fastly.picsum.photos/id/658/536/354.jpg?hmac=lJsBY1i-cotZRX7y_Gs4NWkIaCtyhT3HhAeLnRpra8k"
            desc="some description"
          />
          <ProjectCard
            id="1"
            title="Testo!"
            image="https://fastly.picsum.photos/id/658/536/354.jpg?hmac=lJsBY1i-cotZRX7y_Gs4NWkIaCtyhT3HhAeLnRpra8k"
            desc="some description"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
