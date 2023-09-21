import Icons from "@components/Icons";
import React from "react";
import { v4 as uuidv4 } from "uuid";

const Skills = () => {
  const icons1: string[] = [
    "mongodb",
    "express",
    "react",
    "nodejs",
    "nextjs",
    "redux",
  ];
  const icons2: string[] = [
    "html",
    "css",
    "javascript",
    "typescript",
    "bootstrap",
    "tailwind",
  ];
  const icons3: string[] = [
    "react-router",
    "nestjs",
    "c",
    "c++",
    "python",
    "java",
  ];
  const icons4: string[] = [
    "sass",
    "material-ui",
    "git",
    "ejs",
    "handlebars",
    "github",
  ];
  return (
    <div className="min-h-[100%]">
      <div className="w-[100%] h-[40%] animate-show">
        <h1 className="grey_gradient text-6xl font-bold text-center pt-5 pb-10 drop-shadow-[7px_-7px_5px_rgba(147,51,234,0.3)]">
          <span className="nav_heading">Skills</span>
        </h1>
      </div>
      <div className="w-[100%] flex justify-center py-10 h-[50%] skills relative">
        <div className="skills_set">
          {icons1.map((icon) => {
            return <Icons key={uuidv4()} imgsrc={icon} />;
          })}
        </div>
        <div className="skills_set">
          {icons2.map((icon) => {
            return <Icons key={uuidv4()} imgsrc={icon} />;
          })}
        </div>
        <div className="skills_set">
          {icons3.map((icon) => {
            return <Icons key={uuidv4()} imgsrc={icon} />;
          })}
        </div>
        <div className="skills_set">
          {icons4.map((icon) => {
            return <Icons key={uuidv4()} imgsrc={icon} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Skills;
