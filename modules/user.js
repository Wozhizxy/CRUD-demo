const mongoose = require("mongoose");

const User = mongoose.model(
  "User",
  new mongoose.Schema({
    name: { type: String, minlength: 2, maxlength: 20 },
    age: { type: Number, min: 10, max: 80 },
    password: { type: String },
    email: String,
    hobbies: [String],
  })
);
async function addUser(name, age, password, email, hobbies) {
  return await User.create({
    name: name,
    age: age,
    password: password,
    email: email,
    hobbies: hobbies,
  });
}
module.exports = { User, addUser };
