"use client";

import Icons from "@components/Icons";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const Skills = () => {
  const [num, setNum] = useState(1);
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

  const addClass = function (text: string) {
    const list = document.querySelectorAll(".dot");

    for (let i of list) {
      i.classList.remove("bg-white");

      if (i.classList[5] === text) {
        i.classList.add("bg-white");
      }
    }
  };

  const handleClick1 = () => {
    if (num === 1) {
      addClass(`dots4`);
      setNum(4);
    } else {
      addClass(`dots${num - 1}`);
      setNum(num - 1);
    }
  };

  const handleClick2 = () => {
    if (num === 4) {
      addClass(`dots1`);
      setNum(1);
    } else {
      addClass(`dots${num + 1}`);
      setNum(num + 1);
    }
  };

  useEffect(() => {
    if (num === 1) addClass("dots1");
    else if (num === 2) addClass("dots2");
    else if (num === 3) addClass("dots3");
    else if (num === 4) addClass("dots4");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="min-h-[100%]">
      <div className="w-[100%] min-h-[40%] animate-show">
        <h1 className="grey_gradient text-6xl font-bold text-center pt-5 pb-10 drop-shadow-[7px_-7px_5px_rgba(147,51,234,0.3)]">
          <span className="nav_heading">Skills</span>
        </h1>
      </div>
      <div className="w-[100%] flex flex-col justify-center my-10 min-h-[60%] skills animate-show">
        <div className="w-[80%] h-[100%] mx-auto flex justify-center items-center">
          <div
            className="text-6xl font-thin text-gray-500 hover:cursor-pointer hover:text-white active:text-gray-500"
            onClick={handleClick1}
          >
            <i className="fa-solid fa-angle-left"></i>
          </div>
          {num === 1 && (
            <div className="skills_set">
              {icons1.map((icon) => {
                return <Icons key={uuidv4()} imgsrc={icon} />;
              })}
            </div>
          )}
          {num === 2 && (
            <div className="skills_set">
              {icons2.map((icon) => {
                return <Icons key={uuidv4()} imgsrc={icon} />;
              })}
            </div>
          )}
          {num === 3 && (
            <div className="skills_set">
              {icons3.map((icon) => {
                return <Icons key={uuidv4()} imgsrc={icon} />;
              })}
            </div>
          )}
          {num === 4 && (
            <div className="skills_set">
              {icons4.map((icon) => {
                return <Icons key={uuidv4()} imgsrc={icon} />;
              })}
            </div>
          )}

          <div
            className="text-6xl font-thin text-gray-500 hover:cursor-pointer hover:text-white active:text-gray-500"
            onClick={handleClick2}
          >
            <i className="fa-solid fa-angle-right"></i>
          </div>
        </div>
        <div className="flex justify-center my-5">
          <button
            className="bg-gray-500 dot w-2.5 h-2.5 mx-3 dots1 hover:bg-white active:bg-gray-500 dot rounded-[100%]"
            onClick={() => {
              setNum(1);
              addClass("dots1");
            }}
          >
            {" "}
          </button>
          <button
            className="bg-gray-500 dot w-2.5 h-2.5 mx-3 dots2 hover:bg-white active:bg-gray-500 dot rounded-[100%]"
            onClick={() => {
              setNum(2);
              addClass("dots2");
            }}
          >
            {" "}
          </button>
          <button
            className="bg-gray-500 dot w-2.5 h-2.5 mx-3 dots3 hover:bg-white active:bg-gray-500 dot rounded-[100%]"
            onClick={() => {
              setNum(3);
              addClass("dots3");
            }}
          >
            {" "}
          </button>
          <button
            className="bg-gray-500 dot w-2.5 h-2.5 mx-3 dots4 hover:bg-white active:bg-gray-500 rounded-[100%]"
            onClick={() => {
              setNum(4);
              addClass("dots1");
            }}
          >
            {" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Skills;
