export type ProjectType = {
  key?: string;
  id: number;
  title: string;
  imgsrc: string;
  techused: string[];
  description: string;
  link: string;
};

const data: ProjectType[] = [
  {
    id: 1,
    title: "Bookish Bliss",
    imgsrc: "/projects/bookish_bliss.png",
    description:
      "A MERN Application which efficiently displays and manages a variety of books for sale. It includes user authorization and authentication using tokens.",
    techused: [
      "MongoDB",
      "ExpressJS",
      "React",
      "NodeJS",
      "SCSS",
      "Bootstrap",
      "Redux Toolkit",
    ],
    link: "https://bookish-bliss-frontend.vercel.app/",
  },
  {
    id: 2,
    title: "Promptopia",
    imgsrc: "/projects/promptopia.png",
    description:
      "A Web Application made using NextJS where we can efficiently share and discover prompts",
    techused: [
      "MongoDB",
      "NextJS",
      "JavaScript",
      "NodeJS",
      "CSS",
      "Tailwind CSS",
    ],
    link: "https://github.com/SnehDaluka/promptopia_nextjs",
  },
  {
    id: 3,
    title: "Weather App",
    imgsrc: "/projects/weather_app.png",
    description:
      "A Full-stack Web Application made using ExpressJS and Handlebars where the user can get the weather of the entered city.",
    techused: ["NodeJS", "ExpressJS", "JavaScript", "CSS", "Handlebars"],
    link: "https://github.com/SnehDaluka/weather_app_express",
  },
  {
    id: 4,
    title: "Bookmarks API",
    imgsrc: "/projects/nestjs.jpeg",
    description:
      "A RESTful API that can store and manages your bookmarks of various sites",
    techused: ["NestJS", "MongoDB", "Postman"],
    link: "https://github.com/SnehDaluka/BookmarkAPI_nestjs",
  },
  {
    id: 5,
    title: "Airport Management",
    imgsrc: "/projects/airport_management_system.jpg",
    description:
      "A Full-stack Web Application which efficiently manages the airport tickets data ",
    techused: [
      "EJS",
      "MongoDB",
      "MySQL",
      "ExpressJS",
      "CSS",
      "Bootstrap",
      "Material-UI",
    ],
    link: "https://github.com/SnehDaluka/airport_management_system",
  },
  {
    id: 6,
    title: "To-do List",
    imgsrc: "/projects/todo_list.png",
    description:
      "A React Application that record the notes used in day-to-day life.",
    techused: ["React", "CSS", "JavaScript", "Material-UI"],
    link: "https://github.com/SnehDaluka/to_do_list_react",
  },
  {
    id: 7,
    title: "Calculator",
    imgsrc: "/projects/calculator.png",
    description: "A calculator made using ReactJS",
    techused: ["React", "CSS", "JavaScript"],
    link: "https://github.com/SnehDaluka/Calculator_react",
  },
  {
    id: 8,
    title: "Asus ROG",
    imgsrc: "/projects/asus_rog.png",
    description:
      "A front end designed for major brand ASUS which is inspired from official ASUS ROG website",
    techused: ["HTML", "CSS"],
    link: "https://github.com/SnehDaluka/asus_rog_html_css",
  },
];

export default data;
