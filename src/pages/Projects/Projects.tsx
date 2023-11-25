import SDGFilter from "@/components/Map/SDGFilter.tsx";
import React, { useCallback, useEffect, useState } from "react";
import { Axios } from "@/utils/Axios";
import { Project } from "@/types/Model";
import ProjectList from "@/components/Projects/ProjectList";

const Projects = () => {
  const [selectedSDGs, setSelectedSDGs] = useState<number[]>([]);
  const [projects, setProjects] = useState<Project[]>([]);

  const handleGetProject = useCallback(async (): Promise<void> => {
    try {
      const res = await Axios.get(`/api/projects`);
      if (res.status === 200) {
        console.log(res.data.data);
        setProjects(res.data.data);
      }
    } catch (err) {}
  }, []);

  useEffect(() => {
    handleGetProject();
  }, [handleGetProject]);

  const Test = (i: number) => {
    // Toggle Select
    if (selectedSDGs.includes(i)) {
      const deletedSelect = selectedSDGs.filter((select) => {
        return select != i;
      });
      setSelectedSDGs(deletedSelect);
    } else {
      setSelectedSDGs([...selectedSDGs, i]);
    }
    console.log(selectedSDGs);
  };
  return (
    <div
      className="px-4 pb-8 bg-[url('images/bangkok-map-blur.png')]
    flex flex-row-reverse gap-x-4 w-full justify-center"
    >
      <div className="flex flex-col gap-y-5">
        <div className="bg-white h-fit w-[350px] p-6 rounded-xl shadow-lg mt-6">
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
            >
              ค้นหา
            </button>
          </form>
        </div>
        <div className="w-[350px]">
          <p>SDGs ที่เกี่ยวข้อง</p>
          <div className="">
            <SDGFilter handleClick={Test} selectedSDG={selectedSDGs} size="big" />
          </div>
        </div>
      </div>
      <div className="lg:w-[1000px] bg-white rounded-b-xl shadow-lg">
        <h1 className="pt-3 pl-4 text-lg font-bold">โครงการทั้งหมด</h1>
        {projects ? <ProjectList projects={projects} /> : null}

      </div>
    </div>
  );
};

export default Projects;
