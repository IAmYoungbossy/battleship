const choosePlayer = require("./choose-player");
const createDomElement = require("./helper-function");

function getName(nameDetails) {
  const { inputDiv, startBtn, nameInput } = createInputElem(
    nameDetails,
    "START GAME",
  );
  document.body.append(inputDiv);
  getInputValue(startBtn, nameInput);
}

function createInputElem(nameDetails, btnName) {
  const inputDiv = createDomElement("div", { class: "input-div" });
  const label = createDomElement("label", { for: "name" });
  const nameInput = createDomElement("input", {
    id: "name",
    type: "text",
    placeholder: "Letam",
  });
  const errorMsg = createDomElement("span", { class: "error-msg" });
  const startBtn = createDomElement("button", { class: "start-btn" });

  label.textContent = nameDetails;
  startBtn.textContent = btnName;
  inputDiv.append(label, nameInput, errorMsg, startBtn);
  return { inputDiv, startBtn, nameInput };
}

function getInputValue(startBtn, nameInput) {
  const getNameDiv = document.querySelector(".input-div");
  const replaceNameDiv = () => {
    const chooseDiv = choosePlayer(nameInput.value);
    document.body.replaceChild(chooseDiv, getNameDiv);
    localStorage.setItem("playerName", JSON.stringify(`${nameInput.value}`));
  };
  startBtn.addEventListener("click", replaceNameDiv);
}

module.exports = { getName, createInputElem };
