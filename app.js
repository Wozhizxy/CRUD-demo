const http = require("http");
const url = require("url");
const template = require("art-template");
require("./modules/util");
const { User } = require("./modules/user");
const path = require("path");
const getController = require("./controllers/get_controller");
const postController = require("./controllers/post_controller");

template.defaults.root = path.join(__dirname, "views");
const app = http.createServer(async (request, response) => {
  const method = request.method;
  const myurl = new URL(request.url, "http://localhost:8080/");
  const pathname = myurl.pathname;

  if (method === "GET") {
    typeof getController[pathname] === "function"
      ? getController[pathname](response, template, User, myurl)
      : response.end("404 not found.");
  } else if (method === "POST") {
    typeof postController[pathname] === "function"
      ? postController[pathname](request, response, User, myurl)
      : response.end("error");
  }
});

app.listen(8080);
console.log("application is listening to port 8080");
