const createFooter = require("./page-footer");
const { getName } = require("./get-player-name");
const createHeader = require("./page-header");

function renderGetNamePage() {
  createHeader("page-one-header");
  getName("Enter Player's Name:");
  createFooter();
}

module.exports = { renderGetNamePage };
