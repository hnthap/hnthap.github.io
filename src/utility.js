"strict";


const FULL_NAME = "Huynh Nhan Thap";

const Accounts = {
  GITHUB: "https://github.com/hnthap",
  LINKED_IN: "https://www.linkedin.com/in/huynh-nhan-t-4ab735337/",
};

const Images = {
  PORTRAIT: "./images/portrait.jpg",
  PROFILE: "./images/profile.jpg",
};

/**
 * 
 * @param {string} bannerText 
 * @returns {JQuery<HTMLElement>}
 */
function PageTop(bannerText) {
  return $("<span>").append(Banner(bannerText), Menu());
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
    MenuItem("LinkedIn", Accounts.LINKED_IN, "_blank")
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
