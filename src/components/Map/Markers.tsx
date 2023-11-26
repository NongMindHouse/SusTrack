import { Project } from "@/types/Model";
import React from "react";
import { Marker } from "react-map-gl";

interface Props {
  handleClickPopup: (project: Project) => void;
  projects: Project[];
  imgHeight: string;
  imgWidth: string;
}

const Markers: React.FC<Props> = ({ handleClickPopup, projects, imgHeight, imgWidth }) => {
  return projects.map((project, index) => (
    <Marker
      key={index}
      latitude={Number(project.latitude)}
      longitude={Number(project.longitude)}
      onClick={(e) => {
        e.originalEvent.stopPropagation();
        handleClickPopup(project);
      }}
    >
      <div className="p-3 cursor-pointer">
        <img
          src={`/icon/pin/pin-onmap-${project.selectedSDG}.png`}
          style={{ height: imgHeight, width: imgWidth }}
          alt="markers"
        />
      </div>
    </Marker>
  ));
};

export default Markers;
