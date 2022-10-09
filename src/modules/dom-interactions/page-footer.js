const createDomElement = require("./helper-function");

function createFooter() {
  const footer = createDomElement("footer");
  const anchorLink = createDomElement("a", {
    href: "https://github.com/IAmYoungbossy/battleship",
  });
  const gitHubIcon = createDomElement("i", { class: "fa fa-github" });
  anchorLink.appendChild(gitHubIcon);
  footer.append("Copyright \u00A9 2022 IAmYoungbossy", "  ", anchorLink);
  document.body.appendChild(footer);
}

module.exports = createFooter;
