import { choosePlayer } from "./choose-player";
import { createInputElem } from "./name-input";

function getName(nameDetails) {
  const { inputDiv, startBtn, nameInput } = createInputElem(
    nameDetails,
    "START GAME"
  );
  document.body.append(inputDiv);
  getInputValue(startBtn, nameInput);
}

function getInputValue(startBtn, nameInput) {
  const getNameDiv = document.querySelector(".input-div");
  const replaceNameDiv = () => {
    if (nameInput.value.trim() === "") {
      preventEmptyInput(nameInput);
      return;
    }
    document.body.classList.add("fade");
    setTimeout(() => {
      document.body.classList.remove("fade");
      const chooseDiv = choosePlayer(nameInput.value);
      document.body.replaceChild(chooseDiv, getNameDiv);
      localStorage.setItem("playerName", JSON.stringify(`${nameInput.value}`));
    }, 500);
  };
  startBtn.addEventListener("click", replaceNameDiv);
}

function preventEmptyInput(nameInput) {
  const errorMsg = document.querySelector(".error-msg");
  errorMsg.classList.remove("hide");
  setTimeout(() => {
    errorMsg.classList.add("hide");
    nameInput.value = "";
  }, 2000);
}

export { getName, preventEmptyInput };
