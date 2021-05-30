async function listHandler(response, template, Set, url) {
  console.log("a GET request to list");
  const users = await Set.find();
  const html = template("list.art", { users: users });
  response.end(html);
}

module.exports = { listHandler };
