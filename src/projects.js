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
              $("<span>").append("[&nbsp;&nbsp;"),
              $("<a>").attr("id", "modal-slides-url").text("Slides"),
              $("<span>").append("&nbsp;&nbsp;|&nbsp;&nbsp;"),
              $("<a>").attr("id", "modal-report-url").text("Report"),
              $("<span>").append("&nbsp;&nbsp;|&nbsp;&nbsp;"),
              $("<a>").attr("id", "modal-code-url").text("Code"),
              $("<span>").append("&nbsp;&nbsp;|&nbsp;&nbsp;"),
              $("<a>").attr("id", "modal-demo-url").text("Demo"),
              $("<span>").append("&nbsp;&nbsp;]")
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
  const modalSlidesUrl = modal.find("#modal-slides-url");
  if (project.slidesUrl) {
    modalSlidesUrl.attr("href", project.slidesUrl);
  } else {
    modalSlidesUrl.removeAttr("href");
  }
  const modalReportUrl = modal.find("#modal-report-url");
  if (project.reportUrl) {
    modalReportUrl.attr("href", project.reportUrl);
  } else {
    modalReportUrl.removeAttr("href");
  }
  const modalCodeUrl = modal.find("#modal-code-url");
  if (project.codeUrl) {
    modalCodeUrl.attr("href", project.codeUrl);
  } else {
    modalCodeUrl.removeAttr("href");
  }
  const modalDemoUrl = modal.find("#modal-demo-url");
  if (project.demoUrl) {
    modalDemoUrl
      .attr("href", project.demoUrl)
      .text(project.demoTitle ?? "Demo");
  } else {
    modalDemoUrl.removeAttr("href").text("Demo");
  }
  modal
    .find("#modal-bullets")
    .text("")
    .append(project.bullets.map((bullet) => $("<p>").append(bullet)));
  modal
    .find("#modal-skills")
    .text(project.skills ? project.skills.join(", ") : "N/A");
}
