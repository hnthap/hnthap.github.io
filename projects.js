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
 * }[]}
 * */
const projects = [
  {
    tags: ["2D & 3D Graphics", "JavaScript / TypeScript", "React", "NodeJS"],
    name: "Car Ride Simulation",
    description: [
      `
Simulating car movement on an artificial landscape, alongside some landmarks in 
Paris, France. This is the capstone project for my Computer Graphics course at
university.
      `, `
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
  },
  {
    tags: ["CSS", "JavaScript / TypeScript", "JQuery"],
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
  },
];

function showProject({
  name,
  description,
  image,
  github,
  collaborators,
  tags,
  githubPage,
}) {
  const githubHref = `https://github.com/${github}`;
  $("#tag-project-box").hide();
  $("#project-box")
    .show()
    .empty()
    .append(
      $("<a></a>")
        .append(
          $("<img>")
            .addClass("project-image")
            .attr("src", "./images/projects/" + image)
        )
        .attr("target", "_blank")
        .attr("href", githubHref),
      $("<h2></h2>").addClass("center").text(name),
      ...description.map((para) => $("<p></p>").text(para)),
      $("<p></p>")
        .text(collaborators.length === 0 ? "" : "Collaborators: ")
        .append(
          ...collaborators.map((v) =>
            $("<a></a>")
              .attr("href", `https://github.com/${v}`)
              .text("<" + v + ">")
          )
        ),
      $("<p></p>")
        .text("Available on ")
        .append(
          $("<a></a>").attr("href", githubHref),
          $("<img>")
            .attr("src", "./images/github.png")
            .attr("style", "height: 14px"),
          $("<a></a>").html(
            githubPage
              ? ` (<a href="${githubPage}" target="_blank">Live Server</a>).`
              : ""
          )
        ),
      $("<div></div>")
        .text("Topics: ")
        .addClass("project-tabs")
        .append(
          ...tags.map((tag) =>
            $("<button></button>")
              .text(tag)
              .on("click", () => showProjectsByTag(tag))
          )
        )
    );
}

function showTagList() {
  const tags = new Set();
  for (const project of projects) {
    for (const tag of project.tags) {
      tags.add(tag);
    }
  }
  for (const tag of Array.from(tags).sort()) {
    $("#tags").append(
      $("<p></p>")
        .addClass("tag")
        .text(tag)
        .on("click", () => showProjectsByTag(tag))
    );
  }
}

function makeImageBar(...names) {
  return $("<div></div>")
    .addClass("image-bar")
    .append(
      names.map((/** @type {string} */ name) =>
        $("<img>")
          .attr("src", "./images/" + name)
          .attr("title", name.split(".", 1)[0].toUpperCase())
      )
    );
}

function makeCCBY3_0ImageBar(name, author) {
  return $("<div></div>")
    .addClass("image-bar")
    .append(
      $("<a></a>")
        .attr("target", "_blank")
        .attr("href", "https://creativecommons.org/licenses/by/3.0/deed.en")
        .append(
          $("<img>")
            .attr("src", "./images/" + name)
            .attr(
              "title",
              `Image by ${author}, licensed under CC-BY 3.0 (click to see)`
            )
        )
    );
}

function showProjectsByTag(tag) {
  $("#project-box").hide();
  const box = $("#tag-project-box").show().empty();
  switch (tag) {
    case "2D & 3D Graphics":
      box.append(
        makeImageBar(
          "webgl.png",
          "threejs.png",
          "javascript.png",
          "typescript.png"
        )
      );
      break;

    case "CSS":
      box.append(makeCCBY3_0ImageBar("css3.png", "daPhyre"));
      break;

    case "JavaScript / TypeScript":
      box.append(makeImageBar("javascript.png", "typescript.png"));
      break;

    case "JQuery":
      box.append(makeImageBar("jquery.png", "javascript.png"));
      break;

    case "NodeJS":
      box.append(
        makeImageBar("nodejs-2015.png", "javascript.png", "typescript.png")
      );
      break;

    case "React":
      box.append(makeImageBar("react.png", "javascript.png", "typescript.png"));
      break;

    default:
      break;
  }
  box.append(
    $("<h2></h2>").text("Topic: " + tag),
    ...projects
      .filter(({ tags: tags2 }) => tags2.indexOf(tag) !== -1)
      .sort((p1, p2) => p1.name.localeCompare(p2.name))
      .map((project) =>
        $("<div></div>")
          .append(
            $("<p></p>").addClass("center").text(project.name),
            $("<img>")
              .attr("src", "./images/projects/" + project.image)
              .addClass("project-image")
          )
          .on("click", () => showProject(project))
      )
  );
}

(() => {
  $("title").text("My Projects");
  initializeMenu(true);
  showTagList();
  showProject(projects[0]);
})();

