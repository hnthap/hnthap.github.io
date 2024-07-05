/**
 * Projects' information.
 * @type {{
 *  tags: string[];
 *  name: string;
 *  description: string;
 *  collaborators: string[];
 *  image: string;
 *  github: string;
 *  year: number;
 *  githubPage: string;
 *  highlight: boolean;
 * }[]}
 * */
const projects = [
  {
    tags: [
      "Graphics",
      "JavaScript/TypeScript",
      "ReactJS",
      "NodeJS",
      "Front-end",
    ],
    name: "Car Ride Simulation",
    description: [
      `
Simulating car movement on an artificial landscape, alongside some landmarks in 
Paris, France. This is the capstone project for my Computer Graphics course at
university.
      `,
      `
This project involved the use of 3D library (three.js) and a 
physics engine (cannon.js) through React Three Fiber, React Three Drei and
React Three Cannon, and a frontend build tool (Vite).
      `,
    ],
    collaborators: ["VuNamPhuong", "daccuong110320"],
    image: "car-ride-1.png",
    github: "hnthap/car-ride",
    year: 2024,
    githubPage: null,
    highlight: true,
  },
  {
    tags: ["CSS", "JavaScript/TypeScript", "JQuery", "Front-end"],
    name: "Basic Calculator",
    description: [
      `
Basic calculator.
      `,
      `
It can perform addition, subtraction, multiplication and
division. This project uses only plain HTML, CSS and vanilla JavaScript
(JQuery).
    `,
    ],
    collaborators: [],
    image: "js-calculator.png",
    github: "hnthap/js-calculator",
    year: 2024,
    githubPage: "https://hnthap.github.io/js-calculator",
    highlight: false,
  },
  {
    tags: [
      "JQuery",
      "JavaScript/TypeScript",
      "Front-end",
    ],
    name: "Personal Portfolio",
    description: [
      `
My GitHub portfolio as a static website using GitHub Pages.
      `,
      `
This project only uses HTML, CSS, vanilla JavaScript and JQuery.
      `,
    ],
    collaborators: [],
    image: "portfolio.jpg",
    github: "hnthap/hnthap.github.io",
    year: 2021,
    githubPage: "https://hnthap.github.io",
    highlight: true,
  },
];
