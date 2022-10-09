const createDomElement = require("./helper-function");

function getName() {
  const { body } = document;
  const gameHeader = createDomElement("hi", { class: "header" });
  const inputDiv = createDomElement("div", { class: "input-div" });
  const label = createDomElement("label", { for: "name" });
  const nameInput = createDomElement("input", {
    id: "fname", name: "name", type: "text", placeholder: "Bob",
  });
  const errorMsg = createDomElement("span", { class: "error-msg" });
  const startBtn = createDomElement("button", { class: "start-btn" });
  label.textContent = "ENTER PLAYER NAME:";
  startBtn.textContent = "START GAME";
  inputDiv.append(label, nameInput, errorMsg, startBtn);
  body.append(gameHeader, inputDiv);
}

module.exports = getName;
