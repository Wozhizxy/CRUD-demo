const { addUser } = require("../../../modules/user");
const queryString = require("querystring");

async function addHandler(req, res) {
  let userInfo = "";
  req.on("data", (params) => (userInfo += params));
  req.on("end", async () => {
    const userdata = queryString.parse(userInfo);

    await addUser(
      userdata.name,
      userdata.age,
      userdata.name,
      userdata.email,
      userdata.hobbies
    );
    res.writeHead("301", { location: "/list" });
    res.end("success.");
  });
}
module.exports = addHandler;
