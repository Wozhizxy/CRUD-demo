const Eventemitter = require("events");
const queryString = require("querystring");

async function updateHandler(req, res, Set, url) {
  const myid = url.searchParams.get("id");
  let formdata = "";
  req.on("data", (data) => (formdata += data));
  req.on("end", async () => {
    const newuserInfo = queryString.parse(formdata);
    await Set.findOneAndUpdate({ _id: myid }, newuserInfo);
    res.writeHead("301", { location: "/list" });
    res.end("success.");
  });
}
module.exports = updateHandler;
