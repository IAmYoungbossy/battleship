import createGameboard from "./modules/dom-interactions/dom-gameboard";
import showShipsRandomly from "./modules/dom-interactions/place-ship-random";
import shot from "./modules/dom-interactions/shots-fired";
import "./modules/style/style.css";

createGameboard();
showShipsRandomly();
shot();
