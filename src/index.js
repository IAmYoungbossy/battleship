import { renderGetNamePage } from "./modules/dom-interactions/page-get-name";
import "./modules/style/style.css";

renderGetNamePage();

document.body.classList.add("fade");
document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    document.body.classList.remove("fade");
  }, 400);
});
