const player = require("./get-player-name");
const createFooter = require("./page-footer");
const createHeader = require("./page-header");

function renderGetNamePage() {
  createHeader("page-one-header");
  player.getName("ENTER PLAYER NAME:");
  createFooter();
}

module.exports = renderGetNamePage;
