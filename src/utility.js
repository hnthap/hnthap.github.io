"strict";

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
  PORTRAIT: "./images/portrait.jpg",
  PROFILE: "./images/profile.jpg",
  LIGHT_MODE: "./images/light-mode.png",
  DARK_MODE: "./images/dark-mode.png",
};

/**
 * @type {{
 * showsFullName: boolean;
 * mode: ColorScheme;
 * }}
 */
const Settings = {
  showsFullName: false,
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
  const a = $("<a>");
  a.addClass("menu-item-a");
  a.attr("href", url);
  a.attr("id", "menu-item-" + name.toLowerCase());
  a.text(name);
  if (target) {
    a.attr("target", target);
  }
  const item = $("<div>");
  item.append(a);
  item.addClass("menu-item");
  return item;
}

function Avatar() {
  const avatar = $("<img>")
  avatar.addClass("profile");
  avatar.attr("src", Images.PROFILE);
  avatar.attr("height", "40px");
  return avatar;
}

/**
 * 
 * @param {string} bannerText 
 * @returns {JQuery<HTMLElement>}
 */
function Banner(bannerText) {
  const a = $("<a>");
  a.append(bannerText);
  a.attr("href", "./");
  const banner = $("<div>")
  banner.addClass("banner");
  banner.append(a);
  return banner;
}

function Menu() {
  const menu = $("<div>");
  menu.addClass("menu");
  menu.append(
    // $("<a>").attr("href", Accounts.GITHUB).append(Avatar()),
    MenuItem("Home", "./"),
    MenuItem("Projects", "./projects.html"),
    MenuItem("GitHub", Accounts.GITHUB, "_blank"),
    MenuItem("LinkedIn", Accounts.LINKED_IN, "_blank"),
    ModeIcon()
  );
  return menu;
}

/**
 * 
 * @param {string} text 
 */
function Section(text) {
  const block = $("<div>");
  block.addClass("h2-block");
  block.append($("<h2>").append("&nbsp;" + text), $("<hr>"));
  return block;
}

/**
 * 
 * @param {"gold" | "blue"} type 
 */
function Star(type) {
  let imagePath;
  if (type === "blue") {
    imagePath = "./images/blue-star.png";
  }
  else if (type === "gold") {
    imagePath = "./images/gold-star.png";
  }
  else {
    console.warn("Invalid star type: " + type);
    return $("");
  }
  return $("<img>")
    .attr("src", imagePath)
    .attr("alt", "Featured project")
    .addClass("small-star");
}

function detectColorScheme() {
  /** @type {ColorScheme} */
  let theme = null;
  if (localStorage.getItem("theme")) {
    if (localStorage.getItem("theme") === "dark") {
      theme = "dark";
    }
  }
  else if (!window.matchMedia) {
    console.warn("matchMedia method is not supported!");
    return null;
  }
  else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    theme = "dark";
  }
  if (theme === "dark") {
    $("body").addClass("dark");
  }
  else {
    $("body").removeClass("dark");
  }
  return theme;
}

function switchColorScheme() {
  if (Settings.mode === "dark") {
    /** Switch to light mode */
    localStorage.setItem("theme", "light");
    $("body").removeClass("dark");
    $("#mode-icon-img").attr("src", Images.DARK_MODE);
    Settings.mode = null;
  }
  else {
    /** Switch to dark mode */
    localStorage.setItem("theme", "dark");
    $("body").addClass("dark");
    $("#mode-icon-img").attr("src", Images.LIGHT_MODE);
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
        .on("click", switchColorScheme)
    );
  return container;
}
