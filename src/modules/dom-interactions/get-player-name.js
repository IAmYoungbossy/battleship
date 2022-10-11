const choosePlayer = require("./choose-player");
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
  getInputValue(startBtn, nameInput);
}

function getInputValue(startBtn, nameInput) {
  const getNameDiv = document.querySelector(".input-div");
  const replaceNameDiv = () => {
    const chooseDiv = choosePlayer(nameInput.value);
    document.body.replaceChild(chooseDiv, getNameDiv);
  };
  startBtn.addEventListener("click", replaceNameDiv);
}

module.exports = getName;
