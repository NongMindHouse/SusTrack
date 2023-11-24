import React from "react";
import { Link } from "react-router-dom";
import SDGList from "./SDGList";

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

      {/* SDGList */}
      <div className="p-3">
        <SDGList selectedSDG={[2, 3, 5]} />
      </div>

      {/* Text */}
      <div className="px-3 text-base">
        <h5 className="text-xl font-bold tracking-tight text-black ">{title}</h5>
        <p className="mb-1 text-black whitespace-nowrap overflow-hidden text-ellipsis">{desc}</p>
        <p>วันที่เริ่มโครงการ: </p>
        <p>โดย: </p>
        <div className="text-right mb-3">
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
