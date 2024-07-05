const highlights = projects.filter((p) => p.highlight).sort(sortProjects);
const nonHighlights = projects.filter((p) => !p.highlight).sort(sortProjects);

/**
 * @type {{
 *  [tag: string]:
 *    string[]
 *    | { image: string; license: string; author: string; }
 * }}
 */
const tagImages = {
  CSS: {
    image: "css3.png",
    license: "CC-BY 3.0",
    author: "daPhyre",
  },
  "Front-end": ["front-end.png"],
  Graphics: ["webgl.png", "threejs.png"],
  "JavaScript/TypeScript": ["javascript.png", "typescript.png"],
  JQuery: ["jquery.png", "javascript.png"],
  NodeJS: ["nodejs.2015.png"],
  ReactJS: ["react.png"],
};

function sortProjects(p1, p2) {
  return p1.year < p2.year;
}

function showProject({
  name,
  description,
  image,
  github,
  collaborators,
  tags,
  githubPage,
  highlight,
}) {
  const githubHref = `https://github.com/${github}`;
  $("#tag-project-box").hide();
  $("#project-box")
    .show()
    .empty()
    .append(
      highlight &&
        $("<div></div>")
          .attr(
            "style",
            "text-align: center; height: 30px; padding-bottom: 10px;"
          )
          .append($("<img>").attr("src", "./images/star.png").height("100%")),
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
              .attr("target", "_blank")
              .attr("href", `https://github.com/${v}`)
              .text("<" + v + ">")
          )
        ),
      $("<p></p>")
        .text("Source code is available on ")
        .append(
          $("<a></a>")
            .attr("href", githubHref)
            .attr("target", "_blank")
            .append(
              $("<img>")
                .attr("src", "./images/github.png")
                .attr("style", "height: 14px")
            )
        ),
      githubPage &&
        $("<p></p>").append(
          $("<span></span>").text("There is a "),
          $("<a></a>")
            .attr("href", githubPage)
            .attr("target", "_blank")
            .text("Live Server"),
          $("<span></span>").text(".")
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

function makeLicensedImageBar(name, author, licenseName) {
  let licenseUrl;
  switch (licenseName) {
    case "CC-BY 3.0":
      licenseUrl = "https://creativecommons.org/licenses/by/3.0/deed.en";
      break;

    default:
      throw new Error("Unrecognizable license name: " + licenseName);
  }
  const title = `Image by ${author}, licensed under ${licenseName} (click to see)`;
  return $("<div></div>")
    .addClass("image-bar")
    .append(
      $("<a></a>")
        .attr("target", "_blank")
        .attr("href", licenseUrl)
        .append(
          $("<img>")
            .attr("src", "./images/" + name)
            .attr("title", title)
        )
    );
}

function showTagList() {
  const tags = new Map();
  for (const project of projects) {
    for (const tag of project.tags) {
      if (tags.has(tag)) {
        tags.set(tag, tags.get(tag) + 1);
      } else {
        tags.set(tag, 1);
      }
    }
  }
  function sortTags(t1, t2) {
    return (
      (tags.get(t1) === tags.get(t2) && t1.localeCompare(t2)) ||
      tags.get(t1) < tags.get(t2)
    );
  }
  $("#tags").append(
    $("<h3></h3>").text("Topics"),
    $("<table></table>").append(
      $("<tbody></tbody>").append(
        ...Array.from(tags.keys())
          .sort(sortTags)
          .map((tag) =>
            $("<tr></tr>").append(
              $("<td></td>")
                .addClass("tag")
                .text(tag)
                .on("click", () => showProjectsByTag(tag)),
              $("<td></td>").addClass("tag-right-column").text(tags.get(tag))
            )
          )
      )
    )
  );
}

function showSmallHighlightList() {
  const limit = 10;
  $("#project-highlights").append(
    $("<h3></h3>").text(`Highlights`),
    $("<table></table>").append(
      $("<tbody></tbody>").append(
        ...highlights.slice(0, limit).map((p) =>
          $("<tr></tr>").append(
            $("<td></td>")
              .addClass("tag")
              .text(p.name)
              .on("click", () => showProject(p)),
            $("<td></td>").addClass("tag-right-column").text(p.year)
          )
        ),
        $("<tr></tr>").append(
          $("<td></td>")
            .addClass("tag")
            .attr("colspan", 2)
            .attr("style", "text-align: center; font-style: italic;")
            .text("See all projects...")
            .on("click", () => showProjects())
        )
      )
    )
  );
}

function showProjects() {
  $("#project-box").hide();
  const box = $("#tag-project-box").show().empty();
  function getProject(project) {
    return $("<div></div>")
      .addClass("project-small-info")
      .append(
        $("<p></p>")
          .addClass("center")
          .text(`${project.name} (${project.year})`),
        $("<img>")
          .attr("src", "./images/projects/" + project.image)
          .addClass("project-image")
      )
      .on("click", () => showProject(project));
  }
  box.append(
    $("<div></div>")
      .attr("style", "text-align: center; height: 30px; padding-bottom: 10px;")
      .append($("<img>").attr("src", "./images/star.png").height("100%")),
    $("<p></p>").text(
      `Some projects I have worked on alone or in collaboration.`
    ),
    $("<p></p>")
      .attr("style", "font-style: italic; padding-bottom: 10px;")
      .text("Click a project's image to see more."),
    $("<h2></h2>").text(`Highlights`),
    ...highlights.map(getProject),
    $("<h2></h2>").text("Other projects"),
    ...nonHighlights.map(getProject)
  );
}

function showProjectsByTag(tag) {
  $("#project-box").hide();
  const box = $("#tag-project-box").show().empty();
  if (tagImages.hasOwnProperty(tag)) {
    const images = tagImages[tag];
    if (images instanceof Array) {
      box.append(makeImageBar(...images));
    } else {
      const { image, license, author } = images;
      box.append(makeLicensedImageBar(image, author, license));
    }
  }
  box.append(
    $("<h2></h2>").text(`My ${tag} Projects`),
    $("<p></p>")
      .attr("style", "font-style: italic; padding-bottom: 10px;")
      .text(`Some projects I have worked on alone or in collaboration.`),
    ...projects
      .filter(({ tags: tags2 }) => tags2.indexOf(tag) !== -1)
      .sort(sortProjects)
      .map((project) =>
        $("<div></div>")
          .addClass("project-small-info")
          .append(
            $("<p></p>")
              .addClass("center")
              .text(`${project.name} (${project.year})`),
            $("<img>")
              .attr("src", "./images/projects/" + project.image)
              .addClass("project-image")
          )
          .on("click", () => showProject(project))
      )
  );
}
