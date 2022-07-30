const mongoose = require("mongoose");

const storySchema = new mongoose.Schema({
  title: {
    required: true,
    type: String
  },
  content: {
    required: true,
    type: String
  },
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User"
  }
});

module.exports = mongoose.model("Story", storySchema);
