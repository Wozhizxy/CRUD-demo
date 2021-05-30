const { listHandler } = require("./handlers/get_handlers/list_handler");
const { addHandler } = require("./handlers/get_handlers/add_handler");
const { updateHandler } = require("./handlers/get_handlers/update_handler");
const { deleteHandler } = require("./handlers/get_handlers/delete_handler");

const getController = {
  "/add": addHandler,
  "/update": updateHandler,
  "/list": listHandler,
  "/delete": deleteHandler,
};
module.exports = getController;
