import React from "react";
import "./Sidebar.css";

type Props = {};

const Sidebar: React.FC<Props> = () => {
  return (
    <div className="sideBar">
      <div className="pt-10 text-base">
        <h2 className="text-2xl">Sidebar Content</h2>
        <p>Some Information</p>
      </div>
    </div>
  );
};

export default Sidebar;
