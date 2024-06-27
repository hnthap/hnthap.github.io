
/**
 * 
 * @param {JQuery} parent 
 * @param {string} name 
 * @param {boolean} blue 
 */
function appendButton(parent, name, blue) {
  const button = $("<button></button>");
  button.addClass(blue ? "bluebc" : "redbc");
  button.addClass("button");
  button.text(name);
  parent.append(button);
}

/**
 * 
 * @param {JQuery} menu 
 * @param {string} name 
 * @param {string} url 
 * @param {boolean} blue 
 * @param {string} target 
 */
function appendMenuItem(menu, name, url, blue, target) {
  const item = $("<a></a>");
  item.addClass("emph");
  item.attr("href", url);
  appendButton(item, name, blue);
  if (target) item.attr("target", target);
  menu.append(item);
}

/**
 * 
 * @param {JQuery} box 
 * @param {string} name 
 * @param {string} url 
 * @param {boolean} blue 
 * @param {string} target 
 */
function appendBoxButton(box, name, url, blue, target) {
  const a = $("<a></a>");
  a.attr("href", url);
  if (target) a.attr("target", target);
  appendButton(a, name, blue);
  const div = $("<div></div");
  div.css("text-align", "center");
  div.append(a);
  box.append(div);
}

/**
 * 
 * @param {boolean} blue 
 */
function initializeMenu(blue) {
  const menu = $("#menu");
  appendMenuItem(menu, "HOME", "./index.html", blue);
  appendMenuItem(menu, "ABOUT", "./about.html", blue);
  appendMenuItem(menu, "PROJECTS", "./projects.html", blue);
  appendMenuItem(menu, "GITHUB", "https://github.com/hnthap", blue, "_blank");
}
