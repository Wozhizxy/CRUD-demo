async function addHandler(response, template, Set, url) {
  const html = template("add.art", {});
  response.end(html);
}

module.exports = { addHandler };
