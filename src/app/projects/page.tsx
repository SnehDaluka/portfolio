import Card from "@components/Card";
import React from "react";
import data, { ProjectType } from "@data/projectData";

const Projects = () => {
  return (
    <div className="min-h-[100%]">
      <div className="w-[100%] h-[20%] animate-show">
        <h1 className="grey_gradient text-6xl font-bold text-center pt-4 pb-6 drop-shadow-[7px_-7px_5px_rgba(147,51,234,0.3)]">
          <span className="nav_heading">Projects</span>
        </h1>
      </div>

      <div className="h-[80%] w-[100%] flex justify-center">
        <div className="w-[80%] h-[90%] flex flex-wrap gap-8 justify-center items-center">
          {data.map((project: ProjectType) => {
            return (
              <Card
                id={project.id}
                title={project.title}
                imgsrc={project.imgsrc}
                description={project.description}
                techused={project.techused}
                link={project.link}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;
