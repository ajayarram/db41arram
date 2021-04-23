"use strict";

var mongoose = require("mongoose");

var cowSchema = mongoose.Schema({
  cowName: {
    type: String,
    required: [true, "Name of cow is required"]
  },
  habitat: {
    type: String,
    required: [true, "Habitat of cow is required"]
  },
  price: {
    type: Number,
    required: [true, "Price of cow is required"],
    min: [10000, "Price Should be minimum of 10000$ "],
    max: [50000, "Price Cannot be greater than 50000$ "]
  }
});
module.exports = mongoose.model("cow", cowSchema);