const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
  newTitle: String,
  newContent: String,
  date: String,
  likes: Number
});

module.exports = mongoose.model("Blog", blogSchema);
