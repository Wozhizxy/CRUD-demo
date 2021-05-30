const addHandler = require("./handlers/post_handlers/add_handler");
const updateHandler = require("./handlers/post_handlers/update_handler");

const postController = {
  "/update": updateHandler,
  "/add": addHandler,
};

module.exports = postController;
