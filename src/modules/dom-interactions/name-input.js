import {createDomElement} from "./helper-function";

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

export {createInputElem};
