"use strict";

const mask = Projects.map(() => true);

(function () {
  document.title = `${FULL_NAME}'s Projects`;
  $("#root").append(PageTop(), ProjectSearchBar(), ProjectSmallContainer());
  $("#modal")
    .addClass("invisible")
    .append(
      $("<div>").addClass("modal-background").on("click", hideModal),
      $("<div>")
        .addClass("modal-content")
        .append(
          $("<img>").attr("id", "modal-image").attr("alt", "Project Image"),
          $("<div>")
            .addClass("modal-row")
            .attr("id", "modal-github-stats")
            .append(
              [
                {
                  name: "modal-stargazer-count",
                  icon: "star.png",
                  title: "Star Count",
                },
                {
                  name: "modal-fork-count",
                  icon: "fork.png",
                  title: "Fork Count",
                },
                {
                  name: "modal-watcher-count",
                  icon: "pin.png",
                  title: "Watcher Count",
                },
              ].map(({ name, icon, title }) =>
                $("<div>")
                  .addClass("modal-github-stats-item")
                  .attr("id", "modal-github-stats-item-" + name)
                  .attr("title", title)
                  .append(
                    $("<img>")
                      .addClass("modal-github-stats-icon")
                      .attr("src", "images/" + icon)
                      .attr("alt", title),
                    $("<div>")
                      .addClass("modal-github-stats-count")
                      .attr("id", name)
                      .html("0")
                  )
              )
            ),
          $("<p>").attr("id", "modal-title").text("Title"),
          $("<p>").attr("id", "modal-time").text("Time"),
          $("<div>")
            .addClass("modal-row")
            .append(
              [
                { name: "Slides", id: "modal-slides-url" },
                { name: "Report", id: "modal-report-url" },
                { name: "Code", id: "modal-code-url" },
                { name: "Demo", id: "modal-demo-url" },
              ].map(({ name, id }) =>
                $("<a>")
                  .attr("id", id)
                  .html("&nbsp;&nbsp;" + name + "&nbsp;&nbsp;")
                  .attr("target", "_blank")
                  .attr("rel", "noopener noreferrer")
              )
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
  markActiveMenuItem("Projects");
})();

function populateProjectContainer() {
  const masked = Projects.filter((_, i) => mask[i]);
  const featuredProjects = masked.filter(({ rating }) => rating === "featured");
  const goodProjects = masked.filter(({ rating }) => rating === "good");
  const otherProjects = masked.filter(
    ({ rating }) => rating !== "featured" && rating !== "good"
  );
  $("#project-container")
    .html("")
    .append(
      ...[...featuredProjects, ...goodProjects, ...otherProjects].map(
        ProjectSmallView
      )
    );
}

/**
 *
 * @returns {JQuery<HTMLElement>}
 */
function ProjectSmallContainer() {
  for (let i = 0; i < mask.length; ++i) {
    mask[i] = true;
  }
  return $("<div>")
    .addClass("project-container")
    .attr("id", "project-container")
    .append(
      ...[
        ...Projects.filter(({ rating }) => rating === "featured"),
        ...Projects.filter(({ rating }) => rating === "good"),
        ...Projects.filter(
          ({ rating }) => rating !== "featured" && rating !== "good"
        ),
      ].map(ProjectSmallView)
    );
}

/**
 *
 * @param {ProjectItem} project
 * @returns {JQuery<HTMLElement>}
 */
function ProjectSmallView(project) {
  const imagePath = project.imageUrl ?? "./images/golden-cube.png";
  const image = $("<img>").attr("src", imagePath).attr("alt", "Project Image");
  const text = $("<p>").addClass("project-title").text(project.title);
  const div = $("<div>").addClass("project-small");
  if (project.rating === "featured") {
    div
      .addClass("project-small-starred")
      .append(
        $("<div>")
          .addClass("featured-image-container")
          .append(image.addClass("main-image"), Star("gold")),
        text
      );
  } else if (project.rating === "good") {
    div
      .addClass("project-small-good")
      .append(
        $("<div>")
          .addClass("featured-image-container")
          .append(image.addClass("main-image"), Star("blue")),
        text
      );
  } else {
    div.append(image, text);
  }
  div.on("click", () => showModal(project));
  return div;
}

function hideModal() {
  $("#modal").addClass("invisible");
}

/**
 * @param {JQuery<HTMLElement>} modal
 * @param {ProjectItem} project
 */
function loadGitHubStats(modal, project) {
  modal.find("#modal-github-stats").hide();
  if (
    typeof project.codeUrl === "string" &&
    project.codeUrl.startsWith("https://github.com/")
  ) {
    const groups =
      /^https:\/\/github.com\/([a-zA-Z09_\-.,]+)\/([a-zA-Z09_\-.,]+)/.exec(
        project.codeUrl
      );
    if (groups && groups.length >= 3) {
      const owner = groups[1];
      const repo = groups[2];
      loadGitHubStatsFromAPI(modal, owner, repo);
    }
  }
}

/**
 * @param {JQuery<HTMLElement>} modal
 * @param {string} owner
 * @param {string} repo
 */
async function loadGitHubStatsFromAPI(modal, owner, repo) {
  const sessionData = sessionStorage.getItem("hnthap_github_io_session_data");
  let data = sessionData ? JSON.parse(sessionData) : {};
  if (!data.hasOwnProperty("github_stats")) {
    data.github_stats = {};
  }
  if (!data.github_stats.hasOwnProperty(owner)) {
    data.github_stats[owner] = {};
  }
  if (!data.github_stats[owner].hasOwnProperty(repo)) {
    data.github_stats[owner][repo] = {};
  }
  if (
    !data.github_stats[owner][repo].hasOwnProperty("starCount") ||
    !data.github_stats[owner][repo].hasOwnProperty("forkCount") ||
    !data.github_stats[owner][repo].hasOwnProperty("watcherCount")
  ) {
    const response = await fetch(
      "https://api.github.com/repos/" + owner + "/" + repo
    );
    const fetchedData = await response.json();
    data.github_stats[owner][repo].starCount = fetchedData.stargazers_count;
    data.github_stats[owner][repo].forkCount = fetchedData.forks_count;
    data.github_stats[owner][repo].watcherCount = fetchedData.subscribers_count;
  }
  const { starCount, forkCount, watcherCount } = data.github_stats[owner][repo];
  sessionStorage.setItem("hnthap_github_io_session_data", JSON.stringify(data));
  modal.find("#modal-github-stats").hide();
  if (starCount) {
    modal.find("#modal-github-stats-item-modal-stargazer-count").show();
    modal.find("#modal-stargazer-count").html(starCount);
  } else {
    modal.find("#modal-github-stats-item-modal-stargazer-count").hide();
  }
  if (forkCount) {
    modal.find("#modal-github-stats-item-modal-fork-count").show();
    modal.find("#modal-fork-count").html(forkCount);
  } else {
    modal.find("#modal-github-stats-item-modal-fork-count").hide();
  }
  if (watcherCount) {
    modal.find("#modal-github-stats-item-modal-watcher-count").show();
    modal.find("#modal-watcher-count").html(watcherCount);
  } else {
    modal.find("#modal-github-stats-item-modal-watcher-count").hide();
  }
  modal.find("#modal-github-stats").show();
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

  loadGitHubStats(modal, project);

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

function ProjectSearchBar() {
  const inputId = "#project-search-bar-input";
  return $("<div>")
    .addClass("search-bar-container")
    .append(
      $("<input>")
        .addClass("search-bar")
        .attr("spellcheck", "false")
        .attr("placeholder", "Enter something...")
        .attr("id", inputId.slice(1))
        .attr("type", "text")
        .on("keyup cut paste", () => {
          // @ts-ignore
          const text = $(inputId).val().toLowerCase().split(" ").join(" ");
          if (text.length === 0) {
            for (let i = 0; i < mask.length; ++i) {
              mask[i] = true;
            }
          } else {
            LowerCasedProjects.forEach((project, index) => {
              mask[index] =
                project.title.includes(text) ||
                project.bullets.reduce((state, bullet) => {
                  return state ? state : bullet.includes(text);
                }, false) ||
                project.skills.reduce((state, skill) => {
                  return state ? state : skill.includes(text);
                }, false);
            });
          }
          populateProjectContainer();
        })
    );
}
