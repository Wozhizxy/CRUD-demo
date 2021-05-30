async function updateHandler(response, template, Set, url) {
  const myid = url.searchParams.get("id");
  const user = await Set.findOne({
    _id: myid,
  });
  const html = template("update.art", {
    user: user,
    hobbies: ["吃饭", "睡觉", "打游戏", "coding"],
  });
  response.end(html);
}

module.exports = { updateHandler };
