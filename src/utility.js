"use strict";

/**
 *
 * @typedef {"dark" | null} ColorScheme
 */

const FULL_NAME = "Huynh Nhan Thap";

const Accounts = {
  GITHUB: "https://github.com/hnthap",
  LINKED_IN: "https://www.linkedin.com/in/huynh-nhan-t-4ab735337/",
};

const Images = {
  DARK_MODE: "./images/dark-mode.png",
  LIGHT_MODE: "./images/light-mode.png",
  PORTRAIT: "./images/portrait.jpg",
  PROFILE: "./images/profile.jpg",
};

/**
 * @type {{
 * showsFullName: boolean;
 * mode: ColorScheme;
 * }}
 */
const Settings = {
  showsFullName: true,
  mode: detectColorScheme(),
};

/**
 * @returns {JQuery<HTMLElement>}
 */
function PageTop() {
  if (Settings.showsFullName) {
    return $("<span>").append(Banner(FULL_NAME), Menu());
  }
  return $("<span>").append(Menu());
}

/**
 * @param {string} name
 * @param {string} url
 * @param {string} [target] E.g. `"_blank"`
 */
function MenuItem(name, url, target) {
  const a = $("<a>")
    .addClass("menu-item-a")
    .attr("href", url)
    .attr("id", "menu-item-" + name.toLowerCase())
    .attr("rel", "noopener noreferrer")
    .text(name);
  if (target) {
    a.attr("target", target);
  }
  return $("<div>").append(a).addClass("menu-item");
}

function Avatar() {
  return $("<img>")
    .addClass("profile")
    .attr("src", Images.PROFILE)
    .attr("alt", "Avatar")
    .attr("height", "40px");
}

/**
 *
 * @param {string} bannerText
 * @returns {JQuery<HTMLElement>}
 */
function Banner(bannerText) {
  return $("<div>")
    .addClass("banner")
    .append(
      $("<a>")
        .attr("id", "banner-clickable")
        .append(bannerText)
        .attr("rel", "noopener noreferrer")
        .attr("href", "./")
    );
}

function Menu() {
  return $("<div>").addClass("menu").append(
    // $("<a>").attr("href", Accounts.GITHUB).append(Avatar()),
    MenuItem("home", "./"),
    MenuItem("projects", "./projects.html"),
    MenuItem("github", Accounts.GITHUB, "_blank"),
    MenuItem("linkedin", Accounts.LINKED_IN, "_blank"),
    ModeIcon()
  );
}

/**
 * 
 * @param {string} name 
 */
function markActiveMenuItem(name) {
  $("#menu-item-" + name.toLowerCase()).addClass("current-menu-item");
}

/**
 *
 * @param {string} text
 */
function Section(text) {
  return $("<div>")
    .addClass("h2-block")
    .append($("<h2>").append(text), $("<div>").addClass("hr"));
}

/**
 *
 * @param {"gold" | "blue"} type
 */
function Star(type) {
  let imagePath;
  let altText;
  if (type === "blue") {
    imagePath = "./images/blue-star.png";
    altText = "Good Project";
  } else if (type === "gold") {
    imagePath = "./images/gold-star.png";
    altText = "Featured Project";
  } else {
    console.warn("Invalid star type: " + type);
    return $("");
  }
  return $("<img>")
    .attr("src", imagePath)
    .attr("alt", altText)
    .attr("title", altText)
    .addClass("small-star");
}

function detectColorScheme() {
  /** @type {ColorScheme} */
  let theme = null;
  if (localStorage.getItem("theme")) {
    if (localStorage.getItem("theme") === "dark") {
      theme = "dark";
    }
  } else if (!window.matchMedia) {
    console.warn("matchMedia method is not supported!");
    return null;
  } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    theme = "dark";
  }
  if (theme === "dark") {
    $("body").addClass("dark");
  } else {
    $("body").removeClass("dark");
  }
  return theme;
}

function switchColorScheme() {
  if (Settings.mode === "dark") {
    /** Switch to light mode */
    localStorage.setItem("theme", "light");
    $("body").removeClass("dark");
    $("#mode-icon-img")
      .attr("src", Images.DARK_MODE)
      .attr("alt", "Light/Dark Mode")
      .css("background-color", "var(--bg-base)");
    Settings.mode = null;
  } else {
    /** Switch to dark mode */
    localStorage.setItem("theme", "dark");
    $("body").addClass("dark");
    $("#mode-icon-img")
      .attr("src", Images.LIGHT_MODE)
      .attr("alt", "Light/Dark Mode")
      .css("background-color", "var(--primary)");
    Settings.mode = "dark";
  }
}

function ModeIcon() {
  const container = $("<div>")
    .addClass("mode-icon")
    .append(
      $("<img>")
        .attr("id", "mode-icon-img")
        .attr(
          "src",
          Settings.mode === "dark" ? Images.LIGHT_MODE : Images.DARK_MODE
        )
        .attr("alt", "Light/Dark Mode")
        .attr("title", "Toggle Light/Dark Mode")
        .css(
          "background-color",
          Settings.mode === "dark" ? "var(--primary)" : "var(--bg-base)"
        )
        .on("click", switchColorScheme)
    );
  return container;
}
