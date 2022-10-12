import {createFooter} from "./page-footer";
import { getName } from "./get-player-name";
import {createHeader} from "./page-header";

function renderGetNamePage() {
  createHeader("page-one-header");
  getName("Enter Player's Name:");
  createFooter();
}

export { renderGetNamePage };
