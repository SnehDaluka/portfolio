import { ProjectType } from "@data/projectData";
import Image from "next/image";
import React from "react";

const Card = (props: ProjectType) => {
  return (
    <div className="cards">
      <Image
        src={props.imgsrc}
        width={390}
        height={400}
        alt="Projects"
        className="mt-3"
      />
      <div className="cards_heading">
        <h2 className="text-2xl my-3 trackimg-wide font-medium text-left font-sans">
          {props.title}
        </h2>
        <p className="text-md hover:text-purple-600">
          <a href={props.link} target="_blank">
            Link <i className="fa-solid fa-up-right-from-square"></i>
          </a>
        </p>
      </div>
      <p className="my-3 tracking-wide text-justify">{props.description}</p>
      <div className="w-[100%] flex gap-3 my-3 justify-center flex-wrap">
        {props.techused.map((tech: string) => {
          return (
            <div className="px-3 bg-white text-black font-semibold rounded-lg">
              {tech}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Card;
