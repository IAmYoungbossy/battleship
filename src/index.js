import createGameboard from "./modules/dom-interactions/dom-gameboard";
import { computerShots, playerShots } from "./modules/dom-interactions/shots-fired";
import "./modules/style/style.css";

createGameboard();
computerShots();
playerShots();
