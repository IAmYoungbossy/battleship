import { renderGetNamePage } from "./modules/dom-interactions/page-get-name";
import "./modules/style/style.css";

renderGetNamePage();

document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    document.body.classList.add("opacity");
  }, 400);
});
