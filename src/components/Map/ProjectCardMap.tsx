import React from "react";
import { useNavigate } from "react-router-dom";
import SDGList from "./SDGList";

type Props = {
  id: string;
  title: string;
  image: string;
  desc: string;
  sdgs: number[];
};

const ProjectCardMap: React.FC<Props> = ({ id, image, title, desc, sdgs }) => {
  const navigate = useNavigate();
  const Goto = () => {
    navigate(`/project/${id}`);
  };

  return (
    <div
      className="bg-gray-300 rounded-lg cursor-pointer hover:scale-[1.02]
    transition duration-100 shadow-sm hover:shadow-md flex gap-x-[5px] p-2 h-fit"
      onClick={Goto}
    >
      <div className="w-3/5 rounded-md overflow-hidden">
        <img src={image} className="h-full w-full object-cover" />
      </div>
      <div className="flex flex-col gap-y-2 p-3">
        <p className="text-[16px] font-bold leading-5">{title}</p>
        <p className="text-[14px] leading-4">{desc}</p>
        <SDGList selectedSDG={sdgs} />
      </div>
    </div>
  );
};

export default ProjectCardMap;
