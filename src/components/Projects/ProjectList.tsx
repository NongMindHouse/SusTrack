import React from "react";
import ProjectCard from "./ProjectCard";
import { Project } from "@/types/Model";

type Props = {
  projects: Project[];
};

const ProjectList: React.FC<Props> = ({ projects }) => {
  return (
    <div className="p-5 grid justify-center gap-y-6 lg:grid-cols-4 lg:gap-4 md:grid-cols-3 md:gap-3 sm:grid-cols-2 sm:gap-3">
      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          id={project.id}
          title={project.name}
          image={project.bannerUrl}
          desc={project.description}
        />
      ))}
    </div>
  );
};

export default ProjectList;
