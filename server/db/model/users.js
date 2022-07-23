const mongoose = require("mongoose")



const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  number: {
    type: Number,
    required: true,
    min: 11,
  },
});

const user = new mongoose.model("user", userSchema)

module.exports = user
