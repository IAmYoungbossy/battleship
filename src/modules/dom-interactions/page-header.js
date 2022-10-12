import {createDomElement} from "./helper-function";

function createHeader(className) {
  const gameTitle = createDomElement("h1", { class: className });
  const header = createDomElement("header");
  const { body } = document;
  gameTitle.textContent = "BATTLESHIP";
  header.append(gameTitle);
  body.append(header);
}

export {createHeader};
