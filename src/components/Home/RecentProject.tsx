import { Link } from "react-router-dom";
import ProjectList from "../Projects/ProjectList";

const RecentProject = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl">ข่าวโครงการล่าสุด</h1>
      {/* map all data */}
      <div>
        <ProjectList />
      </div>
      {/* Button */}
      <div className="text-center">
        <Link to="/projects" className="bg-navy text-white py-1 px-5 rounded-full hover:bg-blue-900 transition ease-linear duration-100 hover:scale-105 block w-fit mx-auto">
          อ่านข่าวกิจกรรมทั้งหมด
        </Link>
      </div>
    </div>
  );
};

export default RecentProject;
