import { renderGetNamePage } from "./modules/dom-interactions/page-get-name";
import { addRippleEffect } from "./modules/dom-interactions/ripple-button";
import "./modules/style/style.css";

renderGetNamePage();
addRippleEffect();

document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    document.body.classList.add("opacity");
  }, 400);
});
