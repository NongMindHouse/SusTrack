import React from "react";
import { Link } from "react-router-dom";

type PopupInfo = {
  title: string;
  image: string;
  desc: string;
};

const PopupCard: React.FC<PopupInfo> = ({ title, image, desc }) => {
  return (
    <div className="max-w-lg">
      <div className="overflow-hidden">
        <img className="rounded-t-lg w-full h-40 object-cover" src={image} alt="banner" />
      </div>

      {/* Text */}
      <div className="p-3 text-base">
        <h5 className="mb-2 text-xl font-bold tracking-tight text-black ">{title}</h5>
        <p className="mb-3 text-black whitespace-nowrap overflow-hidden text-ellipsis">{desc}</p>
        <p>วันที่เริ่มโครงการ: </p>
        <p>โดย: </p>
        <div className="text-right">
          <Link
            to=""
            className="inline-flex items-end px-3 py-1 font-medium text-center text-white bg-lightblue rounded-full hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 "
          >
            ดูเพิ่มเติม..
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PopupCard;
