import { Link } from "react-router-dom";
import ProjectList from "../Projects/ProjectList";
import { useEffect, useState } from "react";

const RecentProject = () => {

  const [forthVisible, setForthVisible] = useState(false);

  useEffect(() => {
    const forthScroll = () => {
      // Adjust the scroll threshold as needed
      const viewportHe = window.innerHeight || document.documentElement.clientHeight;

      // Calculate the position where the element should become visible
      const triggerPosi = viewportHe * 2;

      // Calculate the current scroll position
      const scrollPosi = window.scrollY;

      setForthVisible(scrollPosi > triggerPosi);
    };

    // Attach the scroll event listener
    window.addEventListener("scroll", forthScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", forthScroll);
    };
  }, []);

  return (
    <div className="p-6 w-full flex justify-center self-center bg-white">
      <div className="w-[90%]">
        <h1 className="text-2xl">ข่าวโครงการล่าสุด</h1>
        {/* map all data */}
        <div className={` transition-all duration-500 ease-in-out ${forthVisible ? "scale-100 opacity-100" : "scale-75 opacity-0"} `}>
          <ProjectList />
        </div>
        {/* Button */}
        <div className="text-center">
          <Link to="/projects" className="bg-navy text-white py-1 px-5 rounded-full hover:bg-blue-900 transition ease-linear duration-100 hover:scale-105 block w-fit mx-auto">
            อ่านข่าวกิจกรรมทั้งหมด
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RecentProject;
