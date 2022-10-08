import createGameboard from "./modules/dom-interactions/dom-gameboard";
import { playerShots } from "./modules/dom-interactions/player-vs-computer";
import { player1, player2 } from "./modules/player";
import "./modules/style/style.css";

createGameboard();
// playerShots();
player1();
player2();
