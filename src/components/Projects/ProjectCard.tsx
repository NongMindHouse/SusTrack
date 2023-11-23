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
      className="max-w-sm bg-gray-100 shadow rounded-xl hover:cursor-pointer hover:border-lightblue hover:shadow-md hover:scale-[1.01] duration-100"
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
