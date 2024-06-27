/**
 * Projects' information.
 * @type {{
 *  tabs: string[]; 
 *  name: string; 
 *  description: string; 
 *  collaborators: string[];
 *  image: string;
 *  github: string;
 *  year: number
 * }[]}
 * */
const projects = [
  {
    tabs: ["Graphics", "3D", "JavaScript"],
    name: "Car Ride Simulation",
    description: [
      `
Simulating car movement on an artificial landscape, alongside some landmarks in 
Paris, France. This project involved the use of 3D library (three.js), a 
physics engine (cannon.js) and a frontend build tool (Vite).`,
      `
This is also the capstone project for my Computer Graphics course at
university.`,
    ],
    collaborators: ["VuNamPhuong", "daccuong110320"],
    image: "car-ride-1.png",
    github: "hnthap/car-ride",
    year: 2024,
  },
];

(() => {
  $("title").text("My Projects");
  // $("h1").text("My Projects");
  initializeMenu(true);

  const { name, description, image, github, collaborators, tabs } = projects[0];
  $("#project-title").text(name);
  for (const para of description) {
    const p = $("<p></p>");
    p.text(para);
    $("#project-description").append(p);
  }
  $("#project-github").attr("href", `https://github.com/${github}`);
  $("#project-image").attr("src", `./images/projects/${image}`);
  for (const collaborator of collaborators) {
    const a = $("<a></a>");
    a.attr("href", `https://github.com/${collaborator}`);
    a.text(collaborator);
    $("#project-collaborators").append("&ensp;", a);
  }
  for (const tab of tabs) {
    const button = $("<button></button>");
    button.text(tab);
    $("#project-tabs").append("&nbsp;", button);
  }
})();

