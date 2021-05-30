async function deleteHandler(response, template, Set, url) {
  const myid = url.searchParams.get("id");
  await Set.findOneAndDelete({
    _id: myid,
  });
  response.writeHead("301", { location: "/list" });
  response.end(myid);
}

module.exports = { deleteHandler };
