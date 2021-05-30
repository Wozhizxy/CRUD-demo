const mongoose = require("mongoose");
async function connectMongodb(database) {
  await mongoose.connect("mongodb://localhost/" + database);
  console.log("数据库连接成功...");
}
mongoose
  .connect("mongodb://localhost/app", {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => console.log("数据库连接成功"));

module.exports = connectMongodb;
