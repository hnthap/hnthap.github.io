(function () {
  document.title = `${FULL_NAME}'s Projects`;
  $("#root").append(
    PageTop(),
    ProjectSmallContainer(Projects)
  );
  $("#modal")
    .addClass("invisible")
    .append(
      $("<div>").addClass("modal-background").on("click", hideModal),
      $("<div>")
        .addClass("modal-content")
        .append(
          $("<img>").attr("id", "modal-image"),
          $("<p>").attr("id", "modal-title").text("Title"),
          $("<p>").attr("id", "modal-time").text("Time"),
          $("<div>")
            .addClass("modal-row")
            .append(
              $("<a>")
                .attr("id", "modal-slides-url")
                .html("&nbsp;&nbsp;Slides&nbsp;&nbsp;"),
              $("<a>")
                .attr("id", "modal-report-url")
                .html("&nbsp;&nbsp;Report&nbsp;&nbsp;"),
              $("<a>")
                .attr("id", "modal-code-url")
                .html("&nbsp;&nbsp;Code&nbsp;&nbsp;"),
              $("<a>")
                .attr("id", "modal-demo-url")
                .html("&nbsp;&nbsp;Demo&nbsp;&nbsp;"),
            ),
          $("<div>").attr("id", "modal-bullets"),
          $("<p>")
            .addClass("modal-skills-container")
            .append(
              $("<span>").addClass("it").append("Skills:&nbsp;"),
              $("<span>").attr("id", "modal-skills"),
              "."
            )
        )
    );
  $("#menu-item-projects").addClass("current-menu-item");
})();

/**
 *
 * @param {ProjectItem[]} projects
 * @returns {JQuery<HTMLElement>}
 */
function ProjectSmallContainer(projects) {
  const div = $("<div>");
  div.addClass("project-container");
  const featuredProjects = projects.filter(({ featured }) => featured);
  const otherProjects = projects.filter(({ featured }) => !featured);
  div.append(...[...featuredProjects, ...otherProjects].map(ProjectSmallView));
  return div;
}

/**
 *
 * @param {ProjectItem} project
 * @returns {JQuery<HTMLElement>}
 */
function ProjectSmallView(project) {
  const imagePath = project.imageUrl ?? "./images/golden-cube.png";
  const image = $("<img>").attr("src", imagePath);
  const text = $("<p>").addClass("project-title").text(project.title);
  const div = $("<div>").addClass("project-small");
  if (project.featured) {
    const imageContainer = $("<div>").addClass("featured-image-container");
    imageContainer.append(image.addClass("main-image"), Star("gold"))
    div.addClass("project-small-starred").append(imageContainer, text);
  }
  else {
    div.append(image, text);
  }
  div.on("click", () => showModal(project));
  return div;
}

function hideModal() {
  $("#modal").addClass("invisible");
}

/**
 *
 * @param {ProjectItem} project
 */
function showModal(project) {
  const modal = $("#modal").removeClass("invisible");
  if (project.imageUrl) {
    modal.find("#modal-image").attr("src", project.imageUrl);
  }
  modal.find("#modal-title").text(project.title);
  modal.find("#modal-time").text(project.time);

  if (project.slidesUrl) {
    modal.find("#modal-slides-url").attr("href", project.slidesUrl).show();
  } else {
    modal.find("#modal-slides-url").hide();
  }
  if (project.slidesUrl) {
    modal.find("#modal-slides-url").attr("href", project.slidesUrl).show();
  } else {
    modal.find("#modal-slides-url").hide();
  }
  if (project.reportUrl) {
    modal.find("#modal-report-url").attr("href", project.reportUrl).show();
  } else {
    modal.find("#modal-report-url").hide();
  }
  if (project.codeUrl) {
    modal.find("#modal-code-url").attr("href", project.codeUrl).show();
  } else {
    modal.find("#modal-code-url").hide();
  }
  const modalDemoUrl = modal
    .find("#modal-demo-url")
    .html("&nbsp;&nbsp;" + (project.demoTitle ?? "Demo") + "&nbsp;&nbsp;");
  if (project.demoUrl) {
    modalDemoUrl.attr("href", project.demoUrl).show();
  } else {
    modalDemoUrl.hide();
  }
  modal
    .find("#modal-bullets")
    .text("")
    .append(project.bullets.map((bullet) => $("<p>").append(bullet)));
  modal
    .find("#modal-skills")
    .text(project.skills ? project.skills.join(", ") : "N/A");
}
