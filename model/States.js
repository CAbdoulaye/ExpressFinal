const mongoose = require("mongoose")

const stateSchema = mongoose.Schema({
  stateCode: {
    type: String,
    required: true
  },
  funfacts: {
    type: [String],
    required: true
  }
})

module.exports = mongoose.model("States", stateSchema)