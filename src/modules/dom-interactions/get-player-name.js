const choosePlayer = require("./choose-player");
const createInputElem = require("./name-input");

function getName(nameDetails) {
  const { inputDiv, startBtn, nameInput } = createInputElem(
    nameDetails,
    "START GAME",
  );
  document.body.append(inputDiv);
  getInputValue(startBtn, nameInput);
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

module.exports = { getName };
