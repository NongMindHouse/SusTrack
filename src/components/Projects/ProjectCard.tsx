import React from "react";
import { useNavigate } from "react-router-dom";

type Props = { id: string; title: string; image: string; desc: string };

const ProjectCard: React.FC<Props> = ({ id, image, title, desc }) => {
  const navigate = useNavigate();

  const Goto = () => {
    navigate(`/project/${id}`);
  };

  return (
    <div
      className="max-w-full h-[300px] flex flex-col bg-gray-100 shadow rounded-xl hover:cursor-pointer hover:border-lightblue hover:shadow-md hover:scale-[1.01] duration-100"
      onClick={Goto}
    >
      <div className=" w-full h-[50%]">
        <img className="w-[100%] h-[100%] rounded-t-xl object-cover" src={image} alt="" />
      </div>
      <div className="p-3">
        <h5 className="mb-1 text-xl font-bold tracking-tight text-black overflow-hidden line-clamp-2 text-ellipsis">{`${title.substring(
          0,
          55
        )}...`}</h5>
        <p className="mb-2 text-black overflow-hidden line-clamp-1 text-ellipsis">{`${desc.substring(0, 100)}...`}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
