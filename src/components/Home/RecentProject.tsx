import { Link } from "react-router-dom";
import ProjectList from "../Projects/ProjectList";
import { useCallback, useEffect, useState } from "react";
import { Project } from "@/types/Model";
import { Axios } from "@/utils/Axios";

const RecentProject = () => {
  const [forthVisible, setForthVisible] = useState(false);
  const [projects, setProjects] = useState<Project[]>([]);

  const handleGetProject = useCallback(async (): Promise<void> => {
    try {
      const res = await Axios.get(`/api/projects`);
      if (res.status === 200) {
        setProjects(res.data.data);
      }
    } catch (err) {}
  }, []);

  useEffect(() => {
    handleGetProject();
  }, [handleGetProject]);

  useEffect(() => {
    const forthScroll = () => {
      const viewportHe = window.innerHeight || document.documentElement.clientHeight;
      const triggerPosi = viewportHe * 2;
      const scrollPosi = window.scrollY;

      setForthVisible(scrollPosi > triggerPosi);
    };

    window.addEventListener("scroll", forthScroll);

    return () => {
      window.removeEventListener("scroll", forthScroll);
    };
  }, []);

  return (
    <div className="p-6 w-full flex justify-center self-center bg-white">
      <div className="w-[90%]">
        <h1 className="text-2xl">ข่าวโครงการล่าสุด</h1>
        {/* map all data */}
        <div
          className={` transition-all duration-500 ease-in-out ${
            forthVisible ? "scale-100 opacity-100" : "scale-[0.8] opacity-0"
          } `}
        >
          <ProjectList projects={projects} />
        </div>
        {/* Button */}
        <div className="text-center">
          <Link
            to="/projects"
            className="bg-navy text-white py-1 px-5 rounded-full hover:bg-blue-900 transition ease-linear duration-100 hover:scale-105 block w-fit mx-auto"
          >
            อ่านข่าวกิจกรรมทั้งหมด
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RecentProject;
