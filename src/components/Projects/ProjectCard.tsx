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
      className="max-w-sm bg-gray-100 shadow rounded-xl hover:cursor-pointer hover:border-2 hover:border-lightblue hover:scale-[1.03] transition-all duration-100 ease-linear hover:shadow-md"
      onClick={Goto}
    >
      <img className="rounded-t-xl" src={image} alt="" />
      <div className="p-5">
        <h5 className="mb-2 text-xl font-bold tracking-tight text-black ">{title}</h5>
        <p className="mb-3 text-black ">{desc}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
