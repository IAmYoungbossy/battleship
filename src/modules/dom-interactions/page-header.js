const createDomElement = require("./helper-function");

function createHeader(className) {
  const gameTitle = createDomElement("hi", { class: className });
  const header = createDomElement("header");
  const { body } = document;
  gameTitle.textContent = "BATTLESHIP";
  header.append(gameTitle);
  body.append(header);
}

module.exports = createHeader;
