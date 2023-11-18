import React from "react";

type PropsData = {
  title: string;
  image: string;
  desc: string;
};

const PopupCard: React.FC<PropsData> = ({ title, image, desc }) => {
  return (
    <div className="max-w-lg pt-2">
      <img className="rounded-t-lg" src={image} alt="" />
      <div className="flex justify-center">
        {/* Left */}
        <div className="p-2 w-1/2 ">
          {/* <img className="rounded-full" src={image} alt="" /> */}
          <img className="rounded-full" src="/images/sdg-2.png" alt="" />
          <img className="rounded-full" src="/images/sdg-3.png" alt="" />
        </div>
        {/* Right */}
        <div className="p-5 w-1/2">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-black ">{title}</h5>
          <p className="mb-3 font-normal text-black ">{desc}</p>
          <a
            href="#"
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 "
          >
            See more..
          </a>
        </div>
      </div>
    </div>
  );
};

export default PopupCard;
