import React from "react";
import { Marker } from "react-map-gl";

export interface Project {
  title: string;
  image: string;
  desc: string;
  latitude: number;
  longitude: number;
}

interface Props {
  handleClickPopup: (project: Project) => void;
  projects?: Project[];
}

const Markers: React.FC<Props> = ({ handleClickPopup, projects }) => {
  const allProjects = [
    {
      title: "CPE",
      image: "https://fastly.picsum.photos/id/658/536/354.jpg?hmac=lJsBY1i-cotZRX7y_Gs4NWkIaCtyhT3HhAeLnRpra8k",
      desc: "ก๋วยเตี๋ยวไก่มะระ คือ ก๋วยเตี๋ยวยอดนิยมของคนไทย ด้วยรสชาติเนื้อไก่ตุ๋นและไก่ฉีกที่ชุ่มฉ่ำ",
      latitude: 13.6504405,
      longitude: 100.4946602,
    },
    {
      title: "Square",
      image: "https://flowbite.com/docs/images/blog/image-1.jpg",
      desc: "ก๋วยเตี๋ยวไก่มะระ คือ ก๋วยเตี๋ยวยอดนิยมของคนไทย ด้วยรสชาติเนื้อไก่ตุ๋นและไก่ฉีกที่ชุ่มฉ่ำ",
      latitude: 13.6512402,
      longitude: 100.4936268,
    },
    {
      title: "KFC",
      image: "https://flowbite.com/docs/images/blog/image-1.jpg",
      desc: "ก๋วยเตี๋ยวไก่มะระ",
      latitude: 13.6506018,
      longitude: 100.4932941,
    },
  ];

  return allProjects.map((project, index) => (
    <Marker
      key={index}
      latitude={project.latitude}
      longitude={project.longitude}
      onClick={(e) => {
        e.originalEvent.stopPropagation();
        handleClickPopup(project);
      }}
    >
      <div className="p-3 cursor-pointer">
        <span role="img" aria-label="marker" style={{ fontSize: "24px" }}>
          📍
        </span>
      </div>
    </Marker>
  ));
};

export default Markers;
