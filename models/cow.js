const mongoose = require("mongoose")
const cowSchema = mongoose.Schema({
cowName: String,
habitat: String,
price: Number
})
module.exports = mongoose.model("cow", cowSchema)