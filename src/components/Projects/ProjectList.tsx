import React from "react";
import ProjectCard from "./ProjectCard";

type Props = {};

const ProjectList = () => {
  return (
    <div className="p-5 grid justify-center gap-y-6 lg:grid-cols-4 lg:gap-4 md:grid-cols-3 md:gap-3 sm:grid-cols-2 sm:gap-3">
      <ProjectCard
        id="1"
        title="Testo!"
        image="https://fastly.picsum.photos/id/658/536/354.jpg?hmac=lJsBY1i-cotZRX7y_Gs4NWkIaCtyhT3HhAeLnRpra8k"
        desc="some description"
      />
      <ProjectCard
        id="2"
        title="Testo2!"
        image="https://fastly.picsum.photos/id/658/536/354.jpg?hmac=lJsBY1i-cotZRX7y_Gs4NWkIaCtyhT3HhAeLnRpra8k"
        desc="some description2"
      />
      <ProjectCard
        id="3"
        title="Testo2!"
        image="https://fastly.picsum.photos/id/658/536/354.jpg?hmac=lJsBY1i-cotZRX7y_Gs4NWkIaCtyhT3HhAeLnRpra8k"
        desc="some description2"
      />
      <ProjectCard
        id="2"
        title="Testo2!"
        image="https://fastly.picsum.photos/id/658/536/354.jpg?hmac=lJsBY1i-cotZRX7y_Gs4NWkIaCtyhT3HhAeLnRpra8k"
        desc="some description2"
      />
      <ProjectCard
        id="2"
        title="Testo2!"
        image="https://fastly.picsum.photos/id/658/536/354.jpg?hmac=lJsBY1i-cotZRX7y_Gs4NWkIaCtyhT3HhAeLnRpra8k"
        desc="some description2"
      />
    </div>
  );
};

export default ProjectList;
