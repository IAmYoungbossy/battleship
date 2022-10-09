const createDomElement = require("./helper-function");

function getName(playerName) {
  const { body } = document;
  const inputDiv = createDomElement("div", { class: "input-div" });
  const label = createDomElement("label", { for: "name" });
  const nameInput = createDomElement("input", {
    id: "name",
    type: "text",
    placeholder: "Letam",
  });
  const errorMsg = createDomElement("span", { class: "error-msg" });
  const startBtn = createDomElement("button", { class: "start-btn" });
  label.textContent = playerName;
  startBtn.textContent = "START GAME";
  inputDiv.append(label, nameInput, errorMsg, startBtn);
  body.append(inputDiv);
}

module.exports = getName;
